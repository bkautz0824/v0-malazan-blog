"use client"

import { useState, useMemo } from "react"
import { maps } from "@/data/maps"
import { MapViewer } from "@/components/map-viewer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapIcon, MapPin, Route, Eye, EyeOff, ScrollText } from "lucide-react"

export default function MapsPage() {
  const [selectedMapId, setSelectedMapId] = useState(maps[0].id)
  const [visibleJourneys, setVisibleJourneys] = useState<Set<string>>(new Set())
  const [allJourneysVisible, setAllJourneysVisible] = useState(true)
  const [showJourneySummary, setShowJourneySummary] = useState<string | null>(null)

  const selectedMap = maps.find((m) => m.id === selectedMapId) || maps[0]

  // Initialize visible journeys when map changes
  useMemo(() => {
    if (selectedMap.journeys) {
      setVisibleJourneys(new Set(selectedMap.journeys.map((j) => j.group)))
      setAllJourneysVisible(true)
      setShowJourneySummary(null)
    }
  }, [selectedMap])

  const toggleJourney = (group: string) => {
    setVisibleJourneys((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(group)) {
        newSet.delete(group)
      } else {
        newSet.add(group)
      }
      return newSet
    })
  }

  const toggleAllJourneys = () => {
    if (allJourneysVisible) {
      setVisibleJourneys(new Set())
    } else {
      setVisibleJourneys(new Set(selectedMap.journeys?.map((j) => j.group) || []))
    }
    setAllJourneysVisible(!allJourneysVisible)
  }

  // Filter journeys based on visibility
  const filteredMap = useMemo(
    () => ({
      ...selectedMap,
      journeys: selectedMap.journeys?.filter((j) => visibleJourneys.has(j.group)),
    }),
    [selectedMap, visibleJourneys],
  )

  const getLocationTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      city: "#3b82f6",
      fortress: "#dc2626",
      landmark: "#8b5cf6",
      battlefield: "#f59e0b",
    }
    return colors[type] || "#64748b"
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">
              Interactive Maps
            </h1>
            <p className="text-balance text-lg text-muted-foreground">
              Explore the journeys and locations across the Malazan world. Toggle character group paths to trace their
              movements.
            </p>
          </header>

          {/* Map Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Select Book/Region</h3>
            <div className="flex flex-wrap gap-2">
              {maps.map((map) => (
                <Button
                  key={map.id}
                  variant={selectedMapId === map.id ? "default" : "outline"}
                  onClick={() => setSelectedMapId(map.id)}
                  className="flex items-center gap-2"
                >
                  <MapIcon className="h-4 w-4" />
                  {map.name}
                  <Badge variant="secondary" className="ml-1">
                    {map.book}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Map Display */}
          <div className="grid gap-6 lg:grid-cols-[1fr,380px]">
            <div>
              <MapViewer mapData={filteredMap} />
            </div>

            {/* Legend & Controls */}
            <div className="space-y-4">
              {/* Journey Filters */}
              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Route className="h-4 w-4" />
                    Character Journeys
                  </h3>
                  <Button variant="ghost" size="sm" onClick={toggleAllJourneys} className="h-7 text-xs">
                    {allJourneysVisible ? (
                      <>
                        <EyeOff className="h-3 w-3 mr-1" /> Hide All
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3 mr-1" /> Show All
                      </>
                    )}
                  </Button>
                </div>
                <div className="space-y-2">
                  {selectedMap.journeys?.map((journey, idx) => (
                    <div key={idx} className="space-y-2">
                      <button
                        onClick={() => toggleJourney(journey.group)}
                        className={`w-full flex items-start gap-3 text-left p-3 rounded-md transition-all ${
                          visibleJourneys.has(journey.group)
                            ? "bg-slate-800/50 border border-slate-600"
                            : "opacity-50 hover:opacity-75 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2 shrink-0 mt-0.5">
                          {visibleJourneys.has(journey.group) ? (
                            <Eye className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <EyeOff className="h-3 w-3 text-muted-foreground" />
                          )}
                          <div
                            className="h-4 w-8 rounded-sm border border-white/20"
                            style={{ backgroundColor: journey.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-foreground">{journey.group}</p>
                          {journey.description && (
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{journey.description}</p>
                          )}
                        </div>
                      </button>
                      {visibleJourneys.has(journey.group) && journey.summary && (
                        <div className="ml-8">
                          <button
                            onClick={() =>
                              setShowJourneySummary(showJourneySummary === journey.group ? null : journey.group)
                            }
                            className="flex items-center gap-1 text-xs text-accent hover:underline"
                          >
                            <ScrollText className="h-3 w-3" />
                            {showJourneySummary === journey.group ? "Hide Summary" : "Read Full Summary"}
                          </button>
                          {showJourneySummary === journey.group && (
                            <div className="mt-2 p-3 bg-slate-800/80 rounded text-xs text-slate-300 leading-relaxed">
                              {journey.summary}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Location Legend */}
              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4" />
                  Locations ({selectedMap.locations?.length || 0})
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {selectedMap.locations?.map((location) => (
                    <div key={location.name} className="flex items-start gap-2 text-sm">
                      <div
                        className="mt-1.5 h-3 w-3 rounded-full shrink-0 ring-2 ring-white/30"
                        style={{ backgroundColor: getLocationTypeColor(location.type) }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{location.type}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location Type Legend */}
                <div className="mt-4 pt-3 border-t border-slate-700">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Location Types:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["city", "fortress", "landmark", "battlefield"].map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full ring-1 ring-white/20"
                          style={{ backgroundColor: getLocationTypeColor(type) }}
                        />
                        <span className="text-xs text-muted-foreground capitalize">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Instructions */}
              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <h3 className="mb-2 text-sm font-semibold">Controls</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Click journey toggles to show/hide paths</li>
                  <li>• Click "Read Full Summary" for journey details</li>
                  <li>• Hover over markers for location info</li>
                  <li>• Scroll to zoom in/out</li>
                  <li>• Drag to pan across the map</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
