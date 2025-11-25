"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import type { MapData, Location, Journey } from "@/lib/types"
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MapViewerProps {
  mapData: MapData
}

export function MapViewer({ mapData }: MapViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hoveredItem, setHoveredItem] = useState<{
    type: "location" | "journey"
    data: Location | Journey
    x: number
    y: number
  } | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const drawMap = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const image = imageRef.current

    if (!canvas || !ctx || !image || !imageLoaded) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.fillStyle = "#0f172a"
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Calculate scaled dimensions
    const scale = Math.min(rect.width / image.width, rect.height / image.height) * zoom
    const scaledWidth = image.width * scale
    const scaledHeight = image.height * scale
    const offsetX = (rect.width - scaledWidth) / 2 + pan.x
    const offsetY = (rect.height - scaledHeight) / 2 + pan.y

    // Draw background image
    ctx.save()
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
    ctx.shadowBlur = 20
    ctx.drawImage(image, offsetX, offsetY, scaledWidth, scaledHeight)
    ctx.restore()

    // Helper to convert map coordinates to canvas coordinates
    const mapToCanvas = (coord: [number, number]) => {
      const x = offsetX + (coord[1] / 1000) * scaledWidth
      const y = offsetY + (coord[0] / 1000) * scaledHeight
      return { x, y }
    }

    // Draw journey paths with improved contrast
    if (mapData.journeys) {
      mapData.journeys.forEach((journey) => {
        ctx.beginPath()
        journey.path.forEach((coord, idx) => {
          const pos = mapToCanvas(coord)
          if (idx === 0) {
            ctx.moveTo(pos.x, pos.y)
          } else {
            ctx.lineTo(pos.x, pos.y)
          }
        })

        // Dark outline for contrast
        ctx.strokeStyle = "rgba(0, 0, 0, 0.8)"
        ctx.lineWidth = 8
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.stroke()

        // Main colored line
        ctx.beginPath()
        journey.path.forEach((coord, idx) => {
          const pos = mapToCanvas(coord)
          if (idx === 0) {
            ctx.moveTo(pos.x, pos.y)
          } else {
            ctx.lineTo(pos.x, pos.y)
          }
        })

        ctx.strokeStyle = journey.color
        ctx.lineWidth = 5
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.setLineDash([12, 6])
        ctx.shadowColor = journey.color
        ctx.shadowBlur = 12
        ctx.stroke()
        ctx.setLineDash([])
        ctx.shadowBlur = 0

        journey.path.forEach((coord, idx) => {
          const pos = mapToCanvas(coord)
          const isStart = idx === 0
          const isEnd = idx === journey.path.length - 1

          ctx.beginPath()
          if (isStart) {
            // Start marker - circle
            ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2)
            ctx.fillStyle = journey.color
            ctx.fill()
            ctx.strokeStyle = "#ffffff"
            ctx.lineWidth = 2
            ctx.stroke()
          } else if (isEnd) {
            // End marker - arrow
            const prevPos = mapToCanvas(journey.path[idx - 1])
            const angle = Math.atan2(pos.y - prevPos.y, pos.x - prevPos.x)

            ctx.save()
            ctx.translate(pos.x, pos.y)
            ctx.rotate(angle)
            ctx.fillStyle = journey.color
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(-16, -8)
            ctx.lineTo(-16, 8)
            ctx.closePath()
            ctx.fill()
            ctx.strokeStyle = "#ffffff"
            ctx.lineWidth = 2
            ctx.stroke()
            ctx.restore()
          } else {
            // Waypoint - small dot
            ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2)
            ctx.fillStyle = journey.color
            ctx.fill()
          }
        })
      })
    }

    // Draw location markers
    if (mapData.locations) {
      const markerColors: Record<string, string> = {
        city: "#3b82f6",
        fortress: "#dc2626",
        landmark: "#8b5cf6",
        battlefield: "#f59e0b",
      }

      mapData.locations.forEach((location) => {
        const pos = mapToCanvas(location.coordinates)
        const color = markerColors[location.type] || "#64748b"
        const isHovered = hoveredItem?.type === "location" && hoveredItem.data === location

        // Draw marker with glow effect
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, isHovered ? 14 : 12, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowColor = color
        ctx.shadowBlur = isHovered ? 25 : 15
        ctx.fill()

        // White border
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.shadowBlur = 0

        // Draw location name with background for readability
        const textMetrics = ctx.measureText(location.name)
        const textWidth = textMetrics.width
        const textHeight = 14
        const padding = 4

        // Text background
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)"
        ctx.fillRect(
          pos.x - textWidth / 2 - padding,
          pos.y - 32 - textHeight / 2 - padding,
          textWidth + padding * 2,
          textHeight + padding * 2,
        )

        // Text
        ctx.fillStyle = "#f1f5f9"
        ctx.font = "bold 12px system-ui"
        ctx.textAlign = "center"
        ctx.fillText(location.name, pos.x, pos.y - 28)
      })
    }
  }, [mapData, imageLoaded, zoom, pan, hoveredItem])

  // ... existing code for useEffect, mouse handlers, etc. ...

  // Load image
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      imageRef.current = img
      setImageLoaded(true)
    }
    img.src = mapData.imageUrl

    return () => {
      imageRef.current = null
      setImageLoaded(false)
      setZoom(1)
      setPan({ x: 0, y: 0 })
    }
  }, [mapData.imageUrl])

  // Draw on changes
  useEffect(() => {
    drawMap()
  }, [drawMap])

  // Mouse handlers for pan and zoom
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    } else {
      // Check hover on locations
      const canvas = canvasRef.current
      if (!canvas || !imageRef.current || !imageLoaded) return

      const rect = canvas.getBoundingClientRect()
      const scale = Math.min(rect.width / imageRef.current.width, rect.height / imageRef.current.height) * zoom
      const scaledWidth = imageRef.current.width * scale
      const scaledHeight = imageRef.current.height * scale
      const offsetX = (rect.width - scaledWidth) / 2 + pan.x
      const offsetY = (rect.height - scaledHeight) / 2 + pan.y

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      let foundHover = false

      // Check locations
      if (mapData.locations) {
        for (const location of mapData.locations) {
          const posX = offsetX + (location.coordinates[1] / 1000) * scaledWidth
          const posY = offsetY + (location.coordinates[0] / 1000) * scaledHeight
          const distance = Math.sqrt((mouseX - posX) ** 2 + (mouseY - posY) ** 2)

          if (distance < 18) {
            setHoveredItem({ type: "location", data: location, x: e.clientX, y: e.clientY })
            foundHover = true
            break
          }
        }
      }

      if (!foundHover) {
        setHoveredItem(null)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom((prev) => Math.max(0.5, Math.min(3, prev * delta)))
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(3, prev * 1.2))
  const handleZoomOut = () => setZoom((prev) => Math.max(0.5, prev / 1.2))
  const handleReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full rounded-lg overflow-hidden border border-slate-700 bg-slate-950"
    >
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        style={{ minHeight: "600px" }}
      />

      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" onClick={handleReset}>
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Tooltip */}
      {hoveredItem && hoveredItem.type === "location" && (
        <div
          className="absolute pointer-events-none z-50 bg-slate-900 border border-slate-600 rounded-lg p-4 shadow-xl max-w-sm"
          style={{
            left: `${Math.min(hoveredItem.x + 15, window.innerWidth - 320)}px`,
            top: `${hoveredItem.y - 10}px`,
            transform: "translateY(-100%)",
          }}
        >
          <h3 className="font-serif font-bold text-foreground mb-1 text-lg">{(hoveredItem.data as Location).name}</h3>
          <p className="text-xs text-accent uppercase tracking-wide mb-2">{(hoveredItem.data as Location).type}</p>
          {(hoveredItem.data as Location).description && (
            <p className="text-sm text-slate-300 leading-relaxed">{(hoveredItem.data as Location).description}</p>
          )}
        </div>
      )}

      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-2" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
