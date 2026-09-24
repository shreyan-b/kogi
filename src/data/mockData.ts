import { DestinationTrip, TravelStyle } from '../types';

export const TRAVEL_STYLES: TravelStyle[] = [
  {
    id: 'relaxed',
    name: 'Relaxed',
    badge: 'Muted Mist',
    badgeColor: 'primary',
    icon: 'spa',
    description: 'Unhurried days, scenic balconies, zero rush',
    statLabel: 'Avg daily cadence: 1–2 places',
    intentQuery: 'Slow-paced retreat with tranquil valley views, artisanal tea estates, quiet balconies, zero schedule pressure',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    badge: 'High Altitude',
    badgeColor: 'secondary',
    icon: 'terrain',
    description: 'High-altitude trails, hidden rapids, raw terrain',
    statLabel: 'Endurance profile: Strenuous',
    intentQuery: 'Rugged backcountry expeditions, river crossing, high-altitude ridges, trail camping with certified guides',
  },
  {
    id: 'luxury',
    name: 'Luxury',
    badge: 'Bespoke Curation',
    badgeColor: 'tertiary',
    icon: 'villa',
    description: 'Private pools, bespoke dining, five-star heritage',
    statLabel: 'Tailored itineraries only',
    intentQuery: 'Ultra-luxury private estate, curated sommelier tastings, infinity plunge pool, private butler service',
  },
  {
    id: 'family',
    name: 'Family',
    badge: 'All Generations',
    badgeColor: 'neutral',
    icon: 'diversity_1',
    description: 'Spacious suites, child-friendly excursions, safety first',
    statLabel: 'Safety rating: Certified verified',
    intentQuery: 'Multi-generational family getaway: accessible trails, calm waters, adjoining rooms, nursery accessibility',
  },
  {
    id: 'budget',
    name: 'Budget',
    badge: 'Value Savvy',
    badgeColor: 'primary',
    icon: 'savings',
    description: 'High-value homestays, authentic local eats, savvy transit',
    statLabel: 'Optimized cost-per-mile',
    intentQuery: 'Clever budget traveling: hyper-authentic homestays, public rail legs, local thali joints, maximal value',
  },
  {
    id: 'culture',
    name: 'Culture',
    badge: 'Heritage Living',
    badgeColor: 'secondary',
    icon: 'temple_hindu',
    description: 'Historic temples, artisanal craft, living folklore',
    statLabel: 'Includes expert storytelling',
    intentQuery: 'Deep regional heritage: living temples, handloom weaving colonies, ancestral kitchen recipes, local historians',
  },
];

