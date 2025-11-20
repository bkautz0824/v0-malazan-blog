'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { MapData, Location, Journey } from '@/lib/types'
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
  const [hoveredItem, setHoveredItem] = useState<{ type: 'location' | 'journey', data: Location | Journey, x: number, y: number } | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const drawMap = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const image = imageRef.current

    if (!canvas || !ctx || !image || !imageLoaded) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Calculate scaled dimensions
    const scale = Math.min(rect.width / image.width, rect.height / image.height) * zoom
    const scaledWidth = image.width * scale
    const scaledHeight = image.height * scale
    const offsetX = (rect.width - scaledWidth) / 2 + pan.x
    const offsetY = (rect.height - scaledHeight) / 2 + pan.y

    // Draw background image
    ctx.save()
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
    ctx.shadowBlur = 20
    ctx.drawImage(image, offsetX, offsetY, scaledWidth, scaledHeight)
    ctx.restore()

    // Helper to convert map coordinates to canvas coordinates
    const mapToCanvas = (coord: [number, number]) => {
      const x = offsetX + (coord[1] / 1000) * scaledWidth
      const y = offsetY + (coord[0] / 1000) * scaledHeight
      return { x, y }
    }

    // Draw journey paths first (behind markers)
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
        
        ctx.strokeStyle = journey.color
        ctx.lineWidth = 4
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.setLineDash([10, 10])
        ctx.shadowColor = journey.color
        ctx.shadowBlur = 8
        ctx.stroke()
        ctx.setLineDash([])
        ctx.shadowBlur = 0

        // Draw arrow at end of path
        if (journey.path.length > 1) {
          const lastPos = mapToCanvas(journey.path[journey.path.length - 1])
          const secondLastPos = mapToCanvas(journey.path[journey.path.length - 2])
          const angle = Math.atan2(lastPos.y - secondLastPos.y, lastPos.x - secondLastPos.x)
          
          ctx.save()
          ctx.translate(lastPos.x, lastPos.y)
          ctx.rotate(angle)
          ctx.fillStyle = journey.color
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(-12, -6)
          ctx.lineTo(-12, 6)
          ctx.closePath()
          ctx.fill()
          ctx.restore()
        }
      })
    }

    // Draw location markers
    if (mapData.locations) {
      const markerColors: Record<string, string> = {
        city: '#3b82f6',
        fortress: '#dc2626',
        landmark: '#8b5cf6',
        battlefield: '#f59e0b'
      }

      mapData.locations.forEach((location) => {
        const pos = mapToCanvas(location.coordinates)
        const color = markerColors[location.type] || '#64748b'
        const isHovered = hoveredItem?.type === 'location' && hoveredItem.data === location

        // Draw marker with glow effect
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, isHovered ? 12 : 10, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowColor = color
        ctx.shadowBlur = isHovered ? 20 : 10
        ctx.fill()
        
        // White border
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.shadowBlur = 0

        // Draw location name
        ctx.fillStyle = '#f1f5f9'
        ctx.font = 'bold 12px system-ui'
        ctx.textAlign = 'center'
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)'
        ctx.shadowBlur = 4
        ctx.fillText(location.name, pos.x, pos.y - 18)
        ctx.shadowBlur = 0
      })
    }
  }, [mapData, imageLoaded, zoom, pan, hoveredItem])

  // Load image
  useEffect(() => {
    const img = new Image()
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
        y: e.clientY - dragStart.y
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
          
          if (distance < 15) {
            setHoveredItem({ type: 'location', data: location, x: e.clientX, y: e.clientY })
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
    setZoom(prev => Math.max(0.5, Math.min(3, prev * delta)))
  }

  const handleZoomIn = () => setZoom(prev => Math.min(3, prev * 1.2))
  const handleZoomOut = () => setZoom(prev => Math.max(0.5, prev / 1.2))
  const handleReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  return (
    <div ref={containerRef} className="relative h-full w-full rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        style={{ minHeight: '600px' }}
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
      {hoveredItem && hoveredItem.type === 'location' && (
        <div 
          className="absolute pointer-events-none z-50 bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl max-w-xs"
          style={{
            left: `${hoveredItem.x + 10}px`,
            top: `${hoveredItem.y + 10}px`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <h3 className="font-semibold text-foreground mb-1">
            {(hoveredItem.data as Location).name}
          </h3>
          <p className="text-xs text-muted-foreground capitalize mb-2">
            {(hoveredItem.data as Location).type}
          </p>
          {(hoveredItem.data as Location).description && (
            <p className="text-sm text-slate-300">
              {(hoveredItem.data as Location).description}
            </p>
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
