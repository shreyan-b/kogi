import { DestinationTrip, TravelStyle, LanguageCode } from '../types';

export interface LocalizedTravelStyle extends TravelStyle {
  localizedName: string;
  localizedBadge: string;
  localizedDesc: string;
  localizedStat: string;
}

export const LOCALIZED_TRAVEL_STYLES: Record<LanguageCode, Record<string, { name: string; badge: string; desc: string; stat: string }>> = {
  'en-IN': {
    relaxed: {
      name: 'Relaxed',
      badge: 'Muted Mist',
      desc: 'Unhurried days, scenic balconies, zero rush',
      stat: 'Avg daily cadence: 1–2 places',
    },
    adventure: {
      name: 'Adventure',
      badge: 'High Altitude',
      desc: 'High-altitude trails, hidden rapids, raw terrain',
      stat: 'Endurance profile: Strenuous',
    },
    luxury: {
      name: 'Luxury',
      badge: 'Bespoke Curation',
      desc: 'Private pools, bespoke dining, five-star heritage',
      stat: 'Tailored itineraries only',
    },
    family: {
      name: 'Family',
      badge: 'All Generations',
      desc: 'Spacious suites, child-friendly excursions, safety first',
      stat: 'Safety rating: Certified verified',
    },
    budget: {
      name: 'Budget',
      badge: 'Value Savvy',
      desc: 'High-value homestays, authentic local eats, savvy transit',
      stat: 'Optimized cost-per-mile',
    },
    culture: {
      name: 'Culture',
      badge: 'Heritage Living',
      desc: 'Historic temples, artisanal craft, living folklore',
      stat: 'Includes expert storytelling',
    },
  },
  'hi-IN': {
    relaxed: {
      name: 'शांत एवं सुकून',
      badge: 'धुंधली वादियाँ',
      desc: 'बिना किसी जल्दबाजी के दिन, खूबसूरत बालकनी दृश्य, पूर्ण शांति',
      stat: 'औसत दैनिक गति: 1–2 स्थान',
    },
    adventure: {
      name: 'रोमांचक यात्रा',
      badge: 'ऊंचे पर्वत',
      desc: 'ऊंचाई वाले ट्रेक, छिपी नदियां, कच्ची प्रकृति',
      stat: 'सहनशीलता स्तर: कठिन',
    },
    luxury: {
      name: 'विलासिता',
      badge: 'सर्वश्रेष्ठ क्यूरेशन',
      desc: 'निजी पूल, स्वादिष्ट स्थानीय भोजन, शाही हेरिटेज प्रवास',
      stat: 'केवल विशेष यात्रा योजनाएं',
    },
    family: {
      name: 'पारिवारिक प्रवास',
      badge: 'सभी पीढ़ियों के लिए',
      desc: 'विशाल सुइट, बच्चों के अनुकूल भ्रमण, सुरक्षा प्रथम',
      stat: 'सुरक्षा रेटिंग: प्रमाणित सुरक्षित',
    },
    budget: {
      name: 'बजट अनुकूल',
      badge: 'स्मार्ट बचत',
      desc: 'सस्ते होमस्टे, प्रामाणिक स्थानीय भोजन, कुशल पारगमन',
      stat: 'लागत-अनुकूलित यात्रा',
    },
    culture: {
      name: 'संस्कृति व विरासत',
      badge: 'ऐतिहासिक जीवन',
      desc: 'प्राचीन मंदिर, पारंपरिक शिल्प, जीवित लोककथाएं',
      stat: 'विशेषज्ञ कहानीकार शामिल',
    },
  },
  'ml-IN': {
    relaxed: {
      name: 'ശാന്തമായ വിശ്രമം',
      badge: 'മഞ്ഞു പുതച്ച താഴ്‌വര',
      desc: 'തിരക്കില്ലാത്ത ദിനങ്ങൾ, മനോഹരമായ ബാൽക്കണി കാഴ്ചകൾ',
      stat: 'ശരാശരി വേഗത: ദിവസേന 1–2 സ്ഥലങ്ങൾ',
    },
    adventure: {
      name: 'സാഹസിക യാത്ര',
      badge: 'ഉയർന്ന മലനിരകൾ',
      desc: 'ഉയരമുള്ള ട്രെക്കിംഗ് പാതകൾ, പുഴയോരങ്ങൾ, വന്യമായ ഭൂപ്രകൃതി',
      stat: 'ആയാസ നിലവാരം: കഠിനം',
    },
    luxury: {
      name: 'ലക്ഷ്വറി അനുഭവം',
      badge: 'വിശിഷ്ട പരിചരണം',
      desc: 'സ്വകാര്യ പൂളുകൾ, രുചികരമായ ഭക്ഷണം, പാരമ്പര്യ പ്രൗഢി',
      stat: 'പ്രത്യേകം തയ്യാറാക്കിയ യാത്രാക്രമങ്ങൾ',
    },
    family: {
      name: 'കുടുംബ യാത്ര',
      badge: 'എല്ലാ തലമുറകൾക്കും',
      desc: 'വിശാലമായ മുറികൾ, കുട്ടികൾക്ക് സുരക്ഷിതമായ വിനോദങ്ങൾ',
      stat: 'സുരക്ഷാ റേറ്റിംഗ്: സാക്ഷ്യപ്പെടുത്തിയത്',
    },
    budget: {
      name: 'ബജറ്റ് സൗഹൃദം',
      badge: 'മിതമായ ചിലവ്',
      desc: 'നല്ല ഹോംസ്റ്റേകൾ, തനത് നാടൻ ഭക്ഷണശാലകൾ, സൗകര്യപ്രദമായ യാത്ര',
      stat: 'ലാഭകരമായ യാത്രാ ചിലവ്',
    },
    culture: {
      name: 'പൈതൃകവും സംസ്കാരവും',
      badge: 'പാരമ്പര്യ ജീവിതം',
      desc: 'ചരിത്ര ക്ഷേത്രങ്ങൾ, കരകൗശല വിദ്യകൾ, തനത് കലാരൂപങ്ങൾ',
      stat: 'വിദഗ്ദ്ധ ഗൈഡിന്റെ സേവനം',
    },
  },
  'kn-IN': {
    relaxed: {
      name: 'ಶಾಂತ ವಿಶ್ರಾಂತಿ',
      badge: 'ಮಂಜಿನ ಕಣಿವೆ',
      desc: 'ಅವಸರವಿಲ್ಲದ ದಿನಗಳು, ರಮಣೀಯ ಬಾಲ್ಕನಿ ದೃಶ್ಯಗಳು, ನೆಮ್ಮದಿಯ ಕ್ಷಣಗಳು',
      stat: 'ದೈನಂದಿನ ಸರಾಸರಿ: ದಿನಕ್ಕೆ 1–2 ಸ್ಥಳಗಳು',
    },
    adventure: {
      name: 'ಸಾಹಸಮಯ ಪಯಣ',
      badge: 'ಉನ್ನತ ಶ್ರೇಣಿ',
      desc: 'ಎತ್ತರದ ಚಾರಣ ಹಾದಿಗಳು, ಅಜ್ಞಾತ ನದಿಗಳು, ನೈಸರ್ಗಿಕ ತಾಣಗಳು',
      stat: 'ಶ್ರಮದ ಮಟ್ಟ: ಕಠಿಣ',
    },
    luxury: {
      name: 'ಐಷಾರಾಮಿ',
      badge: 'ವಿಶೇಷ ಆತಿಥ್ಯ',
      desc: 'ಖಾಸಗಿ ಈಜುಕೊಳಗಳು, ವಿಶಿಷ್ಟ ಊಟೋಪಚಾರ, ಪಾರಂಪರಿಕ ಸೊಬಗು',
      stat: 'ವಿಶೇಷ ಯೋಜಿತ ಪ್ರವಾಸಗಳು ಮಾತ್ರ',
    },
    family: {
      name: 'ಕುಟುಂಬ ಪ್ರವಾಸ',
      badge: 'ಎಲ್ಲಾ ವಯೋಮಾನದವರಿಗೆ',
      desc: 'ವಿಶಾಲವಾದ ಕೋಣೆಗಳು, ಮಕ್ಕಳಿಗೆ ಸುರಕ್ಷಿತ ವಿಹಾರಗಳು',
      stat: 'ಸುರಕ್ಷತಾ ರೇಟಿಂಗ್: ದೃಢೀಕೃತ ಸುರಕ್ಷತೆ',
    },
    budget: {
      name: 'ಬಜೆಟ್ ಸ್ನೇಹಿ',
      badge: 'ಮಿತವ್ಯಯದ ಆಯ್ಕೆ',
      desc: 'ಉತ್ತಮ ಹೋಮ್‌ಸ್ಟೇಗಳು, ಸ್ಥಳೀಯ ಅಧಿಕೃತ ಊಟ, ಸಮರ್ಥ ಸಂಚಾರ',
      stat: 'ವೆಚ್ಚ-ದಕ್ಷ ಸಂಚಾರ',
    },
    culture: {
      name: 'ಸಂಸ್ಕೃತಿ ಮತ್ತು ಇತಿಹಾಸ',
      badge: 'ಪಾರಂಪರಿಕ ಬದುಕು',
      desc: 'ಪುರಾತನ ದೇವಾಲಯಗಳು, ಕರಕುಶಲ ಕಲೆಗಳು, ಜಾನಪದ ಹಿನ್ನೆಲೆ',
      stat: 'ತಜ್ಞ ಮಾರ್ಗದರ್ಶನ ಒಳಗೊಂಡಿದೆ',
    },
  },
  'ta-IN': {
    relaxed: {
      name: 'அமைதியான ஓய்வு',
      badge: 'பனிமூட்ட பள்ளத்தாக்கு',
      desc: 'அவசரமற்ற நாட்கள், இயற்கை பால்கனி காட்சிகள், மன அமைதி',
      stat: 'சராசரி தினசரி வேகம்: 1–2 இடங்கள்',
    },
    adventure: {
      name: 'சாகசப் பயணம்',
      badge: 'உயரமான மலைகள்',
      desc: 'உயரமான மலையேற்றப் பாதைகள், காட்டாறுகள், கரடுமுரடான நிலப்பரப்பு',
      stat: 'சிரம நிலை: கடினம்',
    },
    luxury: {
      name: 'ஆடம்பர தங்குமிடம்',
      badge: 'சிறப்பு கவனிப்பு',
      desc: 'தனியார் நீச்சல் குளங்கள், பிரத்யேக உணவுகள், ஐந்து நட்சத்திர பாரம்பரியம்',
      stat: 'வடிவமைக்கப்பட்ட திட்டங்கள் மட்டுமே',
    },
    family: {
      name: 'குடும்பப் பயணம்',
      badge: 'அனைத்து தலைமுறையினருக்கும்',
      desc: 'விசாலமான அறைகள், குழந்தைகளுக்கு ஏற்ற இடங்கள், பாதுகாப்புக்கு முன்னுரிமை',
      stat: 'பாதுகாப்பு மதிப்பீடு: சரிபார்க்கப்பட்டது',
    },
    budget: {
      name: 'குறைந்த பட்ஜெட்',
      badge: 'மதிப்புமிக்க தேர்வு',
      desc: 'உயர்தர ஹோம்ஸ்டேகள், பாரம்பரிய உள்ளூர் உணவு, சிறந்த போக்குவரத்து',
      stat: 'செலவு குறைந்த பயணம்',
    },
    culture: {
      name: 'பண்பாடு மற்றும் பாரம்பரியம்',
      badge: 'பாரம்பரிய வாழ்க்கை',
      desc: 'வரலாற்று சிறப்புமிக்க கோயில்கள், கைவினைப் பொருட்கள், நாட்டுப்புற கலைகள்',
      stat: 'வல்லுநர்களின் கதைகூறல் அடங்கும்',
    },
  },
};

