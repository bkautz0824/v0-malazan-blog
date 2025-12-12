"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ChevronDown, ChevronRight, Flame, Droplets, Wind, Mountain, Skull, Moon, Sun, Eye } from "lucide-react"
import { BOOK_CODES } from "@/lib/types"

type WarrenType = "elder" | "warren" | "hold"

interface Warren {
  id: string
  name: string
  aspect: string
  type: WarrenType
  icon: any
  color: string
  description: string
  knownUsers: string[]
  bookNotes: {
    book: string
    notes: string[]
  }[]
}

const warrens: Warren[] = [
  // ELDER WARRENS
  {
    id: "kurald-galain",
    name: "Kurald Galain",
    aspect: "Darkness",
    type: "elder",
    icon: Moon,
    color: "#6b21a8",
    description:
      "The Elder Warren of Darkness, home to the Tiste Andii. A realm of perpetual night and shadow, source of the Tiste Andii's power.",
    knownUsers: ["Anomander Rake", "Korlat", "Orfantal", "Silchas Ruin"],
    bookNotes: [
      {
        book: "GOTM",
        notes: [
          "Anomander Rake demonstrates mastery of Kurald Galain at Pale",
          "Moon's Spawn is revealed to be a floating fortress from this realm",
          "The Warren provides cover for Moon's Spawn's movements",
        ],
      },
      {
        book: "MOI",
        notes: [
          "Deeper exploration of the Warren's connection to the Tiste Andii",
          "Korlat uses it extensively in the Pannion War",
          "Revealed that Mother Dark is the source of this Warren",
        ],
      },
      {
        book: "MT",
        notes: [
          "Silchas Ruin imprisoned beneath Azath was once a master of this Warren",
          "Connections between Kurald Galain and Kurald Emurlahn explored",
        ],
      },
    ],
  },
  {
    id: "kurald-emurlahn",
    name: "Kurald Emurlahn",
    aspect: "Shadow",
    type: "elder",
    icon: Eye,
    color: "#374151",
    description:
      "The Elder Warren of Shadow, shattered and fragmented. Once home to the Tiste Edur, now realm of Shadowthrone and Cotillion.",
    knownUsers: ["Shadowthrone", "Cotillion", "Edgewalker", "Trull Sengar"],
    bookNotes: [
      {
        book: "GOTM",
        notes: [
          "Shadowthrone and Cotillion revealed as rulers of Shadow",
          "Shadow Hounds hunt from this Warren",
          "The Warren is used to infiltrate Darujhistan",
        ],
      },
      {
        book: "DG",
        notes: [
          "Path of Hands connects to fragments of Emurlahn",
          "Apt the demon serves from Shadow",
          "Iskaral Pust's temple exists in a fragment",
        ],
      },
      {
        book: "HOC",
        notes: [
          "Trull Sengar and Onrack travel through shattered fragments",
          "The Warren's fragmentary nature fully explained",
          "Edgewalker appears as guardian of Shadow's borders",
        ],
      },
      {
        book: "BH",
        notes: [
          "Cotillion and Shadowthrone continue machinations from Shadow",
          "Apsalar operates as their agent using Shadow paths",
        ],
      },
    ],
  },
  {
    id: "kurald-thyrllan",
    name: "Kurald Thyrllan",
    aspect: "Light",
    type: "elder",
    icon: Sun,
    color: "#fbbf24",
    description:
      "The Elder Warren of Light, home to the Tiste Liosan. Realm of harsh, burning light and the children of Father Light.",
    knownUsers: ["Osric", "L'oric", "Jorrude", "The Liosan"],
    bookNotes: [
      {
        book: "HOC",
        notes: [
          "Tiste Liosan warriors emerge from Kurald Thyrllan",
          "Jorrude and his knights demonstrate the Warren's power",
          "L'oric revealed as half-Liosan with access to this Warren",
        ],
      },
      { book: "BH", notes: ["Further connections between Thyrllan and the mortal warrens explored"] },
    ],
  },
  {
    id: "tellann",
    name: "Tellann",
    aspect: "Fire / T'lan Imass",
    type: "elder",
    icon: Flame,
    color: "#dc2626",
    description:
      "The Elder Warren of the T'lan Imass, tied to their Ritual of fire and dust. Allows the undead Imass to travel and maintains their existence.",
    knownUsers: ["Tool", "Onrack", "Kilava", "Silverfox", "Monok Ochem"],
    bookNotes: [
      { book: "GOTM", notes: ["Tool uses Tellann to travel and track", "The Warren sustains his undead existence"] },
      {
        book: "MOI",
        notes: [
          "Silverfox commands Tellann as the Bonecaster reborn",
          "The Gathering of T'lan Imass reveals the Warren's full scope",
          "Kilava, the only living Bonecaster, also uses Tellann",
        ],
      },
      {
        book: "HOC",
        notes: ["Onrack's use of Tellann while Unbound", "The Warren's connection to fire and the Ritual explained"],
      },
    ],
  },
  {
    id: "omtose-phellack",
    name: "Omtose Phellack",
    aspect: "Ice / Jaghut",
    type: "elder",
    icon: Mountain,
    color: "#06b6d4",
    description:
      "The Elder Warren of the Jaghut, a realm of eternal ice and cold. The Jaghut used it to build defensive walls and fortresses.",
    knownUsers: ["Gothos", "Icarium", "Raest"],
    bookNotes: [
      {
        book: "GOTM",
        notes: ["Raest's barrow contains Omtose Phellack ice", "The Finnest House is warded with Jaghut magic"],
      },
      {
        book: "DG",
        notes: ["Icarium's connection to the Warren hinted", "Ancient Jaghut ruins retain Omtose Phellack wards"],
      },
      {
        book: "MOI",
        notes: [
          "Pannion Seer's throne built on Omtose Phellack foundations",
          "K'rul reveals history of Jaghut and their Warren",
        ],
      },
    ],
  },
  {
    id: "starvald-demelain",
    name: "Starvald Demelain",
    aspect: "Dragons / First Warren",
    type: "elder",
    icon: Flame,
    color: "#7c3aed",
    description:
      "The First Warren, realm of the Eleint (dragons). The source from which all other Warrens descend. Also called the Warren of Dragons.",
    knownUsers: ["Anomander Rake (through Dragnipur)", "Silanah", "Eleint"],
    bookNotes: [
      { book: "GOTM", notes: ["Silanah demonstrates Eleint power", "Rake's sword Dragnipur connected to this realm"] },
      {
        book: "MOI",
        notes: ["Deeper understanding of Starvald Demelain's primacy", "Dragons revealed as tied to the first Warren"],
      },
      {
        book: "MT",
        notes: [
          "Menandore and other Soletaken dragons connected to this Warren",
          "Silchas Ruin's draconic form from Starvald Demelain",
        ],
      },
    ],
  },

  // MORTAL WARRENS (PATH OF THE DECK)
  {
    id: "denul",
    name: "Denul",
    aspect: "Healing",
    type: "warren",
    icon: Droplets,
    color: "#22c55e",
    description:
      "The Path of Healing. Allows practitioners to mend wounds, cure diseases, and sense injuries. One of the most valued Warren talents.",
    knownUsers: ["Mallet", "Karnadas", "Various healers"],
    bookNotes: [
      {
        book: "GOTM",
        notes: [
          "Mallet uses Denul to heal the Bridgeburners",
          "The Warren's limits explored - cannot heal old wounds easily",
        ],
      },
      {
        book: "MOI",
        notes: [
          "Karnadas as Destriant demonstrates high-level Denul",
          "The Warren's connection to compassion explored",
        ],
      },
      { book: "BH", notes: ["Deadsmell has some Denul capability", "Healers crucial during Y'Ghatan aftermath"] },
    ],
  },
  {
    id: "drek",
    name: "D'riss",
    aspect: "Earth / Stone",
    type: "warren",
    icon: Mountain,
    color: "#78716c",
    description:
      "The Path of Stone, Warren of earth and rock. Users can shape stone, travel through earth, and sense geological features.",
    knownUsers: ["Tattersail (limited)", "Mammot", "Quick Ben"],
    bookNotes: [
      { book: "GOTM", notes: ["Mammot revealed as High Priest of D'riss", "The Warren used in Darujhistan's defense"] },
      { book: "BH", notes: ["Banaschar was former High Priest of D'riss", "The temple's fall explored"] },
    ],
  },
  {
    id: "meanas",
    name: "Meanas",
    aspect: "Shadow / Illusion",
    type: "warren",
    icon: Eye,
    color: "#4b5563",
    description:
      "The Path of Shadow and Illusion. The mortal reflection of Kurald Emurlahn. Allows creation of illusions and manipulation of shadows.",
    knownUsers: ["Quick Ben", "Kalam", "Shadowthrone's agents"],
    bookNotes: [
      {
        book: "GOTM",
        notes: ["Quick Ben demonstrates Meanas alongside other Warrens", "The Warren's connection to Emurlahn noted"],
      },
      { book: "DG", notes: ["Shadow magic used extensively in Seven Cities"] },
      { book: "BH", notes: ["Quick Ben uses Meanas during confrontations"] },
    ],
  },
  {
    id: "rashan",
    name: "Rashan",
    aspect: "Darkness",
    type: "warren",
    icon: Moon,
    color: "#1e1b4b",
    description:
      "The Path of Darkness, mortal reflection of Kurald Galain. Allows manipulation of darkness and shadows.",
    knownUsers: ["Quick Ben", "Various mages"],
    bookNotes: [
      { book: "GOTM", notes: ["Quick Ben accesses Rashan as one of his Warrens"] },
      { book: "MOI", notes: ["Connection to Kurald Galain explained"] },
    ],
  },
  {
    id: "ruse",
    name: "Ruse",
    aspect: "Sea",
    type: "warren",
    icon: Droplets,
    color: "#0ea5e9",
    description:
      "The Path of the Sea. Warren of oceans, tides, and sea-magic. Connected to Mael, the Elder God of the Seas.",
    knownUsers: ["Mael", "Various sea mages"],
    bookNotes: [
      {
        book: "MT",
        notes: ["Mael (as Bugg) demonstrates mastery of sea and water", "The Warren's connection to Mael explored"],
      },
      { book: "BH", notes: ["Mael's power felt in seas around Malaz"] },
    ],
  },
  {
    id: "serc",
    name: "Serc",
    aspect: "Air / Sky",
    type: "warren",
    icon: Wind,
    color: "#a5b4fc",
    description:
      "The Path of the Sky. Warren of air, wind, and flight. Allows manipulation of weather and aerial travel.",
    knownUsers: ["Quick Ben", "Various mages"],
    bookNotes: [
      { book: "GOTM", notes: ["Quick Ben uses Serc for various effects"] },
      { book: "MOI", notes: ["Moon's Spawn uses something similar to traverse the sky"] },
    ],
  },
  {
    id: "telas",
    name: "Telas",
    aspect: "Fire",
    type: "warren",
    icon: Flame,
    color: "#f97316",
    description: "The Path of Fire. Allows creation and manipulation of flames. One of the more destructive Warrens.",
    knownUsers: ["Quick Ben", "Sinn", "Various mages"],
    bookNotes: [
      { book: "GOTM", notes: ["Fire magic used in the siege of Pale"] },
      {
        book: "BH",
        notes: ["Sinn demonstrates terrifying mastery of fire at Y'Ghatan", "Y'Ghatan burns with Warren fire"],
      },
    ],
  },
  {
    id: "thyr",
    name: "Thyr",
    aspect: "Light",
    type: "warren",
    icon: Sun,
    color: "#facc15",
    description:
      "The Path of Light. The mortal reflection of Kurald Thyrllan. Allows manipulation of light and radiance.",
    knownUsers: ["Various mages"],
    bookNotes: [{ book: "HOC", notes: ["L'oric's connection to both Thyr and Thyrllan explored"] }],
  },
  {
    id: "mockra",
    name: "Mockra",
    aspect: "Mind",
    type: "warren",
    icon: Eye,
    color: "#c084fc",
    description: "The Path of the Mind. Warren of mental magic - illusions, telepathy, and mental manipulation.",
    knownUsers: ["Quick Ben", "Various mages"],
    bookNotes: [
      { book: "DG", notes: ["Mental magic used in the Apocalypse"] },
      { book: "MOI", notes: ["Quick Ben demonstrates Mockra capabilities"] },
    ],
  },
  {
    id: "hood",
    name: "Hood's Path (Death)",
    aspect: "Death",
    type: "warren",
    icon: Skull,
    color: "#71717a",
    description:
      "The Warren of Death, ruled by Hood. All souls pass through his realm. Necromancers draw power from this Warren.",
    knownUsers: ["Hood", "Bauchelain", "Korbal Broach", "Deadsmell"],
    bookNotes: [
      {
        book: "GOTM",
        notes: ["Hairlock touches Hood's Warren in his madness", "The Warren's connection to undeath explored"],
      },
      {
        book: "MOI",
        notes: ["Bauchelain and Korbal Broach use necromancy", "Hood himself appears at the siege of Coral"],
      },
      { book: "BH", notes: ["Deadsmell's necromantic abilities from Hood's Warren"] },
    ],
  },

  // THE HOLDS (LETHERII)
  {
    id: "hold-beast",
    name: "Hold of the Beast",
    aspect: "Animals / Nature",
    type: "hold",
    icon: Flame,
    color: "#84cc16",
    description:
      "One of the ancient Holds used in Letherii magic. Connected to animals and natural forces. Predates the Warrens.",
    knownUsers: ["Letherii casters"],
    bookNotes: [
      {
        book: "MT",
        notes: ["The Holds explained as older than Warrens", "Feather Witch casts the tiles reading Holds"],
      },
    ],
  },
  {
    id: "hold-ice",
    name: "Hold of Ice",
    aspect: "Ice / Cold",
    type: "hold",
    icon: Mountain,
    color: "#67e8f9",
    description: "The Letherii Hold connected to ice and cold. Possibly connected to Omtose Phellack.",
    knownUsers: ["Letherii casters"],
    bookNotes: [
      {
        book: "MT",
        notes: ["The Holds' connection to Elder Warrens hinted", "Ice Hold possibly remnant of Jaghut influence"],
      },
    ],
  },
  {
    id: "hold-empty",
    name: "The Empty Hold",
    aspect: "The Errant's Domain",
    type: "hold",
    icon: Eye,
    color: "#9ca3af",
    description:
      "The Hold ruled by the Errant, Master of the Tiles. Contains positions for forgotten gods and lost powers.",
    knownUsers: ["The Errant", "Feather Witch"],
    bookNotes: [
      {
        book: "MT",
        notes: [
          "The Errant revealed as Master of the Tiles",
          "The Empty Hold contains space for new powers",
          "Feather Witch reads the tiles and contacts the Errant",
        ],
      },
      { book: "BH", notes: ["The Errant's manipulations continue through the Hold"] },
    ],
  },
]

