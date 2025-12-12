import type { MapData } from "@/lib/types"

export const maps: MapData[] = [
  {
    id: "genabackis-gotm",
    name: "Genabackis - Gardens of the Moon",
    book: "GOTM",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/genabackis-gotm.jpg",
    locations: [
      // Major Cities
      {
        name: "Pale",
        coordinates: [180, 320],
        description:
          "Free City besieged by the Malazan Empire. Site of the devastating battle where Moon's Spawn clashed with the Malazan mage cadre. Tayschrenn's betrayal killed Nightchill, Calot, and A'Karonys. The 2nd Army took the city but at terrible cost.",
        type: "city",
      },
      {
        name: "Darujhistan",
        coordinates: [520, 650],
        description:
          "The Blue City, last Free City of Genabackis. Ancient metropolis built around gas-lit streets and ruled by a fractious Council. Home to the Assassin's Guild, the Eel's network, and the sleeping Jaghut Tyrant beneath Gadrobi Hills.",
        type: "city",
      },
      {
        name: "Genabaris",
        coordinates: [100, 200],
        description:
          "Major Malazan-held port city. Staging ground for the Genabackis campaign. Where the Bridgeburners were first deployed.",
        type: "city",
      },
      {
        name: "Nathilog",
        coordinates: [300, 250],
        description: "City north of Pale, fell to the Malazan advance before the siege.",
        type: "city",
      },
      // Fortresses & Military
      {
        name: "Siege Lines at Pale",
        coordinates: [175, 335],
        description:
          "The Malazan siege lines where the 2nd, 5th, and 6th Armies encircled Pale for three years before the final assault.",
        type: "fortress",
      },
      // Landmarks
      {
        name: "Moon's Spawn (Battle Position)",
        coordinates: [185, 310],
        description:
          "The floating mountain fortress of Anomander Rake appeared above Pale during the siege. Eleven mages of the Empire attacked it; only Tayschrenn survived. Rake was wounded but Moon's Spawn withdrew intact.",
        type: "landmark",
      },
      {
        name: "Gadrobi Hills",
        coordinates: [480, 620],
        description:
          "Ancient barrow mounds southwest of Darujhistan. The Jaghut Tyrant Raest was imprisoned here. Adjunct Lorn and Tool came to release him as a weapon against the city.",
        type: "landmark",
      },
      {
        name: "Rhivi Plains",
        coordinates: [380, 480],
        description:
          "Vast grasslands between Pale and Darujhistan, home to the nomadic Rhivi people. The Bridgeburners crossed these plains en route to their mission.",
        type: "landmark",
      },
      {
        name: "Lake Azur",
        coordinates: [550, 580],
        description: "Large lake east of Darujhistan. K'rul's Temple lies on its shores.",
        type: "landmark",
      },
      {
        name: "K'rul's Belfry",
        coordinates: [530, 620],
        description:
          "Ancient temple of the Elder God K'rul within Darujhistan. Where Kruppe communes with the god in dreams, and where the Coin Bearer's destiny unfolds.",
        type: "landmark",
      },
      {
        name: "Phoenix Inn",
        coordinates: [525, 655],
        description:
          "Tavern in Darujhistan's Daru District. Headquarters of Kruppe, meeting place of Crokus, Murillio, Rallick Nom, and Coll.",
        type: "landmark",
      },
      {
        name: "Simtal Estate",
        coordinates: [510, 640],
        description:
          "Noble estate where Lady Simtal hosted her ill-fated fete. Site of multiple assassinations and the unleashing of the Jaghut Tyrant.",
        type: "landmark",
      },
      // Battlefields
      {
        name: "Battle of Pale",
        coordinates: [180, 325],
        description:
          "The cataclysmic battle where Moon's Spawn faced the Malazan mage cadre. Tayschrenn deliberately let his fellow mages die. The Bridgeburners were decimated by sorcerous 'friendly fire'. Pale fell but the cost was enormous.",
        type: "battlefield",
      },
      {
        name: "Rooftop Battle",
        coordinates: [522, 648],
        description:
          "The climactic rooftop confrontation in Darujhistan between Anomander Rake, the demon lord, and multiple factions. Sergeant Whiskeyjack fell through the roof during the chaos.",
        type: "battlefield",
      },
    ],
    journeys: [
      // BRIDGEBURNERS - from Pale to Darujhistan
      {
        group: "Bridgeburners (Whiskeyjack's Squad)",
        path: [
          [180, 320], // Start at Pale after the battle
          [200, 350], // South from Pale
          [240, 400], // Into the countryside
          [300, 450], // Crossing farmlands
          [350, 480], // Northern Rhivi Plains
          [380, 500], // Central plains
          [420, 540], // Approaching Darujhistan region
          [460, 580], // Lake Azur approaches
          [490, 620], // Outskirts
          [520, 650], // Darujhistan - infiltration
        ],
        color: "#d4af37",
        description:
          "Whiskeyjack, Quick Ben, Kalam, Fiddler, Hedge, Trotts, Mallet, and Sorry travel covertly from Pale to Darujhistan to assassinate the city's leaders.",
        summary:
          "After surviving the devastating Battle of Pale where most of their company was killed by Tayschrenn's 'misfired' sorcery, Sergeant Whiskeyjack leads his squad on a covert mission to Darujhistan. They pose as travelers while carrying secret orders to assassinate the city's ruling council and prepare for Malazan conquest. The squad includes Quick Ben (the seven-souled mage), Kalam (master assassin), Fiddler (sapper and reader of the Deck), Hedge (demolitions expert), Trotts (Barghast warrior), Mallet (healer), and the mysterious Sorry - who is actually possessed by the god Cotillion. Their journey across the Rhivi Plains brings them into contact with various agents, and upon reaching Darujhistan, they discover their mission is far more complex than simple assassination.",
      },
      // ADJUNCT LORN & TOOL
      {
        group: "Adjunct Lorn & Tool",
        path: [
          [180, 320], // Pale
          [220, 380], // South, different route
          [280, 430], // Westward arc
          [340, 470], // Through plains
          [400, 520], // Toward Gadrobi
          [450, 570], // Approaching hills
          [480, 620], // Gadrobi Hills - the barrows
        ],
        color: "#dc2626",
        description:
          "Adjunct Lorn and the T'lan Imass Tool travel to the Gadrobi Hills to release the Jaghut Tyrant as a weapon against Darujhistan.",
        summary:
          "Adjunct Lorn, personal agent of Empress Laseen, travels with Tool - a T'lan Imass warrior bound to serve her - on a secret mission that even Dujek doesn't know about. Their goal: locate and release the Jaghut Tyrant Raest from his barrow prison in the Gadrobi Hills, intending to use him as a weapon to destroy Darujhistan. Lorn carries an Otataral sword that nullifies magic and bears the weight of terrible knowledge about the Empire's plans. Tool, despite his undead nature, begins to question his servitude. Their journey culminates at the ancient barrows where they successfully free Raest, setting in motion events that will shake the city to its foundations.",
      },
      // TATTERSAIL / SILVERFOX
      {
        group: "Tattersail's Flight",
        path: [
          [180, 320], // Pale - starts here
          [200, 340], // Fleeing south
          [240, 380], // Into wilderness
          [290, 420], // Rhivi territory
          [340, 460], // Deeper into plains
          [380, 480], // Where she meets the Rhivi
        ],
        color: "#ec4899",
        description:
          "Tattersail flees Pale after discovering Tayschrenn's treachery. Pursued by Hairlock's madness, she is eventually killed but reborn through the Rhivi.",
        summary:
          "Tattersail, the cadre mage and diviner, survives the Battle of Pale but discovers Tayschrenn deliberately sacrificed his fellow mages. Fleeing south to warn Whiskeyjack, she becomes the target of the insane puppet Hairlock (her former lover, now bound in a soulshifted marionette). The Rope (Cotillion) eventually kills Hairlock, but Tattersail herself is mortally wounded. She dies in the Rhivi Plains, but the Rhivi spirits - aided by the Elder God K'rul - gather her soul along with the souls of Nightchill and Bellurdan (the Thelomen mage she killed in self-defense). From this gathering, Silverfox will eventually be born, though that story belongs to Memories of Ice.",
      },
      // MOON'S SPAWN
      {
        group: "Moon's Spawn",
        path: [
          [185, 310], // Battle position at Pale
          [220, 350], // Withdrawing
          [280, 420], // Slow drift south
          [350, 500], // Over the plains
          [420, 560], // Approaching Darujhistan
          [480, 610], // Near Lake Azur
          [520, 645], // Above Darujhistan for the finale
        ],
        color: "#4a148c",
        description:
          "The floating fortress drifts from Pale to Darujhistan, carrying Anomander Rake and the Tiste Andii.",
        summary:
          "Moon's Spawn, the ancient floating mountain fortress of the Tiste Andii, appears at Pale to oppose the Malazan siege but is driven back when Tayschrenn channels devastating sorcery against it. Anomander Rake is wounded in the battle. The fortress drifts south over weeks, following a path toward Darujhistan. Though damaged, Moon's Spawn remains a potent threat. Rake uses this time to recover and plan. When the Jaghut Tyrant Raest is unleashed, Rake confronts him in an epic aerial battle above the city. Moon's Spawn itself engages Raest's Finnest (soul vessel), leading to a cataclysmic clash that reshapes the landscape.",
      },
      // CROKUS/DARUJHISTAN LOCALS
      {
        group: "Crokus & the Coin",
        path: [
          [520, 650], // Phoenix Inn area
          [515, 645], // Through Daru District
          [510, 640], // To Simtal Estate
          [525, 655], // Back through streets
          [530, 620], // To K'rul's Belfry
          [522, 648], // Rooftops - finale
        ],
        color: "#22c55e",
        description:
          "Crokus Younghand, thief and unwitting Coin Bearer of Oponn, moves through Darujhistan's districts as fate's pawn.",
        summary:
          "Crokus Younghand, a young thief of Darujhistan, unknowingly picks up the Coin of Oponn - twin gods of luck and chance. This makes him a nexus of fate, drawing the attention of multiple powers. His theft at Simtal's estate brings him into contact with Sorry/Apsalar, with whom he develops feelings. Crokus moves through the city's underbelly, involved with the Phoenix Inn regulars (Kruppe, Murillio, Rallick Nom) while being manipulated by forces beyond his understanding. His journey culminates on the rooftops during the climactic battle, where the Coin's influence finally manifests in full.",
      },
    ],
  },
  {
    id: "seven-cities-dg",
    name: "Seven Cities - Deadhouse Gates",
    book: "DG",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/seven-cities-dg.jpg",
    locations: [
      // Major Cities
      {
        name: "Hissar",
        coordinates: [150, 180],
        description:
          "Malazan administrative center in Seven Cities. Where the Whirlwind rebellion erupted and the Chain of Dogs began. Coltaine took command of the 7th Army and 50,000 refugees here.",
        type: "city",
      },
      {
        name: "Sialk",
        coordinates: [220, 250],
        description: "First city on the Chain of Dogs' route. Already burning when Coltaine's column passed.",
        type: "city",
      },
      {
        name: "Hissar Crossing",
        coordinates: [180, 220],
        description: "First major engagement as Coltaine led the refugees out of the city through rebel lines.",
        type: "battlefield",
      },
      {
        name: "Sekala Crossing",
        coordinates: [320, 380],
        description:
          "River crossing where Coltaine displayed his tactical brilliance. The Wickan cavalry feigned retreat, drawing rebels into a trap.",
        type: "battlefield",
      },
      {
        name: "Gelor Ridge",
        coordinates: [400, 450],
        description: "High ground where the column was ambushed. Weasel Clan cavalry held the ridge at terrible cost.",
        type: "battlefield",
      },
      {
        name: "Vathar Crossing",
        coordinates: [520, 540],
        description:
          "The bloodiest river crossing. Captain Lull fell here. Thousands of refugees drowned or were cut down. The river ran red for days.",
        type: "battlefield",
      },
      {
        name: "Sanimon",
        coordinates: [620, 620],
        description:
          "Waystation where the column gathered more starving refugees, swelling their numbers despite dwindling supplies.",
        type: "city",
      },
      {
        name: "Dojal Hading",
        coordinates: [700, 680],
        description:
          "The final stretch. The column could see Aren's walls. Korbolo Dom's forces closed in for the kill.",
        type: "battlefield",
      },
      {
        name: "Aren",
        coordinates: [780, 750],
        description:
          "The destination that became a grave. The entire city watched from the walls as Coltaine and his Wickans were crucified within sight of safety. High Fist Pormqual refused to open the gates.",
        type: "fortress",
      },
      {
        name: "Aren Way",
        coordinates: [760, 730],
        description:
          "The road to Aren, lined with the crucified bodies of Coltaine's soldiers. Ten thousand crosses. The crows came.",
        type: "landmark",
      },
      // Felisin's Path
      {
        name: "Otataral Island",
        coordinates: [100, 350],
        description:
          "Prison mines where political prisoners were sent. Felisin Paran was condemned here by her sister Tavore. Baudin and Heboric were her companions.",
        type: "landmark",
      },
      {
        name: "Skullcup",
        coordinates: [130, 380],
        description: "The mining settlement on Otataral Island. A place of despair and brutal survival.",
        type: "city",
      },
      {
        name: "Dosin Pali",
        coordinates: [200, 420],
        description:
          "Coastal city where Felisin's group landed after escaping the mines. Baudin died here protecting Felisin from Gryllen the D'ivers.",
        type: "city",
      },
      {
        name: "Pan'potsun Odhan",
        coordinates: [350, 450],
        description: "The vast desert crossing. Heboric's ghostly hands began manifesting jade power here.",
        type: "landmark",
      },
      {
        name: "Raraku",
        coordinates: [500, 400],
        description:
          "The Holy Desert. An ancient seabed filled with memory and power. Here Sha'ik was reborn in Felisin's body. The Whirlwind goddess awakened.",
        type: "landmark",
      },
      {
        name: "Sha'ik's Oasis",
        coordinates: [520, 420],
        description:
          "The rebel encampment in Raraku. Where Felisin became Sha'ik Reborn and gathered the Army of the Apocalypse.",
        type: "fortress",
      },
      // Kalam/Fiddler Path
      {
        name: "Ehrlitan",
        coordinates: [180, 300],
        description:
          "Coastal city where Fiddler, Crokus, Apsalar, and Kalam went separate ways. Kalam began his journey to assassinate Laseen.",
        type: "city",
      },
      {
        name: "Tremorlor",
        coordinates: [400, 350],
        description:
          "The Azath House in Seven Cities. Fiddler, Apsalar, Crokus, and Mappo/Icarium converged here through the Path of Hands.",
        type: "landmark",
      },
      {
        name: "G'danisban",
        coordinates: [280, 320],
        description: "City along Kalam's route. The assassin gathered intelligence on rebel movements here.",
        type: "city",
      },
      // Icarium/Mappo
      {
        name: "Icarium's Wandering",
        coordinates: [350, 300],
        description:
          "The Jhag and his Trell guardian wandered the desert, Mappo desperately keeping Icarium from remembering his terrible past.",
        type: "landmark",
      },
    ],
    journeys: [
      // THE CHAIN OF DOGS - Cast: Coltaine's Army
      {
        group: "Chain of Dogs (Coltaine's Army)",
        path: [
          [150, 180], // Hissar - start
          [180, 220], // Hissar Crossing - first battle
          [220, 250], // Sialk
          [260, 300], // Open desert
          [300, 350], // Approaching Sekala
          [320, 380], // Sekala Crossing
          [360, 420], // Post-Sekala march
          [400, 450], // Gelor Ridge
          [450, 490], // Desert stretch
          [520, 540], // Vathar Crossing
          [570, 580], // Recovery march
          [620, 620], // Sanimon
          [660, 650], // Final approach
          [700, 680], // Dojal Hading
          [740, 720], // Aren Way
          [780, 750], // Aren - end
        ],
        color: "#a3692f",
        description:
          "Coltaine, Duiker, Bult, Lull, Sormo E'nath, Nil, Nether, and the Wickan clans march 1,200 miles protecting 50,000 refugees.",
        summary:
          "The Chain of Dogs is the defining tragedy of Deadhouse Gates. Fist Coltaine, a Wickan warrior of legendary skill, is tasked with the impossible: escort over 50,000 Malazan refugees across 1,200 miles of hostile territory during the Whirlwind rebellion. His army consists of the 7th Army remnants and his Wickan cavalry - the Foolish Dog, Weasel, and Crow clans.\n\nHistorian Duiker marches with them, bearing witness to every horror. Coltaine's uncle Bult serves as his second. The young warlocks Nil and Nether channel their clan's spirits. Captain Lull leads the infantry with gruff devotion.\n\nAt every river crossing - Sekala, Vathar - they are ambushed by Korbolo Dom's Army of the Apocalypse. The Wickans fight rearguard actions, dying by the hundreds to buy the refugees time. Sormo E'nath, the greatest of the Wickan warlocks, gives his life to save the column.\n\nThey make it. The refugees reach Aren's walls. But High Fist Pormqual, a coward and traitor, refuses to open the gates or send relief. Coltaine's surviving soldiers - less than a hundred - are captured and crucified on the Aren Way. Coltaine himself is nailed to a cross within sight of the city walls. Ten thousand crows descend, but instead of feeding on him, they carry his soul away.\n\nDuiker alone survives to tell the tale. The refugees are saved. Coltaine is legend.",
      },
      // FELISIN'S PATH - Cast: The Otataral Mines/Sha'ik's Cult
      {
        group: "Felisin's Journey to Sha'ik",
        path: [
          [100, 350], // Otataral Island
          [130, 380], // Skullcup mines
          [150, 400], // Escape
          [200, 420], // Dosin Pali - Baudin dies
          [280, 430], // Into the desert
          [350, 450], // Pan'potsun Odhan
          [420, 430], // Approaching Raraku
          [500, 400], // Raraku
          [520, 420], // Sha'ik's Oasis - becomes Sha'ik
        ],
        color: "#dc143c",
        description: "Felisin Paran, Baudin, and Heboric escape the mines. Felisin becomes Sha'ik Reborn in Raraku.",
        summary:
          "Felisin Paran was a noble daughter until her sister Tavore, newly appointed Adjunct, had her arrested and sent to the Otataral mines as a political message. In Skullcup, Felisin survives through bitter determination and selling her body to the brutal overseer Beneth.\n\nHer companions are Baudin - secretly a Talon agent sent by Tavore to protect her - and Heboric Light Touch, a disgraced priest of Fener whose hands were cut off for thievery. They escape during the Whirlwind uprising.\n\nAt Dosin Pali, Baudin dies saving Felisin from Gryllen, a D'ivers rat swarm. She never learns he was trying to protect her. Her hatred for her sister}}-\n\nCrossing the Pan'potsun desert nearly kills them. Heboric's phantom hands begin glowing with jade fire - touched by something vast and alien. They reach Raraku, where the Whirlwind cult awaits their prophesied leader.\n\nSha'ik Elder is killed just as Felisin arrives. The goddess enters Felisin, and she becomes Sha'ik Reborn - messiah of the rebellion, commander of the Army of the Apocalypse. The noble girl who wanted only to survive has become a vessel of vengeance.",
      },
      // KALAM'S PATH - Cast: The Bridgeburners Abroad
      {
        group: "Kalam's Assassination Path",
        path: [
          [180, 300], // Ehrlitan - splits from group
          [220, 280], // Coast road
          [280, 320], // G'danisban
          [340, 350], // Desert crossing
          [400, 380], // Continues west
          [460, 400], // Ship to Malaz
        ],
        color: "#18181b",
        description:
          "Kalam Mekhar travels alone toward Malaz Island, carrying the Book of the Apocalypse and assassination in his heart.",
        summary:
          "Kalam Mekhar, master assassin of the Bridgeburners, splits from his companions at Ehrlitan on a personal mission: assassinate Empress Laseen. He carries the Book of Dryjhna, the Apocalypse, which chronicles the rebellion's prophecies.\n\nTraveling as a merchant, Kalam crosses Seven Cities gathering intelligence. He witnesses the rebellion's atrocities and Malazan incompetence. His resolve hardens. He books passage on a ship to Malaz Island.\n\nHis journey is marked by narrow escapes and growing awareness that someone is tracking him. The Claw - the Empire's assassin organization he once belonged to - knows he's coming. What awaits him in Malaz City is a night of blood.",
      },
      // FIDDLER'S PATH - Cast: The Bridgeburners Abroad
      {
        group: "Fiddler, Apsalar & Crokus",
        path: [
          [180, 300], // Ehrlitan
          [220, 330], // Into desert
          [280, 350], // Path of Hands territory
          [340, 360], // Shapeshifter encounters
          [400, 350], // Tremorlor
        ],
        color: "#d4af37",
        description:
          "Fiddler guides Apsalar (freed from Cotillion) and Crokus toward the Azath House Tremorlor through the deadly Path of Hands.",
        summary:
          "Sergeant Fiddler takes responsibility for Apsalar - the girl formerly possessed by Cotillion/The Rope - and Crokus, who loves her. Their goal: reach the Azath House Tremorlor, hoping to find passage back to Quon Tali.\n\nTheir journey takes them through the Path of Hands, where shapeshifters converge seeking to challenge the Azath. Fiddler's sapper skills and Apsalar's lingering assassin abilities keep them alive through multiple encounters with D'ivers and Soletaken.\n\nAt Tremorlor, they meet Mappo and Icarium. The convergence draws many powers. The Azath is dying, and what emerges from it will reshape the world.",
      },
      // ICARIUM & MAPPO - Cast: Also Abroad/Shapeshifters
      {
        group: "Icarium & Mappo",
        path: [
          [350, 300], // Wandering
          [380, 320], // Desert
          [400, 340], // Toward Tremorlor
          [400, 350], // Tremorlor
        ],
        color: "#8b5cf6",
        description:
          "The Jhag Icarium and his Trell guardian Mappo wander Seven Cities, Mappo desperately preventing Icarium from remembering his catastrophic past.",
        summary:
          "Icarium is a mystery wrapped in amnesia. A Jhag (half-Jaghut), he possesses staggering power - enough to destroy civilizations. He has done so before, though he doesn't remember. His companion Mappo, a Trell warrior, has spent centuries keeping Icarium calm and ensuring he never recovers his memories.\n\nTheir bond is one of the most complex in the series. Mappo loves Icarium like a brother but was sent to contain him, not befriend him. Every moment is shadowed by the knowledge that if Icarium remembers - if he enters his killing rage - Mappo may have to kill him.\n\nThe Path of Hands draws them toward Tremorlor, where Icarium's nature will be tested.",
      },
    ],
  },
  {
    id: "genabackis-moi",
    name: "Genabackis - Memories of Ice",
    book: "MOI",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/genabackis-moi.jpg",
    locations: [
      // Major Cities
      {
        name: "Pale",
        coordinates: [200, 650],
        description:
          "Now Malazan-held, staging point for Onearm's Host. Dujek declared them outlaws here to facilitate the alliance.",
        type: "city",
      },
      {
        name: "Darujhistan",
        coordinates: [280, 700],
        description: "The Blue City, watching nervously as old enemies become allies against a greater threat.",
        type: "city",
      },
      {
        name: "Maurik",
        coordinates: [350, 550],
        description:
          "Assembly point where Onearm's Host, Brood's forces, the Rhivi, and the Tiste Andii formally allied.",
        type: "city",
      },
      {
        name: "Capustan",
        coordinates: [500, 400],
        description:
          "Holy city of the Mask Council, besieged by 300,000 Pannion troops. The Grey Swords made their stand here. Shield Anvil Itkovian embraced the grief of thousands.",
        type: "city",
      },
      {
        name: "Setta",
        coordinates: [600, 320],
        description: "Pannion city on the route to Coral. Taken by the allied forces after fierce fighting.",
        type: "fortress",
      },
      {
        name: "Lest",
        coordinates: [650, 280],
        description: "Another Pannion stronghold. The K'Chain Che'Malle hunters were first encountered here.",
        type: "fortress",
      },
      {
        name: "Coral",
        coordinates: [750, 200],
        description:
          "Capital of the Pannion Domin, seat of the Seer. Here Whiskeyjack died, Moon's Spawn fell, and the Bridgeburners ended. The Crippled God's influence was revealed.",
        type: "city",
      },
      // Landmarks
      {
        name: "Mott Wood",
        coordinates: [280, 600],
        description: "Forests between Pale and Maurik. Silverfox was born among the Rhivi here.",
        type: "landmark",
      },
      {
        name: "Rhivi Plains",
        coordinates: [320, 580],
        description: "Where the Rhivi herds roam and the T'lan Imass gathered at Silverfox's call.",
        type: "landmark",
      },
      {
        name: "Mott Irregulars Territory",
        coordinates: [400, 480],
        description: "Swamps and forests where Trotts recruited the Mott Irregulars - forest demons in truth.",
        type: "landmark",
      },
      {
        name: "Moon's Spawn Descent",
        coordinates: [720, 220],
        description:
          "Where Moon's Spawn made its final descent into the bay near Coral, carrying Anomander Rake into legend.",
        type: "landmark",
      },
      {
        name: "The Rent",
        coordinates: [780, 180],
        description:
          "Dimensional rift beneath Coral where the Crippled God's poison festered and the Matron's nest lay.",
        type: "landmark",
      },
      // Battlefields
      {
        name: "Siege of Capustan",
        coordinates: [510, 410],
        description:
          "The Grey Swords held for weeks against impossible odds. Brukhalian and Karnadas fell. Itkovian refused to die until he had embraced every soul.",
        type: "battlefield",
      },
      {
        name: "Battle of Coral",
        coordinates: [740, 210],
        description:
          "The final battle. Bridgeburners infiltrated through tunnels. Kallor killed Whiskeyjack. Quick Ben faced the Seer. Moon's Spawn descended in fire.",
        type: "battlefield",
      },
      {
        name: "Tunnels Beneath Coral",
        coordinates: [745, 205],
        description:
          "Where the Bridgeburners were ambushed. So many died. Picker, Blend, and few others survived the horror.",
        type: "battlefield",
      },
    ],
    journeys: [
      // ONEARM'S HOST - Cast: The Malazan Army
      {
        group: "Onearm's Host & Bridgeburners",
        path: [
          [200, 650], // Pale
          [240, 620], // March begins
          [280, 590], // Through Mott Wood
          [320, 560], // Rhivi Plains
          [350, 550], // Maurik - alliance forms
          [400, 510], // March north
          [450, 460], // Approaching Capustan
          [500, 400], // Capustan - too late for siege
          [550, 360], // Continuing north
          [600, 320], // Setta
          [650, 280], // Lest
          [700, 240], // Final approach
          [750, 200], // Coral - end
        ],
        color: "#d4af37",
        description:
          "Dujek, Whiskeyjack, Quick Ben, Picker, and the Bridgeburners march from Pale through Capustan to the final battle at Coral.",
        summary:
          "Onearm's Host marches north under extraordinary circumstances. High Fist Dujek has been declared outlaw by Empress Laseen - a political fiction allowing him to ally with former enemies Caladan Brood and Anomander Rake against the Pannion Domin.\n\nThe Bridgeburners, now just a single company, serve as elite infiltrators. Whiskeyjack commands them, though his leg never properly healed. Quick Ben schemes. Picker leads her squad with cynical competence.\n\nAt Capustan, they arrive too late - the city has fallen, though survivors hold out. The Grey Swords' sacrifice buys time. The alliance relieves the city and continues toward Coral.\n\nAt Coral, the Bridgeburners infiltrate through tunnels. It's a trap - they're ambushed by Pannion forces and Kallor's treachery. Whiskeyjack is killed by Kallor in the fighting. The company is effectively destroyed. Dujek dissolves them officially, letting the survivors scatter to other commands.\n\nThe Bridgeburners die at Coral. Their legend lives forever.",
      },
      // GREY SWORDS - Cast: Capustan's Defenders
      {
        group: "Grey Swords",
        path: [
          [500, 400], // Capustan - start and siege
          [520, 380], // Sorties
          [540, 360], // After relief
          [580, 340], // March to Coral
          [620, 300], // Through Pannion territory
          [680, 250], // Approaching
          [750, 200], // Coral - Itkovian's redemption
        ],
        color: "#71717a",
        description:
          "Shield Anvil Itkovian, Brukhalian, Karnadas, and their company defend Capustan, then march to Coral where Itkovian achieves transcendence.",
        summary:
          "The Grey Swords are a mercenary company sworn to Fener, the Boar of War. Commanded by Mortal Sword Brukhalian, with Destriant Karnadas as spiritual leader and Shield Anvil Itkovian as military commander.\n\nAt Capustan, they face 300,000 Pannion troops - Tenescowri cannibals, Beklites, Urdomen. Brukhalian and Karnadas both fall in the defense. Itkovian, as Shield Anvil, is a vessel for the souls of the fallen. He absorbs their grief, their pain, their dying moments. He cannot die while bearing this burden.\n\nThe siege breaks them but doesn't destroy them. When the alliance arrives, the Grey Swords - now sworn to the Wolves of War, Togg and Fanderay, since Fener has been pulled from his realm - march to Coral.\n\nAt Coral, Itkovian offers something unprecedented to the T'lan Imass: release. He embraces the grief of an entire undead race, 300,000 years of suffering. It kills him, but in dying he becomes something else - not quite a god, but close. Shield Anvil no more. Now the Redeemer.",
      },
      // BROOD'S ARMY - Cast: Caladan Brood's Allies
      {
        group: "Caladan Brood's Army",
        path: [
          [300, 600], // Starting position
          [340, 560], // March
          [350, 550], // Maurik - alliance
          [420, 500], // Moving together
          [500, 400], // Capustan
          [600, 320], // Setta
          [750, 200], // Coral
        ],
        color: "#16a34a",
        description: "Caladan Brood, Kallor, the Rhivi, the Barghast, and Silverfox march alongside former enemies.",
        summary:
          "Caladan Brood's army has fought the Malazan Empire for years. Now they ally with their enemies against greater evil. Brood carries a hammer that can shatter the world. Kallor - ancient, cursed, ambitious - serves as his second, though he serves only himself.\n\nThe Rhivi provide scouts and supplies. Among them is Silverfox, the reborn soul of Tattersail/Nightchill/Bellurdan, rapidly aging to adulthood. She has the power to command the T'lan Imass.\n\nThe Barghast clans join under Humbrall Taur. Trotts of the Bridgeburners reunites with his people.\n\nThis alliance is fragile. Kallor plots. Brood and Dujek barely trust each other. But they march together because the alternative is the Pannion Domin consuming everything.",
      },
      // MOON'S SPAWN - Cast: The Tiste Andii
      {
        group: "Moon's Spawn & Tiste Andii",
        path: [
          [250, 580], // Starting position
          [300, 540], // Moving
          [350, 500], // Parallel to armies
          [450, 420], // Near Capustan
          [550, 340], // Over Setta
          [650, 260], // Approaching Coral
          [720, 220], // Moon's Spawn descent
        ],
        color: "#4a148c",
        description:
          "Anomander Rake and the Tiste Andii in Moon's Spawn drift toward the final confrontation at Coral.",
        summary:
          "Moon's Spawn, still damaged from Pale, drifts north with the armies. Anomander Rake walks among mortals more than usual, his presence lending weight to the alliance. His Tiste Andii are few but ancient, each a formidable warrior-mage.\n\nKorlat serves as Rake's second and becomes close to Whiskeyjack - a doomed romance given what waits at Coral.\n\nAt the final battle, Moon's Spawn descends into the bay, its power spent against the Pannion Seer's K'Chain Che'Malle allies and the Matron. Rake survives, but his fortress is destroyed. He carries Dragnipur, the sword that holds its own world of darkness, and his grief is as old as the Tiste race.",
      },
      // LADY ENVY'S GROUP - Cast: Also in Genabackis
      {
        group: "Lady Envy & Companions",
        path: [
          [200, 300], // Eastern start
          [280, 340], // Traveling
          [360, 380], // Through wilderness
          [440, 400], // Near Capustan
          [520, 360], // North
          [600, 300], // Approaching Coral
          [700, 230], // Near Coral
          [750, 200], // Coral
        ],
        color: "#c026d3",
        description:
          "Lady Envy, Tool, Toc the Younger (in Anaster's body), Mok, Thurule, and Senu take a separate path to Coral.",
        summary:
          "Lady Envy, daughter of Draconus (creator of Dragnipur), travels with an unlikely group. Tool, the renegade T'lan Imass, has refused the Gathering. Toc the Younger, last seen at Pale, is trapped in the body of the mad prophet Anaster after his own was destroyed. Three Seguleh warriors - Mok, Thurule, and Senu - accompany them, their masked faces marking their deadly skill.\n\nThey take a separate route to Coral. Along the way, Thurule challenges Anomander Rake - and dies. The Seguleh are legendary warriors, but Rake is something else entirely.\n\nToc is eventually captured by the Pannion Seer and tortured horribly. Tool confronts his own past and the failure of the T'lan Imass purpose. Lady Envy's true motives remain obscure, but at Coral, all threads converge.",
      },
      // T'LAN IMASS - Cast: The Undead Armies
      {
        group: "T'lan Imass Gathering",
        path: [
          [320, 580], // Rhivi Plains - Silverfox calls
          [380, 520], // Gathering
          [450, 460], // Moving with armies
          [520, 400], // At Capustan
          [620, 320], // Through Pannion lands
          [750, 200], // Coral - Itkovian's gift
        ],
        color: "#78716c",
        description: "Multiple T'lan Imass clans answer Silverfox's call, marching to war and, finally, to redemption.",
        summary:
          "The T'lan Imass are an undead race - once human, they chose ritual death to fight the Jaghut. They cannot die, cannot feel, cannot weep. Their war is long over, but they remain.\n\nSilverfox commands them as Summoner. She calls the clans: Logros, Kron, Ifayle. They come, hundreds of thousands of years old, bound to a purpose that no longer exists.\n\nAt Coral, Itkovian offers them something unprecedented: release. He embraces their grief - 300,000 years of it. For the first time since the Ritual, T'lan Imass weep. Some choose to finally die. Others continue, but changed.\n\nTool, who rejected the Ritual's purpose, is vindicated. The undead find peace at last.",
      },
    ],
  },
  {
    id: "raraku-hoc",
    name: "Seven Cities - House of Chains",
    book: "HOC",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/raraku-hoc.jpg",
    locations: [
      // Major Locations
      {
        name: "Aren",
        coordinates: [200, 200],
        description:
          "Where Adjunct Tavore assembled the 14th Army from recruits, veterans, and the desperate. The shadow of Coltaine's crucifixion hangs over everything.",
        type: "fortress",
      },
      {
        name: "G'danisban",
        coordinates: [280, 300],
        description: "City along the march route, still showing scars of the Whirlwind rebellion.",
        type: "city",
      },
      {
        name: "Pan'potsun Odhan",
        coordinates: [380, 380],
        description: "Desert crossing where the 14th Army began to understand the land they marched through.",
        type: "landmark",
      },
      {
        name: "Raraku",
        coordinates: [500, 450],
        description:
          "The Holy Desert. Once a sea, it remembers. Sha'ik's encampment lies within. The final battle will transform everything.",
        type: "landmark",
      },
      {
        name: "Sha'ik's Encampment",
        coordinates: [520, 470],
        description:
          "The rebel headquarters. Where L'oric, Bidithal, and Febryl schemed. Where Karsa Orlong killed Bidithal for his crimes against children.",
        type: "fortress",
      },
      {
        name: "The Whirlwind Wall",
        coordinates: [480, 440],
        description:
          "The goddess's barrier of sand and wind protecting the rebel forces. When it falls, so does the rebellion.",
        type: "landmark",
      },
      // Karsa's Journey
      {
        name: "Teblor Mountains",
        coordinates: [150, 100],
        description:
          "Karsa Orlong's homeland. He left to raid the 'children' of the lowlands, not knowing they were not children at all.",
        type: "landmark",
      },
      {
        name: "Silver Lake",
        coordinates: [200, 150],
        description: "Where Karsa's raid began its catastrophic unraveling. He killed and was captured.",
        type: "landmark",
      },
      {
        name: "Genabaris Slave Route",
        coordinates: [250, 200],
        description: "Karsa was enslaved and transported as a curiosity - a giant Teblor warrior.",
        type: "landmark",
      },
      {
        name: "Otataral Island",
        coordinates: [100, 400],
        description: "Where Karsa was briefly imprisoned before escaping during the rebellion.",
        type: "landmark",
      },
      // Trull/Onrack
      {
        name: "The Nascent",
        coordinates: [700, 600],
        description: "A flooded realm between worlds where Trull Sengar was rescued from drowning by Onrack.",
        type: "landmark",
      },
      {
        name: "Kurald Emurlahn Fragments",
        coordinates: [650, 550],
        description: "Shattered pieces of the Tiste Edur warren. The Tiste Liosan hunt through them.",
        type: "landmark",
      },
      // Battlefields
      {
        name: "Battle of Raraku",
        coordinates: [510, 460],
        description:
          "Where Tavore killed Sha'ik - her own sister Felisin - without knowing. The desert became a sea again.",
        type: "battlefield",
      },
    ],
    journeys: [
      // KARSA ORLONG - Cast: The Teblor (Book 1 is entirely his)
      {
        group: "Karsa Orlong's Journey",
        path: [
          [150, 100], // Teblor Mountains
          [180, 130], // Descending
          [200, 150], // Silver Lake
          [230, 180], // After capture
          [250, 200], // Slave route
          [200, 280], // Transported
          [150, 350], // To coast
          [100, 400], // Otataral Island
          [150, 420], // Escape
          [250, 450], // Crossing
          [380, 460], // To Raraku
          [520, 470], // Sha'ik's camp
        ],
        color: "#ef4444",
        description: "From ignorant Teblor raider to enlightened witness. Karsa's journey spans the book.",
        summary:
          "Book One of House of Chains belongs entirely to Karsa Orlong. A Teblor warrior from the mountain tribes, Karsa believes the lowlanders are 'children' to be slaughtered. His grandfather's stories glorified raiding. Karsa set out to prove himself.\n\nReality shattered his beliefs. The 'children' were not children. His raid failed. He was captured, enslaved, transported across the world. His companion Torvald Nom survived with him through wit and luck.\n\nOn Otataral Island, during the Whirlwind uprising, Karsa escaped. His journey to Raraku transformed him from a murdering savage into something more complex - a witness to civilization's corruption.\n\nIn Sha'ik's camp, Karsa discovered Bidithal's abuse of children. He killed the High Mage in brutal justice. Karsa no longer slaughters blindly. He watches. He judges. And sometimes, he acts.",
      },
      // 14TH ARMY - Cast: The Malazans
      {
        group: "14th Army (Tavore's March)",
        path: [
          [200, 200], // Aren
          [240, 250], // March begins
          [280, 300], // G'danisban
          [330, 340], // Desert approach
          [380, 380], // Pan'potsun Odhan
          [430, 420], // Deeper into desert
          [480, 440], // Whirlwind Wall
          [510, 460], // Battle of Raraku
        ],
        color: "#8b4513",
        description:
          "Tavore leads recruits and veterans from Aren to Raraku. She kills Sha'ik - her sister - without knowing.",
        summary:
          "Adjunct Tavore Paran assembles the 14th Army at Aren - a force mocked as 'Tavore's Folly.' Raw recruits, bitter veterans, officers who failed elsewhere. Sergeant Strings (secretly Fiddler) returns to service. Bottle discovers his magical talents. Gesler and Stormy serve despite their miraculous transformation by fire.\n\nTavore herself is an enigma. Cold, competent, driven. She sent her sister Felisin to the mines. Now she marches to destroy the rebellion Felisin leads.\n\nThe march to Raraku hardens the recruits. They become soldiers. When they reach the Whirlwind Wall, Tavore challenges Sha'ik to single combat.\n\nSha'ik accepts. In that duel, Tavore kills the rebel messiah with a single thrust. She never learns it was Felisin beneath the hood. The Whirlwind Wall falls. Raraku floods - the ancient sea returns. The rebellion dies.\n\nTavore walks away carrying a grief she doesn't understand. Her soldiers follow, loyal despite not knowing why.",
      },
      // SHA'IK'S FORCES - Cast: The Army of the Apocalypse
      {
        group: "Sha'ik's Army of the Apocalypse",
        path: [
          [520, 470], // Sha'ik's camp - stationary but scheming
          [510, 460], // Battle position
        ],
        color: "#dc143c",
        description: "Sha'ik (Felisin), L'oric, Leoman, Toblakai, and the rebel commanders await Tavore's army.",
        summary:
          "Sha'ik Reborn - Felisin Paran wearing a goddess's power - commands the Army of the Apocalypse from Raraku. Around her, ambitious mages scheme: L'oric (secretly Osric's son), the vile Bidithal, the treacherous Febryl.\n\nLeoman of the Flails serves as her military commander, though he knows the cause is doomed. His sergeant Corabb Bhilan Thenu'alas is fanatically loyal. Mathok leads the desert warriors.\n\nFelisin's hatred for her sister consumes her. She doesn't know Tavore sent Baudin to protect her. She only knows betrayal.\n\nWhen Tavore comes, Sha'ik accepts single combat. Perhaps she wanted to die. Perhaps she wanted to see her sister one last time. The sword takes her before she can speak.\n\nFelisin Younger, adopted daughter, survives. The goddess finds a new vessel.",
      },
      // TRULL & ONRACK - Cast: In the Warrens
      {
        group: "Trull Sengar & Onrack",
        path: [
          [700, 600], // The Nascent
          [680, 580], // Traveling
          [650, 550], // Kurald Emurlahn fragments
          [600, 520], // Encountering Liosan
          [550, 500], // Toward Raraku's edges
        ],
        color: "#64748b",
        description: "The Shorn Edur and the awakened T'lan Imass forge a friendship in the shattered warrens.",
        summary:
          "Trull Sengar was made Shorn - outcast - by his own people for questioning Emperor Rhulad. Cast into the sea between realms, he nearly drowned before Onrack T'emlava, a T'lan Imass, saved him.\n\nOnrack is unique - he has somehow regained emotion, perhaps touched by the same force that transformed Silverfox. He feels curiosity, loyalty, even something like joy.\n\nThe unlikely pair travels through Kurald Emurlahn, the shattered warren of Shadow. They encounter Tiste Liosan led by the arrogant Jorrude, who consider both Edur and Imass lesser beings.\n\nTheir friendship becomes one of the series' most touching relationships - the undead warrior learning to feel again, the outcast finding someone who accepts him.",
      },
    ],
  },
  {
    id: "lether-mt",
    name: "Letherii Empire - Midnight Tides",
    book: "MT",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/lether-mt.jpg",
    locations: [
      // Tiste Edur Lands
      {
        name: "Hiroth Village",
        coordinates: [200, 100],
        description:
          "Home of the Sengar family. Where Rhulad found the cursed sword on the beach and everything changed.",
        type: "city",
      },
      {
        name: "The Beach",
        coordinates: [180, 120],
        description: "Where the Crippled God's sword washed ashore. Rhulad touched it and died - then rose again.",
        type: "landmark",
      },
      {
        name: "Hannan Mosag's Fortress",
        coordinates: [220, 130],
        description: "Seat of the Warlock King. Where the Edur tribes unified and the invasion was planned.",
        type: "fortress",
      },
      // Invasion Route
      {
        name: "Fort Shake",
        coordinates: [300, 200],
        description: "Northernmost Letherii fortress. First to fall. The Edur shadow magic devastated the garrison.",
        type: "fortress",
      },
      {
        name: "Trate",
        coordinates: [380, 280],
        description: "Major coastal city. The Edur unleashed full sorcerous power here. Thousands died in shadow fire.",
        type: "city",
      },
      {
        name: "Fent Reach",
        coordinates: [420, 320],
        description: "Fent tribal lands, conquered by Lether generations ago. The Fent remember.",
        type: "landmark",
      },
      {
        name: "High Fort",
        coordinates: [500, 400],
        description:
          "The great defensive position. Prince Quillas commanded here. Its fall opened the road to Letheras.",
        type: "fortress",
      },
      {
        name: "Brans Keep",
        coordinates: [540, 450],
        description: "Secondary fortress. Moroch Nevath commanded the Queen's forces here.",
        type: "fortress",
      },
      // Letheras
      {
        name: "Letheras",
        coordinates: [600, 550],
        description:
          "Capital of the Letherii Empire. City of gold and corruption. Where Tehol schemed on his roof and Brys fought his final duel.",
        type: "city",
      },
      {
        name: "The Royal Palace",
        coordinates: [610, 560],
        description: "Where King Diskanar reigned in growing madness. Where Chancellor Triban Gnol pulled strings.",
        type: "fortress",
      },
      {
        name: "Tehol's Roof",
        coordinates: [590, 545],
        description:
          "A tilted rooftop in the poor quarter. Headquarters of the most dangerous man in the Empire - who owned only a blanket.",
        type: "landmark",
      },
      {
        name: "The Azath Tower",
        coordinates: [580, 570],
        description: "Where Silchas Ruin lay imprisoned. Kettle guards it, speaking to the dead inside.",
        type: "landmark",
      },
      {
        name: "The Eternal Domicile",
        coordinates: [615, 555],
        description: "Where Brys fought Rhulad in the throne room. Where he won and lost everything.",
        type: "landmark",
      },
      // Other
      {
        name: "Andarist's Isle",
        coordinates: [150, 80],
        description:
          "Island where Andarist lived in grief. The Edur raiders killed him. Dassem Ultor later took his sword.",
        type: "landmark",
      },
    ],
    journeys: [
      // TISTE EDUR INVASION - Cast: The Warlock King's Forces
      {
        group: "Tiste Edur Invasion",
        path: [
          [200, 100], // Hiroth Village
          [240, 140], // Gathering tribes
          [280, 180], // March begins
          [300, 200], // Fort Shake
          [340, 240], // South along coast
          [380, 280], // Trate
          [420, 320], // Fent Reach
          [460, 360], // Continuing
          [500, 400], // High Fort
          [540, 450], // Brans Keep
          [570, 500], // Approaching capital
          [600, 550], // Letheras - victory
        ],
        color: "#64748b",
        description: "Fear, Trull, Binadas, and Rhulad lead the Edur conquest from Hiroth to Letheras.",
        summary:
          "The Tiste Edur invasion begins when Rhulad Sengar, youngest of the Sengar brothers, finds a cursed sword on the beach. It kills him - then brings him back, insane and bound to the Crippled God.\n\nWarlock King Hannan Mosag unifies the Edur tribes under Rhulad as Emperor. The Sengar brothers serve their mad sibling: Fear (eldest, tormented by what Rhulad has become), Trull (honorable, increasingly horrified), Binadas (the sorcerer, silent and troubled).\n\nThe invasion sweeps south. Edur shadow magic devastates Letherii defenders at Fort Shake and Trate. The corrupted sorcery of Hannan Mosag - drawing on the Crippled God's power - proves overwhelming.\n\nEach battle costs Rhulad deaths. Each resurrection makes him more paranoid, more cruel. By the time they reach Letheras, the victory is hollow. The Edur have conquered an empire but lost themselves.",
      },
      // SENGAR FAMILY - More focused path
      {
        group: "The Sengar Brothers",
        path: [
          [200, 100], // Hiroth - home
          [180, 120], // The Beach - Rhulad finds sword
          [200, 110], // Rhulad's first death
          [220, 130], // To Hannan Mosag
          [300, 200], // Fort Shake - Fear leads
          [380, 280], // Trate - Trull questions
          [500, 400], // High Fort
          [600, 550], // Letheras - Trull made Shorn
        ],
        color: "#475569",
        description: "The tragedy of Fear, Trull, Binadas, and Rhulad Sengar unfolds across the conquest.",
        summary:
          "The Sengar family embodies the tragedy of Midnight Tides. Tomad and Uruth raised four sons: Fear, Trull, Binadas, and Rhulad.\n\nRhulad, the youngest, always felt lesser. When he found the cursed sword, he finally had power - at the cost of his sanity. Each death and resurrection strips away more of who he was.\n\nFear watches his youngest brother become a monster and blames himself for not protecting him. Trull cannot stay silent about the atrocities and is eventually made Shorn - outcast, erased from memory. Binadas serves quietly, his thoughts hidden.\n\nBy the end, one brother is mad, one is outcast, and the others are broken. The Sengar family's destruction mirrors the Edur people's corruption.",
      },
      // LETHERII DEFENSE - Cast: The Empire
      {
        group: "Letherii Defense",
        path: [
          [600, 550], // Letheras - command
          [540, 450], // Brans Keep
          [500, 400], // High Fort - main defense
          [380, 280], // Trate - devastating loss
          [300, 200], // Fort Shake - first fall
        ],
        color: "#eab308",
        description: "Brys Beddict leads the doomed defense while corruption undermines every effort.",
        summary:
          "The Letherii defense was doomed before it began. Not by Edur strength, but by Letherii corruption.\n\nKing's Champion Brys Beddict is the finest swordsman in the empire. He trains ceaselessly, his skill almost supernatural. But skill cannot overcome the rot in Letheras.\n\nChancellor Triban Gnol cares only for profit. The Queen schemes with the First Consort. Prince Quillas is incompetent. The merchant houses see the war as opportunity for profit, not survival.\n\nBrys fights brilliantly at every engagement. It doesn't matter. The political class undermines every defensive preparation. By the time the Edur reach Letheras, the kingdom has already fallen from within.\n\nBrys's final duel with Rhulad is legendary. He kills the Emperor repeatedly - but Rhulad cannot stay dead. Rather than face the entire Edur army, Brys poisons himself. He wins the battle and loses everything.",
      },
      // TEHOL & BUGG - Cast: In Letheras
      {
        group: "Tehol & Bugg's Economic War",
        path: [
          [590, 545], // Tehol's Roof
          [595, 548], // Through markets
          [600, 550], // Letheras center
          [605, 555], // Manipulations
          [590, 545], // Back to roof
        ],
        color: "#fbbf24",
        description: "Tehol Beddict and his manservant Bugg (the Elder God Mael) wage war with economics.",
        summary:
          "Tehol Beddict was once the wealthiest man in Lether. Then he deliberately crashed the economy. Now he lives on a roof, owning only a blanket, attended by his manservant Bugg.\n\nBugg is actually Mael, Elder God of the Seas. He serves Tehol because... well, because Tehol is Tehol. Their banter is legendary.\n\nFrom his roof, Tehol wages economic warfare. His network of agents - Shand, Hejun, Rissarh, and others - manipulate markets, buy debt, undermine the corrupt merchant houses. Tehol's weapons are not swords but contracts, debts, and deliberate market manipulation.\n\nHis goal: collapse the Letherii economy at the moment of Edur conquest, ensuring the corruptors fall with the kingdom. Ublala Pung, a dim but loyal Tarthenal, serves as his bodyguard.\n\nTehol never wields a blade. His victory is just as complete.",
      },
      // IRON BARS - Cast: The Crimson Guard
      {
        group: "Iron Bars & Crimson Guard",
        path: [
          [380, 280], // Trate area - trapped
          [420, 350], // Fighting south
          [480, 420], // Through war zone
          [540, 480], // Approaching Letheras
          [580, 530], // Near Azath
          [600, 550], // Letheras - escape
        ],
        color: "#991b1b",
        description: "The Avowed Iron Bars leads his squad through the invasion, fighting for survival.",
        summary:
          "Iron Bars commands a squad of Crimson Guard Avowed - immortal mercenaries bound by vow. They're trapped in Lether when the invasion begins, with no stake in either side.\n\nHis squad includes Corlo (a mage of significant power) and several other Avowed. They fight not for conquest but survival, protecting those they've come to care about.\n\nIron Bars encounters Seren Pedac, an Acquitor (trade liaison), and becomes her protector. His legendary skill proves itself in multiple engagements - the Crimson Guard reputation is earned.\n\nUblala Pung also travels with them, falling in love with the undead Shurq Elalle. The Guard eventually escapes Lether, but their presence demonstrates why the Crimson Guard is feared across the world.",
      },
      // SEREN PEDAC - Cast: The Acquitors
      {
        group: "Seren Pedac's Journey",
        path: [
          [300, 200], // Fort Shake area - mission
          [350, 250], // Traveling
          [400, 300], // Through war
          [500, 400], // High Fort
          [550, 480], // To capital
          [600, 550], // Letheras
        ],
        color: "#0ea5e9",
        description: "Acquitor Seren Pedac navigates between Edur and Letherii, witness to the conquest.",
        summary:
          "Seren Pedac is an Acquitor - a trade liaison between Lether and outside peoples. She knows the Tiste Edur, having facilitated trade agreements. When war comes, she's caught between.\n\nHer journey takes her through the invasion's horror. She witnesses Edur atrocities and Letherii cowardice. Buruk the Pale, her merchant companion, is revealed as a spy and traitor.\n\nSeren finds unexpected protection from Iron Bars and his Crimson Guard. She also encounters Trull Sengar before his exile, seeing the honorable Edur struggling with his people's transformation.\n\nBy the end, Seren is changed - no longer able to be a neutral party. The war has made her choose sides, even if that side is simply 'against cruelty.'",
      },
    ],
  },
  {
    id: "seven-cities-bh",
    name: "Seven Cities & Malaz Island - The Bonehunters",
    book: "BH",
    bounds: [
      [0, 0],
      [1000, 1000],
    ],
    imageUrl: "/maps/seven-cities-bh.jpg",
    locations: [
      // Y'Ghatan & Seven Cities
      {
        name: "Y'Ghatan",
        coordinates: [280, 350],
        description:
          "The City of the Olive Groves. Leoman's trap. Thousands of Bonehunters died when he ignited the olive oil stores, turning the city into an inferno. Bottle led survivors through ancient tunnels beneath the flames.",
        type: "city",
      },
      {
        name: "Y'Ghatan Tunnels",
        coordinates: [285, 360],
        description:
          "Ancient passages beneath Y'Ghatan, built layer upon layer over ten thousand years. Bottle sensed rats fleeing through them and led forty survivors to safety while the city burned above.",
        type: "landmark",
      },
      {
        name: "Temple of the Queen of Dreams",
        coordinates: [282, 355],
        description:
          "The temple where Corabb sheltered and where Leoman and Dunsparrow escaped through L'oric's magic portal to the Queen of Dreams' realm.",
        type: "landmark",
      },
      {
        name: "Dassem's Barrow",
        coordinates: [275, 340],
        description:
          "The barrow of Dassem Ultor (supposedly) from the first siege of Y'Ghatan. A reminder of the city's bloody history with the Malazan Empire.",
        type: "landmark",
      },
      {
        name: "Aren",
        coordinates: [420, 500],
        description:
          "Major port city. The 14th Army gathered here before marching on Y'Ghatan and returned here afterward.",
        type: "city",
      },
      {
        name: "G'danisban",
        coordinates: [200, 280],
        description:
          "Plague-ravaged city where Poliel's Grey Goddess cult spread disease. Heboric Ghost Hands was murdered here by the Unbound T'lan Imass.",
        type: "city",
      },
      {
        name: "Raraku (Ruins)",
        coordinates: [350, 400],
        description:
          "The Holy Desert, now empty after Sha'ik's death. An ancient seabed filled with memory. The Whirlwind died here.",
        type: "landmark",
      },
      {
        name: "Ehrlitan",
        coordinates: [150, 320],
        description: "Coastal city where Apsalar, Cutter, and others pursued their separate missions.",
        type: "city",
      },
      // Malaz Island
      {
        name: "Malaz City",
        coordinates: [750, 200],
        description:
          "The original capital before Unta, where Kellanved founded the Empire. Site of the Night of Knives when the Claw attempted to assassinate Tavore and her officers. Mock's Hold overlooks the harbor.",
        type: "city",
      },
      {
        name: "Mock's Hold",
        coordinates: [755, 195],
        description:
          "Ancient fortress above Malaz City where Laseen consolidated power. Kalam fought his way through Claw assassins to reach the Empress.",
        type: "fortress",
      },
      {
        name: "Deadhouse",
        coordinates: [745, 205],
        description:
          "Azath House in Malaz City. Where Kellanved and Dancer allegedly died. Its grounds are sacred and dangerous.",
        type: "landmark",
      },
      {
        name: "Smiley's Tavern",
        coordinates: [752, 208],
        description: "Tavern near the harbor where the Old Guard gathered. Demons, ghosts, and legends drink here.",
        type: "landmark",
      },
      // Sea route
      {
        name: "Imperial Fleet Assembly",
        coordinates: [500, 450],
        description: "Where Admiral Nok's fleet gathered to transport the 14th Army from Seven Cities.",
        type: "landmark",
      },
    ],
    journeys: [
      // 14TH ARMY - Y'GHATAN CAMPAIGN
      {
        group: "Bonehunters (14th Army) - Y'Ghatan",
        path: [
          [420, 500], // Aren - mustering
          [380, 460], // March begins
          [340, 420], // Across desert
          [310, 390], // Approaching Y'Ghatan
          [280, 350], // Y'Ghatan - the siege
        ],
        color: "#8b4513",
        description: "Tavore leads the 14th Army from Aren to besiege Y'Ghatan, walking into Leoman's trap.",
        summary:
          "After crushing the rebellion at Raraku, Adjunct Tavore pursues Leoman of the Flails to Y'Ghatan, the Holy City where Dassem Ultor supposedly died decades earlier. The 14th Army has been bloodied but not broken.\n\nLeoman has prepared a trap. He's evacuated the civilians and filled the city's ancient maethgara (oil storage) with olive oil, hiding caches throughout the cramped streets. When the Malazans breach the walls and pour in, he ignites everything.\n\nThe firestorm consumes thousands. The city becomes a furnace. Fiddler's squad, Gesler's squad, and others are trapped inside. It's Bottle, a young mage who can sense through animals, who saves them - he follows rats through ancient tunnels beneath the burning streets, leading forty survivors through passages built layer upon layer over ten thousand years.\n\nThey emerge covered in soot and ash, having crawled through the bowels of history itself. Leoman escapes through a portal provided by L'oric. Y'Ghatan is left a melted ruin. The 14th Army is forged in that fire - those who survived now call themselves Bonehunters.",
      },
      // THE TUNNEL SURVIVORS
      {
        group: "Y'Ghatan Tunnel Survivors",
        path: [
          [280, 350], // Trapped in burning Y'Ghatan
          [282, 355], // Temple of Queen of Dreams
          [285, 360], // Enter the tunnels
          [290, 365], // Crawling through darkness
          [295, 370], // Ancient passages
          [300, 375], // Emerging outside
        ],
        color: "#d4af37",
        description:
          "Fiddler, Bottle, Gesler, Stormy, Hellian, and others escape through tunnels beneath the burning city.",
        summary:
          "When Y'Ghatan burned, roughly forty soldiers found themselves trapped in the Temple of the Queen of Dreams. Fiddler, the veteran Bridgeburner-turned-Bonehunter, kept them calm. Bottle, whose grandmother taught him the old magic, sensed rats fleeing through cracks in the floor.\n\nThey blasted through the temple floor with a Sharper munition and descended into darkness. The tunnels were ancient - built upon built upon built, going back ten thousand years to the First Empire. They crawled through collapsed passages, squeezed through gaps, and prayed the fire above wouldn't find them.\n\nCorabb Bhilan Thenu'alas, Leoman's former follower, was among them - his supernatural luck kept him alive once more. Gesler and Stormy, their gold and bronze skin gleaming even in darkness, helped carry the wounded. Hellian, drunk as always, somehow kept her squad together.\n\nThey emerged covered in ash and history, the first soldiers to be called Bonehunters.",
      },
      // SEA VOYAGE TO MALAZ ISLAND
      {
        group: "14th Army - Sea Voyage",
        path: [
          [420, 500], // Aren
          [450, 480], // Departing Seven Cities
          [500, 450], // Fleet assembly
          [550, 400], // Open sea
          [600, 350], // Crossing
          [650, 300], // Approaching Quon Tali
          [700, 250], // Nearing Malaz Island
          [750, 200], // Malaz City
        ],
        color: "#0ea5e9",
        description: "Admiral Nok's fleet carries the 14th Army from Seven Cities to Malaz Island.",
        summary:
          "After Y'Ghatan, the 14th Army boards Admiral Nok's fleet for the journey to Malaz Island. Tavore has received orders to report to the Empress - but the nature of those orders remains mysterious.\n\nThe sea voyage is not peaceful. Ships are attacked by raiders. Tensions simmer between factions. Quick Ben and Kalam rejoin the army. And waiting in Malaz City, the Claw prepares.\n\nThe fleet arrives at the city where the Empire was born, where Kellanved first dreamed of conquest, where the Deadhouse stands eternal. What awaits them will test every bond of loyalty.",
      },
      // NIGHT OF KNIVES - MALAZ CITY
      {
        group: "Night of Knives - Kalam's Hunt",
        path: [
          [750, 200], // Malaz City harbor
          [752, 205], // Into the streets
          [752, 208], // Smiley's Tavern area
          [754, 202], // Fighting through
          [755, 195], // Mock's Hold - confrontation
        ],
        color: "#18181b",
        description:
          "Kalam fights through Claw assassins to reach Empress Laseen while Tavore's officers are hunted throughout the city.",
        summary:
          "The Night of Knives in Malaz City. The Claw has been activated against the 14th Army's officers. Throughout the city, assassins strike from shadows.\n\nKalam Mekhar, perhaps the deadliest assassin alive, becomes the hunter. With his otataral-edged weapons, he carves through Claw agents, fighting his way toward Mock's Hold and a confrontation with Empress Laseen herself.\n\nT'amber dies protecting Tavore, revealing her true nature as a vessel of the Eres'al. Pearl dies, his obsession with Lostara Yil his final thought. Sergeant Hellian, too drunk to be afraid, somehow survives.\n\nThe Old Guard - Cartheron Crust, Urko, the remaining founders of the Empire - play their own game. By dawn, the Claw is broken, and Tavore's army has survived. But the Empire will never forget this night of blood.",
      },
      // HEBORIC'S DEATH
      {
        group: "Heboric & Companions",
        path: [
          [350, 400], // Raraku ruins
          [300, 360], // Traveling
          [250, 320], // Approaching G'danisban
          [200, 280], // G'danisban - Heboric dies
        ],
        color: "#22c55e",
        description:
          "Heboric, Scillara, Felisin Younger, and Cutter travel through plague-ravaged lands. Heboric is murdered by the Unbound.",
        summary:
          "After Sha'ik's death at Raraku, her followers scattered. Heboric Ghost Hands traveled with Scillara (a refugee pregnant from her time in Sha'ik's camp), Felisin the Younger (Sha'ik's adopted daughter), Cutter (formerly Crokus), and the demon Greyfrog.\n\nTheir path led through plague country. Poliel, Mistress of Pestilence, had awakened, and her Grey Goddess cult spread disease. In G'danisban, they encountered Torahaval Delat, Quick Ben's sister, now a priestess of Poliel.\n\nBut the true horror came from the Unbound - T'lan Imass serving the Crippled God. They attacked Heboric, tearing away his jade power, leaving the former priest to die. His murder was a strike against Treach himself.\n\nHeboric's death marked another move in the Crippled God's game. The jade fire that had burned in his hands went... somewhere else.",
      },
      // ICARIUM & MAPPO SEPARATED
      {
        group: "Icarium & Mappo",
        path: [
          [350, 380], // Starting location
          [380, 340], // Wandering
          [420, 300], // Approaching conflict
          [450, 260], // Separated
        ],
        color: "#78716c",
        description: "Mappo is separated from Icarium by the Nameless Ones' agents. Taralack Veed takes his place.",
        summary:
          "For centuries, Mappo Runt has guarded Icarium, keeping the Jhag's terrible power in check. Their friendship is genuine - but Mappo's duty comes from the Nameless Ones, and they have other plans.\n\nThrough manipulation and violence, Mappo is separated from his charge. In his place, Taralack Veed - a Gral warrior and agent of the Nameless Ones - becomes Icarium's new companion. But Veed's purpose is not protection. The Nameless Ones want Icarium's power unleashed.\n\nMappo searches desperately for his friend, knowing that without him, Icarium could destroy everything. The Jhag's awakening once shattered civilizations. If Veed succeeds in triggering that rage against the wrong target...",
      },
    ],
  },
]