export const LOCALIZED_PLACE_EXPLANATIONS: Record<LanguageCode, Record<string, {
  whyPicked: string;
  stayCategory: string;
  metaBadge: string;
  bullets: string[];
  climate: string;
  tags: string[];
}>> = {
  'en-IN': {
    'cloud-valley-tea-estate': {
      whyPicked: 'Matches your relaxed travel style and Munnar preference, while staying well within your ₹10,000 budget with verified silent valley views.',
      stayCategory: 'Tea Estate Bungalow',
      metaBadge: 'Mist View',
      climate: '17–20°C, rolling morning fog, silent valley',
      tags: ['Estate Bungalow', 'Mist View', 'Quiet Zone'],
      bullets: [
        'Matches your relaxed travel preference with quiet plantation pacing',
        'Fits comfortably under your ₹10,000 budget ceiling at ₹7,800/night',
        'Verified silent valley views away from commercial town traffic',
      ],
    },
    'the-spice-whispers': {
      whyPicked: 'High match for peaceful surroundings, home-cooked Kerala cuisine, and morning birdwatching paths directly adjoining the estate.',
      stayCategory: 'Cardamom Homestay',
      metaBadge: 'Cardamom Grove',
      climate: '19–22°C, fragrant canopy shade, gentle mountain stream',
      tags: ['Cardamom Grove', 'Culinary Trail', 'Private Stream'],
      bullets: [
        'High correspondence to authentic home-cooked Kerala cuisine',
        'Direct access to morning birdwatching trails along private stream',
        'Secluded 8km distance from central transit hubs preserves peaceful atmosphere',
      ],
    },
    'anamudi-edge-eco-cabins': {
      whyPicked: 'Highly rated for serene private balconies and panoramic mountain vistas directly satisfying your relaxation criteria without tour bus traffic.',
      stayCategory: 'Eco-Cabin',
      metaBadge: 'Ridge Balcony',
      climate: '15–18°C, crisp mountain air, pristine night sky',
      tags: ['Off-Grid Solar', 'Ridge Balcony', 'Stargazing Deck'],
      bullets: [
        'Panoramic mountain and reservoir vistas satisfying calm scenery criteria',
        'Solar off-grid architecture with private cantilevered stargazing decks',
        'High elevation (1,720m MSL) guarantees crisp mountain air without tour bus noise',
      ],
    },
  },
  'hi-IN': {
    'cloud-valley-tea-estate': {
      whyPicked: 'आपकी शांत यात्रा शैली और मुन्नार की पसंद से पूरी तरह मेल खाता है, ₹10,000 के बजट में शांत घाटी के दृश्यों के साथ।',
      stayCategory: 'चाय बागान बंगला',
      metaBadge: 'धुंध का दृश्य',
      climate: '17–20°C, सुबह का कोहरा, शांत घाटी',
      tags: ['एस्टेट बंगला', 'धुंध का दृश्य', 'शांत क्षेत्र'],
      bullets: [
        'शांत चाय बागानों के साथ आपकी धीमी और आरामदायक यात्रा पसंद के अनुकूल',
        '₹7,800/रात की दर से आपकी ₹10,000 की बजट सीमा के भीतर',
        'व्यावसायिक शहर के शोरगुल से दूर शांत घाटी के प्रमाणित दृश्य',
      ],
    },
    'the-spice-whispers': {
      whyPicked: 'शांत वातावरण, घर के बने केरल के व्यंजनों और एस्टेट से जुड़े सुबह के पक्षी दर्शन मार्गों के लिए सबसे उपयुक्त।',
      stayCategory: 'इलायची बागान होमस्टे',
      metaBadge: 'इलायची उपवन',
      climate: '19–22°C, सुगंधित छांव, शांत पहाड़ी झरना',
      tags: ['इलायची उपवन', 'पारंपरिक भोजन', 'निजी झरना'],
      bullets: [
        'घर पर बने प्रामाणिक केरल व्यंजनों के साथ उच्च तालमेल',
        'निजी झरने के किनारे सुबह के पक्षी दर्शन ट्रेक तक सीधी पहुंच',
        'मुख्य शहर से 8 किमी की दूरी जो शांत वातावरण बनाए रखती है',
      ],
    },
    'anamudi-edge-eco-cabins': {
      whyPicked: 'टूरिस्ट बसों के शोर-शराबे के बिना आपकी शांति की कसौटियों पर खरा उतरने वाली निजी बालकनियों और मनोरम दृश्यों के लिए उच्च रेटेड।',
      stayCategory: 'इको-केबिन',
      metaBadge: 'पहाड़ी बालकनी',
      climate: '15–18°C, ताज़ा पहाड़ी हवा, साफ तारों भरा आकाश',
      tags: ['सोलर ऊर्जा', 'पहाड़ी बालकनी', 'तारों का अवलोकन'],
      bullets: [
        'शांत परिदृश्य की आवश्यकताओं को पूरा करने वाले मनोरम पर्वत दृश्य',
        'निजी कैंटिलीवर स्टारगेज़िंग डेक के साथ पर्यावरण-अनुकूल लकड़ी के केबिन',
        '1,720 मीटर की ऊंचाई जहां बिना टूर बस के ताजी पहाड़ी हवा मिलती है',
      ],
    },
  },
  'ml-IN': {
    'cloud-valley-tea-estate': {
      whyPicked: 'നിങ്ങളുടെ ശാന്തമായ യാത്രാ ശൈലിക്കും മൂന്നാർ മുൻഗണനയ്ക്കും ഏറ്റവും അനുയോജ്യമായത്, ഒപ്പം ₹10,000 ബജറ്റിനുള്ളിൽ സ്ഥിരീകരിച്ച ശാന്തമായ താഴ്‌വര കാഴ്ചകൾ നൽകുന്നു.',
      stayCategory: 'ടീ എസ്റ്റേറ്റ് ബംഗ്ലാവ്',
      metaBadge: 'മഞ്ഞു കാഴ്ച',
      climate: '17–20°C, പുലർകാല മഞ്ഞ്, ശാന്തമായ താഴ്‌വര',
      tags: ['എസ്റ്റേറ്റ് ബംഗ്ലാവ്', 'മഞ്ഞു കാഴ്ച', 'ശാന്ത പ്രദേശം'],
      bullets: [
        'ശാന്തമായ തേയിലത്തോട്ടങ്ങളിലെ വേഗത കുറഞ്ഞ വിശ്രമ ദിനങ്ങൾക്ക് അനുയോജ്യം',
        'രാത്രിക്ക് ₹7,800 നിരക്കിൽ ₹10,000 ബജറ്റ് പരിധിക്കുള്ളിൽ ഭംഗിയായി ഒതുങ്ങുന്നു',
        'വാഹനങ്ങളുടെ തിരക്കുകളിൽ നിന്ന് മാറിയുള്ള ശാന്തമായ പ്രകൃതി ഭംഗി',
      ],
    },
    'the-spice-whispers': {
      whyPicked: 'സമാധാനപരമായ അന്തരീക്ഷം, വീട്ടിലുണ്ടാക്കുന്ന നാടൻ കേരളീയ ഭക്ഷണം, എസ്റ്റേറ്റിനോട് ചേർന്നുള്ള പ്രഭാത പക്ഷി നിരീക്ഷണ വഴികൾ എന്നിവയ്ക്ക് ഉയർന്ന പൊരുത്തം.',
      stayCategory: 'ഏലം പ്ലാന്റേഷൻ ഹോംസ്റ്റേ',
      metaBadge: 'ഏലത്തോട്ടം',
      climate: '19–22°C, സുഗന്ധമുള്ള തണൽ, കുളിർമയുള്ള കാട്ടരുവി',
      tags: ['ഏലത്തോട്ടം', 'നാടൻ രുചികൾ', 'സ്വകാര്യ അരുവി'],
      bullets: [
        'തനത് നാടൻ കേരളീയ ഭക്ഷണ വിഭവങ്ങളോട് ഉയർന്ന സാമ്യം',
        'സ്വകാര്യ അരുവിയോരത്ത് കൂടിയുള്ള പ്രഭാത പക്ഷി നിരീക്ഷണ വഴികൾ',
        'ടൗണിൽ നിന്ന് 8 കി.മീ മാറിയുള്ള തികച്ചും സ്വസ്ഥമായ താമസം',
      ],
    },
    'anamudi-edge-eco-cabins': {
      whyPicked: 'ടൂർ ബസുകളുടെ തിരക്കില്ലാതെ നിങ്ങളുടെ ശാന്തത മുൻഗണനകൾ പൂർണ്ണമായി തൃപ്തിപ്പെടുത്തുന്ന മനോഹരമായ സ്വകാര്യ ബാൽക്കണികൾക്കും പർവത കാഴ്ചകൾക്കും പേരുകേട്ടത്.',
      stayCategory: 'ഇക്കോ-ക്യാബിൻ',
      metaBadge: 'റിഡ്ജ് ബാൽക്കണി',
      climate: '15–18°C, ശുദ്ധമായ പർവത വായു, രാത്രിയിലെ നക്ഷത്രങ്ങൾ',
      tags: ['സോളാർ ഊർജ്ജം', 'റിഡ്ജ് ബാൽക്കണി', 'നക്ഷത്ര നിരീക്ഷണം'],
      bullets: [
        'ശാന്തമായ പ്രകൃതി സൗന്ദര്യം ഉറപ്പാക്കുന്ന വിസ്തൃതമായ പർവത തടാക കാഴ്ചകൾ',
        'സ്വകാര്യ സ്റ്റാർഗേസിങ് ഡെക്കുകളോടുകൂടിയ ഇക്കോ വുഡൻ ക്യാബിനുകൾ',
        '1,720 മീറ്റർ ഉയരത്തിൽ ടൂർ ബസ് ബഹളങ്ങളില്ലാത്ത തണുത്ത അന്തരീക്ഷം',
      ],
    },
  },
  'kn-IN': {
    'cloud-valley-tea-estate': {
      whyPicked: 'ನಿಮ್ಮ ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣ ಶೈಲಿ ಮತ್ತು ಮೂನ್ನಾರ್ ಆದ್ಯತೆಗೆ ಸೂಕ್ತವಾಗಿದೆ, ₹10,000 ಬಜೆಟ್‌ ಒಳಗಡೆ ನೈಸರ್ಗಿಕ ಕಣಿವೆಯ ಸುಂದರ ದೃಶ್ಯಗಳೊಂದಿಗೆ.',
      stayCategory: 'ಟೀ ಎಸ್ಟೇಟ್ ಬಂಗಲೆ',
      metaBadge: 'ಮಂಜಿನ ನೋಟ',
      climate: '17–20°C, ಮುಂಜಾನೆಯ ಮಂಜು, ಪ್ರಶಾಂತ ಕಣಿವೆ',
      tags: ['ಎಸ್ಟೇಟ್ ಬಂಗಲೆ', 'ಮಂಜಿನ ನೋಟ', 'ಶಾಂತ ವಲಯ'],
      bullets: [
        'ಶಾಂತ ತೋಟಗಳಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ರಾಂತಿಯ ಪ್ರಯಾಣ ಶೈಲಿಗೆ ಸಂಪೂರ್ಣ ಹೊಂದಾಣಿಕೆ',
        'ಪ್ರತಿ ರಾತ್ರಿಗೆ ₹7,800 ದರದಲ್ಲಿ ₹10,000 ಬಜೆಟ್ ಮಿತಿಯೊಳಗೆ ಸುಲಭವಾಗಿ ಲಭ್ಯ',
        'ವಾಣಿಜ್ಯ ನಗರದ ಗದ್ದಲವಿಲ್ಲದ ಶಾಂತ ಕಣಿವೆಯ ನೈಜ ನೋಟಗಳು',
      ],
    },
    'the-spice-whispers': {
      whyPicked: 'ಶಾಂತ ಪರಿಸರ, ಮನೆಯಲ್ಲಿ ತಯಾರಿಸಿದ ಕೇರಳದ ರುಚಿಕರ ಊಟ ಮತ್ತು ಬೆಳಗಿನ ಪಕ್ಷಿ ವೀಕ್ಷಣೆ ಹಾದಿಗಳಿಗೆ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ.',
      stayCategory: 'ಏಲಕ್ಕಿ ತೋಟದ ಹೋಮ್‌ಸ್ಟೇ',
      metaBadge: 'ಏಲಕ್ಕಿ ವನ',
      climate: '19–22°C, ಸುಗಂಧಭರಿತ ನೆರಳು, ಶುದ್ಧ ಹಳ್ಳದ ನೀರು',
      tags: ['ಏಲಕ್ಕಿ ವನ', 'ಸಾಂಪ್ರದಾಯಿಕ ಊಟ', 'ಖಾಸಗಿ ಹಳ್ಳ'],
      bullets: [
        'ಮನೆಯಲ್ಲಿ ತಯಾರಿಸಿದ ಅಧಿಕೃತ ಕೇರಳ ಶೈಲಿಯ ಊಟೋಪಚಾರ',
        'ಖಾಸಗಿ ಹಳ್ಳದ ಹತ್ತಿರ ಮುಂಜಾನೆಯ ಪಕ್ಷಿ ವೀಕ್ಷಣೆಯ ಪ್ರಶಾಂತ ಹಾದಿ',
        'ನಗರದಿಂದ 8 ಕಿಮೀ ದೂರವಿದ್ದು ಪ್ರಶಾಂತ ವಾತಾವರಣವನ್ನು ಕಾಪಾಡುತ್ತದೆ',
      ],
    },
    'anamudi-edge-eco-cabins': {
      whyPicked: 'ಪ್ರವಾಸಿ ವಾಹನಗಳ ದಟ್ಟಣೆಯಿಲ್ಲದೆ ನಿಮ್ಮ ಶಾಂತಿ ಆದ್ಯತೆಯನ್ನು ಪೂರೈಸುವ ಖಾಸಗಿ ಬಾಲ್ಕನಿಗಳು ಮತ್ತು ಅದ್ಭುತ ಪರ್ವತ ದೃಶ್ಯಗಳಿಗೆ ಹೆಸರುವಾಸಿ.',
      stayCategory: 'ಪರಿಸರ-ಸ್ನೇಹಿ ಕ್ಯಾಬಿನ್',
      metaBadge: 'ಪರ್ವತ ಬಾಲ್ಕನಿ',
      climate: '15–18°C, ಶುದ್ಧ ಪರ್ವತದ ತಂಗಾಳಿ, ನಕ್ಷತ್ರ ವೀಕ್ಷಣೆ',
      tags: ['ಸೌರ ಶಕ್ತಿ', 'ಪರ್ವತ ಬಾಲ್ಕನಿ', 'ನಕ್ಷತ್ರ ವೀಕ್ಷಣೆ'],
      bullets: [
        'ಪ್ರಶಾಂತ ಪರಿಸರದ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುವ ರಮಣೀಯ ಪರ್ವತ ದೃಶ್ಯಗಳು',
        'ಖಾಸಗಿ ನಕ್ಷತ್ರ ವೀಕ್ಷಣೆ ಡೆಕ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಸುಂದರ ಮರದ ಕ್ಯಾಬಿನ್‌ಗಳು',
        '1,720 ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿ ಟೂರ್ ಬಸ್‌ಗಳ ಸದ್ದುಗದ್ದಲವಿಲ್ಲದ ಶುದ್ಧ ವಾತಾವರಣ',
      ],
    },
  },
  'ta-IN': {
    'cloud-valley-tea-estate': {
      whyPicked: 'உங்கள் அமைதியான பயண பாணிக்கும் மூணாறு விருப்பத்திற்கும் பொருந்துகிறது, ₹10,000 பட்ஜெட்டுக்குள் அமைதியான பள்ளத்தாக்கு காட்சிகளுடன்.',
      stayCategory: 'தேயிலை தோட்ட பங்களா',
      metaBadge: 'பனிமூட்டக் காட்சி',
      climate: '17–20°C, காலை பனிமூட்டம், அமைதியான பள்ளத்தாக்கு',
      tags: ['தோட்ட பங்களா', 'பனிமூட்டக் காட்சி', 'அமைதி மண்டலம்'],
      bullets: [
        'அமைதியான தேயிலைத் தோட்டங்களில் உங்கள் மெதுவான பயண பாணிக்கு ஏற்றது',
        'இரவுக்கு ₹7,800 கட்டணத்தில் உங்கள் ₹10,000 பட்ஜெட்டுக்குள் அடங்குகிறது',
        'நகர நெரிசலற்ற அமைதியான பள்ளத்தாக்கு காட்சிகள்',
      ],
    },
    'the-spice-whispers': {
      whyPicked: 'அமைதியான சூழல், பாரம்பரிய கேரள உணவு மற்றும் தோட்டத்தை ஒட்டிய காலை பறவை கண்காணிப்பு பாதைகளுக்கு மிகச் சிறந்த பொருத்தம்.',
      stayCategory: 'ஏலக்காய் தோட்ட ஹோம்ஸ்டே',
      metaBadge: 'ஏலக்காய் தோப்பு',
      climate: '19–22°C, நறுமண மர நிழல், சிறிய மலை ஓடை',
      tags: ['ஏலக்காய் தோப்பு', 'பாரம்பரிய உணவு', 'தனியார் ஓடை'],
      bullets: [
        'வீட்டில் சமைத்த பாரம்பரிய கேரள உணவுடன் கூடிய உயர்தர பொருத்தம்',
        'தனியார் ஓடை ஓரமாக காலைப் பறவை கண்காணிப்பு நடைப்பயிற்சி',
        'மையப் பகுதியிலிருந்து 8 கி.மீ தொலைவில் அமைதியான சூழல்',
      ],
    },
    'anamudi-edge-eco-cabins': {
      whyPicked: 'சுற்றுலா பேருந்துகளின் நெரிசலின்றி உங்கள் அமைதி விருப்பங்களை முழுமையாக பூர்த்தி செய்யும் தனியார் பால்கனிகள் மற்றும் மலைக் காட்சிகளுக்குப் புகழ்பெற்றது.',
      stayCategory: 'சுற்றுச்சூழல் மர கேபின்',
      metaBadge: 'மலை பால்கனி',
      climate: '15–18°C, தூய மலைக் காற்று, தெளிவான விண்மீன் இரவு',
      tags: ['சூரிய ஒளி மின்சாரம்', 'மலை பால்கனி', 'விண்மீன் தளம்'],
      bullets: [
        'அமைதியான இயற்கை காட்சிகளை பூர்த்தி செய்யும் பரந்த மலைக் காட்சிகள்',
        'தனியார் விண்மீன் பார்வை தளங்களுடன் கூடிய மர கேபின்கள்',
        '1,720 மீ உயரத்தில் சுற்றுலாப் பேருந்துகளின் இரைச்சலற்ற சூழல்',
      ],
    },
  },
};

