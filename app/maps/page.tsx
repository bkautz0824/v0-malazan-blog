'use client'

import { useState } from 'react'
import { maps } from '@/data/maps'
import { MapViewer } from '@/components/map-viewer'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { MapIcon, MapPin, Route } from 'lucide-react'

export default function MapsPage() {
  const [selectedMapId, setSelectedMapId] = useState(maps[0].id)
  const selectedMap = maps.find(m => m.id === selectedMapId) || maps[0]

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
              Explore the journeys and locations across the Malazan world
            </p>
          </header>

          {/* Map Selection */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {maps.map((map) => (
                <Button
                  key={map.id}
                  variant={selectedMapId === map.id ? 'default' : 'outline'}
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
          <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
            <div>
              <MapViewer mapData={selectedMap} />
            </div>

            {/* Legend & Info */}
            <div className="space-y-4">
              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4" />
                  Locations
                </h3>
                <div className="space-y-2">
                  {selectedMap.locations?.map((location) => (
                    <div key={location.name} className="flex items-start gap-2 text-sm">
                      <div 
                        className="mt-1 h-3 w-3 rounded-full shrink-0"
                        style={{ 
                          backgroundColor: {
                            city: '#3b82f6',
                            fortress: '#dc2626',
                            landmark: '#8b5cf6',
                            battlefield: '#f59e0b'
                          }[location.type] || '#64748b'
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{location.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Route className="h-4 w-4" />
                  Journeys
                </h3>
                <div className="space-y-3">
                  {selectedMap.journeys?.map((journey, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div 
                        className="mt-1 h-0.5 w-6 shrink-0"
                        style={{ 
                          backgroundColor: journey.color,
                          borderTop: '2px dashed'
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{journey.group}</p>
                        {journey.description && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {journey.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-slate-900/50 border-slate-700">
                <h3 className="mb-2 text-sm font-semibold">Instructions</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Click markers to view location details</li>
                  <li>• Click paths to see journey information</li>
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