export const DESTINATION_TRIPS: DestinationTrip[] = [
  {
    id: 'munnar-high-range',
    title: 'Munnar High Range',
    region: 'Western Ghats, Kerala',
    matchScore: 98,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGLcz7_InCkNwZJ3x1GzM2vj7eKxhy-BmuD-BziRXMqf-Dx9MEs-bTFvekd0tn6WWq6BqjzdXI32lT2HAmnfScAiVft7tvRvrm8rQt6LG-2LLyHhxIlkFzqEPQJqXDA9r3JwSQdbMgfZ51R0e4KQWoYtOoY0jfjl0PabFnfM2dZr6Sh7o65aMd41kcAmWl5hcLSLBIK9dRf6jSJCO70OD1LilVjSZAA6-ut3aJifnQ3UFNDuIfokp1w',
    quotePrompt: '"Find me high-elevation plantation cottages where morning tea arrives by 6:30am with uninterrupted mountain mist views."',
    metaBadge: '19°C Mild Mist',
    metaIcon: 'cloud',
    duration: '3 Days',
    cost: '₹14,500',
    costNumeric: 14500,
    climate: '18–21°C, crisp mountain fog, morning dew',
    elevation: '1,532m MSL',
    crowdLevel: 'Low',
    style: 'Relaxed',
    description: 'Perched in the upper reaches of the Anamalai Hills, where British-era tea bungalows overlook unending emerald terraces.',
    bestTime: 'September to March',
    coordinates: { lat: 10.0889, lon: 77.0595 },
    intentTags: ['Mountain Mist', 'Tea Plantation', 'Slow Cadence', 'Balcony Views', 'Cozy Fireside'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Lockhart Valley & Sunset Tea Tasting',
        morning: 'Chauffeured scenic ascent from Cochin through Cheeyappara waterfalls.',
        afternoon: 'Check-in to 1920s planter bungalow. Fresh cardamom chai on cedar veranda.',
        evening: 'Guided walk through private orthodox tea-making factory and leaf grading.',
        stay: 'Lockhart Heritage Planters Estate',
        highlight: 'Golden hour sunset over Chokramudi Peak with zero vehicle noise.'
      },
      {
        day: 2,
        title: 'Dawn Mist Walk & Nilgiri Tahr Sanctuary Ridge',
        morning: '6:15 AM private mist ridge trail with senior naturalist. Spot endemic birds.',
        afternoon: 'Traditional Syrian-Christian plantation lunch prepared over woodfire.',
        evening: 'Herbal oil therapy and open-air fireside reading.',
        stay: 'Lockhart Heritage Planters Estate',
        highlight: 'Quiet encounter with wild mountain goats along the cloudline.'
      },
      {
        day: 3,
        title: 'Secret Spice Grove & Mattupetty Waterside Stroll',
        morning: 'Slow breakfast with fresh farm preserves, wild honey, and freshly roasted Arabica.',
        afternoon: 'Wander along the secluded eastern bank of Mattupetty lake away from tourist speedboats.',
        evening: 'Descent with artisan spice basket sourced directly from grower cooperatives.',
        stay: 'Departure Transfer',
        highlight: 'Hand-picked dried green pepper and organic lemongrass infusion.'
      }
    ]
  },
  {
    id: 'vembanad-estuary',
    title: 'Vembanad Estuary',
    region: 'Kumarakom & Alleppey',
    matchScore: 94,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOAnYIFUesCxFXmNKw0kS6E1IJSe7lvErzc4eTOimkY4IOgTVMzqbuYTyAHGoUTcEJCUNx7B-OCCiX67NxPHnZAjVmSWw0IBrrKnkP5_Y_1IS4aDI5nG93uLXHCikFsrvhIvhPtthbiCJ40oSubs9MrwXB8403X8t8fF1D4DAJWMhDnyc27jL_1MRCUXbBANraXsLqgrSsh0-YMmxsPcKNwA7xptPlwSRFJAcyCEj4ql39clb60QQaEg',
    quotePrompt: '"Quiet backwater escape for remote work, fast Wi-Fi, fresh spiced karimeen fry and zero tourist crowd."',
    metaBadge: 'Fiber Verified',
    metaIcon: 'wifi',
    duration: '4 Days',
    cost: '₹19,200',
    costNumeric: 19200,
    climate: '26–29°C, tropical water breeze, clear starscapes',
    elevation: 'Sea Level / Tidal Estuary',
    crowdLevel: 'Low',
    style: 'Relaxed',
    description: 'A labyrinth of lotus canals and ancient coconut groves along Vembanad Lake. Tailored for creative flow, secluded stays, and culinary immersion.',
    bestTime: 'October to April',
    coordinates: { lat: 9.6176, lon: 76.4300 },
    intentTags: ['Backwaters', 'Remote Work Ready', 'Fresh Seafood', 'Solar Houseboat', 'Silent Canals'],
    itinerary: [
      {
        day: 1,
        title: 'Canal Crossing & Waterfront Desk Setup',
        morning: 'Country canoe pick-up from Muhamma jetty to private heritage tharavadu.',
        afternoon: 'Fiber Wi-Fi speed test (150 Mbps) on waterside deck overlooking lily ponds.',
        evening: 'Sunset toddy shop delicacies: pan-seared pearl spot fish in banana leaf.',
        stay: 'Aymanam Heritage Sanctuary',
        highlight: 'Watch migratory cormorants dive in the mirror-smooth lagoon.'
      },
      {
        day: 2,
        title: 'Early Bird Sanctuary Paddle & Focused Flow',
        morning: 'Silent electric canoe journey through Kumarakom bird sanctuary at 6:00 AM.',
        afternoon: 'Uninterrupted deep work session accompanied by coconut water and filter coffee.',
        evening: 'Cooking masterclass with Chef Sreekumar on ancestral coconut milk curries.',
        stay: 'Aymanam Heritage Sanctuary',
        highlight: 'Electric silent motor gliding beneath weeping willow and mangrove roots.'
      },
      {
        day: 3,
        title: 'Solar Kettuvallam Private Cruise',
        morning: 'Board bespoke solar-powered timber barge with ergonomic desk and sundeck.',
        afternoon: 'Cruise inner canals of Kuttanad farming below sea level.',
        evening: 'Starlit dinner anchored in the center of the serene inland lagoon.',
        stay: 'Private Kettuvallam Solar Cruiser',
        highlight: 'Zero diesel fumes or engine roar—just ripples and village temple bells.'
      },
      {
        day: 4,
        title: 'Village Handloom & Return',
        morning: 'Traditional Kerala breakfast: warm appams with fragrant vegetable stew.',
        afternoon: 'Visit coir spinning co-ops and local artisan boat builders.',
        evening: 'Transfer to Kochi airport.',
        stay: 'Return Journey',
        highlight: 'Freshly harvested vanilla pods and organic raw palm sugar.'
      }
    ]
  },
  {
    id: 'hampi-ruin-complex',
    title: 'Hampi Ruin Complex',
    region: 'Tungabhadra Basin',
    matchScore: 96,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCFJ9BXhAksu53oWYRpg_Pyb4NRHuspU8pch_nZ7bGAxTt6MPuYge9fX_BvC5y4iqzHyEwKh8x28zNiMtyppaEPWMfiCWr4YcvLMX-G0bX2pwGfR_yUVvJ5L-UA6GU58qPLN19jI7jkBhrg5rKSdubgunNA-Du5y80Nrx_qoWMiddVI-V5h8-WAVaVKLDI9xVDnZ4LWUgA9DAyBPH5aUcze1yfYnce4VeLeDTYovuZIh36HJcA--Fmg',
    quotePrompt: '"Exploring Vijayanagara architecture by cycle with sunrise boulder climbs and heritage river coracle rides."',
    metaBadge: 'Active Terrain',
    metaIcon: 'pedal_bike',
    duration: '2 Days',
    cost: '₹9,800',
    costNumeric: 9800,
    climate: '23–31°C, dry golden light, balmy evenings',
    elevation: '467m MSL',
    crowdLevel: 'Moderate',
    style: 'Adventure',
    description: 'Surreal granite boulder expanses and monumental 14th-century Vijayanagara ruins alongside the roaring Tungabhadra River.',
    bestTime: 'October to February',
    coordinates: { lat: 15.3350, lon: 76.4600 },
    intentTags: ['Boulder Climbing', 'Vijayanagara Empire', 'Cycle Trails', 'Coracle Ferry', 'Sunset Hills'],
    itinerary: [
      {
        day: 1,
        title: 'Sunrise at Matanga Hill & Sacred Center',
        morning: '5:30 AM boulder climb to Matanga peak for a 360-degree panorama of ancient ruins.',
        afternoon: 'Cycle through the Achyutaraya temple complex and stone bazaar lanes.',
        evening: 'Round coracle boat ride across Tungabhadra rapids to Sanapur boulder lake.',
        stay: 'Boulders Heritage Eco-Retreat',
        highlight: 'Golden sun setting over monolithic stone chariots with flute music in the air.'
      },
      {
        day: 2,
        title: 'Royal Enclosure & Underground Shiva Chamber',
        morning: 'Architectural walk through the Lotus Mahal, Queen\'s Bath, and Stepped Tank.',
        afternoon: 'Traditional Kannada jolada rotti meals served on plantain leaves.',
        evening: 'Sunset meditation at Hemakuta Hill overlooking Virupaksha temple gopuram.',
        stay: 'Departure Transfer / Hospet Rail',
        highlight: 'Acoustic musical pillars of the Vittala Temple with resident archaeologist.'
      }
    ]
  },
  {
    id: 'coorg-plantation-trails',
    title: 'Coorg Coffee Wilds',
    region: 'Kodagu, Karnataka',
    matchScore: 92,
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
    quotePrompt: '"Budget stays in Coorg with plantation walking trails, homemade pandi curry and river swimming."',
    metaBadge: '21°C Coffee Blossom',
    metaIcon: 'forest',
    duration: '3 Days',
    cost: '₹11,200',
    costNumeric: 11200,
    climate: '18–24°C, gentle breeze, aroma of roasted Robusta',
    elevation: '1,170m MSL',
    crowdLevel: 'Low',
    style: 'Budget',
    description: 'Lush 40-acre heritage coffee estates where family homestays welcome travelers with Kodava culinary traditions and private river trails.',
    bestTime: 'October to May',
    coordinates: { lat: 12.4244, lon: 75.7382 },
    intentTags: ['Coffee Estate', 'River Trails', 'Authentic Homestay', 'Kodava Cuisine', 'Fireflies'],
    itinerary: [
      {
        day: 1,
        title: 'Estates Arrival & Coffee Berry Picking',
        morning: 'Arrive via scenic Mysore-Madikeri highway. Check-in to family plantation home.',
        afternoon: 'Guided estate trek learning shade-grown Arabica, pepper vines, and cardamom.',
        evening: 'Campfire with homemade ginger wine and spiced bamboo shoot stew.',
        stay: 'Cauvery Riverbank Homestay',
        highlight: 'Natural freshwater pool swim at private stream within estate boundaries.'
      },
      {
        day: 2,
        title: 'Tadiandamol Foothills & Waterfall Trek',
        morning: 'Early morning hike to Chelavara waterfalls through untouched evergreen forest.',
        afternoon: 'Kodava feast: traditional Akki Rotti with signature Kaad Mange curry.',
        evening: 'Firefly watching along the stream bank.',
        stay: 'Cauvery Riverbank Homestay',
        highlight: 'Bioluminescent fireflies illuminating the bamboo groves after sunset.'
      },
      {
        day: 3,
        title: 'Talacauvery Origin & Coffee Roasting',
        morning: 'Visit the sacred origin of River Cauvery nestled in Brahmagiri hills.',
        afternoon: 'Roast and grind your own signature coffee bean blend to take home.',
        evening: 'Departure to Bangalore/Mangalore.',
        stay: 'Return Journey',
        highlight: 'Freshly roasted whole-bean Peaberry coffee bag stamped with your name.'
      }
    ]
  },
  {
    id: 'spiti-high-pass',
    title: 'Spiti Valley Monasteries',
    region: 'Himachal Pradesh',
    matchScore: 97,
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    quotePrompt: '"Solo adventure in the Himalayas: high-pass homestays, meditation caves and clear Milky Way skies."',
    metaBadge: 'High Altitude 3,800m',
    metaIcon: 'hiking',
    duration: '6 Days',
    cost: '₹28,500',
    costNumeric: 28500,
    climate: '4–14°C, dry mountain air, zero light pollution',
    elevation: '3,800m–4,400m MSL',
    crowdLevel: 'Low',
    style: 'Adventure',
    description: 'The Middle Land between India and Tibet. Ancient 1,000-year-old mud-brick monasteries clinging to sheer cliffs under galactic starfields.',
    bestTime: 'May to October',
    coordinates: { lat: 32.2276, lon: 78.0710 },
    intentTags: ['Himalayan Passes', 'Mud Monasteries', 'Astrophotography', 'Fossil Village', 'Spiritual Silence'],
    itinerary: [
      {
        day: 1,
        title: 'Acclimatization in Kaza & Riverbank Calm',
        morning: 'Scenic journey from Kalpa entering the cold desert valley of Spiti.',
        afternoon: 'Gentle hydration walk along the turquoise Spiti River bed.',
        evening: 'Butter tea and hot thukpa at local mud-brick cafe.',
        stay: 'Kaza Solar Guesthouse',
        highlight: 'Dramatic sunset reflecting off sharp sedimentary canyon walls.'
      },
      {
        day: 2,
        title: 'Key Monastery & Chanting Hall Dawn',
        morning: '6:00 AM morning prayers with young monks at Key Gompa.',
        afternoon: 'Hike to Kibber village (4,270m) and search for Himalayan blue sheep.',
        evening: 'Star photography session with zero atmospheric moisture.',
        stay: 'Kibber Homestay',
        highlight: 'Breathtaking view of Key Monastery illuminated under the Milky Way core.'
      },
      {
        day: 3,
        title: 'Langza Fossil Village & World’s Highest Post Office',
        morning: 'Trek through marine fossil fields of Langza with giant Buddha statue.',
        afternoon: 'Send handwritten postcards from Hikkim post office (4,440m).',
        evening: 'Dinner with host family around the warm traditional bukhari stove.',
        stay: 'Langza Homestay',
        highlight: 'Handwritten postcards dispatched to loved ones from the roof of the world.'
      }
    ]
  },
  {
    id: 'south-goa-retreat',
    title: 'Cola & Galgibaga Coast',
    region: 'South Goa',
    matchScore: 95,
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
    quotePrompt: '"Family trip to South Goa with quiet beaches, pool villa, freshwater lagoon and authentic local bakeries."',
    metaBadge: '28°C Gentle Surf',
    metaIcon: 'beach_access',
    duration: '4 Days',
    cost: '₹22,800',
    costNumeric: 22800,
    climate: '27–30°C, salty sea breeze, warm sunset water',
    elevation: 'Sea Level',
    crowdLevel: 'Low',
    style: 'Family',
    description: 'Unspoiled golden sands where olive ridley turtles nest and emerald emerald freshwater lagoons meet the Arabian Sea.',
    bestTime: 'November to April',
    coordinates: { lat: 15.0440, lon: 73.9877 },
    intentTags: ['Quiet Beaches', 'Freshwater Lagoon', 'Portuguese Villas', 'Turtle Conservation', 'Family Safe'],
    itinerary: [
      {
        day: 1,
        title: 'Heritage Villa Arrival & Sunset Lagoon Kayak',
        morning: 'Private chauffeur transfer to restored 18th-century Portuguese estate in Agonda.',
        afternoon: 'Settle into family pool suite. Warm fresh poi bread with chorizo or avocado.',
        evening: 'Gentle family kayaking in Cola lagoon where the stream meets the sea.',
        stay: 'Quinta do Mar Villa Estate',
        highlight: 'Kids swimming in calm freshwater lagoon separated by sandbar from sea.'
      },
      {
        day: 2,
        title: 'Galgibaga Turtle Sanctuary & Artisan Bakeries',
        morning: 'Morning walk along Galgibaga pine trees with forest department conservationists.',
        afternoon: 'Sample Goan crab xec xec and bebinca dessert at beachside shack.',
        evening: 'Sunset yoga and kite flying on the wide empty sandspit.',
        stay: 'Quinta do Mar Villa Estate',
        highlight: 'Baby turtle release observation during hatching cycle.'
      },
      {
        day: 3,
        title: 'Cabo de Rama Fort & Cliff Picnic',
        morning: 'Explore historic ruins of Cabo de Rama fortress overlooking the ocean.',
        afternoon: 'Private chef barbecue at the villa with garden herbs and fresh catch.',
        evening: 'Acoustic guitar session around pool patio.',
        stay: 'Quinta do Mar Villa Estate',
        highlight: 'Panoramic cliff views of dolphin pods cruising the shoreline.'
      }
    ]
  }
];