export default function WarrensPage() {
  const [expandedWarrens, setExpandedWarrens] = useState<string[]>([])
  const [filter, setFilter] = useState<"all" | "elder" | "warren" | "hold">("all")

  const toggleWarren = (id: string) => {
    setExpandedWarrens((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))
  }

  const filteredWarrens = warrens.filter((w) => filter === "all" || w.type === filter)

  const getTypeLabel = (type: WarrenType) => {
    switch (type) {
      case "elder":
        return "Elder Warren"
      case "warren":
        return "Path (Warren)"
      case "hold":
        return "Hold"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-2">Warrens & Holds</h1>
          <p className="text-muted-foreground">The magical paths and their revelations through the series</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(["all", "elder", "warren", "hold"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === type ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent text-foreground"
              }`}
            >
              {type === "all" ? "All" : type === "elder" ? "Elder Warrens" : type === "warren" ? "Paths" : "Holds"}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="mb-6 p-4 bg-card rounded-lg border border-border">
          <h3 className="font-semibold mb-2 text-foreground">Understanding the Magic System</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-purple-400">Elder Warrens:</span> The ancient sources of magic, tied to
              Elder races (Tiste, Jaghut, T'lan Imass)
            </div>
            <div>
              <span className="font-medium text-blue-400">Paths (Warrens):</span> Mortal reflections of Elder Warrens,
              accessible to human mages through the Deck of Dragons
            </div>
            <div>
              <span className="font-medium text-amber-400">Holds:</span> Pre-Warren magic system used in Lether,
              accessed through the Tiles
            </div>
          </div>
        </div>

        {/* Warren Cards */}
        <div className="space-y-4">
          {filteredWarrens.map((warren) => {
            const Icon = warren.icon
            const isExpanded = expandedWarrens.includes(warren.id)

            return (
              <div key={warren.id} className="border border-border rounded-lg overflow-hidden bg-card">
                <button
                  onClick={() => toggleWarren(warren.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: warren.color + "30" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: warren.color }} />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <h2 className="font-serif text-lg font-bold text-foreground">{warren.name}</h2>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {getTypeLabel(warren.type)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{warren.aspect}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {isExpanded && (
                  <div className="border-t border-border p-4 space-y-4">
                    {/* Description */}
                    <p className="text-foreground">{warren.description}</p>

                    {/* Known Users */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Known Users:</h4>
                      <div className="flex flex-wrap gap-2">
                        {warren.knownUsers.map((user) => (
                          <span key={user} className="px-2 py-1 text-sm rounded bg-muted text-foreground">
                            {user}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book-by-Book Notes */}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Revelations by Book:</h4>
                      <div className="space-y-3">
                        {warren.bookNotes.map((bookNote) => (
                          <div key={bookNote.book} className="pl-4 border-l-2 border-primary/50">
                            <h5 className="font-medium text-primary mb-1">
                              {BOOK_CODES[bookNote.book as keyof typeof BOOK_CODES]}
                            </h5>
                            <ul className="space-y-1">
                              {bookNote.notes.map((note, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                  <span className="text-primary">•</span>
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* K'rul's Note */}
        <div className="mt-8 p-6 bg-card rounded-lg border border-primary/30">
          <h3 className="font-serif text-xl font-bold text-primary mb-3">K'rul and the Creation of Warrens</h3>
          <p className="text-muted-foreground mb-4">
            As revealed in <span className="text-foreground font-medium">Memories of Ice</span>, K'rul the Elder God
            created the Warrens by spilling his own blood, allowing mortals to access magical power. Before this, only
            the Elder Warrens existed, tied to specific races. The mortal Warrens are essentially paths through K'rul's
            blood, which is why he grows weaker as fewer worship him - the Warrens themselves are his body.
          </p>
          <p className="text-muted-foreground">
            The <span className="text-foreground font-medium">Holds</span> of Lether represent an older system,
            predating K'rul's sacrifice. They are accessed through the Tiles rather than the Deck of Dragons, and are
            ruled by the Errant rather than tied to K'rul.
          </p>
        </div>
      </main>
    </div>
  )
}
