import type { Character } from "@/lib/types"

export const characters: Character[] = [
  // ============================================
  // BRIDGEBURNERS (Cast: Gardens of the Moon, Memories of Ice)
  // ============================================
  {
    id: "whiskeyjack",
    name: "Whiskeyjack",
    race: "Human",
    rank: "Commander, 9th Squad",
    status: "dead",
    deathBook: "MOI",
    deathLocation:
      "Coral - his damaged leg failed him during single combat with the cursed High King Kallor, allowing Kallor to deliver a fatal blow.",
    affiliations: ["Bridgeburners", "Malazan Army"],
    books: ["GOTM", "MOI"],
    description: "The stoic, beloved commander of the Bridgeburners. A veteran of countless campaigns, he was once a companion of Dassem Ultor and one of the most respected soldiers in the empire. He was a father figure to his squad and his death sent ripples across the world.",
    notable: "Refused ascendancy on multiple occasions. His death was a pivotal moment in the series, leading to Korlat's grief-stricken rage and the loyalty of the Bridgeburner ghosts.",
    image: "/characters/whiskeyjack.jpg",
  },
  {
    id: "ganoes-paran",
    name: "Ganoes Paran",
    race: "Human",
    rank: "Captain, later Master of the Deck",
    status: "ascended",
    affiliations: ["Bridgeburners", "Malazan Army"],
    books: ["GOTM", "MOI", "HOC", "BH"],
    description: "A young nobleman from a powerful family who, disillusioned with his station, joined the army. His life becomes entangled with the gods when he is chosen by Oponn, the twin gods of luck. His journey is one of suffering, death, and rebirth, leading him to become the Master of the Deck of Dragons.",
    notable: "Killed by Adjunct Lorn in GOTM and resurrected, freeing him from Oponn's influence. As Master of the Deck, he holds a position of immense power, capable of influencing the ascendants and warrens.",
    image: "/characters/ganoes-paran.jpg",
  },
  {
    id: "quick-ben",
    name: "Quick Ben (Ben Adaephon Delat)",
    race: "Human",
    rank: "High Mage, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners", "Bonehunters", "Malazan Army"],
    books: ["GOTM", "MOI", "HOC", "BH"],
    description: "A genius-level High Mage of mysterious origins serving in the Bridgeburners. He is a master strategist and manipulator, often several steps ahead of his allies and enemies, including gods. He claims to have access to twelve warrens, a feat considered impossible.",
    notable: "His soul is a collective, having absorbed at least eleven other mages in the ancient city of Aren. He is a key player in the mortal world's defiance against the machinations of ascendants and elder gods.",
    image: "/characters/quick-ben.jpg",
  },
  {
    id: "sorry",
    name: "Sorry",
    race: "Human (Possessed)",
    rank: "Assassin, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners", "Shadow Agents"],
    books: ["GOTM"],
    description: "A young fisher-girl from Itko Kan who was possessed by Cotillion, the Patron of Assassins. As 'Sorry', she was a deadly, emotionless killer assigned to the Bridgeburners with a mission to kill Anomander Rake. She was eventually freed from the possession by Ganoes Paran.",
    notable: "Her actions as Sorry set in motion many of the key events of Gardens of the Moon. After being freed, she took back her birth name, Apsalar, and set out on a new path.",
  },
  {
    id: "kalam",
    name: "Kalam Mekhar",
    race: "Human",
    rank: "Corporal, Assassin",
    status: "alive",
    affiliations: ["Bridgeburners", "Bonehunters"],
    books: ["GOTM", "DG", "MOI", "HOC", "BH"],
    description: "A hulking former Claw assassin from Seven Cities who joined the Bridgeburners alongside Quick Ben. He is a master of close-quarters combat and otataral-edged knives. Despite his deadly profession, he is fiercely loyal to his friends.",
    notable: "One of the deadliest mortal assassins alive. His mission to assassinate Empress Laseen in 'Deadhouse Gates' and his subsequent battle against the Claw in 'The Bonehunters' are legendary.",
    image: "/characters/kalam.jpg",
  },
  {
    id: "fiddler",
    name: "Fiddler (Strings)",
    race: "Human",
    rank: "Sergeant, Sapper",
    status: "alive",
    affiliations: ["Bridgeburners", "Bonehunters"],
    books: ["GOTM", "DG", "MOI", "HOC", "BH"],
    description: "An expert sapper (combat engineer) and musician for the Bridgeburners, and later the Bonehunters. He is a natural leader with uncanny luck, often finding himself at the heart of pivotal events. He is also a skilled reader of the Deck of Dragons.",
    notable: "Led the survivors of the Y'Ghatan firestorm through the city's tunnels, a feat that forged the 14th Army into the Bonehunters. A recurring 'soldier' card in the Deck of Dragons.",
    image: "/characters/fiddler.jpg",
  },
  {
    id: "hedge",
    name: "Hedge",
    race: "Human",
    rank: "Sapper, 9th Squad",
    status: "dead",
    deathBook: "MOI",
    deathLocation:
      "Coral - sacrificed himself using a massive cusser (munition) to breach the city's wall, destroying thousands of Pannion soldiers and himself in the process.",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "Fiddler's closest friend and fellow sapper. Known for his cynical and irreverent humor, but was a brave and reliable soldier.",
    notable: "His sacrifice was one of the largest single explosions seen in the series, a defining moment in the battle for Coral. Later returns as a ghost.",
  },
  {
    id: "trotts",
    name: "Trotts",
    race: "Barghast",
    rank: "Soldier, 9th Squad",
    status: "dead",
    deathBook: "MOI",
    deathLocation: "Coral - fell during the final assault on the Pannion Seer's keep, fighting alongside his squad.",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A Barghast warrior who chose to serve in the Malazan army rather than with his own people. Fierce, loyal, and a powerful combatant.",
    notable: "One of the few Barghast to serve in the Malazan military, providing immense strength to the 9th Squad.",
  },
  {
    id: "mallet",
    name: "Mallet",
    race: "Human",
    rank: "Healer, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "The squad's healer, a practitioner of the Denul warren. A quiet and compassionate man who kept the squad alive through countless battles.",
    notable: "One of the finest field healers in the Malazan military. Survived the battle of Coral and retired with other survivors to Darujhistan.",
  },
  {
    id: "picker",
    name: "Picker",
    race: "Human",
    rank: "Corporal, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A tough, veteran Bridgeburner soldier and natural leader. A survivor of the Siege of Pale, she is pragmatic and fiercely loyal to her squad.",
    notable: "Survived the battle of Coral and retired to Darujhistan with Blend, where they took over the management of K'rul's Bar.",
  },
  {
    id: "blend",
    name: "Blend",
    race: "Human",
    rank: "Soldier, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A former assassin with the seemingly supernatural ability to go unnoticed. She is quiet and unassuming, making her an excellent scout and infiltrator.",
    notable: "Her ability to 'blend' is not magical, but a combination of skill and an uncanny knack for being overlooked. Retired with Picker in Darujhistan.",
  },
  {
    id: "antsy",
    name: "Antsy",
    race: "Human",
    rank: "Sergeant, 7th Squad",
    status: "alive",
    affiliations: ["Bridgeburners", "Bonehunters"],
    books: ["GOTM", "MOI", "BH"],
    description: "A perpetually nervous but competent Bridgeburner, known for his constant complaining but unwavering reliability in a fight. Later joins the Bonehunters.",
    notable: "Despite his constant anxiety and bleak outlook, he always comes through for his squad. A survivor of both Coral and Y'Ghatan.",
  },
  {
    id: "detoran",
    name: "Detoran",
    race: "Human",
    rank: "Soldier, 9th Squad",
    status: "dead",
    deathBook: "MOI",
    deathLocation: "Coral - killed in the vicious street-to-street fighting during the final assault on the city.",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A veteran Bridgeburner soldier, known for her strength, dependability, and fierce loyalty. She was a core member of the 9th Squad.",
    notable: "A long-serving and respected member of the squad.",
  },
  {
    id: "spindle",
    name: "Spindle",
    race: "Human",
    rank: "Soldier, Mage, 9th Squad",
    status: "alive",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A Bridgeburner mage who wears his dead mother's powerfully enchanted hairshirt. He often has prophetic dreams and a morose outlook.",
    notable: "His dreams often provide cryptic but accurate predictions of future events. The hairshirt he wears is a source of both power and misery.",
  },
  {
    id: "shank",
    name: "Shank",
    race: "Human",
    rank: "Soldier",
    status: "dead",
    deathBook: "MOI",
    deathLocation: "Coral - fell during the final assault on the city.",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A veteran Bridgeburner soldier who fell during the assault on Coral.",
  },
  {
    id: "toes",
    name: "Toes",
    race: "Human",
    rank: "Soldier",
    status: "dead",
    deathBook: "MOI",
    deathLocation: "Coral - killed in the assault on the Seer's keep.",
    affiliations: ["Bridgeburners"],
    books: ["GOTM", "MOI"],
    description: "A Bridgeburner soldier, named for having lost several toes to frostbite in a past campaign. Died at Coral.",
  },
  {
    id: "tattersail",
    name: "Tattersail",
    race: "Human",
    rank: "Cadre Mage",
    status: "dead",
    deathBook: "GOTM",
    deathLocation:
      "Pale - killed during the sorcerous conflagration at the Siege of Pale, a victim of High Mage Tayschrenn's apparent betrayal.",
    affiliations: ["Bridgeburners", "Malazan Army"],
    books: ["GOTM"],
    description: "A powerful sorceress of the Thyr warren and a cadre mage attached to the 2nd Army. She was buxom, personable, and cared for the soldiers under her command, particularly the Bridgeburners. She was the lover of fellow mage Calot.",
    notable: "Her soul, along with that of the Elder sorceress Nightchill, was preserved within the body of a Rhivi girl, eventually leading to the birth of Silverfox.",
  },
  {
    id: "nightchill",
    name: "Nightchill",
    race: "Human/Elder",
    rank: "High Mage",
    status: "dead",
    deathBook: "GOTM",
    deathLocation: "Pale - killed by Tayschrenn during the assault on Moon's Spawn, betrayed alongside other mages.",
    affiliations: ["Malazan Army"],
    books: ["GOTM"],
    description: "A powerful and ancient sorceress present at the Siege of Pale. She was the lover of Bellurdan.",
    notable: "Her soul merged with Tattersail's to form part of Silverfox. Her origins are mysterious, hinted at being far older than she appeared.",
  },
  {
    id: "calot",
    name: "Calot",
    race: "Human",
    rank: "Cadre Mage",
    status: "dead",
    deathBook: "GOTM",
    deathLocation: "Pale - killed during the Siege, one of the mages sacrificed by Tayschrenn's betrayal.",
    affiliations: ["Bridgeburners", "Malazan Army"],
    books: ["GOTM"],
    description: "A young, talented mage and Tattersail's lover. He was one of the many cadre mages killed during the chaotic Siege of Pale.",
    notable: "His death was a primary motivator for Tattersail's actions following the siege.",
  },
  {
    id: "bellurdan",
    name: "Bellurdan Skull Bearer",
    race: "Thelomen Toblakai",
    rank: "High Mage",
    status: "dead",
    deathBook: "GOTM",
    deathLocation:
      "Rhivi Plains - killed in a sorcerous duel with Tattersail. He sought to claim Nightchill's power-soaked remains, but the resulting magical backlash killed them both.",
    affiliations: ["Malazan Army"],
    books: ["GOTM"],
    description: "A massive Thelomen Toblakai High Mage and one of the cadre mages at the Siege of Pale. He was the lover of Nightchill.",
    notable:
      "His duel with Tattersail was the catalyst for the creation of Silverfox, as their combined souls were drawn into the body of a dying Rhivi girl.",
  },

  // ============================================
  // MALAZAN HIGH COMMAND
  // ============================================
  {
    id: "dujek",
    name: "Dujek Onearm",
    race: "Human",
    rank: "High Fist",
    status: "dead",
    deathBook: "BH",
    deathLocation: "On the march from Y'Ghatan - died of a plague.",
    affiliations: ["Malazan Army", "Bridgeburners", "Caladan Brood's Army"],
    books: ["GOTM", "MOI", "BH"],
    description: "A legendary High Fist of the Malazan Empire, commander of the Genabackis campaign. He lost an arm in service to the Empire but remained one of its most brilliant and respected generals. He was a father figure to Whiskeyjack.",
    notable: "Declared outlaw by the Empress in order to ally with Caladan Brood against the Pannion Domin, a ruse to allow the Empire to fight a war without official sanction. His death from plague was a quiet, ignoble end for a celebrated warrior.",
  },
  {
    id: "tayschrenn",
    name: "Tayschrenn",
    race: "Human",
    rank: "High Mage",
    status: "alive",
    affiliations: ["Malazan Empire"],
    books: ["GOTM", "MOI", "BH"],
    description: "The High Mage of the Malazan Empire and personal sorcerer to Empress Laseen. He is immensely powerful and widely distrusted, particularly for his role in the devastating events at the Siege of Pale.",
    notable: "While appearing as an antagonist in GOTM, his actions are later revealed to have been a complex attempt to save the Empire and the Bridgeburners from darker forces. He is a consummate political player and one of the most powerful mages in the world.",
  },
  {
    id: "lorn",
    name: "Lorn",
    race: "Human",
    rank: "Adjunct to the Empress",
    status: "dead",
    deathBook: "GOTM",
    deathLocation: "Darujhistan - killed by the T'lan Imass Onos T'oolan while attempting to release a Jaghut Tyrant from its barrow.",
    affiliations: ["Malazan Empire"],
    books: ["GOTM"],
    description: "The primary agent of Empress Laseen during the Genabackis campaign. She was a supremely skilled and cold-blooded warrior, utterly dedicated to the Empress's will. She wielded a deadly Otataral sword that negated all magic.",
    notable: "Her mission was to sow chaos in Darujhistan to facilitate a Malazan takeover. Her death marked the failure of the Empress's initial plan for the city.",
  },
  {
    id: "laseen",
    name: "Laseen (Surly)",
    race: "Human",
    rank: "Empress",
    status: "alive",
    affiliations: ["Malazan Empire"],
    books: ["GOTM", "DG", "MOI", "HOC", "BH"],
    description: "The ruthless and calculating Empress of the Malazan Empire. She was formerly the commander of the Claw, the imperial assassins, and seized the throne after assassinating the previous emperor, Kellanved, and his companion, Dancer.",
    notable: "Her rule is marked by paranoia, pragmatism, and brutal efficiency. Many of her decisions, such as the outlawing of the Bridgeburners and the pursuit of Kalam, create major conflicts that drive the story.",
  },
  {
    id: "tavore",
    name: "Tavore Paran",
    race: "Human",
    rank: "Adjunct to the Empress",
    status: "alive",
    affiliations: ["Malazan Army", "Bonehunters"],
    books: ["DG", "HOC", "BH"],
    description: "The younger sister of Ganoes and Felisin Paran, who becomes Adjunct to the Empress and commander of the 14th Army, the 'Bonehunters'. She is known for her icy, inscrutable demeanor and unwavering resolve.",
    notable: "In one of the series' greatest tragedies, she killed her own sister, Felisin (as Sha'ik), in single combat at the climax of the Seven Cities rebellion, without ever knowing her identity. Her motivations are one of the central mysteries of the later books.",
  },
  {
    id: "nok",
    name: "Admiral Nok",
    race: "Human",
    rank: "Admiral",
    status: "alive",
    affiliations: ["Malazan Empire", "Malazan Navy"],
    books: ["DG", "HOC", "BH"],
    description: "The pragmatic and capable Admiral of the Malazan fleet in Seven Cities. He is responsible for transporting the 14th Army and dealing with the political fallout of Tavore's command.",
    notable: "Forced to make difficult decisions to support the Bonehunters, often in defiance of direct orders from the Empress. A key, if often overlooked, commander.",
  },
  {
    id: "pormqual",
    name: "High Fist Pormqual",
    race: "Human",
    rank: "High Fist",
    status: "dead",
    deathBook: "DG",
    deathLocation: "Aren - committed suicide out of shame after his cowardice led to the slaughter of Coltaine and the Wickans.",
    affiliations: ["Malazan Empire", "Malazan Army"],
    books: ["DG"],
    description: "The commander of the Aren garrison and the senior military officer in Seven Cities during the Whirlwind rebellion. He was an aristocrat known for his caution and political maneuvering.",
    notable: "His refusal to sally forth from the safety of Aren's walls to save Coltaine's exhausted Chain of Dogs is one of the most infamous acts of cowardice in the series. The refugees were saved, but Coltaine and his Wickans were annihilated as Pormqual watched.",
  },
  {
    id: "gamet",
    name: "Gamet",
    race: "Human",
    rank: "Fist",
    status: "dead",
    deathBook: "HOC",
    deathLocation:
      "March to Raraku - died of a heart attack during the grueling march through the desert, his old body finally giving out.",
    affiliations: ["Malazan Army", "Bonehunters"],
    books: ["HOC"],
    description: "An elderly Fist who was the former master-at-arms for House Paran. Out of loyalty to the family, he followed Tavore to Seven Cities to serve as her trusted advisor.",
    notable: "His death was a quiet, poignant moment of loss for Tavore amidst the brutal violence of the campaign, severing one of her last links to her past.",
  },

  // ============================================
  // CHAIN OF DOGS (Cast: Deadhouse Gates)
  // ============================================
  {
    id: "coltaine",
    name: "Coltaine",
    race: "Wickan",
    rank: "Fist",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Outside Aren - crucified by the rebel forces under Kamist Reloe, within sight of the city walls while High Fist Pormqual's army refused to intervene. His soul was claimed by crows.",
    affiliations: ["Wickan", "Malazan Army"],
    books: ["DG"],
    description: "The legendary Wickan Fist of the 7th Army. Tasked with escorting 50,000 Malazan refugees from the city of Hissar to the continental capital of Aren, a 1,500-mile journey through the heart of a rebellion. This march became known as the Chain of Dogs, one of the greatest and most tragic feats in military history.",
    notable:
      "His tactical genius and unwavering resolve kept the refugee column alive against impossible odds. His death, and the crows that claimed his soul, became a symbol of sacrifice and betrayal that haunted the Malazan Empire. He is reborn in a later book.",
  },
  {
    id: "bult",
    name: "Bult",
    race: "Wickan",
    rank: "Commander",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Outside Aren - died in the final, desperate defense alongside Coltaine, fighting to the last breath as the Wickan guard was overwhelmed.",
    affiliations: ["Wickan", "Malazan Army"],
    books: ["DG"],
    description: "Coltaine's grizzled, one-eyed second-in-command and oldest friend. A veteran of countless campaigns, he was the anchor of Coltaine's command staff.",
    notable: "Fought and died beside Coltaine to the very end, a symbol of Wickan loyalty and endurance.",
  },
  {
    id: "lull",
    name: "Lull",
    race: "Human",
    rank: "Captain",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Vathar Crossing - killed defending the refugees during the desperate river crossing, one of the bloodiest and most costly battles of the Chain.",
    affiliations: ["Malazan Army", "7th Army"],
    books: ["DG"],
    description: "A veteran Malazan captain and philosopher-soldier, one of Coltaine's most capable and trusted officers. His cynical wisdom was a key voice in the command tent.",
    notable: "His death was a heavy blow to the Chain of Dogs' command, a good man who died protecting civilians from overwhelming forces.",
  },
  {
    id: "list",
    name: "List",
    race: "Human",
    rank: "Soldier",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Chain of Dogs march - a young soldier who died during one of the many brutal engagements protecting the refugees.",
    affiliations: ["Malazan Army", "7th Army"],
    books: ["DG"],
    description: "A very young Malazan soldier who became the unofficial historian of the march, scribbling down its events. He was mentored by Duiker.",
    notable: "Represents the countless young soldiers who lost their lives during the march. His death was one of many small, personal tragedies within the larger epic.",
  },
  {
    id: "duiker",
    name: "Duiker",
    race: "Human",
    rank: "Imperial Historian",
    status: "alive",
    deathBook: "DG",
    deathLocation: "Outside Aren - crucified alongside the last of the 7th Army, but his soul was preserved in a bottle by Baruk.",
    affiliations: ["Malazan Army"],
    books: ["DG", "HOC", "BH"],
    description: "The Imperial Historian assigned to the 7th Army. He chronicled the Chain of Dogs, becoming its most important witness. He is a veteran soldier in his own right, not just a scholar.",
    notable: "Was crucified but later resurrected by the Bridgeburners in Darujhistan. His historical account is the reason the Chain of Dogs is remembered and Coltaine celebrated as a hero of the Empire.",
  },
  {
    id: "kulp",
    name: "Kulp",
    race: "Human",
    rank: "Cadre Mage",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "A nascent warren - devoured by the D'ivers Gryllen while attempting to guide Felisin, Heboric, and Baudin to safety through the warrens.",
    affiliations: ["Malazan Army"],
    books: ["DG"],
    description: "A Malazan cadre mage tasked with escorting Heboric and Felisin. He was out of his depth but faced his end with courage.",
    notable: "Sacrificed himself in a desperate and futile attempt to save his companions from the rat D'ivers, Gryllen.",
  },
  {
    id: "baudin",
    name: "Baudin",
    race: "Human",
    rank: "Talon Agent",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Otataral Island coast - torn apart by the D'ivers Gryllen while creating a diversion for Felisin and Heboric to escape.",
    affiliations: ["Talon"],
    books: ["DG"],
    description: "A brutish criminal who was secretly a Talon agent assigned by Tavore Paran to protect her sister, Felisin. He was rough and violent, but ultimately loyal to his mission.",
    notable: "Died protecting Felisin, revealing his true purpose only in his final moments. His sacrifice allowed Felisin to begin her journey to becoming Sha'ik.",
  },
  {
    id: "minala",
    name: "Minala",
    race: "Human",
    rank: "Ex-slave, bodyguard",
    status: "alive",
    affiliations: ["Shadow Agents"],
    books: ["DG", "BH"],
    description: "A former slave rescued by Kalam in the city of Hissar. She is a fierce warrior who, along with her children, travels with Kalam, Crokus, and Apsalar across Seven Cities.",
    notable: "Becomes Kalam's lover and a formidable fighter in her own right. She eventually travels to Malaz Island and is caught up in the Night of Knives.",
  },
  {
    id: "kamist-reloe",
    name: "Kamist Reloe",
    race: "Human",
    rank: "High Mage",
    status: "dead",
    deathBook: "DG",
    deathLocation: "Aren - killed by Kalam Mekhar in the Aren catacombs.",
    affiliations: ["Apocalypse Army"],
    books: ["DG"],
    description: "A High Mage of the T'lan Imass and a fanatical leader in the Whirlwind rebellion. He commanded the forces that hunted the Chain of Dogs, driven by a deep hatred for the Malazan Empire.",
    notable: "His cruelty was legendary. He was responsible for the crucifixion of Coltaine and the final slaughter of the Wickans at Aren. He was eventually hunted down and killed by Kalam.",
  },
  {
    id: "salk-elan",
    name: "Salk Elan",
    race: "Human",
    rank: "Sailor",
    status: "dead",
    deathBook: "DG",
    deathLocation: "The Silanda - killed by undead T'lan Imass after being trapped on the cursed ship.",
    affiliations: ["Traders"],
    books: ["DG"],
    description: "A sailor who, along with his captain, discovers the derelict ship 'Silanda'. The ship is filled with the bodies of T'lan Imass and is a cursed, ancient vessel.",
    notable: "His story is a small, terrifying side-plot in DG. He becomes trapped on the ship as it sails the seas, crewed by the reanimated corpses of the T'lan Imass.",
  },
  {
    id: "nil",
    name: "Nil",
    race: "Wickan",
    rank: "Warlock",
    status: "alive",
    affiliations: ["Wickan", "Malazan Army", "Bonehunters"],
    books: ["DG", "BH"],
    description: "A young Wickan warlock, twin to Nether, serving in Coltaine's 7th Army. He is one of the few warlocks to survive the Chain of Dogs.",
    notable: "His bond with the Wickan spirits and the land was a crucial asset to the Chain of Dogs. Later joins the Bonehunters with other Wickan survivors.",
  },
  {
    id: "nether",
    name: "Nether",
    race: "Wickan",
    rank: "Warlock",
    status: "alive",
    affiliations: ["Wickan", "Malazan Army", "Bonehunters"],
    books: ["DG", "BH"],
    description: "A young Wickan warlock, twin to Nil. She could commune with the spirits of the land and was a vital part of Coltaine's command.",
    notable: "Survived the Chain of Dogs alongside her brother and eventually joined Tavore's 14th Army.",
  },
  {
    id: "sormo-enath",
    name: "Sormo E'nath",
    race: "Wickan",
    rank: "Elder Warlock",
    status: "dead",
    deathBook: "DG",
    deathLocation:
      "Chain of Dogs march - sacrificed himself by channeling the spirits of the Wickan ancestors to form a defensive wall, exhausting his life force.",
    affiliations: ["Wickan", "7th Army"],
    books: ["DG"],
    description: "The most ancient and powerful of the Wickan warlocks in Coltaine's army. His wisdom and connection to the Wickan past were invaluable.",
    notable: "Gave his life in a final, massive summoning to protect the refugee column, a defining act of sacrifice during the march.",
  },

  // ============================================
  // TISTE ANDII
  // ============================================
  {
    id: "anomander-rake",
    name: "Anomander Rake",
    race: "Tiste Andii (Soletaken)",
    rank: "Son of Darkness, Knight of High House Dark, Lord of Moon's Spawn",
    status: "alive",
    affiliations: ["Tiste Andii"],
    books: ["GOTM", "MOI", "BH"],
    description: "The near-mythical leader of the Tiste Andii. He is hundreds of thousands of years old and is the wielder of the cursed sword Dragnipur, which imprisons the souls of its victims in an eternal struggle. He is the Son of Mother Dark, the Tiste Andii's long-absent goddess, and is a Soletaken who can assume the form of a massive dragon.",
    notable: "One of the most powerful and enigmatic beings in existence. His goals are often inscrutable, but generally aimed at protecting his people and opposing the Crippled God. He is a brilliant strategist, a warrior of unmatched skill, and a powerful sorcerer.",
  },
  {
    id: "korlat",
    name: "Korlat",
    race: "Tiste Andii (Soletaken)",
    rank: "Commander, Sorceress",
    status: "alive",
    affiliations: ["Tiste Andii", "Caladan Brood's Army"],
    books: ["MOI"],
    description: "A high-born Tiste Andii sorceress and one of Anomander Rake's most trusted companions. She is a Soletaken, capable of transforming into a pure-blood Eleint (dragon).",
    notable:
      "After millennia of emotional detachment, she fell in love with the mortal commander Whiskeyjack. His death at Coral devastated her, unleashing a grief-fueled rage that annihilated a significant portion of the Pannion army.",
  },
  {
    id: "orfantal",
    name: "Orfantal",
    race: "Tiste Andii (Soletaken)",
    rank: "Warrior",
    status: "alive",
    affiliations: ["Tiste Andii", "Caladan Brood's Army"],
    books: ["MOI"],
    description: "A Tiste Andii warrior and Soletaken, one of Rake's inner circle. He is Korlat's half-brother.",
    notable: "Often serves alongside Korlat and other high-ranking Andii in Rake's campaigns.",
  },
  {
    id: "spinnock-durav",
    name: "Spinnock Durav",
    race: "Tiste Andii",
    rank: "Commander",
    status: "alive",
    affiliations: ["Tiste Andii"],
    books: ["MOI", "BH"],
    description: "A world-weary and philosophical Tiste Andii warrior, renowned for his skill with a sword. He serves as a commander under Anomander Rake and is often tasked with difficult and sensitive missions.",
    notable: "A thoughtful and introspective warrior, providing a different perspective on the Andii's ancient sorrow. He is a recurring character in Rake's command.",
  },
  {
    id: "endest-silann",
    name: "Endest Silann",
    race: "Tiste Andii",
    rank: "Mage, Loremaster",
    status: "alive",
    affiliations: ["Tiste Andii"],
    books: ["MOI"],
    description: "An ancient and frail Tiste Andii mage who serves as the loremaster and caretaker of Moon's Spawn. His magic is primarily focused on sustaining the floating fortress.",
    notable: "His knowledge of Andii history is vast. He feels the weight of his people's history and the slow crumbling of their floating citadel, Moon's Spawn.",
  },
  {
    id: "andarist",
    name: "Andarist",
    race: "Tiste Andii",
    rank: "Noble",
    status: "dead",
    deathBook: "MT",
    deathLocation:
      "His island home - murdered by Tiste Edur raiders sent by the Warlock King Hannan Mosag to find a worthy soul for the cursed sword.",
    affiliations: ["Tiste Andii"],
    books: ["MT"],
    description: "A brother of Anomander Rake and Silchas Ruin. He chose a life of isolation, weary of the endless conflicts of his siblings and people. He was the original wielder of the sword 'Grief'.",
    notable:
      "His murder at the hands of Tiste Edur raiders was a key event leading to the Edur-Letherii war. The sword Grief was taken and eventually found its way to Dassem Ultor, who renamed it Vengeance.",
  },
  {
    id: "silanah",
    name: "Silanah",
    race: "Eleint (Dragon)",
    rank: "Ancient Dragon",
    status: "alive",
    affiliations: ["Tiste Andii", "Anomander Rake"],
    books: ["GOTM", "MOI", "BH"],
    description: "An ancient, pure-blood Eleint with scales of crimson and gold. She is bound by an ancient pact to serve Anomander Rake and often nests in Moon's Spawn.",
    notable: "One of the last true dragons. Her grief over Whiskeyjack's death at Coral was so profound it manifested as a river of fire, incinerating countless enemy soldiers.",
  },

  // ============================================
  // APOCALYPSE ARMY (House of Chains)
  // ============================================
  {
    id: "felisin",
    name: "Felisin Paran (Sha'ik Reborn)",
    race: "Human",
    rank: "Sha'ik Reborn, leader of the Apocalypse",
    status: "dead",
    deathBook: "HOC",
    deathLocation: "Raraku - killed by her own sister, Adjunct Tavore, in single combat. Tavore did not know her identity.",
    affiliations: ["Apocalypse Army"],
    books: ["DG", "HOC"],
    description: "The youngest of the Paran siblings. Stripped of her noble status and sent to the otataral slave mines by her own sister, Tavore. She endured immense suffering and emerged as the vessel for the goddess of the Whirlwind, becoming Sha'ik Reborn, the prophesied leader of the rebellion in Seven Cities.",
    notable: "Her story is one of the most tragic in the series. Her transformation from a spoiled noble girl to a traumatized, drug-addicted, and ultimately powerful figure culminates in a fatal confrontation with the sister who condemned her, a fact neither was aware of in the moment.",
  },
  {
    id: "loric",
    name: "L'oric",
    race: "Human/Tiste Liosan",
    rank: "High Mage",
    status: "alive",
    affiliations: ["Apocalypse Army"],
    books: ["HOC", "BH"],
    description: "A powerful mage of mixed heritage who joins Sha'ik's rebellion. He is the half-blood son of the Tiste Liosan ascendant Osserc (Osric). He acts as an observer and a moderating influence within the rebellion's chaotic leadership.",
    notable: "Ostensibly serves Sha'ik, but his true purpose is to thwart the machinations of the Crippled God, whose influence is deeply embedded in the rebellion. He is a calm, rational presence in a camp filled with madmen and fanatics.",
  },
  {
    id: "bidithal",
    name: "Bidithal",
    race: "Human",
    rank: "High Mage",
    status: "dead",
    deathBook: "HOC",
    deathLocation:
      "Sha'ik's Encampment, Raraku - brutally killed by Karsa Orlong after Karsa discovered him abusing the young girl, Felisin the Younger.",
    affiliations: ["Apocalypse Army"],
    books: ["HOC"],
    description: "A depraved and sadistic High Mage of the Rashan warren and one of the inner circle of Sha'ik's command. His cruelty and vile appetites were an open secret in the camp.",
    notable: "His well-deserved and gruesome death at the hands of Karsa Orlong was a moment of shocking justice, and one of Karsa's first acts of 'witnessing' and judging civilization's corruption.",
  },
  {
    id: "febryl",
    name: "Febryl",
    race: "Human",
    rank: "High Mage",
    status: "dead",
    deathBook: "HOC",
    deathLocation: "Raraku - killed during the chaos of the final battle against the Malazans, his elaborate schemes having come to nothing.",
    affiliations: ["Apocalypse Army"],
    books: ["HOC"],
    description: "A vain, ambitious, and scheming High Mage within Sha'ik's inner circle. He constantly plotted to usurp power for himself, viewing Sha'ik and the other leaders as stepping stones.",
    notable: "A master of treachery and poison, his intricate plots ultimately unraveled and failed, leaving him vulnerable in the rebellion's final collapse.",
  },
  {
    id: "heboric",
    name: "Heboric Light Touch",
    race: "Human",
    rank: "Defrocked Priest, Historian",
    status: "ascended",
    deathBook: "BH",
    deathLocation: "The Deadhouse, Malaz Island - became a Shield Anvil for Treach and died, but his spirit was taken by the Jade Giants.",
    affiliations: ["Apocalypse Army"],
    books: ["DG", "HOC", "BH"],
    description: "A former priest of Fener, the god of war. His hands were cut off for heresy and the stumps were tattooed with otataral, neutralizing his magic. He was sent to the slave mines with Felisin.",
    notable: "His otataral-laced 'ghost hands' paradoxically connect him to the power of the Crippled God, manifesting as glowing jade energy. His journey is one of questioning faith, and he eventually becomes a Destriant (and later Shield Anvil) for the new god of war, Treach.",
  },
  {
    id: "leoman",
    name: "Leoman of the Flails",
    race: "Human",
    rank: "Commander",
    status: "alive",
    affiliations: ["Apocalypse Army"],
    books: ["HOC", "BH"],
    description: "A brilliant tactician and warrior from the deserts of Seven Cities. He was one of Sha'ik's most capable and loyal commanders, leading the rebellion's armies with great skill.",
    notable: "Responsible for one of the Malazans' greatest defeats: the firestorm at the city of Y'Ghatan, where he lured the Bonehunters into a trap that killed thousands. He is a master of guerilla warfare.",
  },
  {
    id: "corabb",
    name: "Corabb Bhilan Thenu'alas",
    race: "Human",
    rank: "Sergeant",
    status: "alive",
    affiliations: ["Apocalypse Army", "Bonehunters"],
    books: ["HOC", "BH"],
    description: "A devout and loyal follower of Leoman of the Flails, known for his almost supernatural luck. Despite being a skilled warrior, he survives certain death through impossible coincidence time and again.",
    notable: "Believes his survival is due to his piety and Leoman's genius. After being captured by the Malazans, he joins the Bonehunters, where his absurd luck continues to baffle his new comrades.",
  },
  {
    id: "toblakai",
    name: "Toblakai",
    race: "Teblor (Toblakai)",
    rank: "Guardian",
    status: "dead",
    deathBook: "HOC",
    deathLocation: "Raraku - killed by Adjunct Tavore's forces in the final battle.",
    affiliations: ["Apocalypse Army"],
    books: ["HOC"],
    description: "A giant Teblor warrior who served as Sha'ik's personal guardian. He was a being of immense strength and simple devotion to the goddess of the Whirlwind.",
    notable: "Initially believed by some to be Karsa Orlong, he was a separate individual. His death in the final battle was a significant blow to the rebellion's inner guard.",
  },
  {
    id: "korbolo-dom",
    name: "Korbolo Dom",
    race: "Human",
    rank: "Fist",
    status: "alive",
    affiliations: ["Apocalypse Army", "Malazan Empire (renegade)"],
    books: ["DG", "HOC", "BH"],
    description: "A renegade Malazan Fist who betrayed the empire and became a key, and exceptionally brutal, leader of the Apocalypse. He is known for his extreme cruelty and ambition.",
    notable: "Alongside his D'ivers ally, Kamist Reloe, he was responsible for the worst atrocities of the rebellion. He was eventually captured by the Bonehunters.",
  },
  {
    id: "mathok",
    name: "Mathok",
    race: "Human",
    rank: "Commander",
    status: "alive",
    affiliations: ["Apocalypse Army"],
    books: ["HOC", "BH"],
    description: "A powerful desert chieftain and skilled cavalry commander who pledged his forces to Sha'ik. He remained loyal to the memory of Sha'ik even after the rebellion's defeat.",
    notable: "A more honorable leader than many in the Apocalypse, he eventually makes peace with the Malazans and aids them in later campaigns.",
  },
  {
    id: "karsa",
    name: "Karsa Orlong",
    race: "Teblor (Toblakai)",
    rank: "Warrior",
    status: "alive",
    affiliations: ["Apocalypse Army"],
    books: ["HOC", "BH"],
    description: "A colossal Teblor warrior from a remote mountain tribe who, with two companions, set out to 'destroy civilization'. After being captured and enslaved, he joins Sha'ik's rebellion, bringing his apocalyptic strength to their cause.",
    notable: "Karsa's journey is one of challenging the very concept of civilization and judging its failings. His catchphrase, 'Witness!', becomes a declaration of his purpose. He creates a massive sword from flint and uses it to kill with contempt.",
  },

  // ============================================
  // GREY SWORDS (Memories of Ice)
  // ============================================
  {
    id: "itkovian",
    name: "Itkovian",
    race: "Human",
    rank: "Shield Anvil of Fener",
    status: "dead",
    deathBook: "MOI",
    deathLocation:
      "Coral - after the battle, he took upon himself the grief and pain of the entire T'lan Imass race, freeing them from 300,000 years of sorrow. The sheer weight of this act killed him, and he ascended as the Redeemer.",
    affiliations: ["Grey Swords", "Fener"],
    books: ["MOI"],
    description: "The Shield Anvil of the Grey Swords. As Shield Anvil, he is the vessel for the suffering of others, tasked with absorbing their pain so they can continue to fight. He is a man of boundless compassion, even for his enemies.",
    notable:
      "His final act of taking on the millennia-long, stagnant grief of the T'lan Imass is one of the most profound moments of compassion in the series. He did not die, but became something more: The Redeemer, a new god of compassion for a godless age.",
  },
  {
    id: "brukhalian",
    name: "Brukhalian",
    race: "Human",
    rank: "Mortal Sword of Fener",
    status: "dead",
    deathBook: "MOI",
    deathLocation:
      "Capustan - fell while defending the city's walls against the overwhelming hordes of the Pannion Domin. He was killed by a K'ell Hunter.",
    affiliations: ["Grey Swords", "Fener"],
    books: ["MOI"],
    description: "The Mortal Sword of the war god Fener and the commander of the Grey Swords. He was an inspiring and unwavering leader, sworn to defend the city of Capustan to the last.",
    notable: "His valiant last stand at Capustan bought precious time for the allied forces to rally. His death was a devastating blow to the morale of the city's defenders.",
  },
  {
    id: "karnadas",
    name: "Karnadas",
    race: "Human",
    rank: "Destriant of Fener",
    status: "dead",
    deathBook: "MOI",
    deathLocation:
      "Capustan - died alongside Brukhalian during the siege, his healing powers finally exhausted after tending to thousands of wounded.",
    affiliations: ["Grey Swords", "Fener"],
    books: ["MOI"],
    description: "The Destriant, or high priest and healer, of the Grey Swords. He wielded the healing power of Fener, but the unprecedented scale of death and injury at Capustan overwhelmed him.",
    notable: "He gave every last ounce of his life force to keep the defenders of Capustan alive. His death symbolized the exhaustion of the old gods' power in the face of the Pannion threat.",
  },
  {
    id: "gruntle",
    name: "Gruntle",
    race: "Human",
    rank: "Caravan Guard, later Mortal Sword of Treach",
    status: "alive",
    affiliations: ["Caladan Brood's Army", "Treach"],
    books: ["MOI", "BH"],
    description: "A cynical and hard-bitten caravan guard who gets caught up in the Siege of Capustan. During the battle, he is chosen by Treach, the Tiger of Summer, to be his new Mortal Sword, replacing the fallen Fener as the god of war's chosen warrior.",
    notable: "His transformation from an ordinary, world-weary brawler into the vessel of a war god is sudden and violent. He struggles with his new role and the animalistic rage that comes with it.",
  },
  {
    id: "stonny",
    name: "Stonny Menackis",
    race: "Human",
    rank: "Mercenary",
    status: "alive",
    affiliations: ["Grey Swords", "Caladan Brood's Army"],
    books: ["MOI"],
    description: "A tough, pragmatic, and foul-mouthed female mercenary who was hired into the Grey Swords just before the Siege of Capustan. She is a survivor, hardened by a difficult life.",
    notable: "One of the few survivors of the initial Grey Swords garrison. Her brutal experiences during the siege and her subsequent service in Onearm's Host left her even more cynical and battle-hardened.",
  },
  {
    id: "pannion-seer",
    name: "Pannion Seer",
    race: "Jaghut (Transformed)",
    rank: "Leader of the Pannion Domin",
    status: "dead",
    deathBook: "MOI",
    deathLocation: "Coral - killed by Anomander Rake's forces during the final assault.",
    affiliations: ["Pannion Domin", "Crippled God"],
    books: ["MOI"],
    description: "The hideously mutilated and insane ruler of the Pannion Domin. He was a Jaghut who was tortured and broken by his own people, then manipulated by the Crippled God into believing that all life was pain and the only salvation was to be consumed and remade by him.",
    notable: "A tragic villain. His empire was built on cannibalism and terror, but he was himself a victim. His 'children' were the K'ell Hunters, magically created super-soldiers. He was ultimately a puppet of the Crippled God.",
  },

  // ============================================
  // TISTE EDUR (Midnight Tides)
  // ============================================
  {
    id: "rhulad",
    name: "Rhulad Sengar",
    race: "Tiste Edur",
    rank: "Emperor of the Edur",
    status: "undead",
    affiliations: ["Tiste Edur", "Crippled God"],
    books: ["MT", "BH"],
    description: "The youngest of the four Sengar brothers. Ambitious and insecure, he is goaded into challenging a Letherii champion for a cursed, empty sword. He is killed, but the Crippled God intervenes, fusing the sword to his arm and granting him unnatural life. He becomes the undying emperor, leading his people in a brutal war of conquest.",
    notable: "Each time Rhulad is killed, he is resurrected in excruciating pain, driving him further into madness and paranoia. He is both a tragic victim and a terrifying villain, a puppet whose strings are held by the Crippled God.",
  },
  {
    id: "fear-sengar",
    name: "Fear Sengar",
    race: "Tiste Edur",
    rank: "Warchief",
    status: "alive",
    affiliations: ["Tiste Edur"],
    books: ["MT", "BH"],
    description: "The eldest Sengar brother and the finest warrior among the Tiste Edur. He is torn between his duty to his brother, the Emperor, and his growing horror at the corruption and atrocities committed by the Edur under the sword's influence.",
    notable: "His love for his betrothed, Mayen, and his desire to save his brother Rhulad from his curse place him in an impossible position. He is a character of deep honor and profound sorrow.",
  },
  {
    id: "trull-sengar",
    name: "Trull Sengar",
    race: "Tiste Edur",
    rank: "Warrior, later Shorn",
    status: "alive",
    affiliations: ["Tiste Edur", "Apocalypse Army"],
    books: ["MT", "HOC", "BH"],
    description: "The second Sengar brother, known for his introspective and compassionate nature. He questions the path of conquest his people have taken and speaks out against their atrocities.",
    notable: "For speaking the truth about the war and the dishonor of his people, he is made 'Shorn'—an outcast stripped of his name and left to die. He survives and his journey as an outcast, particularly his friendship with Onrack, becomes a central storyline.",
  },
  {
    id: "binadas-sengar",
    name: "Binadas Sengar",
    race: "Tiste Edur",
    rank: "Warrior",
    status: "dead",
    deathBook: "MT",
    deathLocation: "Northern Wastes - killed by Jheck warriors while on a diplomatic mission.",
    affiliations: ["Tiste Edur"],
    books: ["MT"],
    description: "The third Sengar brother. A skilled warrior and sorcerer who was sent as an envoy to the Jheck. He died early in the events of Midnight Tides.",
    notable: "His death was one of the first signs of the escalating violence and breakdown of old traditions that preceded the Letherii invasion.",
  },
  {
    id: "uruth",
    name: "Uruth",
    race: "Tiste Edur",
    rank: "Matriarch",
    status: "alive",
    affiliations: ["Tiste Edur"],
    books: ["MT"],
    description: "The matriarch of the Sengar clan and mother to the four Sengar brothers. She is a keeper of the old ways and despairs at the changes brought by Hannan Mosag and the cursed sword.",
    notable: "Represents the traditional, pre-conquest culture of the Tiste Edur. Her grief over the loss and corruption of her sons is a key emotional anchor in the Edur storyline.",
  },
  {
    id: "hannan-mosag",
    name: "Hannan Mosag",
    race: "Tiste Edur",
    rank: "Warlock King",
    status: "alive",
    affiliations: ["Tiste Edur", "Crippled God"],
    books: ["MT", "BH"],
    description: "The Warlock King who united the Tiste Edur tribes and set in motion the plan to find a worthy champion for the Crippled God's sword. When his chosen champion fails, Rhulad claims the sword, and Hannan Mosag is usurped and crippled for his failure.",
    notable: "A master of Kurald Emurlahn, the Edur warren. He is a cunning and ambitious sorcerer who loses control of his own plans and is forced to plot from the shadows.",
  },
  {
    id: "mayen",
    name: "Mayen",
    race: "Tiste Edur",
    rank: "Noble",
    status: "alive",
    affiliations: ["Tiste Edur"],
    books: ["MT"],
    description: "A high-born woman betrothed to Fear Sengar. After Rhulad becomes emperor, he claims her as his empress, subjecting her to his increasingly paranoid and violent whims.",
    notable: "Her tragic story, trapped in a loveless and abusive marriage to a mad emperor, serves as a microcosm for the suffering of the Edur people under Rhulad's reign.",
  },

  // ============================================
  // LETHERII (Midnight Tides)
  // ============================================
  {
    id: "tehol",
    name: "Tehol Beddict",
    race: "Human (Letherii)",
    rank: "Genius/Beggar",
    status: "alive",
    affiliations: ["Letherii"],
    books: ["MT", "BH"],
    description: "A brilliant, eccentric, and seemingly mad economist who, from a rooftop shanty in the poorest district of Letheras, systematically destroyed the Letherii economy in protest of its inherent inequality. He is the middle Beddict brother.",
    notable: "His comedic and elaborate schemes, carried out with his manservant Bugg, serve as a satirical critique of capitalism. He is one of the most intelligent and underestimated characters in the series.",
  },
  {
    id: "bugg",
    name: "Bugg",
    race: "Elder God",
    rank: "Manservant / Elder God of the Seas",
    status: "ascended",
    affiliations: ["Letherii", "Elder Gods"],
    books: ["MT", "BH"],
    description: "Tehol Beddict's long-suffering and multi-talented manservant. He is secretly Mael, the Elder God of the Seas, hiding in plain sight and seemingly content to assist Tehol in his bizarre schemes.",
    notable: "The reveal of his true identity is a major turning point. His partnership with Tehol is one of the most beloved comedic duos in the series, a powerful being amusing himself by serving a mortal who he genuinely respects.",
  },
  {
    id: "brys-beddict",
    name: "Brys Beddict",
    race: "Human (Letherii)",
    rank: "King's Champion",
    status: "undead",
    deathBook: "MT",
    deathLocation: "Letheras - sacrificed his life in a ritual to the sea god to save his kingdom, but his body was preserved.",
    affiliations: ["Letherii"],
    books: ["MT", "BH"],
    description: "The youngest Beddict brother and the finest swordsman in the Letherii Empire. As King's Champion, he is sworn to uphold the honor of the king and the nation. He is thoughtful, honorable, and deeply troubled by his kingdom's corruption.",
    notable: "In a duel against the undying Rhulad, Brys was poisoned yet still managed to 'kill' the Emperor three times before succumbing. He was later resurrected as the undead champion of the redeemed Letherii nation.",
  },
  {
    id: "hull-beddict",
    name: "Hull Beddict",
    race: "Human (Letherii)",
    rank: "Former Sentinel",
    status: "dead",
    deathBook: "MT",
    deathLocation: "Letheras - killed during the Edur conquest, having realized the full horror of his betrayal.",
    affiliations: ["Letherii", "Tiste Edur"],
    books: ["MT"],
    description: "The eldest Beddict brother. Wracked with guilt over Lether's historical crimes against its frontier tribes, he becomes a traitor, providing vital information to the Tiste Edur to facilitate their invasion.",
    notable: "His arc is a tragic exploration of misplaced idealism. He believed the Edur would be better rulers, but came to see that he had only replaced one form of tyranny with another, more brutal one.",
  },
  {
    id: "seren-pedac",
    name: "Seren Pedac",
    race: "Human (Letherii)",
    rank: "Acquitor",
    status: "alive",
    affiliations: ["Letherii"],
    books: ["MT", "BH"],
    description: "A royal Acquitor (trade envoy) who is assigned to guide the Tiste Edur delegation. She is an intelligent and observant woman who becomes a witness to the unfolding tragedy from both the Letherii and Edur perspectives.",
    notable: "Her journey through the Edur camps and her interactions with Trull Sengar give her a unique insight into the motivations and sorrows of both sides of the conflict.",
  },
  {
    id: "udinaas",
    name: "Udinaas",
    race: "Human (Letherii)",
    rank: "Slave",
    status: "alive",
    affiliations: ["Letherii", "Tiste Edur"],
    books: ["MT", "BH"],
    description: "A philosophical and cynical Letherii slave belonging to the Sengar family. When Rhulad is resurrected, Udinaas is bound to him as his personal slave, forced to witness the emperor's madness and suffering up close.",
    notable: "He is possessed by the wraith of a Wyval, granting him unwanted power and visions. His relationship with Silchas Ruin, who is freed from an Azath, is a key part of his later story.",
  },
  {
    id: "shurq-elalle",
    name: "Shurq Elalle",
    race: "Human (Undead)",
    rank: "Thief/Pirate Captain",
    status: "undead",
    affiliations: ["Letherii"],
    books: ["MT", "BH"],
    description: "A beautiful, notoriously unlucky thief who is drowned as part of one of Tehol's schemes. She is then resurrected by Bugg, becoming an undead pirate with a cheerful, if somewhat macabre, disposition.",
    notable: "Being dead seems to have improved her luck. She becomes a surprisingly effective pirate captain and an ally of Tehol and Brys.",
  },
  {
    id: "withal",
    name: "Withal",
    race: "Meckros",
    rank: "Smith",
    status: "alive",
    affiliations: ["Tiste Edur (captive)"],
    books: ["MT"],
    description: "A Meckros (a non-human, city-building race) smith who is captured by the Tiste Edur and forced to repair Rhulad's cursed sword every time it is broken. He is a captive witness to the horrors of Rhulad's court.",
    notable: "His attempts to sabotage the sword or escape his servitude are a recurring subplot. He eventually finds an unlikely ally in the rediscovered Azath house.",
  },
  {
    id: "gerun-eberict",
    name: "Gerun Eberict",
    race: "Human (Letherii)",
    rank: "Courtier, Blade-master",
    status: "dead",
    deathBook: "MT",
    deathLocation: "Letheras - killed by Brys Beddict in a formal challenge.",
    affiliations: ["Letherii"],
    books: ["MT"],
    description: "An ambitious and corrupt courtier in the Letherii court, and a master swordsman. He was a rival to Brys Beddict and constantly plotted to increase his own power and influence.",
    notable: "He orchestrated the poisoning of Brys Beddict before their duel, an act of dishonor that Brys still managed to overcome before succumbing to the poison.",
  },
  {
    id: "buruk-the-pale",
    name: "Buruk the Pale",
    race: "Human (Letherii)",
    rank: "Merchant",
    status: "dead",
    deathBook: "MT",
    deathLocation: "Trate - killed during the Edur assault on the city, his mission to spy on the Edur having failed to save Lether.",
    affiliations: ["Letherii"],
    books: ["MT"],
    description: "A wealthy Letherii merchant who traveled with the Tiste Edur delegation as a spy for the Letherii crown, reporting on their movements and intentions.",
    notable: "Despite his efforts, his intelligence could not prevent the swift and brutal conquest of his homeland by the Edur.",
  },
  {
    id: "diskanar",
    name: "King Diskanar",
    race: "Human (Letherii)",
    rank: "King",
    status: "dead",
    deathBook: "MT",
    deathLocation: "Letheras - died during the fall of the capital, his kingdom and its economy collapsing around him.",
    affiliations: ["Letherii"],
    books: ["MT"],
    description: "The King of Lether. He was a ruler presiding over a nation defined by insatiable greed and economic disparity, ultimately powerless to prevent its conquest by the more vital Tiste Edur.",
    notable: "His reign represents the decay and corruption at the heart of the Letherii Empire, which Tehol Beddict so successfully exploited.",
  },

  // ============================================
  // ASCENDANTS & ELDER GODS
  // ============================================
  {
    id: "shadowthrone",
    name: "Shadowthrone (Ammanas)",
    race: "Human (Ascended)",
    rank: "God of Shadow, King of High House Shadow",
    status: "ascended",
    affiliations: ["Shadow Agents"],
    books: ["GOTM", "DG", "HOC", "BH"],
    description: "The former Emperor of the Malazan Empire, known as Kellanved. After faking his death and being assassinated by Laseen, he and his companion Dancer ascended to the Throne of Shadow. He is a master strategist and a paranoid, dangerously unpredictable god.",
    notable: "His schemes are labyrinthine and often appear mad, but there is always a hidden purpose. His relationship with Cotillion is the core of the House of Shadow.",
  },
  {
    id: "cotillion",
    name: "Cotillion (The Rope)",
    race: "Human (Ascended)",
    rank: "Patron of Assassins",
    status: "ascended",
    affiliations: ["Shadow Agents"],
    books: ["GOTM", "DG", "HOC", "BH"],
    description: "Formerly known as Dancer, the greatest assassin in the history of the Malazan Empire and companion to Kellanved. He ascended with Kellanved to become the Patron of Assassins. He is far more compassionate and empathetic than his partner, often showing regret and a desire to help mortals caught in their schemes.",
    notable: "He possessed the fisher-girl Apsalar (creating 'Sorry') in GOTM to act as his agent. This act of possession and its aftermath is a source of guilt for him.",
  },
  {
    id: "krul",
    name: "K'rul",
    race: "Elder God",
    rank: "Elder God, Maker of Paths",
    status: "ascended",
    affiliations: ["Elder Gods"],
    books: ["GOTM", "MOI", "BH"],
    description: "An ancient Elder God who, in the distant past, allowed his own blood to be shed to create the warrens, the paths of magic used by mortals and gods alike. This act left him greatly weakened, but his knowledge and the lingering power of his blood are immense.",
    notable: "His temple in Darujhistan is a place of sanctuary. He is a benevolent, if weary, force in the world, occasionally aiding mortals like Kruppe and Harllo.",
  },
  {
    id: "hood",
    name: "Hood",
    race: "Unknown",
    rank: "God of Death, King of High House Death",
    status: "ascended",
    affiliations: ["Ascendants"],
    books: ["GOTM", "MOI", "HOC", "BH"],
    description: "The ruler of Hood's Realm and the Lord of the Dead. He is a grim, ancient, and powerful being who commands the souls of the dead. His motives are often inscrutable, and he is not above bargaining with mortals and other gods.",
    notable: "While he is the Lord of Death, he is not portrayed as evil, but rather as a fundamental force of the universe. His true nature and origins are one of the great mysteries of the series. He is often seen personally collecting the souls of significant individuals.",
  },
  {
    id: "oponn",
    name: "Oponn (The Twins)",
    race: "Ascendant",
    rank: "Gods of Luck",
    status: "ascended",
    affiliations: ["Ascendants"],
    books: ["GOTM"],
    description: "The twin gods of chance—the male, the Pusher, and the female, the Puller. They are fickle, playful, and dangerously unpredictable, meddling in mortal affairs for their own amusement.",
    notable: "They chose Ganoes Paran as their mortal tool in GOTM, setting many events in motion. Their favor is a double-edged sword, bringing both good fortune and ruin.",
  },
  {
    id: "fener",
    name: "Fener",
    race: "Ascendant",
    rank: "God of War (former)",
    status: "alive (mortal)",
    affiliations: ["Ascendants"],
    books: ["DG", "MOI", "HOC"],
    description: "The Boar of Summer, the Malazan god of war worshipped by the Grey Swords. He is a god of strength, ferocity, and endurance.",
    notable: "During the events of the Chain of Dogs, Heboric's otataral-tainted hands accidentally touched Fener's manifestation, pulling the god from his realm and forcing him into a mortal, vulnerable form on earth. He is now hunted by his own replacement, Treach.",
  },
  {
    id: "treach",
    name: "Treach (Trake)",
    race: "D'ivers (Soletaken)",
    rank: "God of War (new)",
    status: "ascended",
    affiliations: ["Ascendants"],
    books: ["MOI", "HOC"],
    description: "The Tiger of Summer, a Soletaken D'ivers who ascended to the Throne of War after Fener was pulled down. He is a god of swift, brutal violence.",
    notable: "His worshippers are fierce and bloodthirsty. He chose Gruntle as his Mortal Sword during the Siege of Capustan.",
  },
  {
    id: "togg-fanderay",
    name: "Togg and Fanderay",
    race: "Elder God (Beast)",
    rank: "Wolves of Winter",
    status: "ascended",
    affiliations: ["Ascendants", "Beast Gods"],
    books: ["MOI"],
    description: "The Elder Gods of the Beast Hold, male (Togg) and female (Fanderay), the Wolves of Winter. They were separated for millennia but were reunited during the Pannion War.",
    notable: "They chose the one-eyed Malazan scout Toc the Younger as their Mortal Sword. Their reunion was a major event in the divine world, shaking the balance of power.",
  },
  {
    id: "burn",
    name: "Burn",
    race: "Elder God",
    rank: "Sleeping Goddess",
    status: "alive",
    affiliations: ["Elder Gods"],
    books: ["MOI"],
    description: "The Sleeping Goddess who is the earth itself. Her dreams shape reality, and her blood is a source of immense, raw power. She has been asleep for eons.",
    notable: "The Crippled God's poison seeps into her, causing a sickness that threatens to wake her. If she wakes, the destruction would be catastrophic. The Grey Swords' original mission was to find a cure for her sickness.",
  },
  {
    id: "the-errant",
    name: "The Errant (Errastas)",
    race: "Elder God",
    rank: "Master of the Holds",
    status: "alive",
    affiliations: ["Elder Gods", "Letherii"],
    books: ["MT", "BH"],
    description: "An Elder God of chance and fate, worshipped in Lether. He is the master of the Holds, the ancient precursor to the Deck of Dragons. He is arrogant, petty, and constantly meddling in the affairs of mortals and other gods.",
    notable: "He sees himself as the 'knower of all futures' but is often blind to the true consequences of his actions. His manipulations have a profound effect on the events in Lether.",
  },
  {
    id: "osric",
    name: "Osric (Osserc)",
    race: "Tiste Liosan",
    rank: "Ascendant, Lord of the Sky",
    status: "ascended",
    affiliations: ["Tiste Liosan", "Ascendants"],
    books: ["HOC", "MT", "BH"],
    description: "An ancient and immensely powerful Tiste Liosan ascendant. He is the father of L'oric and is known for his arrogance, vanity, and incredible power. He is often at odds with Anomander Rake.",
    notable: "His true motives are often hidden behind a veneer of self-interest. He is a major power player in the pantheon of ascendants.",
  },
  {
    id: "silchas-ruin",
    name: "Silchas Ruin",
    race: "Tiste Andii / Eleint",
    rank: "Ascendant",
    status: "alive",
    affiliations: ["Tiste Andii", "Ascendants"],
    books: ["MT", "BH"],
    description: "The brother of Anomander Rake and Andarist. An albino Tiste Andii and a pure-blood Eleint, he was betrayed by the Tiste Edur leader Scabandari Bloodeye and imprisoned in an Azath house for millennia.",
    notable: "Known as the White Crow. He is freed from the Azath during the events of Midnight Tides. He is bitter, vengeful, and immensely powerful, seeking retribution for his long imprisonment.",
  },
  {
    id: "scabandari",
    name: "Scabandari Bloodeye",
    race: "Tiste Edur / Eleint",
    rank: "Ascendant",
    status: "dead",
    deathBook: "MT",
    deathLocation:
      "Lether - his soul, trapped in a Finnest, was destroyed by Silchas Ruin. His physical form died millennia ago when he betrayed Silchas Ruin.",
    affiliations: ["Tiste Edur"],
    books: ["MT"],
    description:
      "Known to the Edur as Father Shadow. An ancient Edur leader who, along with Silchas Ruin, conquered the continent that would become Lether. He betrayed Silchas, leading to a war between their peoples and Scabandari's own death.",
    notable: "His soul was trapped in a 'Finnest' (a magical vessel), which the Edur worshipped. His spirit's influence was a corrupting force on his people.",
  },
  {
    id: "gothos",
    name: "Gothos",
    race: "Jaghut",
    rank: "Ascendant, Author of the Folly",
    status: "alive",
    affiliations: ["Jaghut"],
    books: ["MOI", "MT"],
    description: "An ancient Jaghut, author of a nihilistic text known as 'Gothos's Folly'. He is the father of Icarium and lives in self-imposed isolation, having frozen himself and his writings in ice.",
    notable: "His use of the warren of Omtose Phellack (the Warren of Ice) was so powerful it triggered an ice age. His son, Icarium, is one of the most dangerous beings in existence, and Gothos carries immense guilt over his son's condition.",
  },
  {
    id: "icarium",
    name: "Icarium",
    race: "Jaghut/Jhag",
    rank: "Wanderer, Maker of the Azath",
    status: "alive",
    affiliations: ["Wanderers"],
    books: ["DG", "HOC", "BH"],
    description: "Half-Jaghut with no memory of his past. He wanders the world with his companion, Mappo, seeking to rediscover his history. He is a genius inventor, but his gentle nature hides a terrifying, world-shattering rage.",
    notable: "When he rages, he loses all control and memory, and his power is so immense it can destroy civilizations and alter geography. The Azath Houses were created by him in a past age. His rage terrifies even gods.",
  },
  {
    id: "mappo",
    name: "Mappo Runt",
    race: "Trell",
    rank: "Guardian",
    status: "alive",
    affiliations: ["Wanderers"],
    books: ["DG", "HOC", "BH"],
    description: "A Trell warrior bound by his people to be Icarium's guardian. His secret mission is to prevent Icarium's rage from being unleashed, a task he has carried out for centuries.",
    notable: "His friendship with Icarium is genuine and deep, which is a source of constant conflict with his sworn duty. He carries the weight of his task and the secrets he must keep from his only friend.",
  },
  {
    id: "olar-ethil",
    name: "Olar Ethil",
    race: "Unknown (First Bonecaster)",
    rank: "First Bonecaster of the T'lan Imass",
    status: "undead",
    affiliations: ["T'lan Imass"],
    books: ["HOC", "BH"],
    description: "The first and most powerful Bonecaster of the T'lan Imass. She was instrumental in the Ritual of Tellann that made her people undead. She is ancient beyond measure, cruel, and her schemes span millennia.",
    notable: "Her true form and motives are a deep mystery. She appears in many forms and is as manipulative and dangerous as any god. She has a complex and often antagonistic relationship with the other First Beings.",
  },
  {
    id: "menandore",
    name: "Menandore",
    race: "Tiste/Eleint",
    rank: "Soletaken",
    status: "dead",
    deathBook: "BH",
    deathLocation: "The Refugium - killed by her sister Sukul Ankhadu in a power struggle.",
    affiliations: ["Tiste", "Dragons"],
    books: ["MT", "BH"],
    description: "One of three powerful Soletaken dragon sisters, daughters of the Elder God Draconus. She, along with her sisters Sheltatha Lore and Sukul Ankhadu, seeks power and vengeance for past wrongs.",
    notable: "The three sisters are often at odds and their alliance is fraught with betrayal. They seek to claim the Throne of Shadow from Shadowthrone.",
  },
  {
    id: "sheltatha-lore",
    name: "Sheltatha Lore",
    race: "Tiste/Eleint",
    rank: "Soletaken",
    status: "dead",
    deathBook: "BH",
    deathLocation: "The Refugium - killed by her sister Sukul Ankhadu.",
    affiliations: ["Tiste", "Dragons"],
    books: ["BH"],
    description: "One of the three powerful Soletaken dragon sisters, along with Menandore and Sukul Ankhadu. She is ambitious and treacherous, even against her own kin.",
    notable: "The sisters' infighting is their ultimate downfall. Sheltatha Lore is a Tiste Andii.",
  },
  {
    id: "sukul-ankhadu",
    name: "Sukul Ankhadu",
    race: "Tiste/Eleint",
    rank: "Soletaken",
    status: "dead",
    deathBook: "BH",
    deathLocation: "The Refugium - killed by Quick Ben after she had killed her sisters.",
    affiliations: ["Tiste", "Dragons"],
    books: ["BH"],
    description: "The third of the three Soletaken dragon sisters. She is arguably the most ruthless and powerful of the three.",
    notable: "In a bid for ultimate power, she kills both of her sisters, only to be outmaneuvered and killed by Quick Ben and his companions shortly after.",
  },
  {
    id: "draconus",
    name: "Draconus",
    race: "Elder God",
    rank: "Suzerain of Night",
    status: "imprisoned",
    affiliations: ["Elder Gods"],
    books: ["MOI", "BH"],
    description: "An ancient and powerful Elder God, the Suzerain of Night. He is the creator of the cursed sword Dragnipur and father to Menandore, Sheltatha Lore, and Sukul Ankhadu.",
    notable: "He was betrayed by his lover, Nightchill, and was among the first to be imprisoned within his own creation, Dragnipur. His influence is felt throughout the series, even from within the sword.",
  },
  {
    id: "sister-of-cold-nights",
    name: "Sister of Cold Nights",
    race: "Elder God",
    rank: "Goddess of Night",
    status: "imprisoned",
    affiliations: ["Elder Gods"],
    books: ["MOI"],
    description: "An Elder Goddess of the night. She was the original ruler of the warren of Kurald Galain before it was claimed by Mother Dark and the Tiste Andii.",
    notable: "She allied with Kallor in his ancient war against the Elder Gods and was imprisoned by Kallor's curse in a barrow outside the city of Coral. She is freed by the Grey Swords during the events of MOI.",
  },
  {
    id: "dassem-ultor",
    name: "Dassem Ultor (Traveler)",
    race: "Human",
    rank: "First Sword of the Malazan Empire, Mortal Sword of Hood",
    status: "alive",
    affiliations: ["Malazan Army (former)", "Hood"],
    books: ["MOI", "BH"],
    description: "Considered the greatest swordsman the world has ever known. He was the founder of the Malazan army's elite fighting force and was the first to bear the title 'First Sword'. He was also the Mortal Sword of Hood, the god of death.",
    notable: "He renounced his allegiance to Hood after the god allowed his daughter to die. He now wanders the world as 'Traveler', driven by an all-consuming desire for vengeance against Hood. He wields the sword Vengeance, formerly Andarist's sword, Grief.",
  },

    // ============================================

    // SHADOW AGENTS

    // ============================================

    {

      id: "apsalar",

      name: "Apsalar",

      race: "Human (Itko Kanian)",

      rank: "Assassin",

      status: "alive",

      affiliations: ["Shadow Agents"],

      books: ["GOTM", "DG", "HOC", "BH"],

      description: "A young fisher-girl from Itko Kan. In GOTM, she was possessed by Cotillion and became the assassin 'Sorry'. After being freed, she retains the muscle memory and skills of a master assassin. She is quiet, deadly, and haunted by the actions she took while possessed.",

      notable: "Her journey is one of rediscovering herself and dealing with the trauma of her past. She is in love with Cutter (Crokus) but struggles with the darkness inside her. She becomes a formal agent of Cotillion, working with him out of a sense of obligation and a need for purpose.",

    },

    {

      id: "cutter",

      name: "Cutter (Crokus Younghand)",

      race: "Human (Darujhistan)",

      rank: "Thief, later Assassin",

      status: "alive",

      affiliations: ["Shadow Agents", "Darujhistan"],

      books: ["GOTM", "DG", "HOC", "BH"],

      description: "A young, idealistic thief from the city of Darujhistan. He falls in love with Apsalar and abandons his home and his life to follow her, renaming himself 'Cutter' to reflect his new, more dangerous path. He is brave but often out of his depth among assassins and gods.",

      notable: "His transformation from the charming rogue Crokus to the grim-faced Cutter is a central part of his character arc. He serves Cotillion reluctantly, his primary motivation being the protection of Apsalar.",

    },

    {

      id: "iskaral-pust",

      name: "Iskaral Pust",

      race: "Human",

      rank: "High Priest of Shadow",

      status: "alive",

      affiliations: ["Shadow Agents"],

      books: ["DG", "HOC", "BH"],

      description: "The seemingly mad High Priest of Shadowthrone, residing in the Temple of Shadow in the Holy Desert Raraku. He speaks his thoughts aloud, including his schemes, and is often accompanied by his mule and a swarm of locusts.",

      notable: "Despite his apparent insanity, he is a genuinely powerful and cunning sorcerer. His 'marriage' to Mogora, a D'ivers, is a source of constant, violent bickering. He is utterly devoted to Shadowthrone.",

    },

    {

      id: "mogora",

      name: "Mogora",

      race: "D'ivers",

      rank: "Priestess",

      status: "alive",

      affiliations: ["Shadow Agents"],

      books: ["DG", "HOC", "BH"],

      description: "Iskaral Pust's wife, a D'ivers who can transform into a swarm of spiders. She is as mad and dangerous as her husband, and their relationship is a chaotic and violent one.",

      notable: "Their constant bickering and attempts to kill each other hide a strange form of devotion and a shared service to the House of Shadow.",

    },

  

    // ============================================

    // T'LAN IMASS

    // ============================================

    {

      id: "tool",

      name: "Tool (Onos T'oolan)",

      race: "T'lan Imass",

      rank: "First Sword",

      status: "alive (mortal)",

      affiliations: ["T'lan Imass (former)"],

      books: ["GOTM", "MOI", "HOC"],

      description: "The First Sword of the T'lan Imass. After 300,000 years of undeath, he is weary and questioning the purpose of his people's eternal war against the Jaghut. He befriends the Malazans, particularly Whiskeyjack and Toc the Younger.",

      notable: "In MOI, he renounces the Ritual of Tellann, severing his link to his people and becoming mortal again. His journey of rediscovering life—taste, smell, pain, and joy—is a poignant subplot.",

    },

    {

      id: "onrack",

      name: "Onrack the Broken",

      race: "T'lan Imass",

      rank: "Warrior",

      status: "undead",

      affiliations: ["T'lan Imass"],

      books: ["HOC", "BH"],

      description: "A T'lan Imass warrior whose body is damaged, preventing him from turning to dust and traveling the warrens like his kin. He is considered 'broken' by his people because he has begun to feel again, to remember what it was to be mortal.",

      notable: "His unlikely friendship with the outcast Tiste Edur, Trull Sengar, is a central theme of their shared storyline. Together, they explore the nature of their respective people's tragedies.",

    },

    {

      id: "lanas-tog",

      name: "Lanas Tog",

      race: "T'lan Imass",

      rank: "Clan Leader",

      status: "undead",

      affiliations: ["T'lan Imass"],

      books: ["MOI"],

      description: "A T'lan Imass leader awakened during the Pannion War. She is fiercely devoted to the hunt for the Jaghut and initially clashes with the Malazan alliance's broader goals.",

      notable: "Her clan is the one that Itkovian ultimately gives his gift of redemption to, taking on their 300,

  000 years of grief and freeing them from their sorrow.",

    },

    {

      id: "monok-ochem",

      name: "Monok Ochem",

      race: "T'lan Imass",

      rank: "Bonecaster",

      status: "undead",

      affiliations: ["T'lan Imass"],

      books: ["HOC", "BH"],

      description: "A Bonecaster of the Logros T'lan Imass, one of the last remaining clans. He is a keeper of the ancient rituals and lore of his people.",

    },

    {

      id: "ibra-gholan",

      name: "Ibra Gholan",

      race: "T'lan Imass",

      rank: "Warrior",

      status: "undead",

      affiliations: ["T'lan Imass"],

      books: ["HOC", "BH"],

      description: "A T'lan Imass warrior who travels with Monok Ochem's Logros clan.",

    },

  

    // ============================================

    // SEGULEH

    // ============================================

    {

      id: "mok",

      name: "Mok",

      race: "Seguleh",

      rank: "Third",

      status: "alive",

      affiliations: ["Seguleh", "Lady Envy"],

      books: ["MOI"],

      description: "The third-ranked swordsman of the Seguleh people, a society based on martial prowess. He is silent and deadly, communicating only through combat.",

      notable: "As the Third, there are only two individuals in his entire society better with a blade. His journey with Lady Envy's party tests his abilities against the wider world.",

    },

    {

      id: "thurule",

      name: "Thurule",

      race: "Seguleh",

      rank: "Warrior",

      status: "dead",

      deathBook: "MOI",

      deathLocation:

        "En route to Coral - killed by Anomander Rake when the Seguleh challenged him. Even Seguleh pride could not overcome the Son of Darkness.",

      affiliations: ["Seguleh", "Lady Envy"],

      books: ["MOI"],

      description: "A high-ranked Seguleh warrior who traveled with Lady Envy to Coral. His rank is unspecified, but he was confident enough to challenge Anomander Rake.",

      notable: "His death served as a stark demonstration of Anomander Rake's power.",

    },

    {

      id: "senu",

      name: "Senu",

      race: "Seguleh",

      rank: "Warrior",

      status: "alive",

      affiliations: ["Seguleh", "Lady Envy"],

      books: ["MOI"],

      description: "A low-ranked Seguleh warrior, companion of Mok and Thurule. His low rank is indicated by his unadorned mask.",

    },

  

    // ============================================

    // LADY ENVY'S PARTY

    // ============================================

    {

      id: "lady-envy",

      name: "Lady Envy",

      race: "Ascendant",

      rank: "Sorceress",

      status: "alive",

      affiliations: ["Ascendants"],

      books: ["MOI"],

      description: "A powerful, ancient, and capricious sorceress, a daughter of the Elder God Draconus. She travels with her two massive hounds and three Seguleh warriors.",

      notable: "Her journey to Coral during the Pannion War is undertaken for her own inscrutable reasons. Her playful cruelty masks immense power and an ancient weariness.",

    },

    {

      id: "garath",

      name: "Garath",

      race: "Hound (Ay)",

      rank: "Beast",

      status: "alive",

      affiliations: ["Lady Envy"],

      books: ["MOI"],

      description: "A massive, undead Ay (a prehistoric, tusked wolf) who serves Lady Envy. He is ancient and incredibly powerful.",

      notable: "The Ay were a race of intelligent, tusked canids that hunted the plains before humans. Garath and his brother are among the last of their kind.",

    },

    {

      id: "baaljagg",

      name: "Baaljagg",

      race: "Hound (Ay)",

      rank: "Beast",

      status: "alive",

      affiliations: ["Lady Envy"],

      books: ["MOI"],

      description: "Another massive, undead Ay traveling with Lady Envy, brother to Garath.",

    },

  

    // ============================================

    // TISTE LIOSAN

    // ============================================

    {

      id: "jorrude",

      name: "Jorrude",

      race: "Tiste Liosan",

      rank: "Knight",

      status: "alive",

      affiliations: ["Tiste Liosan"],

      books: ["HOC"],

      description: "An arrogant Tiste Liosan knight encountered by Trull Sengar and Onrack in the Nascent realm. He is on a quest to slay a 'dragon' that turns out to be a dying Azath house.",

      notable: "His arrogance and self-righteousness are typical of the Children of Father Light. His clash with Trull and Onrack highlights the ancient enmity between the Tiste peoples.",

    },

    {

      id: "enias",

      name: "Enias",

      race: "Tiste Liosan",

      rank: "Warrior",

      status: "alive",

      affiliations: ["Tiste Liosan"],

      books: ["HOC"],

      description: "A Tiste Liosan warrior and companion of Jorrude in the Nascent realm.",

    },

    {

      id: "malachar",

      name: "Malachar",

      race: "Tiste Liosan",

      rank: "Warrior",

      status: "alive",

      affiliations: ["Tiste Liosan"],

      books: ["HOC"],

      description: "A Tiste Liosan warrior and companion of Jorrude, more reasonable than his commander.",

    },

  

    // ============================================

    // DARUJHISTAN

    // ============================================

    {

      id: "kruppe",

      name: "Kruppe",

      race: "Human",

      rank: "Eel",

      status: "alive",

      affiliations: ["Darujhistan"],

      books: ["GOTM", "MOI", "BH"],

      description: "A rotund, seemingly foolish, and gluttonous man who speaks in the third person. He is secretly the 'Eel', the spymaster of Darujhistan, and is far more intelligent and powerful than he appears.",

      notable: "He has a direct line to the Elder God K'rul through his dreams and is a key player in the political and magical landscape of Darujhistan. His command of rhetoric and his ability to manipulate events are legendary.",

    },

    {

      id: "rallick-nom",

      name: "Rallick Nom",

      race: "Human",

      rank: "Assassin",

      status: "alive (in Azath)",

      affiliations: ["Darujhistan", "Assassins Guild"],

      books: ["GOTM", "MOI"],

      description: "A master assassin of the Darujhistan Assassins Guild, known for his patience and professionalism. He is a rival to the Guildmaster, Vorcan.",

      notable: "To save his friend Murillio and the city from the Jaghut Tyrant, he killed a T'lan Imass and was taken by an Azath house, where he remains preserved but out of time.",

    },

    {

      id: "murillio",

      name: "Murillio",

      race: "Human",

      rank: "Duelist, Courtier",

      status: "dead",

      deathBook: "BH",

      deathLocation: "Darujhistan - murdered by the Seguleh Second as part of a plot by Gorlas Vidikas.",

      affiliations: ["Darujhistan"],

      books: ["GOTM", "MOI", "BH"],

      description: "A handsome, charming, and skilled duelist, and a friend to Kruppe's circle. He is a prominent figure in Darujhistan's high society.",

      notable: "His wit and charm often get him into trouble, but his skill with a blade usually gets him out of it. His murder is a key event in the Darujhistan storyline of The Bonehunters.",

    },

    {

      id: "harllo-child",

      name: "Harllo",

      race: "Human (Soletaken)",

      rank: "Child",

      status: "alive",

      affiliations: ["Darujhistan", "K'rul"],

      books: ["MOI"],

      description: "A young boy from the poorest part of Darujhistan who is dying of a wasting sickness. As an act of compassion, the Elder God K'rul grants him Soletaken form, allowing him to shapeshift and live.",

      notable: "His story is a small, personal one that highlights K'rul's compassion and the contrast between the lives of the poor and the powerful in the city.",

    },

    {

      id: "harllock",

      name: "Harllock",

      race: "Human",

      rank: "Mage",

      status: "dead",

      deathBook: "GOTM",

      deathLocation: "Darujhistan - killed by a Moranth munition during the chaos of the Bridgeburners' operation.",

      affiliations: ["Darujhistan"],

      books: ["GOTM"],

      description: "A minor mage of Darujhistan who met his end during the explosive events of Gardens of the Moon.",

    },

    {

      id: "caladan-brood",

      name: "Caladan Brood",

      race: "Unknown (Ascendant)",

      rank: "Warlord",

      status: "alive",

      affiliations: ["Caladan Brood's Army"],

      books: ["MOI"],

      description: "The commander of the allied armies fighting against the Pannion Domin. He is an ancient and powerful ascendant, allied with Anomander Rake.",

      notable: "He wields a massive warhammer that, if struck upon the earth with full force, could awaken the Sleeping Goddess Burn and shatter the continent. His restraint in the face of immense suffering is his defining characteristic.",

    },

    {

      id: "kallor",

      name: "Kallor",

      race: "Human (Cursed)",

      rank: "High King",

      status: "alive",

      affiliations: ["Caladan Brood's Army"],

      books: ["MOI", "BH"],

      description: "An ancient High King from a forgotten age who, in his arrogance, challenged and was cursed by three Elder Gods (K'rul, Draconus, and Sister of Cold Nights). He is cursed to live forever but never ascend, and to see all he builds crumble to dust.",

      notable: "He killed Whiskeyjack at the Siege of Coral. His bitterness and nihilism are near-absolute, a result of seeing his empire of 800,000 years destroyed by his own hand to spite the gods. He is a skilled warrior and a cunning, if treacherous, commander.",

    },

  

    // ============================================

    // NECROMANCERS

    // ============================================

    {

      id: "bauchelain",

      name: "Bauchelain",

      race: "Human",

      rank: "Necromancer",

      status: "alive",

      affiliations: ["Necromancers"],

      books: ["MOI"],

      description: "A calm, well-spoken, and scholarly necromancer who travels with his partner, Korbal Broach. Despite his polite and academic demeanor, his magic is gruesome and terrifying, often involving the elaborate torture and reshaping of souls.",

      notable: "His partnership with the more overtly monstrous Korbal Broach is a source of dark humor. They leave a trail of horrifying deaths and undead monstrosities wherever they go.",

    },

    {

      id: "korbal-broach",

      name: "Korbal Broach",

      race: "Human",

      rank: "Necromancer",

      status: "alive",

      affiliations: ["Necromancers"],

      books: ["MOI"],

      description: "A silent, grotesque, and eunuch necromancer obsessed with 'collecting' body parts to create his undead servants. He is the more hands-on and less subtle of the duo.",

      notable: "His creations are abominations of flesh and spirit. He communicates in grunts and gestures, letting his work speak for itself.",

    },

    {

      id: "emancipor-reese",

      name: "Emancipor Reese",

      race: "Human",

      rank: "Manservant",

      status: "alive",

      affiliations: ["Necromancers"],

      books: ["MOI"],

      description: "The long-suffering manservant to Bauchelain and Korbal Broach. He is a man of simple needs who is utterly out of his depth, constantly terrified by his employers' activities.",

      notable: "His perspective provides a grimly humorous lens on the horrors created by his masters. His survival is a constant, perplexing miracle.",

    },

  

    // ============================================

    // CRIMSON GUARD

    // ============================================

    {

      id: "iron-bars",

      name: "Iron Bars",

      race: "Human (Avowed)",

      rank: "Blade",

      status: "alive",

  

      affiliations: ["Crimson Guard"],

      books: ["MT", "BH"],

      description: "A Blade (squad leader) of the Crimson Guard, an elite mercenary company whose members have taken a vow to oppose the Malazan Empire until its fall. The Vow makes them ageless and difficult to kill.",

      notable: "He and his squad were trapped on the continent of Lether for years, separated from the main Guard. He is a pragmatic and resilient warrior, utterly dedicated to the Vow.",

    },

    {

      id: "corlo",

      name: "Corlo",

      race: "Human (Avowed)",

      rank: "Mage",

      status: "alive",

      affiliations: ["Crimson Guard"],

      books: ["MT", "BH"],

      description: "An Avowed High Mage serving in Iron Bars' Blade. He is a powerful sorcerer whose magic has saved his squad numerous times during their long exile in Lether.",

      notable: "Provides magical support for the squad. His power and resourcefulness are key to the squad's survival.",

    },

    {

      id: "skinner",

      name: "Skinner",

      race: "Human (Avowed)",

      rank: "Prince, Commander",

      status: "alive",

      affiliations: ["Crimson Guard"],

      books: ["BH"],

      description: "A high-ranking commander and prince of the Crimson Guard. He is ambitious, ruthless, and believes the Guard's ancient Vow should be abandoned in favor of building a new kingdom for themselves.",

      notable: "His ambition places him in direct conflict with other leaders of the Guard who remain devoted to the Vow. He is a formidable warrior and a major internal threat to the Guard's future.",

    },

  

    // ============================================

    // THE CRIPPLED GOD

    // ============================================

    {

      id: "crippled-god",

      name: "The Crippled God (Kaminsod)",

      race: "Alien God",

      rank: "Chained God",

      status: "alive",

      affiliations: ["House of Chains"],

      books: ["MOI", "HOC", "MT", "BH"],

      description: "An alien god who was pulled from his own realm and into the Malazan world by a cabal of mages in a past age. The fall shattered his body and spirit, and he was chained in the mortal realm. His very presence is a poison to the land (personified by the Sleeping Goddess, Burn), and his pain and rage radiate outwards, corrupting all they touch.",

      notable: "He is the primary antagonist of the main series. He seeks to break his chains and either escape or destroy the world that has imprisoned him. He builds power by offering it to the desperate and dispossessed, creating a new House in the Deck of Dragons: the House of Chains.",

    },

  

    // ============================================

    // BONEHUNTERS (14th Army)

    // ============================================

    {

      id: "truth",

      name: "Truth",

      race: "Human",

      rank: "Soldier",

      status: "dead",

      deathBook: "BH",

      deathLocation:

        "Y'Ghatan - died in the firestorm when Leoman set the city ablaze. He was crushed by a falling beam while holding up a section of collapsed tunnel to allow his squadmates to escape.",

      affiliations: ["Bonehunters"],

      books: ["BH"],

      description: "A young, earnest, and deeply religious soldier in the 14th Army, a follower of the 'cult of the Redeemer' that springs up after the events of MOI.",

      notable: "His heroic sacrifice in the tunnels beneath the burning city of Y'Ghatan was a defining moment for his squad, embodying the courage and sacrifice of the common soldier.",

    },

    {

      id: "bottle",

      name: "Bottle",

      race: "Human",

      rank: "Soldier, Mage",

      status: "alive",

      affiliations: ["Bonehunters"],

      books: ["BH"],

      description: "A young, unassuming mage in the Bonehunters with a unique, subtle form of magic taught to him by his grandmother. He can communicate with and see through the eyes of small creatures like rats and insects.",

      notable: "His seemingly minor talent for scrying through animal senses proves to be invaluable for intelligence gathering. He is a key member of Fiddler's squad of sappers and irregulars.",

    },

    {

      id: "gesler",

      name: "Gesler",

      race: "Human (Soletaken)",

      rank: "Sergeant",

      status: "alive",

      affiliations: ["Bonehunters", "7th Army"],

      books: ["DG", "HOC", "BH"],

      description: "A veteran sergeant from the 7th Army who survived the Chain of Dogs. He and his companion Stormy were exposed to the raw magic of the Silanda, which turned their skin to gold and granted them inhuman resilience and the ability to transform into powerful, tusked beasts.",

      notable: "A loyal, if cynical, NCO who looks after his soldiers. His Soletaken ability is a last resort, as the transformation is agonizing and he has little control over the beast.",

    },

    {

      id: "stormy",

      name: "Stormy",

      race: "Human (Soletaken)",

      rank: "Corporal",

      status: "alive",

      affiliations: ["Bonehunters", "7th Army"],

      books: ["DG", "HOC", "BH"],

      description: "A massive, red-haired soldier, Gesler's oldest companion. He was similarly touched by the Silanda's magic, gaining golden skin and the ability to shapeshift.",

      notable: "Loud, violent, and fiercely loyal to Gesler. The two have an old, comfortable friendship and are nearly unstoppable in a fight.",

    },

    {

      id: "smiles",

      name: "Smiles",

      race: "Human",

      rank: "Soldier",

      status: "alive",

      affiliations: ["Bonehunters"],

      books: ["HOC", "BH"],

      description: "A young, tough, and often cheerfully profane female soldier in the 14th Army. She is known for her resilience and her often-grim humor.",

      notable: "Represents the new generation of Malazan soldiers, molded by the brutal campaigns of Seven Cities. A core member of Fiddler's squad.",

    },

    {

      id: "cuttle",

      name: "Cuttle",

      race: "Human",

      rank: "Sapper",

      status: "dead",

      deathBook: "BH",

      deathLocation: "Y'Ghatan - died in the firestorm, one of the thousands of casualties.",

      affiliations: ["Bonehunters"],

      books: ["BH"],

      description: "A veteran sapper who serves with Fiddler in the 14th Army. He is experienced and reliable, a professional soldier to the core.",

      notable: "His death in the fires of Y'Ghatan was one of many that forged the Bonehunters in the crucible of that battle.",

    },

    {

      id: "shortnose",

      name: "Shortnose",

      race: "Human",

      rank: "Soldier",

      status: "alive",

      affiliations: ["Bonehunters"],

      books: ["BH"],

      description: "A soldier in the 14th Army, known for his missing nose (lost to frostbite) and his collection of teeth from fallen enemies, which he uses for divination.",

      notable: "An eccentric but reliable soldier, his strange habits mark him as a veteran of brutal campaigns.",

    },

    {

      id: "tamber",

      name: "T'amber",

      race: "Human",

      rank: "Bodyguard",

      status: "alive",

      affiliations: ["Bonehunters"],

      books: ["HOC", "BH"],

      description: "Adjunct Tavore's silent and mysterious bodyguard. She is a young woman of seemingly unremarkable appearance, yet she is preternaturally skilled and always at the Adjunct's side.",

      notable: "Her origins and the source of her skills are a mystery. She has a calming, almost supernatural effect on those around her and is utterly devoted to Tavore.",

    },

  

    // ============================================

    // TOC THE YOUNGER

    // ============================================

    {

      id: "toc-the-younger",

      name: "Toc the Younger",

      race: "Human",

      rank: "Scout, later Mortal Sword of Togg",

      status: "dead",

      deathBook: "MOI",

      deathLocation: "En route to Coral - body died in the Pannion Domin, but his soul was saved by Togg.",

      affiliations: ["Malazan Army", "Togg and Fanderay"],

      books: ["GOTM", "MOI"],

      description: "A one-eyed Malazan scout of the 2nd Army under Dujek Onearm. He was separated from the army in GOTM and captured by the Pannion Domin in MOI, where he endured horrific torture.",

      notable: "His eye was taken by a tenescowri, and he was left for dead before being found by Lady Envy. He became the Mortal Sword of Togg, the Wolf God, and his soul was placed in the body of a soulless automaton, Anaster. His story is one of immense suffering and endurance.",

    },

  

    // ============================================

    // SILVERFOX

    // ============================================

    {

      id: "silverfox",

      name: "Silverfox",

      race: "Human/Rhivi/Bonecaster",

      rank: "Summoner of the T'lan Imass",

      status: "alive",

      affiliations: ["T'lan Imass"],

      books: ["MOI"],

      description: "A being created from the souls of the Malazan cadre mage Tattersail, the Elder sorceress Nightchill, and a Rhivi woman's unborn child. She was born with the memories and personalities of all three.",

      notable: "She has the authority to summon and command the T'lan Imass. Her creation was an event of immense magical significance, a convergence of mortal, Elder, and Imass power. She leads the Imass during the Pannion War, but her ultimate purpose is to grant them the peace of true death.",

    },
]