export const QUICK_PROMPTS = [
  {
    label: 'Budget stays in Coorg',
    icon: 'forest',
    color: 'text-tertiary',
    fullQuery: 'Budget stays in Coorg with plantation walking trails',
  },
  {
    label: 'Family trip to Goa',
    icon: 'family_restroom',
    color: 'text-secondary',
    fullQuery: 'Family trip to South Goa with quiet beaches, pool villa, and vegan food',
  },
  {
    label: 'Solo adventure in Himalayas',
    icon: 'hiking',
    color: 'text-primary',
    fullQuery: 'Solo adventure in the Himalayas: high-pass homestays and meditation caves',
  },
  {
    label: 'Peaceful weekend near Kochi',
    icon: 'water',
    color: 'text-tertiary-container',
    fullQuery: 'Peaceful weekend getaway within 2 hours drive from Kochi with calm backwaters',
  },
];

export const RECOMMENDED_PLACES: DestinationTrip[] = [
  {
    id: 'cloud-valley-tea-estate',
    title: 'Cloud Valley Tea Estate Retreat',
    region: 'Chinnakanal, Munnar • 18km from town',
    distanceText: '18km from town',
    matchScore: 94,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbkTdaf41iTXSOqPUHstL80twmvk43wZUjRMg1P_Nc9Pwj16O1GzECOjjjADz7npgwp9ysE5oluvnb_9YiaOEsZxstg0Lkn67oMMEl7e4PSDSxk3pzJAOOKe3Z8sr7pED8XE4rS2XF43180OLsppVvytNVmozZM4xkQCOCinkVv5FAJJ0Xqu8Wq8hdCfZaNRt-MCyuSOsJnBIeURHLkY8oo99HdwGowDsqNRwInqeGCsQ5POBEqln5OA',
    quotePrompt: '"Panoramic misty morning view of lush sprawling rolling green tea plantations in Chinnakanal Munnar Kerala with a colonial stone estate villa bathed in warm amber sunrise glow with layers of mountain fog."',
    metaBadge: 'Mist View',
    metaIcon: 'foggy',
    duration: '3 Days',
    cost: '₹7,800',
    costNumeric: 7800,
    climate: '17–20°C, rolling morning fog, silent valley',
    elevation: '1,580m MSL',
    crowdLevel: 'Low',
    style: 'Relaxed',
    stayCategory: 'Tea Estate',
    description: 'A 1920s colonial stone estate bungalow situated amidst tea hills in Chinnakanal with verified silent valley views.',
    bestTime: 'September to April',
    coordinates: { lat: 10.0384, lon: 77.1428 },
    rating: { score: 4.9, count: 142 },
    whyPicked: 'Matches your relaxed travel style and Munnar preference, while staying well within your ₹10,000 budget with verified silent valley views.',
    whyPickedTranslations: {
      en: 'Matches your relaxed travel style and Munnar preference, while staying well within your ₹10,000 budget with verified silent valley views.',
      ml: 'നിങ്ങളുടെ ശാന്തമായ യാത്രാ ശൈലിക്കും മൂന്നാർ മുൻഗണനയ്ക്കും ഏറ്റവും അനുയോജ്യമായത്, ഒപ്പം ₹10,000 ബജറ്റിനുള്ളിൽ സ്ഥിരീകരിച്ച ശാന്തമായ താഴ്‌വര കാഴ്ചകൾ നൽകുന്നു.',
      hi: 'आपकी शांत यात्रा शैली और मुन्नार की पसंद से पूरी तरह मेल खाता है, ₹10,000 के बजट में शांत घाटी के दृश्यों के साथ।',
      ta: 'உங்கள் அமைதியான பயண பாணிக்கும் மூணாறு விருப்பத்திற்கும் பொருந்துகிறது, ₹10,000 பட்ஜெட்டுக்குள் அமைதியான பள்ளத்தாக்கு காட்சிகளுடன்.'
    },
    signals: {
      semanticQueryMatch: 92,
      preferenceProfile: 84,
      sessionMemoryFlow: 73,
      budgetCeilingFit: 100,
      quote: '“Your recent activity suggests you prefer relaxed destinations with nature immersion over crowded viewpoints. This recommendation also aligns with your selected ₹10,000 budget ceiling and Malayalam culinary affinity.”'
    },
    intentTags: ['Estate Bungalow', 'Mist View', 'Quiet Zone'],
    itinerary: [
      {
        day: 1,
        title: 'Chinnakanal Ascent & Estate Arrival',
        morning: 'Private car climb winding past Anayirankal Dam with mountain breeze.',
        afternoon: 'Check-in to colonial stone villa. Fresh hand-plucked green tea served on private terrace.',
        evening: 'Golden hour sunset over rolling mist clouds with firelit living room reading.',
        stay: 'Cloud Valley Planters Estate',
        highlight: 'Panoramic sunset view over the Anayirankal reservoir bed.'
      },
      {
        day: 2,
        title: 'Private Orthodox Factory Walk & Ridge Trail',
        morning: '6:30 AM guided walk through the plantation with estate botanist.',
        afternoon: 'Traditional wood-fired Kerala lunch with local organic garden greens.',
        evening: 'Fresh cardamom tea tasting and observation of night star constellations.',
        stay: 'Cloud Valley Planters Estate',
        highlight: 'Quiet morning mist walk through century-old tea bushes.'
      },
      {
        day: 3,
        title: 'Valley Terrace Breakfast & Slow Departure',
        morning: 'Slow farm breakfast with handmade jams, honey, and fresh roasted Arabica.',
        afternoon: 'Stop at artisan grower cooperative for fresh spices before gentle descent.',
        evening: 'Return transfer with relaxed pacing.',
        stay: 'Departure Transfer',
        highlight: 'Fresh mountain air with zero tour bus friction.'
      }
    ]
  },
  {
    id: 'the-spice-whispers',
    title: 'The Spice Whispers Plantation Stay',
    region: 'Pallivasal, Munnar • 8km from center',
    distanceText: '8km from center',
    matchScore: 91,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBptasXr5TjJZp1K_hkeLcviC5msrXdNF3McXBsBzsXSAKyKXIjut9jvpnR-TBMmAeKKJMcvpevfxlxwwIZpEEgbqkqGTxb9BuMnDqJDIfpthH9u-C26WHKD5mGvuxV4JTUvNN0DjTnt-A5EDYutybjtHbCB2BBsx0a4q7dZFxpv8SuujMrEUDTjefabC1DL15Hy4zmdIjktIlD74wB1Sl7W7DXXPF9Z2WuonV-x3Kg4vC2oN0zOwv7jQ',
    quotePrompt: '"Traditional Kerala architecture stone and wood boutique bungalow tucked in thick cardamom and pepper plantation in Pallivasal Munnar with wooden porch and soft lantern lighting at dusk."',
    metaBadge: 'Cardamom Grove',
    metaIcon: 'spa',
    duration: '3 Days',
    cost: '₹6,200',
    costNumeric: 6200,
    climate: '19–22°C, fragrant canopy shade, gentle mountain stream',
    elevation: '1,420m MSL',
    crowdLevel: 'Low',
    style: 'Relaxed',
    stayCategory: 'Homestay',
    description: 'Traditional Kerala architecture stone and wood bungalow surrounded by 25 acres of cardamom and pepper vines.',
    bestTime: 'October to May',
    coordinates: { lat: 10.0520, lon: 77.0540 },
    rating: { score: 4.8, count: 98 },
    whyPicked: 'High match for peaceful surroundings, home-cooked Kerala cuisine, and morning birdwatching paths directly adjoining the estate.',
    whyPickedTranslations: {
      en: 'High match for peaceful surroundings, home-cooked Kerala cuisine, and morning birdwatching paths directly adjoining the estate.',
      ml: 'സമാധാനപരമായ അന്തരീക്ഷം, വീട്ടിലുണ്ടാക്കുന്ന നാടൻ കേരളീയ ഭക്ഷണം, എസ്റ്റേറ്റിനോട് ചേർന്നുള്ള പ്രഭാത പക്ഷി നിരീക്ഷണ വഴികൾ എന്നിവയ്ക്ക് ഉയർന്ന പൊരുത്തം.',
      hi: 'शांत वातावरण, घर के बने केरल के व्यंजनों और एस्टेट से जुड़े सुबह के पक्षी दर्शन मार्गों के लिए सबसे उपयुक्त।',
      ta: 'அமைதியான சூழல், பாரம்பரிய கேரள உணவு மற்றும் தோட்டத்தை ஒட்டிய காலை பறவை கண்காணிப்பு பாதைகளுக்கு மிகச் சிறந்த பொருத்தம்.'
    },
    signals: {
      semanticQueryMatch: 89,
      preferenceProfile: 92,
      sessionMemoryFlow: 68,
      budgetCeilingFit: 100,
      quote: '“High weight assigned to culinary heritage and birdlife biodiversity. Distance of 8km from town keeps crowd friction near zero while preserving artisanal plantation access.”'
    },
    intentTags: ['Cardamom Grove', 'Culinary Trail', 'Private Stream'],
    itinerary: [
      {
        day: 1,
        title: 'Check-in to Cardamom Woods & Evening Stream Stroll',
        morning: 'Arrive at Pallivasal through spice-scented mountain roads.',
        afternoon: 'Warm welcome drink of ginger-lemongrass infusion. Settle into wooden porch room.',
        evening: 'Walk down to the private crystal natural water stream flowing inside the property.',
        stay: 'The Spice Whispers Plantation',
        highlight: 'Gentle stream sounds and lantern illumination in the spice forest.'
      },
      {
        day: 2,
        title: 'Kerala Culinary Masterclass & Bird Walk',
        morning: 'Early dawn birdwatching trail with senior resident naturalist.',
        afternoon: 'Interactive cooking session preparing authentic Kerala fish curry and appams with fresh coconut.',
        evening: 'Relax on the veranda watching dusk settle over the pepper vines.',
        stay: 'The Spice Whispers Plantation',
        highlight: 'Freshly harvested black pepper and green cardamom culinary walk.'
      },
      {
        day: 3,
        title: 'Spice Harvesting & Slow Farewell',
        morning: 'Walk through organic curing sheds and sample sun-dried wild spices.',
        afternoon: 'Leisurely brunch under jackfruit shade before check-out.',
        evening: 'Scenic descent towards the plains.',
        stay: 'Departure Transfer',
        highlight: 'Artisanal gift pack of single-origin Tellicherry pepper and green pods.'
      }
    ]
  },
  {
    id: 'anamudi-edge-eco-cabins',
    title: 'Anamudi Edge Eco-Cabins',
    region: 'Mattupetty Ridge, Munnar • High Elevation',
    distanceText: 'High Elevation',
    matchScore: 88,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVrzQ0WWk-J6IoegT_1MxRWD7-N8q81QWZvadUo9PKuslEtLuXaG4N9CSQ8AM_feSCloiFETR8nOh9Etj20bN22_sh5Kh1Kvo7s-6pUzS6w-Z2bGwKGPV2UX2LXM0e_oji4JVqISVpXne1SM3kvDjoNswYzkzS3J4DYUYd2xuEB0lmoS6CiWpAQE1DTjZXeEgByj5Tnx2kSXJg9_t2diVbnrTQ5f7z_1DQvFqttinqhw2Vlzpk21SRjg',
    quotePrompt: '"Modern architectural glass-fronted sustainable wooden eco cabins perched high on a scenic misty mountain ridge overlooking Mattupetty reservoir in Munnar Western Ghats."',
    metaBadge: 'Ridge Balcony',
    metaIcon: 'deck',
    duration: '3 Days',
    cost: '₹8,900',
    costNumeric: 8900,
    climate: '15–18°C, crisp mountain air, pristine night sky',
    elevation: '1,720m MSL',
    crowdLevel: 'Low',
    style: 'Relaxed',
    stayCategory: 'Eco-Cottage',
    description: 'Modern architectural glass-fronted sustainable wooden eco cabins perched on Mattupetty ridge overlooking the reservoir.',
    bestTime: 'October to March',
    coordinates: { lat: 10.1064, lon: 77.1245 },
    rating: { score: 4.7, count: 84 },
    whyPicked: 'Highly rated for serene private balconies and panoramic mountain vistas directly satisfying your relaxation criteria without tour bus traffic.',
    whyPickedTranslations: {
      en: 'Highly rated for serene private balconies and panoramic mountain vistas directly satisfying your relaxation criteria without tour bus traffic.',
      ml: 'ടൂർ ബസുകളുടെ തിരക്കില്ലാതെ നിങ്ങളുടെ ശാന്തത മുൻഗണനകൾ പൂർണ്ണമായി തൃപ്തിപ്പെടുത്തുന്ന മനോഹരമായ സ്വകാര്യ ബാൽക്കണികൾക്കും പർവത കാഴ്ചകൾക്കും പേരുകേട്ടത്.',
      hi: 'टूरिस्ट बसों के शोर-शराबे के बिना आपकी शांति की कसौटियों पर खरा उतरने वाली निजी बालकनियों और मनोरम दृश्यों के लिए उच्च रेटेड।',
      ta: 'சுற்றுலா பேருந்துகளின் நெரிசலின்றி உங்கள் அமைதி விருப்பங்களை முழுமையாக பூர்த்தி செய்யும் தனியார் பால்கனிகள் மற்றும் மலைக் காட்சிகளுக்குப் புகழ்பெற்றது.'
    },
    signals: {
      semanticQueryMatch: 86,
      preferenceProfile: 88,
      sessionMemoryFlow: 75,
      budgetCeilingFit: 100,
      quote: '“Private ridge balconies maximize panoramic views without tour bus congestion. High match on solar off-grid sustainability and night stargazing clarity.”'
    },
    intentTags: ['Off-Grid Solar', 'Ridge Balcony', 'Stargazing Deck'],
    itinerary: [
      {
        day: 1,
        title: 'Ridge Ascent & High Elevation Sunset',
        morning: 'Ascent to Mattupetty ridge enjoying dramatic altitude transitions.',
        afternoon: 'Check-in to glass-fronted wooden eco-cabin. Solar heated herbal bath.',
        evening: 'Sunset over Anamudi silhouette from private cantilevered balcony deck.',
        stay: 'Anamudi Edge Eco-Cabins',
        highlight: 'Uninterrupted 180° view of mist rolling across Mattupetty reservoir.'
      },
      {
        day: 2,
        title: 'Stargazing Ridge Walk & Solar Kitchen Breakfast',
        morning: 'Fresh baked sourdough and hill-honey breakfast on the open timber platform.',
        afternoon: 'Guided ecology walk along the ridge border learning about endemic high-altitude ferns.',
        evening: 'Night astrophotography session using the lodge’s telescope on the stargazing deck.',
        stay: 'Anamudi Edge Eco-Cabins',
        highlight: 'Pristine zero-light-pollution Milky Way view over the Western Ghats.'
      },
      {
        day: 3,
        title: 'Sunrise Coffee & Slow Ridge Departure',
        morning: 'Sunrise watched directly from bed through floor-to-ceiling glass wall.',
        afternoon: 'Gentle check-out and scenic descent through eucalyptus plantations.',
        evening: 'Onward transit feeling completely recharged.',
        stay: 'Departure Transfer',
        highlight: 'Crisp 15°C morning mountain air and steaming freshly brewed coffee.'
      }
    ]
  }
];