export const LOCALIZED_CADENCE_LABELS: Record<LanguageCode, Record<string, string>> = {
  'en-IN': {
    Relaxed: 'Relaxed',
    Moderate: 'Moderate',
    'Action-packed': 'Action-packed',
    Immersive: 'Immersive',
  },
  'hi-IN': {
    Relaxed: 'शांत (आरामदेह)',
    Moderate: 'संतुलित',
    'Action-packed': 'सक्रिय/रोमांचक',
    Immersive: 'गहन अन्वेषण',
  },
  'ml-IN': {
    Relaxed: 'ശാന്തം',
    Moderate: 'മിതമായത്',
    'Action-packed': 'സാഹസികം',
    Immersive: 'ആഴത്തിലുള്ളത്',
  },
  'kn-IN': {
    Relaxed: 'ವಿಶ್ರಾಂತಿ',
    Moderate: 'ಸಮತೋಲಿತ',
    'Action-packed': 'ಚುರುಕಾದ',
    Immersive: 'ಆಳವಾದ',
  },
  'ta-IN': {
    Relaxed: 'அமைதியான',
    Moderate: 'மிதமான',
    'Action-packed': 'விறுவிறுப்பான',
    Immersive: 'ஆழமான',
  },
};

export const LOCALIZED_CATEGORIES: Record<LanguageCode, Record<string, string>> = {
  'en-IN': {
    Homestay: 'Homestay',
    'Tea Estate': 'Tea Estate',
    'Boutique Villa': 'Boutique Villa',
    'Eco-Cottage': 'Eco-Cottage',
  },
  'hi-IN': {
    Homestay: 'होमस्टे',
    'Tea Estate': 'चाय बागान',
    'Boutique Villa': 'बुटीक विला',
    'Eco-Cottage': 'इको-कॉटेज',
  },
  'ml-IN': {
    Homestay: 'ഹോംസ്റ്റേ',
    'Tea Estate': 'ടീ എസ്റ്റേറ്റ്',
    'Boutique Villa': 'ബൊട്ടീക് വില്ല',
    'Eco-Cottage': 'ഇക്കോ-കോട്ടേജ്',
  },
  'kn-IN': {
    Homestay: 'ಹೋಮ್‌ಸ್ಟೇ',
    'Tea Estate': 'ಟೀ ಎಸ್ಟೇಟ್',
    'Boutique Villa': 'ಬುಟಿಕ್ ವಿಲ್ಲಾ',
    'Eco-Cottage': 'ಪರಿಸರ ಕಾಟೇಜ್',
  },
  'ta-IN': {
    Homestay: 'ஹோம்ஸ்டே',
    'Tea Estate': 'தேயிலைத் தோட்டம்',
    'Boutique Villa': 'புட்டிக் வில்லா',
    'Eco-Cottage': 'சுற்றுச்சூழல் குடில்',
  },
};

