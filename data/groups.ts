import { Group } from '@/lib/types'

export const groups: Group[] = [
  {
    id: 'bridgeburners',
    name: 'Bridgeburners',
    description: 'Elite Malazan Army veterans, the toughest soldiers in the empire',
    color: '#d4af37',
    books: ['GOTM', 'MOI'],
    timeline: [
      { book: 'GOTM', event: 'Siege of Pale', location: 'Pale' },
      { book: 'GOTM', event: 'Mission to Darujhistan', location: 'Darujhistan' },
      { book: 'MOI', event: 'Siege of Capustan', location: 'Capustan' },
      { book: 'MOI', event: 'Battle of Coral', location: 'Coral' },
    ]
  },
  {
    id: 'bonehunters',
    name: 'Bonehunters',
    description: 'Former 14th Army reformed after the Chain of Dogs',
    color: '#8b4513',
    books: ['DG', 'HOC', 'MT'],
    timeline: [
      { book: 'DG', event: 'Chain of Dogs begins', location: 'Hissar' },
      { book: 'DG', event: 'Battle at Vathar Crossing', location: 'Vathar' },
      { book: 'HOC', event: 'Formation of Bonehunters', location: 'Raraku' },
      { book: 'MT', event: 'March toward Seven Cities campaign end', location: 'Various' },
    ]
  },
  {
    id: 'malazans',
    name: 'Malazan Army',
    description: 'The military force of the Malazan Empire',
    color: '#4a5568',
    books: ['GOTM', 'DG', 'MOI', 'HOC', 'MT']
  },
  {
    id: 'ascendants',
    name: 'Ascendants',
    description: 'Gods and immortal beings who walk among mortals',
    color: '#9333ea',
    books: ['GOTM', 'DG', 'MOI', 'HOC', 'MT']
  },
  {
    id: 'seguleh',
    name: 'Seguleh',
    description: 'Master warriors from the Seguleh Islands',
    color: '#dc2626',
    books: ['MOI']
  },
  {
    id: 'tiste_andii',
    name: 'Tiste Andii',
    description: 'Ancient race of dark-skinned immortals',
    color: '#1e293b',
    books: ['GOTM', 'MOI']
  },
  {
    id: 'tiste_edur',
    name: 'Tiste Edur',
    description: 'Grey-skinned cousins of the Tiste Andii',
    color: '#64748b',
    books: ['MT'],
    timeline: [
      { book: 'MT', event: 'Discovery of the cursed sword', location: 'Calach Grounds' },
      { book: 'MT', event: 'Binadas killed by Jheck', location: 'Calach Grounds' },
      { book: 'MT', event: 'Rhulad\'s first death and resurrection', location: 'Hiroth Lands' },
      { book: 'MT', event: 'Invasion begins - Fort Shake falls', location: 'Fort Shake' },
      { book: 'MT', event: 'Battle of Trate', location: 'Trate' },
      { book: 'MT', event: 'Siege of High Fort', location: 'High Fort' },
      { book: 'MT', event: 'Conquest of Letheras', location: 'Letheras' },
      { book: 'MT', event: 'Brys vs Rhulad duel', location: 'Letheras' },
    ]
  },
  {
    id: 'wickans',
    name: 'Wickans',
    description: 'Horse-warrior tribes allied with the Malazan Empire',
    color: '#059669',
    books: ['DG', 'HOC']
  },
  {
    id: 'letherii',
    name: 'Letherii',
    description: 'Citizens of the Letherii Empire, a merchant civilization conquered by the Tiste Edur',
    color: '#eab308',
    books: ['MT'],
    timeline: [
      { book: 'MT', event: 'Tehol crashes the economy', location: 'Letheras' },
      { book: 'MT', event: 'Defense of Fort Shake', location: 'Fort Shake' },
      { book: 'MT', event: 'Naval battle on Katter River', location: 'Katter River' },
      { book: 'MT', event: 'Fall of Letheras', location: 'Letheras' },
      { book: 'MT', event: 'King Diskanar slain', location: 'Letheras' },
    ]
  },
  {
    id: 'lady_envys_group',
    name: 'Lady Envy\'s Companions',
    description: 'Unlikely companions traveling with the powerful sorceress Lady Envy',
    color: '#c026d3',
    books: ['MOI']
  },
  {
    id: 'apocalypse',
    name: 'Apocalypse Army',
    description: 'Felisin/Sha\'ik\'s revolutionary army fighting the Malazan Empire in Seven Cities',
    color: '#dc2626',
    books: ['DG', 'HOC']
  },
  {
    id: 'crimson_guard',
    name: 'Crimson Guard',
    description: 'Avowed warriors sworn to oppose the Malazan Empire, made immortal by their Vow',
    color: '#991b1b',
    books: ['MT']
  },
  {
    id: 'elder_gods',
    name: 'Elder Gods & Ancients',
    description: 'Ancient powers and beings from the beginning of time',
    color: '#6366f1',
    books: ['GOTM', 'DG', 'MOI', 'HOC', 'MT']
  },
  {
    id: 'dragons',
    name: 'Dragons & Eleint',
    description: 'Ancient draconic beings of immense power',
    color: '#dc2626',
    books: ['GOTM', 'MOI', 'HOC', 'MT']
  },
  {
    id: 'grey_swords',
    name: 'Grey Swords',
    description: 'Mercenary company dedicated to Fener, defenders of Capustan',
    color: '#71717a',
    books: ['MOI'],
    timeline: [
      { book: 'MOI', event: 'Defense of Capustan begins', location: 'Capustan' },
      { book: 'MOI', event: 'Siege of Capustan', location: 'Capustan' },
      { book: 'MOI', event: 'Fall of Capustan', location: 'Capustan' },
      { book: 'MOI', event: 'Itkovian\'s redemption', location: 'Capustan' },
    ]
  },
  {
    id: 'shadow_agents',
    name: 'Agents of Shadow',
    description: 'Mortals serving Shadowthrone and Cotillion\'s schemes',
    color: '#18181b',
    books: ['GOTM', 'DG', 'HOC']
  },
  {
    id: 'tiste_liosan',
    name: 'Tiste Liosan',
    description: 'Children of Light, golden-skinned immortals obsessed with purity',
    color: '#fbbf24',
    books: ['MT']
  },
  {
    id: 'tlan_imass',
    name: 'T\'lan Imass',
    description: 'Ancient undead warriors bound by ritual, eternally hunting Jaghut',
    color: '#78716c',
    books: ['GOTM', 'MOI', 'HOC', 'MT']
  }
]