export const LOCALIZED_COLD_START: Record<LanguageCode, {
  step1: {
    question: string;
    sub: string;
    options: Array<{ id: string; title: string; desc: string; badge: string }>;
  };
  step2: {
    question: string;
    sub: string;
    options: Array<{ id: string; name: string; icon: string; temp: string }>;
  };
  step3: {
    question: string;
    sub: string;
    budgetLabel: string;
    budgets: Array<{ id: string; label: string; range: string }>;
    transitLabel: string;
    transits: Array<{ id: string; label: string; desc: string }>;
  };
}> = {
  'en-IN': {
    step1: {
      question: 'What is your ideal daily travel pacing?',
      sub: 'Sarathi adjusts itinerary density so you never feel exhausted or rushed.',
      options: [
        {
          id: 'slow',
          title: 'Slow Sensory Cadence',
          desc: '1–2 leisurely spots per day. Ample balcony reading, lingering breakfasts, zero schedule stress.',
          badge: 'Recommended for deep restoration',
        },
        {
          id: 'balanced',
          title: 'Curated Rhythm',
          desc: '2–3 focal experiences with dedicated afternoon rest and relaxed evening strolls.',
          badge: 'Harmonious balance',
        },
        {
          id: 'fast',
          title: 'High-Density Exploration',
          desc: 'Early morning to twilight immersion covering multiple landmarks, treks, and hidden alleys.',
          badge: 'Maximum geographic breadth',
        },
      ],
    },
    step2: {
      question: 'Which climatic micro-zone calls to you?',
      sub: 'Vector cognition maps temperature, humidity, cloud cover, and elevation.',
      options: [
        { id: 'mist-mountain', name: 'High Mist & Mountain Fog', icon: 'cloud', temp: '16–21°C' },
        { id: 'backwaters', name: 'Canal Waters & Lotus Estuaries', icon: 'water', temp: '26–29°C' },
        { id: 'dense-forest', name: 'Deep Evergreen Forest & Plantations', icon: 'forest', temp: '19–24°C' },
        { id: 'heritage', name: 'Ancient Monoliths & Golden Light', icon: 'temple_hindu', temp: '24–30°C' },
      ],
    },
    step3: {
      question: 'Budget tier & transit comfort',
      sub: 'Transparent cost modeling per person including stays, meals, and private transfers.',
      budgetLabel: 'Budget Cadence',
      budgets: [
        { id: 'value', label: 'Value Savvy', range: '₹8k–15k / trip' },
        { id: 'comfort', label: 'Refined Comfort', range: '₹15k–25k / trip' },
        { id: 'luxury', label: 'Curated Heritage', range: '₹25k–50k+ / trip' },
      ],
      transitLabel: 'Transit Preference',
      transits: [
        { id: 'private-chauffeur', label: 'Private Chauffeur & Scenic Breaks', desc: 'Door-to-door comfort' },
        { id: 'scenic-train', label: 'Scenic Ghat Railways & Heritage Rails', desc: 'Scenic slow movement' },
        { id: 'self-drive', label: 'Self-Drive SUV on Mountain Passes', desc: 'Active freedom' },
      ],
    },
  },
  'hi-IN': {
    step1: {
      question: 'आपकी आदर्श दैनिक यात्रा गति क्या है?',
      sub: 'सारथी यात्रा की सघनता को समायोजित करता है ताकि आप थका हुआ महसूस न करें।',
      options: [
        {
          id: 'slow',
          title: 'धीमी एवं सुकून भरी गति',
          desc: 'प्रतिदिन 1–2 स्थान। बालकनी में सुकून से पढ़ना, इत्मीनान से नाश्ता, कोई भागदौड़ नहीं।',
          badge: 'गहरे मानसिक विश्राम के लिए अनुशंसित',
        },
        {
          id: 'balanced',
          title: 'संतुलित लय',
          desc: 'दोपहर के विश्राम और शाम की आरामदायक सैर के साथ 2–3 चुनिंदा अनुभव।',
          badge: 'सामंजस्यपूर्ण संतुलन',
        },
        {
          id: 'fast',
          title: 'सक्रिय एवं गहन अन्वेषण',
          desc: 'सुबह से शाम तक कई प्रमुख आकर्षणों, ट्रैक्स और गलियों का अन्वेषण।',
          badge: 'अधिकतम भौगोलिक विस्तार',
        },
      ],
    },
    step2: {
      question: 'कौन सा मौसमी वातावरण आपको आकर्षित करता है?',
      sub: 'वेक्टर संज्ञान तापमान, आर्द्रता, बादल और ऊंचाई का विश्लेषण करता है।',
      options: [
        { id: 'mist-mountain', name: 'धुंध और पहाड़ी कोहरा', icon: 'cloud', temp: '16–21°C' },
        { id: 'backwaters', name: 'बैकवाटर नहरें और कमल के मुहाने', icon: 'water', temp: '26–29°C' },
        { id: 'dense-forest', name: 'सदाबहार वन और बागान', icon: 'forest', temp: '19–24°C' },
        { id: 'heritage', name: 'प्राचीन ऐतिहासिक धरोहर', icon: 'temple_hindu', temp: '24–30°C' },
      ],
    },
    step3: {
      question: 'बजट श्रेणी और यात्रा सुविधा',
      sub: 'रहने, भोजन और निजी स्थानान्तरण सहित पारदर्शी लागत मॉडलिंग।',
      budgetLabel: 'बजट स्तर',
      budgets: [
        { id: 'value', label: 'स्मार्ट बजट', range: '₹8k–15k / यात्रा' },
        { id: 'comfort', label: 'उत्तम सुविधा', range: '₹15k–25k / यात्रा' },
        { id: 'luxury', label: 'शाही विलासिता', range: '₹25k–50k+ / यात्रा' },
      ],
      transitLabel: 'यात्रा माध्यम वरीयता',
      transits: [
        { id: 'private-chauffeur', label: 'निजी शॉफर व मनोरम पड़ाव', desc: 'डोर-टू-डोर पूर्ण आराम' },
        { id: 'scenic-train', label: 'सुंदर घाट रेलवे व हेरिटेज ट्रेन', desc: 'सुंदर धीमी गति' },
        { id: 'self-drive', label: 'पहाड़ी दर्रों पर सेल्फ-ड्राइव एसयूवी', desc: 'पूर्ण स्वतंत्रता' },
      ],
    },
  },
  'ml-IN': {
    step1: {
      question: 'നിങ്ങളുടെ അനുയോജ്യമായ യാത്രാവേഗത ഏതാണ്?',
      sub: 'യാത്രാ ക്ഷീണം ഒഴിവാക്കാൻ അനുയോജ്യമായ രീതിയിൽ സാരാഥി സമയം ക്രമീകരിക്കുന്നു.',
      options: [
        {
          id: 'slow',
          title: 'ശാന്തവും സാവധാനവുമായ യാത്ര',
          desc: 'ദിവസേന 1–2 വിശ്രമ കേന്ദ്രങ്ങൾ. ബാൽക്കണി വായന, നീണ്ട പ്രഭാതഭക്ഷണം, ഒട്ടും തിടുക്കമില്ല.',
          badge: 'പൂർണ്ണ മാനസിക ഉന്മേഷത്തിന് അനുയോജ്യം',
        },
        {
          id: 'balanced',
          title: 'മിതമായ യാത്രാ താളം',
          desc: 'ഉച്ചവിശ്രമത്തോടും സായാഹ്ന നടത്തത്തോടും കൂടിയുള്ള 2–3 അനുഭവങ്ങൾ.',
          badge: 'സന്തുലിതമായ രീതി',
        },
        {
          id: 'fast',
          title: 'തീവ്രമായ പര്യവേക്ഷണം',
          desc: 'രാവിലെ മുതൽ സന്ധ്യ വരെ വിവിധ കേന്ദ്രങ്ങളും ട്രെക്കിംഗുകളും ഉൾപ്പെടുന്ന യാത്ര.',
          badge: 'കൂടുതൽ സ്ഥലങ്ങൾ കാണാം',
        },
      ],
    },
    step2: {
      question: 'ഏതു തരം കാലാവസ്ഥയാണ് താങ്കൾക്കിഷ്ടം?',
      sub: 'താപനില, ഈർപ്പം, മഞ്ഞ്, ഉയരം എന്നിവ വിശകലനം ചെയ്യുന്നു.',
      options: [
        { id: 'mist-mountain', name: 'തണുത്ത മഞ്ഞും മലനിരകളും', icon: 'cloud', temp: '16–21°C' },
        { id: 'backwaters', name: 'കായലുകളും ഓളപ്പരപ്പും', icon: 'water', temp: '26–29°C' },
        { id: 'dense-forest', name: 'ഹരിത വനങ്ങളും തോട്ടങ്ങളും', icon: 'forest', temp: '19–24°C' },
        { id: 'heritage', name: 'പൈതൃക സ്മാരകങ്ങളും ക്ഷേത്രങ്ങളും', icon: 'temple_hindu', temp: '24–30°C' },
      ],
    },
    step3: {
      question: 'ബജറ്റ് സൗകര്യങ്ങളും യാത്രാ രീതിയും',
      sub: 'താമസം, ഭക്ഷണം, വാഹനം എന്നിവ ഉൾപ്പെടുന്ന സുതാര്യമായ കണക്കുകൂട്ടൽ.',
      budgetLabel: 'ബജറ്റ് തരം',
      budgets: [
        { id: 'value', label: 'മിതമായ ബജറ്റ്', range: '₹8k–15k / യാത്ര' },
        { id: 'comfort', label: 'നല്ല സൗകര്യം', range: '₹15k–25k / യാത്ര' },
        { id: 'luxury', label: 'പൈതൃക ആഡംബരം', range: '₹25k–50k+ / യാത്ര' },
      ],
      transitLabel: 'വാഹന തിരഞ്ഞെടുപ്പ്',
      transits: [
        { id: 'private-chauffeur', label: 'സ്വകാര്യ ഡ്രൈവർ വാഹനം', desc: 'പൂർണ്ണ സൗകര്യപ്രദമായ യാത്ര' },
        { id: 'scenic-train', label: 'പർവത തീവണ്ടി യാത്ര', desc: 'മനോഹരമായ കാഴ്ചകൾ ആസ്വദിക്കാം' },
        { id: 'self-drive', label: 'സ്വയം ഓടിക്കുന്ന എസ്.യു.വി', desc: 'സ്വാതന്ത്ര്യത്തോടെയുള്ള യാത്ര' },
      ],
    },
  },
  'kn-IN': {
    step1: {
      question: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ದೈನಂದಿನ ಪ್ರಯಾಣ ವೇಗ ಯಾವುದು?',
      sub: 'ಪ್ರಯಾಣದ ಆಯಾಸ ತಪ್ಪಿಸಲು ಸಾರಥಿ ಸಮಯ ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ.',
      options: [
        {
          id: 'slow',
          title: 'ಶಾಂತ ಹಾಗೂ ಸಾವಧಾನದ ಗತಿ',
          desc: 'ದಿನಕ್ಕೆ 1–2 ಸ್ಥಳಗಳು. ಬಾಲ್ಕನಿಯಲ್ಲಿ ಓದುವುದು, ನಿರಾಳ ಉಪಹಾರ, ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲ.',
          badge: 'ಸಂಪೂರ್ಣ ವಿಶ್ರಾಂತಿಗೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
        },
        {
          id: 'balanced',
          title: 'ಸಮತೋಲಿತ ಲಯ',
          desc: 'ಮಧ್ಯಾಹ್ನದ ವಿಶ್ರಾಂತಿ ಮತ್ತು ಸಂಜೆಯ ನಡಿಗೆಯೊಂದಿಗೆ 2–3 ಪ್ರಮುಖ ಅನುಭವಗಳು.',
          badge: 'ಉತ್ತಮ ಸಮತೋಲನ',
        },
        {
          id: 'fast',
          title: 'ಸಕ್ರಿಯ ಹಾಗೂ ತೀವ್ರ ಅನ್ವೇಷಣೆ',
          desc: 'ಮುಂಜಾನೆಯಿಂದ ಸಂಜೆಯವರೆಗೆ ಅನೇಕ ಪ್ರವಾಸಿ ತಾಣಗಳು ಮತ್ತು ಚಾರಣಗಳ ಭೇಟಿ.',
          badge: 'ಗರಿಷ್ಠ ಸ್ಥಳಗಳ ಅನ್ವೇಷಣೆ',
        },
      ],
    },
    step2: {
      question: 'ಯಾವ ಹವಾಮಾನ ವಾತಾವರಣವು ನಿಮ್ಮನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ?',
      sub: 'ತಾಪಮಾನ, ತೇವಾಂಶ, ಮಂಜು ಮತ್ತು ಎತ್ತರವನ್ನು ವೆಕ್ಟರ್ ಕಾಗ್ನಿಷನ್ ಅಳೆಯುತ್ತದೆ.',
      options: [
        { id: 'mist-mountain', name: 'ದಟ್ಟ ಮಂಜು ಮತ್ತು ಪರ್ವತಗಳು', icon: 'cloud', temp: '16–21°C' },
        { id: 'backwaters', name: 'ಕಾಲುವೆ ನೀರು ಮತ್ತು ಹಿನ್ನೀರು', icon: 'water', temp: '26–29°C' },
        { id: 'dense-forest', name: 'ನಿತ್ಯಹರಿದ್ವರ್ಣ ಅರಣ್ಯ ಮತ್ತು ತೋಟಗಳು', icon: 'forest', temp: '19–24°C' },
        { id: 'heritage', name: 'ಪುರಾತನ ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಇತಿಹಾಸ', icon: 'temple_hindu', temp: '24–30°C' },
      ],
    },
    step3: {
      question: 'ಬಜೆಟ್ ಹಂತ ಮತ್ತು ಪ್ರಯಾಣ ಸೌಕರ್ಯ',
      sub: 'ವಸತಿ, ಊಟ ಮತ್ತು ಸಾರಿಗೆ ಒಳಗೊಂಡ ಪಾರದರ್ಶಕ ವೆಚ್ಚದ ಮಾದರಿ.',
      budgetLabel: 'ಬಜೆಟ್ ಹಂತ',
      budgets: [
        { id: 'value', label: 'ಮಿತವ್ಯಯದ ಆಯ್ಕೆ', range: '₹8k–15k / ಪ್ರವಾಸ' },
        { id: 'comfort', label: 'ಉತ್ತಮ ಆರಾಮ', range: '₹15k–25k / ಪ್ರವಾಸ' },
        { id: 'luxury', label: 'ಪಾರಂಪರಿಕ ಐಷಾರಾಮಿ', range: '₹25k–50k+ / ಪ್ರವಾಸ' },
      ],
      transitLabel: 'ಸಾರಿಗೆ ಆಯ್ಕೆ',
      transits: [
        { id: 'private-chauffeur', label: 'ಖಾಸಗಿ ಚಾಲಕ ವಾಹನ', desc: 'ಸಂಪೂರ್ಣ ಆರಾಮದಾಯಕ ಪ್ರಯಾಣ' },
        { id: 'scenic-train', label: 'ರಮಣೀಯ ಘಾಟ್ ರೈಲು ಪಯಣ', desc: 'ಸುಂದರ ದೃಶ್ಯಗಳ ವೀಕ್ಷಣೆ' },
        { id: 'self-drive', label: 'ಸ್ವಯಂ ಚಾಲನಾ ಎಸ್‌ಯುವಿ', desc: 'ಸ್ವತಂತ್ರ ಪ್ರಯಾಣ' },
      ],
    },
  },
  'ta-IN': {
    step1: {
      question: 'உங்கள் விருப்பமான தினசரி பயண வேகம் என்ன?',
      sub: 'பயணச் சோர்வைத் தவிர்க்கும் வகையில் சாரதி பயணத்திட்டத்தை அமைக்கிறது.',
      options: [
        {
          id: 'slow',
          title: 'மெதுவான மற்றும் அமைதியான வேகம்',
          desc: 'நாளுக்கு 1–2 இடங்கள். பால்கனியில் வாசிப்பு, நிதானமான காலை உணவு, அவசரமில்லை.',
          badge: 'ஆழ்ந்த மன அமைதிக்கு ஏற்றது',
        },
        {
          id: 'balanced',
          title: 'சமநிலையான ரிதம்',
          desc: 'மதிய ஓய்வு மற்றும் மாலை நேர நடையுடன் கூடிய 2–3 முக்கிய இடங்கள்.',
          badge: 'சீரான சமநிலை',
        },
        {
          id: 'fast',
          title: 'தீவிர ஆய்வுப் பயணம்',
          desc: 'காலை முதல் மாலை வரை பல இடங்கள் மற்றும் மலையேற்றங்களை உள்ளடக்கியது.',
          badge: 'அதிக இடங்களைப் பார்க்கும் வாய்ப்பு',
        },
      ],
    },
    step2: {
      question: 'எந்த வகையான தட்பவெப்ப சூழல் உங்களை ஈர்க்கிறது?',
      sub: 'வெப்பநிலை, ஈரப்பதம், பனிமூட்டம் மற்றும் உயரத்தை பகுப்பாய்வு செய்கிறது.',
      options: [
        { id: 'mist-mountain', name: 'அடர்ந்த பனிமூட்டம் மற்றும் மலைகள்', icon: 'cloud', temp: '16–21°C' },
        { id: 'backwaters', name: 'கால்வாய் நீர் மற்றும் காயல் பகுதிகள்', icon: 'water', temp: '26–29°C' },
        { id: 'dense-forest', name: 'பசுமை காடுகள் மற்றும் தோட்டங்கள்', icon: 'forest', temp: '19–24°C' },
        { id: 'heritage', name: 'பாரம்பரிய கோயில்கள் மற்றும் கலைகள்', icon: 'temple_hindu', temp: '24–30°C' },
      ],
    },
    step3: {
      question: 'பட்ஜெட் மற்றும் பயண வசதி',
      sub: 'தங்குமிடம், உணவு மற்றும் தனியார் வாகனப் போக்குவரத்து உள்ளடக்கிய மதிப்பீடு.',
      budgetLabel: 'பட்ஜெட் நிலை',
      budgets: [
        { id: 'value', label: 'சிக்கன தேர்வு', range: '₹8k–15k / பயணம்' },
        { id: 'comfort', label: 'வசதியான தங்குமிடம்', range: '₹15k–25k / பயணம்' },
        { id: 'luxury', label: 'பாரம்பரிய ஆடம்பரம்', range: '₹25k–50k+ / பயணம்' },
      ],
      transitLabel: 'வாகன விருப்பம்',
      transits: [
        { id: 'private-chauffeur', label: 'பிரத்யேக ஓட்டுநர் வாகனம்', desc: 'முழுமையான சௌகரியம்' },
        { id: 'scenic-train', label: 'மலை ரயில் பயணம்', desc: 'அழகிய காட்சிகளை ரசிக்கலாம்' },
        { id: 'self-drive', label: 'சுயமாக ஓட்டும் எஸ்யுவி', desc: 'சுதந்திரமான பயணம்' },
      ],
    },
  },
};

