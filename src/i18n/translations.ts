import { LanguageCode } from '../types';

export interface TranslationDictionary {
  [key: string]: string | undefined;
  // Navigation & Shell
  navDiscover: string;
  navRecommendations: string;
  navSavedTrips: string;
  navLiveSession: string;
  navEvaluation: string;
  personalizationActive: string;
  recalibratePreferences: string;
  travelPreferences: string;
  cognitiveSettings: string;
  profile: string;
  savedJourneys: string;
  brandTagline: string;
  brandSubtitle: string;

  // Common Actions
  saveToTrip: string;
  savedInTrip: string;
  viewDetails: string;
  resetAll: string;
  resetFilters: string;
  apply: string;
  cancel: string;
  exportPortfolio: string;
  close: string;

  // Discover Screen
  discoverEyebrow: string;
  discoverTitle: string;
  discoverSubtitle: string;
  searchPlaceholder: string;
  synthesizeBtn: string;
  synthesizing: string;
  quickTries: string;
  quickPromptMunnar: string;
  quickPromptCoorg: string;
  quickPromptGoa: string;
  quickPromptSpiti: string;
  exploreTravelStyles: string;
  calibrateBaseline: string;

  // Recommendations Screen
  recEyebrow: string;
  recTitle: string;
  recSubtitle: string;
  activeQuery: string;
  editQuery: string;
  adaptationNoticeTitle: string;
  adaptationNoticeSub: string;
  whyThisPick: string;
  whySarathiRecommended: string;
  whatInfluenced: string;
  matchBadge: string;
  nightRate: string;
  verifiedQuietZone: string;
  evidenceRelaxed: string;
  evidenceBudget: string;
  evidenceMunnar: string;
  factorRelaxed: string;
  factorNature: string;
  factorBudget: string;
  factorMunnar: string;
  personalizedForYou: string;
  personalizedSub: string;
  queryMatch: string;
  preferenceMatch: string;
  sessionRelevance: string;
  filterDestination: string;
  filterBudget: string;
  filterTravelStyle: string;
  filterCategory: string;
  filterRating: string;
  filterLanguage: string;
  filterRatingHigh: string;
  emptyRecommendations: string;
  emptyRecommendationsSub: string;

  // Saved Trips Screen
  savedEyebrow: string;
  savedTitle: string;
  savedSubtitle: string;
  savedEmptyTitle: string;
  savedEmptySub: string;
  exploreDestinations: string;
  travelerNotes: string;
  addNotesPlaceholder: string;
  departureDate: string;
  travelersCount: string;
  removeTrip: string;
  editNotes: string;
  saveNotes: string;

  // Live Session Adaptation Screen
  liveEyebrow: string;
  liveTitle: string;
  liveSubtitle: string;
  simulateJudgeAction: string;
  saveNatureStay: string;
  saveBeachStay: string;
  saveAdventureTrek: string;
  dismissHotel: string;
  stageBeforeTitle: string;
  stageBeforeDesc: string;
  stageAfterTitle: string;
  stageAfterDesc: string;
  signalShiftsTitle: string;
  signalShiftsSub: string;
  natureAffinity: string;
  seclusionAffinity: string;
  commercialTolerance: string;

  // Evaluation Dashboard Screen
  evalEyebrow: string;
  evalTitle: string;
  evalSubtitle: string;
  ablationReportTitle: string;
  ablationReportDesc: string;
  testQueriesLabel: string;
  retrievalOnly: string;
  retrievalPlusRerank: string;
  measuredDelta: string;
  whatDeltaMeans: string;
  intentParserTitle: string;
  intentParserSub: string;
  runBenchmark: string;
  evaluating: string;

  // Cold Start Modal
  coldStartTitle: string;
  coldStartSubtitle: string;
  stepPace: string;
  stepAtmosphere: string;
  stepBudget: string;
  continueBtn: string;
  skipForNow: string;

  // Voice Search Modal
  voiceTitle: string;
  voiceListening: string;
  voiceHint: string;
  voiceApply: string;

  // Toasts
  toastSaved: string;
  toastRemoved: string;
  toastNotesUpdated: string;
  toastPrefsCalibrated: string;
  toastExportSuccess: string;

  // Additional UI keys
  filterTitle?: string;
  less?: string;
  whySarathiPickedThis?: string;
  skip?: string;
  back?: string;
  nextStep?: string;
  savePreferences?: string;
  liveSessionEyebrow?: string;
  liveSessionTitle?: string;
  liveSessionSubtitle?: string;

  microClimate?: string;
  elevation?: string;
  crowdFriction?: string;
  sparse?: string;
  optimalWindow?: string;
  synthesizedIntent?: string;
  dailyCadenceItinerary?: string;
  dayMorning?: string;
  dayAfternoon?: string;
  dayEvening?: string;
  keyMoment?: string;
  instantReserveFor?: string;
  cognitiveMatch?: string;
  coldStartStepOf?: string;
  idealPacingQuestion?: string;
  idealPacingSub?: string;
  climaticZoneQuestion?: string;
  climaticZoneSub?: string;
  budgetProfileQuestion?: string;
  budgetProfileSub?: string;
  activeIndicator?: string;
  excellentRating?: string;
  realtimeCognitiveAlignment?: string;
  learnsFromSavesClicks?: string;
  showingAcrossQueries?: string;
  statisticallySignificant?: string;
  ablationSummaryTitle?: string;
  ablationSummarySub?: string;
  semanticMoodscapes?: string;
  curatedVectorEmbeddings?: string;
  clickVibeCard?: string;
  liveRealWorldTrajectories?: string;
  tripsSynthesizedPrompts?: string;
  neuralGatewayUpdated?: string;
  evaluatesClimaticMicrozones?: string;
  embeddingsIndexedLabel?: string;
  semanticLatencyLabel?: string;
  spotsCount?: string;
  noCustomNotesPrompt?: string;
  dayLabel?: string;
  savedOnDate?: string;
  location?: string;
  searchDestination?: string;
  getDirections?: string;
  openInGoogleMaps?: string;
  nearby?: string;
  selectedLocation?: string;
  mapView?: string;
  listView?: string;
  guestRating?: string;
  anyRating?: string;
  sortBy?: string;
  sortRecommended?: string;
  sortHighestRated?: string;
  sortLowestPrice?: string;
  sortHighestPrice?: string;
  mapUnavailable?: string;
  mapUnavailableSub?: string;
  yourTravelStyle?: string;
  sarathiPersonalizeCombo?: string;
  travelStylePresets?: string;
  clearStyles?: string;
  exploreAllMap?: string;
  searchPlacesPlaceholder?: string;
}

const COMMON_EXTRA_STRINGS: Record<LanguageCode, Partial<TranslationDictionary>> = {
  'en-IN': {
    filterTitle: 'Filters',
    less: 'Less',
    whySarathiPickedThis: 'Why Sarathi picked this',
    skip: 'Skip for now',
    back: 'Back',
    nextStep: 'Next Step',
    savePreferences: 'Activate Personalized Engine',
    microClimate: 'Micro-Climate',
    elevation: 'Elevation',
    crowdFriction: 'Crowd Friction',
    sparse: 'Sparse',
    optimalWindow: 'Optimal Window',
    synthesizedIntent: 'Synthesized Traveler Intent',
    dailyCadenceItinerary: 'Daily Cadence & Itinerary',
    dayMorning: 'Morning',
    dayAfternoon: 'Afternoon',
    dayEvening: 'Evening',
    keyMoment: 'Key moment',
    instantReserveFor: 'Instant Reserve for',
    cognitiveMatch: 'Cognitive Match',
    coldStartStepOf: 'Cold-Start Calibration • Step',
    idealPacingQuestion: 'What is your ideal daily travel pacing?',
    idealPacingSub: 'Sarathi adjusts itinerary density so you never feel exhausted or rushed.',
    climaticZoneQuestion: 'Which climatic micro-zone calls to you?',
    climaticZoneSub: 'Vector cognition maps temperature, humidity, cloud cover, and elevation.',
    budgetProfileQuestion: 'What is your preferred trip budget profile?',
    budgetProfileSub: 'Curates boutique heritage properties, luxury estates, or savvy homestays.',
    activeIndicator: 'Active',
    excellentRating: '4.5+ Excellent',
    realtimeCognitiveAlignment: 'Real-time cognitive alignment',
    learnsFromSavesClicks: 'Learns from your saves & clicks in real time.',
    showingAcrossQueries: 'Showing results across',
    statisticallySignificant: 'Statistically Significant (p < 0.01)',
    ablationSummaryTitle: 'Ablation Summary: Baseline Retrieval vs. Personalised Reranking',
    ablationSummarySub: 'Rigorous side-by-side comparison across all metrics using the',
    semanticMoodscapes: 'Semantic Moodscapes',
    curatedVectorEmbeddings: 'Curated vector embeddings tailored to your mood and pacing',
    clickVibeCard: 'Click any vibe card to test natural language inference',
    liveRealWorldTrajectories: 'Live Real-World Trajectories',
    tripsSynthesizedPrompts: 'Trips synthesized from traveler prompts',
    neuralGatewayUpdated: 'Updated 14 mins ago via Sarathi Neural Gateway',
    evaluatesClimaticMicrozones: 'Evaluates climatic micro-zones, transit friction, and crowds in real time.',
    embeddingsIndexedLabel: 'Embeddings Indexed',
    semanticLatencyLabel: 'Semantic Match Latency',
    spotsCount: '14,280 spots',
    noCustomNotesPrompt: 'No custom notes added. Click Edit to add requests or travel companion details.',
    dayLabel: 'Day',
    savedOnDate: 'Saved on',
    location: 'Location',
    searchDestination: 'Search destination',
    getDirections: 'Get directions',
    openInGoogleMaps: 'Open in Google Maps',
    nearby: 'Nearby',
    selectedLocation: 'Selected destination',
    mapView: 'Map',
    listView: 'List',
    guestRating: 'Guest rating',
    anyRating: 'Any rating',
    sortBy: 'Sort by',
    sortRecommended: 'Recommended',
    sortHighestRated: 'Highest rated',
    sortLowestPrice: 'Lowest price',
    sortHighestPrice: 'Highest price',
    mapUnavailable: 'Map unavailable',
    mapUnavailableSub: 'Location details are still available.',
    yourTravelStyle: 'Your travel style',
    sarathiPersonalizeCombo: 'Sarathi will use this combination to personalize your recommendations.',
    travelStylePresets: 'Quick combination presets',
    clearStyles: 'Clear all',
    exploreAllMap: 'Interactive location map',
    searchPlacesPlaceholder: 'Search destinations, towns, or landmarks...',
  },
  'hi-IN': {
    filterTitle: 'फ़िल्टर',
    less: 'संक्षिप्त करें',
    whySarathiPickedThis: 'सारथी ने इसे क्यों चुना',
    skip: 'इन्हें छोड़ें',
    back: 'पीछे',
    nextStep: 'अगला चरण',
    savePreferences: 'वैयक्तिकृत इंजन सक्रिय करें',
    microClimate: 'सूक्ष्म जलवायु',
    elevation: 'ऊंचाई',
    crowdFriction: 'भीड़भाड़ स्तर',
    sparse: 'अल्प (शांत)',
    optimalWindow: 'सर्वोत्तम समय',
    synthesizedIntent: 'संश्लेषित यात्री अभिप्राय',
    dailyCadenceItinerary: 'दैनिक यात्रा कार्यक्रम एवं समय-सारणी',
    dayMorning: 'सुबह',
    dayAfternoon: 'दोपहर',
    dayEvening: 'शाम',
    keyMoment: 'विशेष क्षण',
    instantReserveFor: 'तुरंत आरक्षण करें',
    cognitiveMatch: 'संज्ञानात्मक मिलान',
    coldStartStepOf: 'कोल्ड-स्टार्ट कैलिब्रेशन • चरण',
    idealPacingQuestion: 'आपकी आदर्श दैनिक यात्रा गति क्या है?',
    idealPacingSub: 'सारथी यात्रा की सघनता को समायोजित करता है ताकि आप थका हुआ महसूस न करें।',
    climaticZoneQuestion: 'कौन सा मौसमी वातावरण आपको आकर्षित करता है?',
    climaticZoneSub: 'वेक्टर संज्ञान तापमान, आर्द्रता, बादल और ऊंचाई का विश्लेषण करता है।',
    budgetProfileQuestion: 'आपकी पसंदीदा यात्रा बजट प्रोफ़ाइल क्या है?',
    budgetProfileSub: 'बुटीक संपत्तियों, लक्जरी रिसॉर्ट्स या होमस्टे का चयन करता है।',
    activeIndicator: 'सक्रिय',
    excellentRating: '4.5+ उत्कृष्ट',
    realtimeCognitiveAlignment: 'वास्तविक समय संज्ञानात्मक तालमेल',
    learnsFromSavesClicks: 'आपके सहेजे गए और क्लिक किए गए स्थानों से वास्तविक समय में सीखता है।',
    showingAcrossQueries: 'परिणाम दिखाए जा रहे हैं',
    statisticallySignificant: 'सांख्यिकीय रूप से महत्वपूर्ण (p < 0.01)',
    ablationSummaryTitle: 'अब्लेशन सारांश: बेसलाइन रिट्रीवल बनाम वैयक्तिकृत री-रैंकिंग',
    ablationSummarySub: 'समस्त मेट्रिक्स पर सटीक तुलना:',
    semanticMoodscapes: 'अर्थगत मूडस्केप',
    curatedVectorEmbeddings: 'आपके मूड और गति के अनुसार तैयार किए गए वेक्टर एम्बेडिंग',
    clickVibeCard: 'नेचुरल लैंग्वेज इन्फेरेंस का परीक्षण करने के लिए किसी भी कार्ड पर क्लिक करें',
    liveRealWorldTrajectories: 'वास्तविक यात्रा मार्ग',
    tripsSynthesizedPrompts: 'यात्री संकेतों से संश्लेषित यात्राएं',
    neuralGatewayUpdated: 'सारथी न्यूरल गेटवे के माध्यम से 14 मिनट पहले अपडेट किया गया',
    evaluatesClimaticMicrozones: 'सूक्ष्म जलवायु, पारगमन सुविधा और भीड़ का वास्तविक समय मूल्यांकन करता है।',
    embeddingsIndexedLabel: 'एम्बेडिंग्स अनुक्रमित',
    semanticLatencyLabel: 'सिमेंटिक मैच लेटेंसी',
    spotsCount: '14,280 स्थान',
    noCustomNotesPrompt: 'कोई व्यक्तिगत नोट नहीं जोड़ा गया। विशेष अनुरोध या विवरण जोड़ने के लिए संपादित करें पर क्लिक करें।',
    dayLabel: 'दिन',
    savedOnDate: 'सहेजा गया',
  },
  'ml-IN': {
    filterTitle: 'ഫിൽട്ടറുകൾ',
    less: 'കുറയ്ക്കുക',
    whySarathiPickedThis: 'സാരാഥി ഇത് തിരഞ്ഞെടുത്തത് എന്തുകൊണ്ട്',
    skip: 'ഇപ്പോൾ ഒഴിവാക്കുക',
    back: 'പുറകിലേക്ക്',
    nextStep: 'അടുത്ത ഘട്ടം',
    savePreferences: 'വ്യക്തിഗത എൻജിൻ സജീവമാക്കുക',
    microClimate: 'സൂക്ഷ്മ കാലാവസ്ഥ',
    elevation: 'സമുദ്രനിരപ്പിൽ നിന്നുള്ള ഉയരം',
    crowdFriction: 'തിരക്കിന്റെ അളവ്',
    sparse: 'കുറഞ്ഞ തിരക്ക്',
    optimalWindow: 'അനുയോജ്യമായ സമയം',
    synthesizedIntent: 'നിർണ്ണയിച്ച യാത്രാ താല്പര്യം',
    dailyCadenceItinerary: 'ദൈനംദിന യാത്രാ വിവരണം',
    dayMorning: 'പ്രഭാതം',
    dayAfternoon: 'ഉച്ചതിരിഞ്ഞ്',
    dayEvening: 'സന്ധ്യ',
    keyMoment: 'പ്രധാന നിമിഷം',
    instantReserveFor: 'ഉടൻ റിസർവ് ചെയ്യുക',
    cognitiveMatch: 'കോഗ്നിറ്റീവ് പൊരുത്തം',
    coldStartStepOf: 'പ്രൊഫൈൽ നിർണ്ണയം • ഘട്ടം',
    idealPacingQuestion: 'നിങ്ങളുടെ യാത്രാവേഗത ഏതാണ്?',
    idealPacingSub: 'യാത്രാ ക്ഷീണം ഒഴിവാക്കാൻ അനുയോജ്യമായ രീതിയിൽ സാരാഥി സമയം ക്രമീകരിക്കുന്നു.',
    climaticZoneQuestion: 'ഏതു തരം കാലാവസ്ഥയാണ് താങ്കൾക്കിഷ്ടം?',
    climaticZoneSub: 'താപനില, ഈർപ്പം, മഞ്ഞ്, ഉയരം എന്നിവ വിശകലനം ചെയ്യുന്നു.',
    budgetProfileQuestion: 'നിങ്ങളുടെ ബജറ്റ് പരിധി എത്രയാണ്?',
    budgetProfileSub: 'ഹോംസ്റ്റേകൾ, റിസോർട്ടുകൾ, പൈതൃക ബംഗ്ലാവുകൾ എന്നിവ തിരഞ്ഞെടുക്കുന്നു.',
    activeIndicator: 'സജീവം',
    excellentRating: '4.5+ മികച്ചത്',
    realtimeCognitiveAlignment: 'തത്സമയ കോഗ്നിറ്റീവ് ക്രമീകരണം',
    learnsFromSavesClicks: 'നിങ്ങളുടെ തിരഞ്ഞെടുപ്പുകളിൽ നിന്ന് തത്സമയം സ്വയം പഠിക്കുന്നു.',
    showingAcrossQueries: 'വിലയിരുത്തപ്പെട്ട അന്വേഷണങ്ങൾ:',
    statisticallySignificant: 'ശാസ്ത്രീയമായി സ്ഥിരീകരിച്ചത് (p < 0.01)',
    ablationSummaryTitle: 'റിട്രീവലും വ്യക്തിഗത പുനർക്രമീകരണവും തമ്മിലുള്ള താരതമ്യം',
    ablationSummarySub: 'എല്ലാ മെട്രിക്സുകളിലുമുള്ള സമഗ്രമായ താരതമ്യം:',
    semanticMoodscapes: 'മൂഡ്‌സ്‌കേപ്പുകൾ',
    curatedVectorEmbeddings: 'നിങ്ങളുടെ മനസ്സിന് ഇണങ്ങിയ തനത് യാത്രാ രീതികൾ',
    clickVibeCard: 'വിശകലനം പരിശോധിക്കാൻ ഏതെങ്കിലും കാർഡിൽ ക്ലിക്ക് ചെയ്യുക',
    liveRealWorldTrajectories: 'തത്സമയ യാത്രാ വഴികൾ',
    tripsSynthesizedPrompts: 'യാത്രികരുടെ താല്പര്യങ്ങളിൽ നിന്ന് രൂപപ്പെടുത്തിയ യാത്രകൾ',
    neuralGatewayUpdated: 'സാരാഥി ന്യൂറൽ ഗേറ്റ്‌വേ വഴി 14 മിനിറ്റ് മുമ്പ് അപ്ഡേറ്റ് ചെയ്തത്',
    evaluatesClimaticMicrozones: 'കാലാവസ്ഥയും തിരക്കും തത്സമയം നിരീക്ഷിക്കുന്നു.',
    embeddingsIndexedLabel: 'രേഖപ്പെടുത്തിയ സ്ഥലങ്ങൾ',
    semanticLatencyLabel: 'പ്രതികരണ വേഗത',
    spotsCount: '14,280 കേന്ദ്രങ്ങൾ',
    noCustomNotesPrompt: 'കുറിപ്പുകളൊന്നും ചേർത്തിട്ടില്ല. കൂട്ടിച്ചേർക്കാൻ എഡിറ്റ് ക്ലിക്ക് ചെയ്യുക.',
    dayLabel: 'ദിവസം',
    savedOnDate: 'സേവ് ചെയ്തത്',
  },
  'kn-IN': {
    filterTitle: 'ಫಿಲ್ಟರ್‌ಗಳು',
    less: 'ಕಡಿಮೆ ತೋರಿಸಿ',
    whySarathiPickedThis: 'ಸಾರಥಿ ಇದನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿದೆ',
    skip: 'ಸದ್ಯಕ್ಕೆ ಬಿಟ್ಟುಬಿಡಿ',
    back: 'ಹಿಂದೆ',
    nextStep: 'ಮುಂದಿನ ಹಂತ',
    savePreferences: 'ವೈಯಕ್ತೀಕರಿಸಿದ ಎಂಜಿನ್ ಸಕ್ರಿಯಗೊಳಿಸಿ',
    microClimate: 'ಸೂಕ್ಷ್ಮ ಹವಾಮಾನ',
    elevation: 'ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ಎತ್ತರ',
    crowdFriction: 'ಜನಸಂದಣಿ ಮಟ್ಟ',
    sparse: 'ವಿರಳ (ಶಾಂತ)',
    optimalWindow: 'ಉತ್ತಮ ಸಮಯ',
    synthesizedIntent: 'ವಿಶ್ಲೇಷಿತ ಪ್ರವಾಸಿ ಆಶಯ',
    dailyCadenceItinerary: 'ದೈನಂದಿನ ಪ್ರವಾಸ ವಿವರ ಮತ್ತು ಸಮಯಾವಧಿ',
    dayMorning: 'ಮುಂಜಾನೆ',
    dayAfternoon: 'ಮಧ್ಯಾಹ್ನ',
    dayEvening: 'ಸಂಜೆ',
    keyMoment: 'ವಿಶೇಷ ಕ್ಷಣ',
    instantReserveFor: 'ತಕ್ಷಣ ಕಾಯ್ದಿರಿಸಿ',
    cognitiveMatch: 'ಕಾಗ್ನಿಟಿವ್ ಹೊಂದಾಣಿಕೆ',
    coldStartStepOf: 'ಪ್ರೊಫೈಲ್ ಮಾಪನಾಂಕ ನಿರ್ಣಯ • ಹಂತ',
    idealPacingQuestion: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ದೈನಂದಿನ ಪ್ರಯಾಣ ವೇಗ ಯಾವುದು?',
    idealPacingSub: 'ಪ್ರಯಾಣದ ಆಯಾಸ ತಪ್ಪಿಸಲು ಸಾರಥಿ ಸಮಯ ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ.',
    climaticZoneQuestion: 'ಯಾವ ಹವಾಮಾನ ವಾತಾವರಣವು ನಿಮ್ಮನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ?',
    climaticZoneSub: 'ತಾಪಮಾನ, ತೇವಾಂಶ, ಮಂಜು ಮತ್ತು ಎತ್ತರವನ್ನು ವೆಕ್ಟರ್ ಕಾಗ್ನಿಷನ್ ಅಳೆಯುತ್ತದೆ.',
    budgetProfileQuestion: 'ನಿಮ್ಮ ಇಷ್ಟದ ಪ್ರವಾಸದ ಬಜೆಟ್ ಮಿತಿ ಯಾವುದು?',
    budgetProfileSub: 'ಬುಟಿಕ್ ಎಸ್ಟೇಟ್‌ಗಳು, ರೆಸಾರ್ಟ್‌ಗಳು ಅಥವಾ ಹೋಮ್‌ಸ್ಟೇಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.',
    activeIndicator: 'ಸಕ್ರಿಯ',
    excellentRating: '4.5+ ಅತ್ಯುತ್ತಮ',
    realtimeCognitiveAlignment: 'ನೈಜ-ಸಮಯದ ಕಾಗ್ನಿಟಿವ್ ಹೊಂದಾಣಿಕೆ',
    learnsFromSavesClicks: 'ನಿಮ್ಮ ಆಯ್ಕೆಗಳು ಮತ್ತು ಉಳಿಸಿದ ಸ್ಥಳಗಳಿಂದ ನೈಜ ಸಮಯದಲ್ಲಿ ಕಲಿಯುತ್ತದೆ.',
    showingAcrossQueries: 'ಫಲಿತಾಂಶಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತಿದೆ:',
    statisticallySignificant: 'ಅಂಕಿಅಂಶಗಳ ಪ್ರಕಾರ ದೃಢೀಕರಿಸಲಾಗಿದೆ (p < 0.01)',
    ablationSummaryTitle: 'ಬೇಸ್‌ಲೈನ್ ರಿಟ್ರೈವಲ್ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿದ ಮರು-ಶ್ರೇಯಾಂಕದ ಹೋಲಿಕೆ',
    ablationSummarySub: 'ಎಲ್ಲಾ ಮಾಪನಗಳ ಸಮಗ್ರ ಪರೀಕ್ಷೆ:',
    semanticMoodscapes: 'ಭಾವನಾತ್ಮಕ ಮೂಡ್‌ಸ್ಕೇಪ್‌ಗಳು',
    curatedVectorEmbeddings: 'ನಿಮ್ಮ ಮನಸ್ಥಿತಿಗೆ ಅನುಗುಣವಾಗಿ ರೂಪಿಸಲಾದ ವೆಕ್ಟರ್ ಪ್ರವಾಸಗಳು',
    clickVibeCard: 'ನೈಸರ್ಗಿಕ ಭಾಷಾ ವಿಶ್ಲೇಷಣೆ ಪರೀಕ್ಷಿಸಲು ಯಾವುದೇ ಕಾರ್ಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ',
    liveRealWorldTrajectories: 'ನೈಜ-ಜಗತ್ತಿನ ಪ್ರವಾಸ ಮಾರ್ಗಗಳು',
    tripsSynthesizedPrompts: 'ಪ್ರವಾಸಿಗರ ಆಶಯಗಳಿಂದ ಸಂಶ್ಲೇಷಿಸಲ್ಪಟ್ಟ ಪ್ರವಾಸಗಳು',
    neuralGatewayUpdated: 'ಸಾರಥಿ ನ್ಯೂರಲ್ ಗೇಟ್‌ವೇ ಮೂಲಕ 14 ನಿಮಿಷಗಳ ಹಿಂದೆ ನವೀಕರಿಸಲಾಗಿದೆ',
    evaluatesClimaticMicrozones: 'ಹವಾಮಾನ, ಸಂಚಾರ ಮತ್ತು ಜನಸಂದಣಿಯನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ.',
    embeddingsIndexedLabel: 'ಸೂಚ್ಯಂಕಿತ ತಾಣಗಳು',
    semanticLatencyLabel: 'ಪ್ರತಿಕ್ರಿಯೆ ವೇಗ',
    spotsCount: '14,280 ತಾಣಗಳು',
    noCustomNotesPrompt: 'ಯಾವುದೇ ಟಿಪ್ಪಣಿಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ. ವಿವರಗಳನ್ನು ಸೇರಿಸಲು ಸಂಪಾದಿಸಿ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    dayLabel: 'ದಿನ',
    savedOnDate: 'ಉಳಿಸಲಾಗಿದೆ',
  },
  'ta-IN': {
    filterTitle: 'வடிகட்டிகள்',
    less: 'சுருக்கு',
    whySarathiPickedThis: 'சாரதி இதை ஏன் பரிந்துரைத்தது',
    skip: 'இப்போதைக்கு தவிர்',
    back: 'பின்செல்',
    nextStep: 'அடுத்த படி',
    savePreferences: 'தனிப்பயனாக்கப்பட்ட அமைப்பை செயல்படுத்து',
    microClimate: 'நுண் காலநிலை',
    elevation: 'கடல் மட்டத்திலிருந்து உயரம்',
    crowdFriction: 'கூட்ட நெரிசல் அளவு',
    sparse: 'குறைவான நெரிசல்',
    optimalWindow: 'சிறந்த பருவம்',
    synthesizedIntent: 'ஒருங்கிணைக்கப்பட்ட பயணியின் நோக்கம்',
    dailyCadenceItinerary: 'தினசரி பயணத்திட்டம் மற்றும் நேர அட்டவணை',
    dayMorning: 'காலை',
    dayAfternoon: 'மதியம்',
    dayEvening: 'மாலை',
    keyMoment: 'சிறப்பு தருணம்',
    instantReserveFor: 'உடனடியாக முன்பதிவு செய்',
    cognitiveMatch: 'அறிவாற்றல் பொருத்தம்',
    coldStartStepOf: 'சுயவிவர அமைவு • படி',
    idealPacingQuestion: 'உங்கள் விருப்பமான தினசரி பயண வேகம் என்ன?',
    idealPacingSub: 'பயணச் சோர்வைத் தவிர்க்கும் வகையில் சாரதி பயணத்திட்டத்தை அமைக்கிறது.',
    climaticZoneQuestion: 'எந்த வகையான தட்பவெப்ப சூழல் உங்களை ஈர்க்கிறது?',
    climaticZoneSub: 'வெப்பநிலை, ஈரப்பதம், பனிமூட்டம் மற்றும் உயரத்தை பகுப்பாய்வு செய்கிறது.',
    budgetProfileQuestion: 'உங்கள் பயண பட்ஜெட் அளவு என்ன?',
    budgetProfileSub: 'தனித்துவமான எஸ்டேட்டுகள், சொகுசு தங்குமிடங்கள் அல்லது ஹோம்ஸ்டேக்களை தேர்வு செய்கிறது.',
    activeIndicator: 'செயலில்',
    excellentRating: '4.5+ மிகச் சிறந்தது',
    realtimeCognitiveAlignment: 'நிகழ்நேர அறிவாற்றல் சீரமைப்பு',
    learnsFromSavesClicks: 'உங்கள் தேர்வுகள் மற்றும் கிளிக்குகளில் இருந்து நிகழ்நேரத்தில் கற்றுக்கொள்கிறது.',
    showingAcrossQueries: 'மதிப்பிடப்பட்ட தேடல்களின் முடிவுகள்:',
    statisticallySignificant: 'புள்ளியியல் ரீதியாக முக்கியமானது (p < 0.01)',
    ablationSummaryTitle: 'அடிப்படை மீட்டெடுப்பு மற்றும் தனிப்பயனாக்கப்பட்ட மறு-வரிசை ஒப்பீடு',
    ablationSummarySub: 'அனைத்து அளவீடுகளிலும் விரிவான ஒப்பீடு:',
    semanticMoodscapes: 'மனநிலை சார்ந்த பயணங்கள்',
    curatedVectorEmbeddings: 'உங்கள் மனநிலைக்கு ஏற்ப வடிவமைக்கப்பட்ட வெக்டார் தேடல்கள்',
    clickVibeCard: 'இயற்கை மொழி அனுமானத்தை சோதிக்க ஏதேனும் அட்டையை கிளிக் செய்யவும்',
    liveRealWorldTrajectories: 'நிகழ்நேர பயண வழிகள்',
    tripsSynthesizedPrompts: 'பயணிகளின் விருப்பங்களிலிருந்து உருவாக்கப்பட்ட பயணங்கள்',
    neuralGatewayUpdated: 'சாரதி நியூரல் கேட்வே மூலம் 14 நிமிடங்களுக்கு முன் புதுப்பிக்கப்பட்டது',
    evaluatesClimaticMicrozones: 'காலநிலை, போக்குவரத்து மற்றும் கூட்ட நெரிசலை நிகழ்நேரத்தில் மதிப்பிடுகிறது.',
    embeddingsIndexedLabel: 'பதிவுசெய்யப்பட்ட இடங்கள்',
    semanticLatencyLabel: 'பதில் வேகம்',
    spotsCount: '14,280 இடங்கள்',
    noCustomNotesPrompt: 'குறிப்புகள் எதுவும் சேர்க்கப்படவில்லை. விவரங்களைச் சேர்க்க திருத்து என்பதைக் கிளிக் செய்யவும்.',
    dayLabel: 'நாள்',
    savedOnDate: 'சேமிக்கப்பட்டது',
  },
};

const RAW_TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  'en-IN': {
    navDiscover: 'Discover',
    navRecommendations: 'Recommendations',
    navSavedTrips: 'Saved Trips',
    navLiveSession: 'Live Session Adaptation',
    navEvaluation: 'Evaluation Dashboard',
    personalizationActive: 'Personalization active',
    recalibratePreferences: 'Recalibrate Preferences',
    travelPreferences: 'Travel Preferences',
    cognitiveSettings: 'Cognitive Settings',
    profile: 'Profile',
    savedJourneys: 'Saved Journeys',
    brandTagline: 'Travel recommendations that understand you.',
    brandSubtitle: 'Travel Cognition Engine',

    saveToTrip: 'Save to Trip',
    savedInTrip: 'Saved in Trip',
    viewDetails: 'View Details',
    resetAll: 'Reset all',
    resetFilters: 'Reset filters',
    apply: 'Apply',
    cancel: 'Cancel',
    exportPortfolio: 'Export Portfolio',
    close: 'Close',

    discoverEyebrow: 'AI-POWERED COGNITION',
    discoverTitle: 'Where does your mind want to travel?',
    discoverSubtitle: 'Search in everyday language. Sarathi matches atmosphere, pacing, climate, and crowd density.',
    searchPlaceholder: 'Describe your ideal pace, atmosphere, or landscape (e.g. relaxing places near Munnar)...',
    synthesizeBtn: 'Synthesize Itinerary',
    synthesizing: 'Synthesizing...',
    quickTries: 'Quick tries:',
    quickPromptMunnar: 'Relaxing places near Munnar',
    quickPromptCoorg: 'Budget Coorg coffee trail',
    quickPromptGoa: 'South Goa peaceful family stay',
    quickPromptSpiti: 'Himalayan solo adventure',
    exploreTravelStyles: 'Explore by Travel Cadence',
    calibrateBaseline: 'Calibrate your travel profile',

    recEyebrow: 'PERSONALIZED FOR YOU',
    recTitle: 'Places picked for you',
    recSubtitle: 'Recommendations shaped by your search, preferences, and recent activity.',
    activeQuery: '“Relaxing places near Munnar”',
    editQuery: 'Edit search query',
    adaptationNoticeTitle: 'Updated based on your recent activity',
    adaptationNoticeSub: 'Your saved preferences are influencing these recommendations.',
    whyThisPick: 'Why this pick',
    whySarathiRecommended: 'Why Sarathi recommended this',
    whatInfluenced: 'What influenced this recommendation?',
    matchBadge: 'Match',
    nightRate: '/night',
    verifiedQuietZone: 'Verified quiet zone · Zero tour-bus noise',
    evidenceRelaxed: 'Relaxed style',
    evidenceBudget: 'Within budget',
    evidenceMunnar: 'Munnar preference',
    factorRelaxed: 'Relaxed travel',
    factorNature: 'Nature',
    factorBudget: 'Budget',
    factorMunnar: 'Munnar',
    personalizedForYou: 'Personalized for you',
    personalizedSub: 'How our cognition engine aligns recommendations with your travel profile.',
    queryMatch: 'Query match',
    preferenceMatch: 'Preference match',
    sessionRelevance: 'Session relevance',
    filterDestination: 'Destination',
    filterBudget: 'Nightly Budget',
    filterTravelStyle: 'Travel Style (Cadence)',
    filterCategory: 'Stay Category',
    filterRating: 'Guest Rating',
    filterLanguage: 'Reasoning Language',
    filterRatingHigh: '4.5+ Highly rated only',
    emptyRecommendations: 'No stays match your active filters',
    emptyRecommendationsSub: 'Try expanding your budget ceiling or switching destination keywords.',

    savedEyebrow: 'Travel Portfolio',
    savedTitle: 'Your Curated Journeys',
    savedSubtitle: 'Personalized itineraries ready for departures, tailored to your pace, group size, and climatic preferences.',
    savedEmptyTitle: 'No saved journeys yet',
    savedEmptySub: 'When you explore recommendations, bookmark your favorite stays to build your personalized travel portfolio.',
    exploreDestinations: 'Explore Destinations',
    travelerNotes: 'Traveler Notes & Special Requests',
    addNotesPlaceholder: 'Add private notes, room preferences, or departure reminders...',
    departureDate: 'Departure Date',
    travelersCount: 'Travelers',
    removeTrip: 'Remove from Portfolio',
    editNotes: 'Edit Notes',
    saveNotes: 'Save Notes',

    liveEyebrow: 'Live Session Adaptation',
    liveTitle: 'How Sarathi Adapts in Real-Time',
    liveSubtitle: 'Recommendations continuously re-score based on traveler interactions. Experience how saving or dismissing a property updates personalization in real time.',
    simulateJudgeAction: 'Simulate User Interaction (Judge Testing Sandbox)',
    saveNatureStay: '1. Save Nature Stay',
    saveBeachStay: '2. Save Beach Stay',
    saveAdventureTrek: '3. Save Adventure Trek',
    dismissHotel: '4. Dismiss Commercial Hotel',
    stageBeforeTitle: 'Stage 01 • Before Interaction',
    stageBeforeDesc: 'Initial results based solely on the search query without any active session context:',
    stageAfterTitle: 'Stage 02 • After User Action',
    stageAfterDesc: 'Recommendations re-scored after your interaction:',
    signalShiftsTitle: 'Personalization Signal Shifts',
    signalShiftsSub: 'How the engine adjusted its preference weights after your action.',
    natureAffinity: 'Nature & Plantation',
    seclusionAffinity: 'Seclusion & Quiet Zone',
    commercialTolerance: 'Commercial Density Tolerance',

    evalEyebrow: 'Evaluation & Benchmarking',
    evalTitle: 'Recommendation Evaluation Dashboard',
    evalSubtitle: 'Empirical ablation measuring recommendation quality between baseline semantic retrieval and personalized re-ranking across identical evaluation queries.',
    ablationReportTitle: 'Recommendation Ablation Report',
    ablationReportDesc: 'Ablation Methodology: Same Evaluation Query Set & Relevance Labels',
    testQueriesLabel: 'Test Queries',
    retrievalOnly: 'Retrieval Only',
    retrievalPlusRerank: 'Retrieval + Personalised Reranking',
    measuredDelta: 'Measured Delta',
    whatDeltaMeans: 'What this delta means',
    intentParserTitle: 'Natural-Language Intent Decomposition',
    intentParserSub: 'Test how Sarathi decomposes unstructured travel prompts into dimensional constraint signals:',
    runBenchmark: 'Run Benchmark',
    evaluating: 'Evaluating...',

    coldStartTitle: 'Calibrate your travel profile',
    coldStartSubtitle: 'Help Sarathi understand how you like to travel. Takes 30 seconds.',
    stepPace: '1. Preferred travel pace',
    stepAtmosphere: '2. Preferred atmosphere & landscapes',
    stepBudget: '3. Comfort & budget level',
    continueBtn: 'Continue',
    skipForNow: 'Skip for now',

    voiceTitle: 'Voice Travel Search',
    voiceListening: 'Listening to your travel thoughts...',
    voiceHint: 'Try saying: "Somewhere quiet in Munnar with misty mountain views for a couple..."',
    voiceApply: 'Apply Voice Query',

    toastSaved: 'Saved to your Travel Portfolio',
    toastRemoved: 'Removed from Saved Trips',
    toastNotesUpdated: 'Traveler notes updated successfully',
    toastPrefsCalibrated: 'Preference baseline calibrated: Cognitive matrix re-indexed!',
    toastExportSuccess: 'Travel portfolio itinerary exported successfully!',
  },

  'hi-IN': {
    navDiscover: 'खोजें',
    navRecommendations: 'सिफारिशें',
    navSavedTrips: 'सहेजी गई यात्राएं',
    navLiveSession: 'लाइव सत्र अनुकूलन',
    navEvaluation: 'मूल्यांकन डैशबोर्ड',
    personalizationActive: 'वैयक्तिकरण सक्रिय',
    recalibratePreferences: 'प्राथमिकताएं पुनर्गठित करें',
    travelPreferences: 'यात्रा प्राथमिकताएं',
    cognitiveSettings: 'संज्ञानात्मक सेटिंग्स',
    profile: 'प्रोफ़ाइल',
    savedJourneys: 'सहेजी गई यात्राएं',
    brandTagline: 'यात्रा सिफारिशें जो आपको समझती हैं।',
    brandSubtitle: 'ट्रैवल कॉग्निशन इंजन',

    saveToTrip: 'यात्रा में सहेजें',
    savedInTrip: 'सहेजा गया',
    viewDetails: 'विवरण देखें',
    resetAll: 'सभी रीसेट करें',
    resetFilters: 'फ़िल्टर रीसेट करें',
    apply: 'लागू करें',
    cancel: 'रद्द करें',
    exportPortfolio: 'पोर्टफोलियो निर्यात करें',
    close: 'बंद करें',

    discoverEyebrow: 'एआई-संचालित संज्ञान',
    discoverTitle: 'आपका मन कहाँ घूमना चाहता है?',
    discoverSubtitle: 'सहज भाषा में खोजें। सारथी आपके मूड, गति, मौसम और भीड़-भाड़ की प्राथमिकता के अनुसार स्थान चुनता है।',
    searchPlaceholder: 'अपनी पसंदीदा गति, वातावरण या परिदृश्य का वर्णन करें (उदा. मुन्नार के पास शांत जगह)...',
    synthesizeBtn: 'यात्रा योजना बनाएं',
    synthesizing: 'योजना बन रही है...',
    quickTries: 'सुझाए गए संकेत:',
    quickPromptMunnar: 'मुन्नार के पास शांत जगह',
    quickPromptCoorg: 'कुर्ग में कॉफी ट्रेल बजट यात्रा',
    quickPromptGoa: 'दक्षिण गोवा शांत पारिवारिक प्रवास',
    quickPromptSpiti: 'हिमालयी सोलो एडवेंचर',
    exploreTravelStyles: 'यात्रा शैली के अनुसार खोजें',
    calibrateBaseline: 'अपनी यात्रा प्रोफ़ाइल सेट करें',

    recEyebrow: 'आपके लिए वैयक्तिकृत',
    recTitle: 'आपके लिए चुने गए स्थान',
    recSubtitle: 'आपकी खोज, प्राथमिकताओं और हाल की गतिविधि के आधार पर सिफारिशें।',
    activeQuery: '“मुन्नार के पास शांत जगह”',
    editQuery: 'सर्च क्वेरी संपादित करें',
    adaptationNoticeTitle: 'आपकी हालिया गतिविधि के आधार पर अपडेट किया गया',
    adaptationNoticeSub: 'आपकी सहेजी गई प्राथमिकताएं इन सिफारिशों को प्रभावित कर रही हैं।',
    whyThisPick: 'यह चुनाव क्यों',
    whySarathiRecommended: 'सारथी ने यह सिफारिश क्यों की',
    whatInfluenced: 'इस सिफारिश को किसने प्रभावित किया?',
    matchBadge: 'मिलान',
    nightRate: '/रात',
    verifiedQuietZone: 'प्रमाणित शांत क्षेत्र · कोई टूर-बस शोर नहीं',
    evidenceRelaxed: 'शांत शैली',
    evidenceBudget: 'बजट के भीतर',
    evidenceMunnar: 'मुन्नार पसंद',
    factorRelaxed: 'शांत यात्रा',
    factorNature: 'प्रकृति',
    factorBudget: 'बजट',
    factorMunnar: 'मुन्नार',
    personalizedForYou: 'आपके लिए वैयक्तिकृत',
    personalizedSub: 'हमारा कॉग्निशन इंजन आपकी प्रोफ़ाइल के साथ सिफारिशों का मिलान कैसे करता है।',
    queryMatch: 'सर्च मिलान',
    preferenceMatch: 'प्राथमिकता मिलान',
    sessionRelevance: 'सत्र प्रासंगिकता',
    filterDestination: 'गंतव्य',
    filterBudget: 'रात का बजट',
    filterTravelStyle: 'यात्रा शैली (गति)',
    filterCategory: 'आवास श्रेणी',
    filterRating: 'अतिथि रेटिंग',
    filterLanguage: 'तर्क भाषा',
    filterRatingHigh: '4.5+ केवल उच्च रेटेड',
    emptyRecommendations: 'कोई आवास आपके फ़िल्टर से मेल नहीं खाता',
    emptyRecommendationsSub: 'अपनी बजट सीमा बढ़ाने या अन्य कीवर्ड आज़माने का प्रयास करें।',

    savedEyebrow: 'यात्रा पोर्टफोलियो',
    savedTitle: 'आपकी चुनिंदा यात्राएं',
    savedSubtitle: 'प्रस्थान के लिए तैयार वैयक्तिकृत यात्रा कार्यक्रम, आपकी गति, समूह आकार और जलवायु प्राथमिकताओं के अनुकूल।',
    savedEmptyTitle: 'अभी तक कोई यात्रा सहेजी नहीं गई है',
    savedEmptySub: 'सिफारिशें देखते समय, अपने पसंदीदा स्थानों को बुकमार्क करें ताकि आपका पोर्टफोलियो बन सके।',
    exploreDestinations: 'गंतव्य खोजें',
    travelerNotes: 'यात्री नोट्स और विशेष अनुरोध',
    addNotesPlaceholder: 'कमरे की पसंद या प्रस्थान से जुड़े निजी नोट्स जोड़ें...',
    departureDate: 'प्रस्थान तिथि',
    travelersCount: 'यात्री',
    removeTrip: 'पोर्टफोलियो से हटाएं',
    editNotes: 'नोट्स संपादित करें',
    saveNotes: 'नोट्स सहेजें',

    liveEyebrow: 'लाइव सत्र अनुकूलन',
    liveTitle: 'सारथी वास्तविक समय में कैसे अनुकूलित होता है',
    liveSubtitle: 'यात्री की गतिविधियों के आधार पर सिफारिशें लगातार पुनर्गणित होती हैं। देखें कि किसी स्थान को सहेजने पर कैसे प्राथमिकताएं तुरंत बदलती हैं।',
    simulateJudgeAction: 'उपयोगकर्ता इंटरैक्शन सिमुलेट करें (जज टेस्टिंग सैंडबॉक्स)',
    saveNatureStay: '1. नेचर स्टे सहेजें',
    saveBeachStay: '2. बीच स्टे सहेजें',
    saveAdventureTrek: '3. एडवेंचर ट्रेक सहेजें',
    dismissHotel: '4. कमर्शियल होटल हटाएं',
    stageBeforeTitle: 'चरण 01 • इंटरैक्शन से पहले',
    stageBeforeDesc: 'सत्र संदर्भ के बिना केवल प्रारंभिक खोज क्वेरी पर आधारित परिणाम:',
    stageAfterTitle: 'चरण 02 • उपयोगकर्ता कार्रवाई के बाद',
    stageAfterDesc: 'आपकी बातचीत के बाद पुनर्गणित सिफारिशें:',
    signalShiftsTitle: 'व्यक्तिगत संकेत परिवर्तन',
    signalShiftsSub: 'आपकी कार्रवाई के बाद इंजन ने अपनी प्राथमिकताओं को कैसे समायोजित किया।',
    natureAffinity: 'प्रकृति और वृक्षारोपण',
    seclusionAffinity: 'एकांत और शांत क्षेत्र',
    commercialTolerance: 'व्यावसायिक घनत्व सहनशीलता',

    evalEyebrow: 'मूल्यांकन और बेंचमार्किंग',
    evalTitle: 'सिफारिश मूल्यांकन डैशबोर्ड',
    evalSubtitle: 'समान मूल्यांकन प्रश्नों पर आधारभूत पुनर्प्राप्ति और व्यक्तिगत पुनर्रैंकिंग के बीच गुणवत्ता की तुलना।',
    ablationReportTitle: 'सिफारिश पृथक्करण (Ablation) रिपोर्ट',
    ablationReportDesc: 'पद्धति: समान मूल्यांकन प्रश्न सेट और प्रासंगिकता लेबल',
    testQueriesLabel: 'परीक्षण प्रश्न',
    retrievalOnly: 'केवल पुनर्प्राप्ति (Retrieval Only)',
    retrievalPlusRerank: 'पुनर्प्राप्ति + व्यक्तिगत पुनर्रैंकिंग',
    measuredDelta: 'मापा गया अंतर (Delta)',
    whatDeltaMeans: 'इस डेल्टा का क्या अर्थ है',
    intentParserTitle: 'प्राकृतिक भाषा आशय विश्लेषण',
    intentParserSub: 'परीक्षण करें कि सारथी असंरचित यात्रा संकेतों को आयामी संकेतों में कैसे तोड़ता है:',
    runBenchmark: 'बेंचमार्क चलाएं',
    evaluating: 'मूल्यांकन जारी...',

    coldStartTitle: 'अपनी यात्रा प्रोफ़ाइल सेट करें',
    coldStartSubtitle: 'सारथी को बताएं कि आप कैसे यात्रा करना पसंद करते हैं। सिर्फ 30 सेकंड लगेंगे।',
    stepPace: '1. पसंदीदा यात्रा गति',
    stepAtmosphere: '2. पसंदीदा वातावरण और परिदृश्य',
    stepBudget: '3. आराम और बजट स्तर',
    continueBtn: 'आगे बढ़ें',
    skipForNow: 'अभी छोड़ें',

    voiceTitle: 'आवाज से यात्रा खोजें',
    voiceListening: 'आपकी यात्रा की बातें सुन रहे हैं...',
    voiceHint: 'बोलें: "मुन्नार में धुंध भरे पहाड़ों के बीच शांतिपूर्ण जगह..."',
    voiceApply: 'आवाज क्वेरी लागू करें',

    toastSaved: 'आपके यात्रा पोर्टफोलियो में सहेज लिया गया',
    toastRemoved: 'सहेजी गई यात्राओं से हटा दिया गया',
    toastNotesUpdated: 'यात्री नोट्स सफलतापूर्वक अपडेट किए गए',
    toastPrefsCalibrated: 'प्राथमिकताएं अपडेट की गईं: संज्ञानात्मक मैट्रिक्स पुनर्गठित!',
    toastExportSuccess: 'यात्रा पोर्टफोलियो सफलतापूर्वक निर्यात किया गया!',
  },

  'ml-IN': {
    navDiscover: 'കണ്ടെത്തുക',
    navRecommendations: 'ശുപാർശകൾ',
    navSavedTrips: 'സേവ് ചെയ്ത യാത്രകൾ',
    navLiveSession: 'ലൈവ് സെഷൻ അഡാപ്റ്റേഷൻ',
    navEvaluation: 'മൂല്യനിർണ്ണയ ഡാഷ്‌ബോർഡ്',
    personalizationActive: 'വ്യക്തിഗതമാക്കൽ സജീവം',
    recalibratePreferences: 'മുൻഗണനകൾ പുനഃക്രമീകരിക്കുക',
    travelPreferences: 'യാത്രാ മുൻഗണനകൾ',
    cognitiveSettings: 'കോഗ്നിറ്റീവ് ക്രമീകരണങ്ങൾ',
    profile: 'പ്രൊഫൈൽ',
    savedJourneys: 'സൂക്ഷിച്ച യാത്രകൾ',
    brandTagline: 'നിങ്ങളെ മനസ്സിലാക്കുന്ന യാത്രാ ശുപാർശകൾ.',
    brandSubtitle: 'ട്രാവൽ കോഗ്നിഷൻ എൻജിൻ',

    saveToTrip: 'യാത്രയിൽ സൂക്ഷിക്കുക',
    savedInTrip: 'സേവ് ചെയ്തു',
    viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
    resetAll: 'എല്ലാം മാറ്റുക',
    resetFilters: 'ഫിൽട്ടറുകൾ മാറ്റുക',
    apply: 'പ്രയോഗിക്കുക',
    cancel: 'റദ്ദാക്കുക',
    exportPortfolio: 'പോർട്ട്ഫോളിയോ എക്സ്പോർട്ട് ചെയ്യുക',
    close: 'അടയ്ക്കുക',

    discoverEyebrow: 'എഐ-പവർഡ് കോഗ്നിഷൻ',
    discoverTitle: 'നിങ്ങളുടെ മനസ്സ് എങ്ങോട്ടാണ് യാത്ര ചെയ്യാൻ ആഗ്രഹിക്കുന്നത്?',
    discoverSubtitle: 'സാധാരണ ഭാഷയിൽ തിരയുക. അന്തരീക്ഷം, വേഗത, കാലാവസ്ഥ, തിരക്കില്ലായ്മ എന്നിവ പരിഗണിച്ച് സാരഥി മികച്ച ഇടങ്ങൾ കണ്ടെത്തുന്നു.',
    searchPlaceholder: 'നിങ്ങളുടെ അനുയോജ്യമായ യാത്രാ വേഗതയോ അന്തരീക്ഷമോ വിവരിക്കുക (ഉദാ: മൂന്നാറിന് സമീപം ശാന്തമായ ഇടങ്ങൾ)...',
    synthesizeBtn: 'യാത്ര തയ്യാറാക്കുക',
    synthesizing: 'തയ്യാറാക്കുന്നു...',
    quickTries: 'വേഗത്തിലുള്ള പരീക്ഷണങ്ങൾ:',
    quickPromptMunnar: 'മൂന്നാറിന് സമീപം ശാന്തമായ സ്ഥലങ്ങൾ',
    quickPromptCoorg: 'കൂർഗ് ബഡ്ജറ്റ് കോഫി ട്രയൽ',
    quickPromptGoa: 'സൗത്ത് ഗോവ ശാന്തമായ കുടുംബ താമസം',
    quickPromptSpiti: 'ഹിമാലയൻ സോളോ സാഹസിക യാത്ര',
    exploreTravelStyles: 'യാത്രാ ശൈലി അനുസരിച്ച് തിരയുക',
    calibrateBaseline: 'യാത്രാ മുൻഗണനകൾ ക്രമീകരിക്കുക',

    recEyebrow: 'നിങ്ങൾക്കായി വ്യക്തിഗതമാക്കിയത്',
    recTitle: 'നിങ്ങൾക്കായി തിരഞ്ഞെടുത്ത സ്ഥലങ്ങൾ',
    recSubtitle: 'നിങ്ങളുടെ തിരച്ചിൽ, മുൻഗണനകൾ, സമീപകാല പ്രവർത്തനം എന്നിവയെ അടിസ്ഥാനമാക്കിയുള്ള ശുപാർശകൾ.',
    activeQuery: '“മൂന്നാറിന് സമീപം ശാന്തമായ സ്ഥലങ്ങൾ”',
    editQuery: 'തിരച്ചിൽ മാറ്റുക',
    adaptationNoticeTitle: 'നിങ്ങളുടെ സമീപകാല പ്രവർത്തനത്തിന്റെ അടിസ്ഥാനത്തിൽ അപ്ഡേറ്റ് ചെയ്തു',
    adaptationNoticeSub: 'നിങ്ങൾ സംരക്ഷിച്ച മുൻഗണനകൾ ഈ ശുപാർശകളെ സ്വാധീനിക്കുന്നു.',
    whyThisPick: 'എന്തുകൊണ്ട് ഈ തെരഞ്ഞെടുപ്പ്',
    whySarathiRecommended: 'എന്തുകൊണ്ടാണ് സാരഥി ഇത് ശുപാർശ ചെയ്തത്',
    whatInfluenced: 'ഈ ശുപാർശയെ സ്വാധീനിച്ചത് എന്താണ്?',
    matchBadge: 'പൊരുത്തം',
    nightRate: '/രാത്രി',
    verifiedQuietZone: 'സ്ഥിരീകരിച്ച ശാന്തമായ മേഖല · ടൂർ-ബസ് ശബ്ദമില്ല',
    evidenceRelaxed: 'ശാന്തമായ ശൈലി',
    evidenceBudget: 'ബജറ്റിനുള്ളിൽ',
    evidenceMunnar: 'മൂന്നാർ മുൻഗണന',
    factorRelaxed: 'ശാന്തമായ യാത്ര',
    factorNature: 'പ്രകൃതി',
    factorBudget: 'ബജറ്റ്',
    factorMunnar: 'മൂന്നാർ',
    personalizedForYou: 'നിങ്ങൾക്കായി വ്യക്തിഗതമാക്കിയത്',
    personalizedSub: 'ഞങ്ങളുടെ കോഗ്നിഷൻ എഞ്ചിൻ നിങ്ങളുടെ പ്രൊഫൈലുമായി ശുപാർശകളെ എങ്ങനെ പൊരുത്തപ്പെടുത്തുന്നു.',
    queryMatch: 'ക്വറി പൊരുത്തം',
    preferenceMatch: 'മുൻഗണനാ പൊരുത്തം',
    sessionRelevance: 'സെഷൻ പ്രസക്തി',
    filterDestination: 'ലക്ഷ്യസ്ഥാനം',
    filterBudget: 'പ്രതിദിന ബജറ്റ്',
    filterTravelStyle: 'യാത്രാ ശൈലി (വേഗത)',
    filterCategory: 'താമസ വിഭാഗം',
    filterRating: 'റേറ്റിംഗ്',
    filterLanguage: 'യുക്തി ഭാഷ',
    filterRatingHigh: '4.5+ മികച്ച റേറ്റിംഗ് മാത്രം',
    emptyRecommendations: 'നിങ്ങളുടെ ഫിൽട്ടറുകളുമായി പൊരുത്തപ്പെടുന്ന താമസസ്ഥലങ്ങൾ ഇല്ല',
    emptyRecommendationsSub: 'ബജറ്റ് പരിധി ഉയർത്താനോ മറ്റ് കീവേഡുകൾ ഉപയോഗിക്കാനോ ശ്രമിക്കുക.',

    savedEyebrow: 'യാത്രാ പോർട്ട്ഫോളിയോ',
    savedTitle: 'നിങ്ങളുടെ യാത്രാ പദ്ധതികൾ',
    savedSubtitle: 'നിങ്ങളുടെ യാത്രാവേഗതയ്ക്കും ആൾക്കാരുടെ എണ്ണത്തിനും കാലാവസ്ഥാ മുൻഗണനകൾക്കും അനുയോജ്യമായ യാത്രാപദ്ധതികൾ.',
    savedEmptyTitle: 'ഇതുവരെ യാത്രകളൊന്നും സൂക്ഷിച്ചിട്ടില്ല',
    savedEmptySub: 'ശുപാർശകൾ കാണുമ്പോൾ, നിങ്ങളുടെ സ്വകാര്യ പോർട്ട്ഫോളിയോ നിർമ്മിക്കാൻ പ്രിയപ്പെട്ട സ്ഥലങ്ങൾ സേവ് ചെയ്യുക.',
    exploreDestinations: 'സ്ഥലങ്ങൾ കണ്ടെത്തുക',
    travelerNotes: 'യാത്രാ കുറിപ്പുകളും പ്രത്യേക ആവശ്യങ്ങളും',
    addNotesPlaceholder: 'മുറിയുടെ മുൻഗണനകളും യാത്രാ ഓർമ്മപ്പെടുത്തലുകളും ചേർക്കുക...',
    departureDate: 'യാത്രാ തീയതി',
    travelersCount: 'യാത്രക്കാർ',
    removeTrip: 'പോർട്ട്ഫോളിയോയിൽ നിന്ന് മാറ്റുക',
    editNotes: 'കുറിപ്പുകൾ മാറ്റുക',
    saveNotes: 'കുറിപ്പുകൾ സേവ് ചെയ്യുക',

    liveEyebrow: 'ലൈവ് സെഷൻ അഡാപ്റ്റേഷൻ',
    liveTitle: 'സാരഥി തത്സമയം എങ്ങനെ ക്രമീകരിക്കപ്പെടുന്നു',
    liveSubtitle: 'യാത്രക്കാരുടെ പ്രതികരണങ്ങൾക്കനുസരിച്ച് ശുപാർശകൾ നിരന്തരം മാറും. ഒരു പ്രോപ്പർട്ടി സേവ് ചെയ്യുമ്പോൾ മുൻഗണനകൾ എങ്ങനെ മാറുന്നുവെന്ന് കാണുക.',
    simulateJudgeAction: 'യൂസർ ആക്ഷൻ പരീക്ഷിക്കുക (ജഡ്ജ് ടെസ്റ്റിംഗ് സാൻഡ്‌ബോക്സ്)',
    saveNatureStay: '1. പ്രകൃതി താമസം സേവ് ചെയ്യുക',
    saveBeachStay: '2. ബീച്ച് താമസം സേവ് ചെയ്യുക',
    saveAdventureTrek: '3. സാഹസിക ട്രെക്ക് സേവ് ചെയ്യുക',
    dismissHotel: '4. കൊമേഴ്‌സ്യൽ ഹോട്ടൽ ഒഴിവാക്കുക',
    stageBeforeTitle: 'സ്റ്റേജ് 01 • ഇടപെടലിന് മുൻപ്',
    stageBeforeDesc: 'സെഷൻ ഹിസ്റ്ററി ഇല്ലാതെ പ്രാഥമിക ക്വറിയെ മാത്രം അടിസ്ഥാനമാക്കിയുള്ള ഫലങ്ങൾ:',
    stageAfterTitle: 'സ്റ്റേജ് 02 • ഉപയോക്തൃ പ്രവർത്തനത്തിന് ശേഷം',
    stageAfterDesc: 'നിങ്ങളുടെ താൽപ്പര്യങ്ങൾ തിരിച്ചറിഞ്ഞതിന് ശേഷമുള്ള പുതിയ റാങ്കിംഗ്:',
    signalShiftsTitle: 'വ്യക്തിഗത സിഗ്നലുകളിലെ മാറ്റം',
    signalShiftsSub: 'നിങ്ങളുടെ പ്രവർത്തനത്തിന് ശേഷം എൻജിൻ മുൻഗണനകളിൽ വരുത്തിയ മാറ്റങ്ങൾ.',
    natureAffinity: 'പ്രകൃതിയും തോട്ടങ്ങളും',
    seclusionAffinity: 'ഏകാന്തതയും ശാന്തതയും',
    commercialTolerance: 'വാണിജ്യ തിരക്ക് സഹിഷ്ണുത',

    evalEyebrow: 'മൂല്യനിർണ്ണയവും ബെഞ്ച്മാർക്കിംഗും',
    evalTitle: 'ശുപാർശ മൂല്യനിർണ്ണയ ഡാഷ്‌ബോർഡ്',
    evalSubtitle: 'ഒരേ ക്വറികളിൽ ബേസ്‌ലൈൻ റിട്രീവലും വ്യക്തിഗതമാക്കിയ റീ-റാങ്കിംഗും തമ്മിലുള്ള ഗുണനിലവാര വ്യത്യാസം.',
    ablationReportTitle: 'ശുപാർശ അബ്ലേഷൻ റിപ്പോർട്ട്',
    ablationReportDesc: 'രീതിശാസ്ത്രം: ഒരേ മൂല്യനിർണ്ണയ ചോദ്യങ്ങളും റിലവൻസ് ലേബലുകളും',
    testQueriesLabel: 'ടെസ്റ്റ് ക്വറികൾ',
    retrievalOnly: 'റിട്രീവൽ മാത്രം (Retrieval Only)',
    retrievalPlusRerank: 'റിട്രീവൽ + വ്യക്തിഗത റീ-റാങ്കിംഗ്',
    measuredDelta: 'വ്യത്യാസം (Delta)',
    whatDeltaMeans: 'ഈ വ്യത്യാസം എന്തിനെ സൂചിപ്പിക്കുന്നു',
    intentParserTitle: 'നാച്ചുറൽ ലാംഗ്വേജ് ഇന്റന്റ് ഡീകമ്പോസിഷൻ',
    intentParserSub: 'സാരഥി യാത്രാ നിർദ്ദേശങ്ങളെ ഘടകങ്ങളായി തിരിക്കുന്നത് എങ്ങനെയെന്ന് പരിശോധിക്കുക:',
    runBenchmark: 'ബെഞ്ച്മാർക്ക് പ്രവർത്തിപ്പിക്കുക',
    evaluating: 'മൂല്യനിർണ്ണയം നടക്കുന്നു...',

    coldStartTitle: 'യാത്രാ മുൻഗണനകൾ ക്രമീകരിക്കുക',
    coldStartSubtitle: 'നിങ്ങൾ എങ്ങനെ യാത്ര ചെയ്യാൻ ഇഷ്ടപ്പെടുന്നുവെന്ന് സാരഥിക്ക് മനസിലാക്കാൻ സഹായിക്കുക. വെറും 30 സെക്കൻഡ് മതി.',
    stepPace: '1. ഇഷ്ടപ്പെട്ട യാത്രാ വേഗത',
    stepAtmosphere: '2. പ്രിയപ്പെട്ട അന്തരീക്ഷവും ഭൂപ്രകൃതിയും',
    stepBudget: '3. ബജറ്റും യാത്രാ സുഖവും',
    continueBtn: 'തുടരുക',
    skipForNow: 'ഇപ്പോൾ ഒഴിവാക്കുക',

    voiceTitle: 'ശബ്ദം ഉപയോഗിച്ചുള്ള തിരച്ചിൽ',
    voiceListening: 'നിങ്ങളുടെ യാത്രാ സ്വപ്നങ്ങൾ കേൾക്കുന്നു...',
    voiceHint: 'പറയുക: "മൂന്നാറിൽ മൂടൽമഞ്ഞുള്ള പർവത കാഴ്ചകളുള്ള ശാന്തമായ ഇടം..."',
    voiceApply: 'തിരച്ചിൽ പ്രയോഗിക്കുക',

    toastSaved: 'യാത്രാ പോർട്ട്ഫോളിയോയിൽ സൂക്ഷിച്ചു',
    toastRemoved: 'സൂക്ഷിച്ച യാത്രകളിൽ നിന്ന് നീക്കം ചെയ്തു',
    toastNotesUpdated: 'യാത്രാ കുറിപ്പുകൾ അപ്ഡേറ്റ് ചെയ്തു',
    toastPrefsCalibrated: 'മുൻഗണനകൾ പുനഃക്രമീകരിച്ചു: കോഗ്നിറ്റീവ് മാട്രിക്സ് അപ്ഡേറ്റായി!',
    toastExportSuccess: 'യാത്രാ പദ്ധതി വിജയകരമായി എക്സ്പോർട്ട് ചെയ്തു!',
  },

  'kn-IN': {
    navDiscover: 'ಅನ್ವೇಷಿಸಿ',
    navRecommendations: 'ಶಿಫಾರಸುಗಳು',
    navSavedTrips: 'ಉಳಿಸಿದ ಪ್ರವಾಸಗಳು',
    navLiveSession: 'ಲೈವ್ ಸೆಷನ್ ಹೊಂದಾಣಿಕೆ',
    navEvaluation: 'ಮೌಲ್ಯಮಾಪನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    personalizationActive: 'ವೈಯಕ್ತೀಕರಣ ಸಕ್ರಿಯ',
    recalibratePreferences: 'ಆದ್ಯತೆಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
    travelPreferences: 'ಪ್ರಯಾಣದ ಆದ್ಯತೆಗಳು',
    cognitiveSettings: 'ಅರಿವಿನ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    profile: 'ಪ್ರೊಫೈಲ್',
    savedJourneys: 'ಉಳಿಸಿದ ಪ್ರಯಾಣಗಳು',
    brandTagline: 'ನಿಮ್ಮನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಪ್ರಯಾಣದ ಶಿಫಾರಸುಗಳು.',
    brandSubtitle: 'ಟ್ರಾವೆಲ್ ಕಾಗ್ನಿಷನ್ ಎಂಜಿನ್',

    saveToTrip: 'ಪ್ರವಾಸಕ್ಕೆ ಉಳಿಸಿ',
    savedInTrip: 'ಉಳಿಸಲಾಗಿದೆ',
    viewDetails: 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    resetAll: 'ಎಲ್ಲವನ್ನೂ ಮರುಹೊಂದಿಸಿ',
    resetFilters: 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
    apply: 'ಅನ್ವಯಿಸು',
    cancel: 'ರದ್ದುಮಾಡು',
    exportPortfolio: 'ರಫ್ತು ಮಾಡಿ',
    close: 'ಮುಚ್ಚು',

    discoverEyebrow: 'ಎಐ-ಚಾಲಿತ ಅರಿವು',
    discoverTitle: 'ನಿಮ್ಮ ಮನಸ್ಸು ಎಲ್ಲಿಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತದೆ?',
    discoverSubtitle: 'ಸಾಮಾನ್ಯ ಭಾಷೆಯಲ್ಲಿ ಹುಡುಕಿ. ಸಾರಥಿ ವಾತಾವರಣ, ವೇಗ, ಹವಾಮಾನ ಮತ್ತು ಜನಜಂಗುಳಿಯಿಲ್ಲದ ಸ್ಥಳಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.',
    searchPlaceholder: 'ನಿಮ್ಮ ಆದರ್ಶ ವೇಗ, ವಾತಾವರಣ ಅಥವಾ ಭೂದೃಶ್ಯವನ್ನು ವಿವರಿಸಿ (ಉದಾ: ಮೂನ್ನಾರ್ ಬಳಿ ವಿಶ್ರಾಂತಿ ಸ್ಥಳಗಳು)...',
    synthesizeBtn: 'ಪ್ರವಾಸ ರಚಿಸಿ',
    synthesizing: 'ರಚಿಸಲಾಗುತ್ತಿದೆ...',
    quickTries: 'ತ್ವರಿತ ಹುಡುಕಾಟಗಳು:',
    quickPromptMunnar: 'ಮೂನ್ನಾರ್ ಬಳಿ ವಿಶ್ರಾಂತಿ ಸ್ಥಳಗಳು',
    quickPromptCoorg: 'ಕೂರ್ಗ್ ಬಜೆಟ್ ಕಾಫಿ ಟ್ರಯಲ್',
    quickPromptGoa: 'ದಕ್ಷಿಣ ಗೋವಾ ಶಾಂತ ಕುಟುಂಬ ವಾಸ್ತವ್ಯ',
    quickPromptSpiti: 'ಹಿಮಾಲಯನ್ ಸೋಲೋ ಸಾಹಸ',
    exploreTravelStyles: 'ಪ್ರಯಾಣ ಶೈಲಿಯ ಪ್ರಕಾರ ಅನ್ವೇಷಿಸಿ',
    calibrateBaseline: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ',

    recEyebrow: 'ನಿಮಗಾಗಿ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ',
    recTitle: 'ನಿಮಗಾಗಿ ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳಗಳು',
    recSubtitle: 'ನಿಮ್ಮ ಹುಡುಕಾಟ, ಆದ್ಯತೆಗಳು ಮತ್ತು ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಯಿಂದ ಆಕಾರ ಪಡೆದ ಶಿಫಾರಸುಗಳು.',
    activeQuery: '“ಮೂನ್ನಾರ್ ಬಳಿ ವಿಶ್ರಾಂತಿ ಸ್ಥಳಗಳು”',
    editQuery: 'ಹುಡುಕಾಟ ಬದಲಾಯಿಸಿ',
    adaptationNoticeTitle: 'ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ನವೀಕರಿಸಲಾಗಿದೆ',
    adaptationNoticeSub: 'ನಿಮ್ಮ ಉಳಿಸಿದ ಆದ್ಯತೆಗಳು ಈ ಶಿಫಾರಸುಗಳ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರುತ್ತಿವೆ.',
    whyThisPick: 'ಏಕೆ ಈ ಆಯ್ಕೆ',
    whySarathiRecommended: 'ಸಾರಥಿ ಇದನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಿದೆ',
    whatInfluenced: 'ಈ ಶಿಫಾರಸಿನ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಿದ್ದು ಯಾವುದು?',
    matchBadge: 'ಹೊಂದಾಣಿಕೆ',
    nightRate: '/ರಾತ್ರಿ',
    verifiedQuietZone: 'ದೃಢೀಕರಿಸಿದ ಶಾಂತ ವಲಯ · ಪ್ರವಾಸಿ ಬಸ್ ಗದ್ದಲವಿಲ್ಲ',
    evidenceRelaxed: 'ವಿಶ್ರಾಂತಿ ಶೈಲಿ',
    evidenceBudget: 'ಬಜೆಟ್ ಒಳಗಡೆ',
    evidenceMunnar: 'ಮೂನ್ನಾರ್ ಆದ್ಯತೆ',
    factorRelaxed: 'ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣ',
    factorNature: 'ಪ್ರಕೃತಿ',
    factorBudget: 'ಬಜೆಟ್',
    factorMunnar: 'ಮೂನ್ನಾರ್',
    personalizedForYou: 'ನಿಮಗಾಗಿ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ',
    personalizedSub: 'ನಮ್ಮ ಕಾಗ್ನಿಷನ್ ಎಂಜಿನ್ ನಿಮ್ಮ ಆದ್ಯತೆಗಳೊಂದಿಗೆ ಶಿಫಾರಸುಗಳನ್ನು ಹೇಗೆ ಜೋಡಿಸುತ್ತದೆ.',
    queryMatch: 'ಪ್ರಶ್ನೆ ಹೊಂದಾಣಿಕೆ',
    preferenceMatch: 'ಆದ್ಯತೆ ಹೊಂದಾಣಿಕೆ',
    sessionRelevance: 'ಸೆಷನ್ ಪ್ರಸ್ತುತತೆ',
    filterDestination: 'ತಾಣ',
    filterBudget: 'ದೈನಂದಿನ ಬಜೆಟ್',
    filterTravelStyle: 'ಪ್ರಯಾಣ ಶೈಲಿ (ವೇಗ)',
    filterCategory: 'ವಾಸ್ತವ್ಯದ ವರ್ಗ',
    filterRating: 'ರೇಟಿಂಗ್',
    filterLanguage: 'ವಿವರಣೆಯ ಭಾಷೆ',
    filterRatingHigh: '4.5+ ಉತ್ತಮ ರೇಟಿಂಗ್ ಮಾತ್ರ',
    emptyRecommendations: 'ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ವಾಸ್ತವ್ಯಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
    emptyRecommendationsSub: 'ಬಜೆಟ್ ಮಿತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಅಥವಾ ಇತರ ಕೀವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಲು ಪ್ರಯತ್ನಿಸಿ.',

    savedEyebrow: 'ಪ್ರಯಾಣ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ',
    savedTitle: 'ನಿಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ಪ್ರಯಾಣಗಳು',
    savedSubtitle: 'ನಿಮ್ಮ ವೇಗ, ಗುಂಪಿನ ಗಾತ್ರ ಮತ್ತು ಹವಾಮಾನದ ಆದ್ಯತೆಗಳಿಗೆ ತಕ್ಕಂತೆ ಸಿದ್ಧಪಡಿಸಲಾದ ವೈಯಕ್ತಿಕ ಪ್ರವಾಸ ವಿವರಗಳು.',
    savedEmptyTitle: 'ಇನ್ನೂ ಯಾವುದೇ ಪ್ರವಾಸಗಳನ್ನು ಉಳಿಸಿಲ್ಲ',
    savedEmptySub: 'ಶಿಫಾರಸುಗಳನ್ನು ನೋಡುವಾಗ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ನಿರ್ಮಿಸಲು ಇಷ್ಟವಾದ ಸ್ಥಳಗಳನ್ನು ಉಳಿಸಿ.',
    exploreDestinations: 'ತಾಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    travelerNotes: 'ಪ್ರಯಾಣಿಕರ ಟಿಪ್ಪಣಿಗಳು ಮತ್ತು ವಿಶೇಷ ವಿನಂತಿಗಳು',
    addNotesPlaceholder: 'ಕೊಠಡಿ ಆದ್ಯತೆಗಳು ಅಥವಾ ನೆನಪಿನ ಟಿಪ್ಪಣಿಗಳನ್ನು ಸೇರಿಸಿ...',
    departureDate: 'ನಿರ್ಗಮನ ದಿನಾಂಕ',
    travelersCount: 'ಪ್ರಯಾಣಿಕರು',
    removeTrip: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೊದಿಂದ ತೆಗೆದುಹಾಕಿ',
    editNotes: 'ಟಿಪ್ಪಣಿಗಳನ್ನು ಬದಲಾಯಿಸಿ',
    saveNotes: 'ಟಿಪ್ಪಣಿಗಳನ್ನು ಉಳಿಸಿ',

    liveEyebrow: 'ಲೈವ್ ಸೆಷನ್ ಹೊಂದಾಣಿಕೆ',
    liveTitle: 'ಸಾರಥಿ ನೈಜ ಸಮಯದಲ್ಲಿ ಹೇಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ',
    liveSubtitle: 'ಪ್ರಯಾಣಿಕರ ಸಂವಾದಗಳ ಆಧಾರದ ಮೇಲೆ ಶಿಫಾರಸುಗಳು ನಿರಂತರವಾಗಿ ಬದಲಾಗುತ್ತವೆ. ಒಂದು ಸ್ಥಳವನ್ನು ಉಳಿಸಿದಾಗ ಆದ್ಯತೆಗಳು ತಕ್ಷಣ ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂಬುದನ್ನು ವೀಕ್ಷಿಸಿ.',
    simulateJudgeAction: 'ಬಳಕೆದಾರರ ಕ್ರಿಯೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ (ಜಡ್ಜ್ ಟೆಸ್ಟಿಂಗ್ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್)',
    saveNatureStay: '1. ನೈಸರ್ಗಿಕ ವಾಸ್ತವ್ಯ ಉಳಿಸಿ',
    saveBeachStay: '2. ಕಡಲತೀರದ ವಾಸ್ತವ್ಯ ಉಳಿಸಿ',
    saveAdventureTrek: '3. ಸಾಹಸ ಟ್ರೆಕ್ ಉಳಿಸಿ',
    dismissHotel: '4. ವಾಣಿಜ್ಯ ಹೋಟೆಲ್ ತಿರಸ್ಕರಿಸಿ',
    stageBeforeTitle: 'ಹಂತ 01 • ಸಂವಾದದ ಮೊದಲು',
    stageBeforeDesc: 'ಸೆಷನ್ ಇತಿಹಾಸವಿಲ್ಲದೆ ಕೇವಲ ಆರಂಭಿಕ ಹುಡುಕಾಟವನ್ನು ಆಧರಿಸಿದ ಫಲಿತಾಂಶಗಳು:',
    stageAfterTitle: 'ಹಂತ 02 • ಬಳಕೆದಾರರ ಕ್ರಿಯೆಯ ನಂತರ',
    stageAfterDesc: 'ನಿಮ್ಮ ಸಂವಾದದ ನಂತರ ಪುನಃ ಶ್ರೇಯಾಂಕ ನೀಡಲಾದ ಶಿಫಾರಸುಗಳು:',
    signalShiftsTitle: 'ವೈಯಕ್ತಿಕ ಸಿಗ್ನಲ್‌ಗಳ ಬದಲಾವಣೆ',
    signalShiftsSub: 'ನಿಮ್ಮ ಕ್ರಿಯೆಯ ನಂತರ ಎಂಜಿನ್ ತನ್ನ ಆದ್ಯತೆಗಳ ತೂಕವನ್ನು ಹೇಗೆ ಸರಿಹೊಂದಿಸಿತು.',
    natureAffinity: 'ಪ್ರಕೃತಿ ಮತ್ತು ತೋಟ',
    seclusionAffinity: 'ಏಕಾಂತ ಮತ್ತು ಶಾಂತ ವಲಯ',
    commercialTolerance: 'ವಾಣಿಜ್ಯ ದಟ್ಟಣೆ ಸಹಿಷ್ಣುತೆ',

    evalEyebrow: 'ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಮಾನದಂಡ',
    evalTitle: 'ಶಿಫಾರಸು ಮೌಲ್ಯಮಾಪನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    evalSubtitle: 'ಒಂದೇ ರೀತಿಯ ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಮೂಲ ಮರುಪಡೆಯುವಿಕೆ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿದ ಮರು-ಶ್ರೇಯಾಂಕದ ನಡುವಿನ ಗುಣಮಟ್ಟದ ಹೋಲಿಕೆ.',
    ablationReportTitle: 'ಶಿಫಾರಸು ಅಬ್ಲೇಶನ್ ವರದಿ',
    ablationReportDesc: 'ವಿಧಾನ: ಒಂದೇ ರೀತಿಯ ಮೌಲ್ಯಮಾಪನ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಲೇಬಲ್‌ಗಳು',
    testQueriesLabel: 'ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಗಳು',
    retrievalOnly: 'ಮರುಪಡೆಯುವಿಕೆ ಮಾತ್ರ (Retrieval Only)',
    retrievalPlusRerank: 'ಮರುಪಡೆಯುವಿಕೆ + ವೈಯಕ್ತೀಕರಿಸಿದ ಮರು-ಶ್ರೇಯಾಂಕ',
    measuredDelta: 'ಅಳೆಯಲಾದ ವ್ಯತ್ಯಾಸ (Delta)',
    whatDeltaMeans: 'ಈ ವ್ಯತ್ಯಾಸದ ಅರ್ಥವೇನು',
    intentParserTitle: 'ನೈಸರ್ಗಿಕ ಭಾಷಾ ಉದ್ದೇಶ ವಿಶ್ಲೇಷಣೆ',
    intentParserSub: 'ಸಾರಥಿ ಪ್ರಯಾಣದ ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಆಯಾಮದ ಸಂಕೇತಗಳಾಗಿ ಹೇಗೆ ವಿಭಜಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ:',
    runBenchmark: 'ಮಾನದಂಡ ಚಲಾಯಿಸಿ',
    evaluating: 'ಮೌಲ್ಯಮಾಪನ ನಡೆಯುತ್ತಿದೆ...',

    coldStartTitle: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ',
    coldStartSubtitle: 'ನೀವು ಹೇಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ಸಾರಥಿಗೆ ತಿಳಿಸಿ. ಕೇವಲ 30 ಸೆಕೆಂಡುಗಳು ಸಾಕು.',
    stepPace: '1. ಆದ್ಯತೆಯ ಪ್ರಯಾಣ ವೇಗ',
    stepAtmosphere: '2. ಆದ್ಯತೆಯ ವಾತಾವರಣ ಮತ್ತು ಭೂದೃಶ್ಯ',
    stepBudget: '3. ಬಜೆಟ್ ಮತ್ತು ಸೌಕರ್ಯದ ಮಟ್ಟ',
    continueBtn: 'ಮುಂದುವರಿಯಿರಿ',
    skipForNow: 'ಸದ್ಯಕ್ಕೆ ಬಿಟ್ಟುಬಿಡಿ',

    voiceTitle: 'ಧ್ವನಿ ಮೂಲಕ ಪ್ರಯಾಣ ಹುಡುಕಾಟ',
    voiceListening: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ಆಲೋಚನೆಗಳನ್ನು ಆಲಿಸಲಾಗುತ್ತಿದೆ...',
    voiceHint: 'ಹೇಳಿ: "ಮೂನ್ನಾರ್‌ನಲ್ಲಿ ಮಂಜಿನಿಂದ ಆವೃತವಾದ ಪರ್ವತಗಳ ನಡುವೆ ಶಾಂತ ಸ್ಥಳ..."',
    voiceApply: 'ಹುಡುಕಾಟ ಅನ್ವಯಿಸಿ',

    toastSaved: 'ನಿಮ್ಮ ಪ್ರಯಾಣ ಪೋರ್ಟ್‌ಫೋಲಿಯೊಗೆ ಉಳಿಸಲಾಗಿದೆ',
    toastRemoved: 'ಉಳಿಸಿದ ಪ್ರವಾಸಗಳಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
    toastNotesUpdated: 'ಪ್ರಯಾಣಿಕರ ಟಿಪ್ಪಣಿಗಳನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ',
    toastPrefsCalibrated: 'ಆದ್ಯತೆಗಳನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ: ಕಾಗ್ನಿಷನ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್ ಮರುಹೊಂದಿಸಲಾಗಿದೆ!',
    toastExportSuccess: 'ಪ್ರವಾಸ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ರಫ್ತು ಮಾಡಲಾಗಿದೆ!',
  },

  'ta-IN': {
    navDiscover: 'கண்டறியவும்',
    navRecommendations: 'பரிந்துரைகள்',
    navSavedTrips: 'சேமிக்கப்பட்ட பயணங்கள்',
    navLiveSession: 'நேரலை அமர்வு தழுவல்',
    navEvaluation: 'மதிப்பீட்டு டாஷ்போர்டு',
    personalizationActive: 'தனிப்பயனாக்கம் செயலில்',
    recalibratePreferences: 'விருப்பங்களை மறுசீரமைக்கவும்',
    travelPreferences: 'பயண விருப்பத்தேர்வுகள்',
    cognitiveSettings: 'அறிவாற்றல் அமைப்புகள்',
    profile: 'சுயவிவரம்',
    savedJourneys: 'சேமிக்கப்பட்ட பயணங்கள்',
    brandTagline: 'உங்களைப் புரிந்துகொள்ளும் பயணப் பரிந்துரைகள்.',
    brandSubtitle: 'பயண அறிவாற்றல் என்ஜின்',

    saveToTrip: 'பயணத்தில் சேமிக்கவும்',
    savedInTrip: 'சேமிக்கப்பட்டது',
    viewDetails: 'விவரங்களைக் காண்க',
    resetAll: 'அனைத்தையும் மீட்டமை',
    resetFilters: 'வடிகட்டிகளை மீட்டமை',
    apply: 'பயன்படுத்து',
    cancel: 'ரத்துசெய்',
    exportPortfolio: 'ஏற்றுமதி செய்க',
    close: 'மூடு',

    discoverEyebrow: 'ஏஐ அறிவாற்றல்',
    discoverTitle: 'உங்கள் மனம் எங்கு செல்ல விரும்புகிறது?',
    discoverSubtitle: 'இயல்பான மொழியில் தேடுங்கள். சூழல், வேகம், காலநிலை மற்றும் அமைதியான இடங்களை அறிந்து சாரதி பரிந்துரைக்கிறது.',
    searchPlaceholder: 'உங்கள் சிறந்த வேகம், சூழல் அல்லது நிலப்பரப்பை விவரிக்கவும் (எ.கா: மூணாறு அருகே அமைதியான இடங்கள்)...',
    synthesizeBtn: 'பயணம் தொகுக்கவும்',
    synthesizing: 'தொகுக்கப்படுகிறது...',
    quickTries: 'விரைவுத் தேடல்கள்:',
    quickPromptMunnar: 'மூணாறு அருகே அமைதியான இடங்கள்',
    quickPromptCoorg: 'கூர்க் குறைந்த பட்ஜெட் காபி ட்ரெயில்',
    quickPromptGoa: 'தெற்கு கோவா அமைதியான குடும்பத் தங்குமிடம்',
    quickPromptSpiti: 'இமயமலை தனிப் பயணம்',
    exploreTravelStyles: 'பயண பாணியின்படி கண்டறியவும்',
    calibrateBaseline: 'உங்கள் சுயவிவரத்தை அமைக்கவும்',

    recEyebrow: 'உங்களுக்காக பிரத்யேகமானது',
    recTitle: 'உங்களுக்காக தேர்ந்தெடுக்கப்பட்ட இடங்கள்',
    recSubtitle: 'உங்கள் தேடல், விருப்பத்தேர்வுகள் மற்றும் சமீபத்திய செயல்பாடுகளின் அடிப்படையில் பரிந்துரைகள்.',
    activeQuery: '“மூணாறு அருகே அமைதியான இடங்கள்”',
    editQuery: 'தேடலை மாற்றவும்',
    adaptationNoticeTitle: 'உங்கள் சமீபத்திய செயல்பாட்டின் அடிப்படையில் புதுப்பிக்கப்பட்டது',
    adaptationNoticeSub: 'உங்கள் சேமிக்கப்பட்ட விருப்பத்தேர்வுகள் இந்த பரிந்துரைகளில் மாற்றங்களை ஏற்படுத்துகின்றன.',
    whyThisPick: 'ஏன் இந்த தேர்வு',
    whySarathiRecommended: 'சாரதி இதை ஏன் பரிந்துரைத்தது',
    whatInfluenced: 'இந்த பரிந்துரையை பாதித்தது எது?',
    matchBadge: 'பொருத்தம்',
    nightRate: '/இரவு',
    verifiedQuietZone: 'உறுதிப்படுத்தப்பட்ட அமைதியான பகுதி · டூர்-பஸ் இரைச்சலற்றது',
    evidenceRelaxed: 'அமைதியான பாணி',
    evidenceBudget: 'பட்ஜெட்டுக்குள்',
    evidenceMunnar: 'மூணாறு விருப்பம்',
    factorRelaxed: 'அமைதியான பயணம்',
    factorNature: 'இயற்கை',
    factorBudget: 'பட்ஜெட்',
    factorMunnar: 'மூணாறு',
    personalizedForYou: 'உங்களுக்காக பிரத்யேகமானது',
    personalizedSub: 'எங்கள் காக்னிஷன் என்ஜின் உங்கள் சுயவிவரத்துடன் பரிந்துரைகளை எவ்வாறு பொருத்துகிறது.',
    queryMatch: 'தேடல் பொருத்தம்',
    preferenceMatch: 'விருப்ப பொருத்தம்',
    sessionRelevance: 'அமர்வு பொருத்தம்',
    filterDestination: 'இலக்கு',
    filterBudget: 'இரவு பட்ஜெட்',
    filterTravelStyle: 'பயண பாணி (வேகம்)',
    filterCategory: 'தங்குமிடம் வகை',
    filterRating: 'மதிப்பீடு',
    filterLanguage: 'விளக்க மொழி',
    filterRatingHigh: '4.5+ சிறந்த மதிப்பீடு மட்டும்',
    emptyRecommendations: 'உங்கள் வடிகட்டிகளுக்கு ஏற்ற தங்குமிடங்கள் இல்லை',
    emptyRecommendationsSub: 'பட்ஜெட் வரம்பை அதிகரிக்க அல்லது வேறு சொற்களைப் பயன்படுத்த முயற்சிக்கவும்.',

    savedEyebrow: 'பயணத் தொகுப்பு',
    savedTitle: 'உங்கள் தேர்ந்தெடுக்கப்பட்ட பயணங்கள்',
    savedSubtitle: 'உங்கள் வேகம், குழு அளவு மற்றும் காலநிலை விருப்பங்களுக்கு ஏற்ப தயாரிக்கப்பட்ட தனிப்பயனாக்கப்பட்ட பயணத்திட்டங்கள்.',
    savedEmptyTitle: 'இன்னும் பயணங்கள் சேமிக்கப்படவில்லை',
    savedEmptySub: 'பரிந்துரைகளைப் பார்க்கும்போது, உங்கள் சொந்தப் பயணத் தொகுப்பை உருவாக்க விருப்பமானவற்றை சேமிக்கவும்.',
    exploreDestinations: 'இடங்களைக் கண்டறியவும்',
    travelerNotes: 'பயணிகளின் குறிப்புகள் மற்றும் சிறப்பு கோரிக்கைகள்',
    addNotesPlaceholder: 'அறை விருப்பங்கள் அல்லது பயண நினைவூட்டல்களைச் சேர்க்கவும்...',
    departureDate: 'புறப்படும் தேதி',
    travelersCount: 'பயணிகள்',
    removeTrip: 'தொகுப்பிலிருந்து நீக்கு',
    editNotes: 'குறிப்புகளை மாற்று',
    saveNotes: 'குறிப்புகளை சேமி',

    liveEyebrow: 'நேரலை அமர்வு தழுவல்',
    liveTitle: 'சாரதி நிகழ்நேரத்தில் எவ்வாறு தகவமைக்கிறது',
    liveSubtitle: 'பயணிகளின் தேர்வுகளுக்கு ஏற்ப பரிந்துரைகள் தொடர்ந்து மாறும். ஒரு தங்குமிடத்தை சேமிக்கும் போது விருப்பங்கள் எவ்வாறு மாறுகின்றன என்பதைக் காணவும்.',
    simulateJudgeAction: 'பயனர் செயலை சோதிக்கவும் (நடுவர் சோதனை களம்)',
    saveNatureStay: '1. இயற்கை தங்குமிடத்தை சேமிக்கவும்',
    saveBeachStay: '2. கடற்கரை தங்குமிடத்தை சேமிக்கவும்',
    saveAdventureTrek: '3. சாகச மலையேற்றத்தை சேமிக்கவும்',
    dismissHotel: '4. வணிக ஹோட்டலை நிராகரிக்கவும்',
    stageBeforeTitle: 'நிலை 01 • செயலுக்கு முன்',
    stageBeforeDesc: 'அமர்வு வரலாறு இல்லாமல் ஆரம்ப தேடலை மட்டுமே அடிப்படையாகக் கொண்ட முடிவுகள்:',
    stageAfterTitle: 'நிலை 02 • பயனர் செயலுக்குப் பின்',
    stageAfterDesc: 'உங்கள் செயல்பாட்டிற்குப் பிறகு மறுவரிசைப்படுத்தப்பட்ட பரிந்துரைகள்:',
    signalShiftsTitle: 'தனிப்பயனாக்க சிக்னல் மாற்றங்கள்',
    signalShiftsSub: 'உங்கள் செயலுக்குப் பிறகு என்ஜின் தனது விருப்பங்களை எவ்வாறு மாற்றியது.',
    natureAffinity: 'இயற்கை மற்றும் தோட்டம்',
    seclusionAffinity: 'தனிமை மற்றும் அமைதியான பகுதி',
    commercialTolerance: 'வணிக நெரிசல் சகிப்புத்தன்மை',

    evalEyebrow: 'மதிப்பீடு மற்றும் அளவுகோல்',
    evalTitle: 'பரிந்துரை மதிப்பீட்டு டாஷ்போர்டு',
    evalSubtitle: 'ஒரே வினாக்களில் அடிப்படை மீட்டெடுப்பு மற்றும் தனிப்பயனாக்கப்பட்ட மறு-வரிசைப்படுத்தல் இடையேயான துல்லியமான ஒப்பீடு.',
    ablationReportTitle: 'பரிந்துரை அப்லேஷன் அறிக்கை',
    ablationReportDesc: 'முறைமை: ஒரே மதிப்பீட்டு வினாக்கள் மற்றும் பொருத்தமான லேபிள்கள்',
    testQueriesLabel: 'சோதனை வினாக்கள்',
    retrievalOnly: 'மீட்டெடுப்பு மட்டும் (Retrieval Only)',
    retrievalPlusRerank: 'மீட்டெடுப்பு + தனிப்பயனாக்கப்பட்ட மறு-வரிசை',
    measuredDelta: 'அளவிடப்பட்ட மாற்றம் (Delta)',
    whatDeltaMeans: 'இந்த மாற்றத்தின் பொருள் என்ன',
    intentParserTitle: 'இயற்கை மொழி நோக்கப் பகுப்பாய்வு',
    intentParserSub: 'சாரதி உங்கள் பயண வினாக்களை எவ்வாறு பரிமாண சிக்னல்களாக பிரிக்கிறது என்பதை சோதிக்கவும்:',
    runBenchmark: 'சோதனையை இயக்கவும்',
    evaluating: 'மதிப்பீடு செய்யப்படுகிறது...',

    coldStartTitle: 'உங்கள் பயண சுயவிவரத்தை அமைக்கவும்',
    coldStartSubtitle: 'நீங்கள் எவ்வாறு பயணிக்க விரும்புகிறீர்கள் என்பதை சாரதிக்கு தெரிவிக்கவும். வெறும் 30 வினாடிகள் போதும்.',
    stepPace: '1. விரும்பிய பயண வேகம்',
    stepAtmosphere: '2. விரும்பிய சூழல் மற்றும் நிலப்பரப்பு',
    stepBudget: '3. பட்ஜெட் மற்றும் வசதி நிலை',
    continueBtn: 'தொடரவும்',
    skipForNow: 'இப்போதைக்கு தவிர்க்கவும்',

    voiceTitle: 'குரல் வழி பயணத் தேடல்',
    voiceListening: 'உங்கள் பயண எண்ணங்களைக் கேட்கிறது...',
    voiceHint: 'கூறவும்: "மூணாறில் பனிமூட்டமான மலைகளுக்கு நடுவே அமைதியான இடம்..."',
    voiceApply: 'தேடலைப் பயன்படுத்து',

    toastSaved: 'உங்கள் பயணத் தொகுப்பில் சேமிக்கப்பட்டது',
    toastRemoved: 'சேமிக்கப்பட்ட பயணங்களிலிருந்து நீக்கப்பட்டது',
    toastNotesUpdated: 'பயணிகளின் குறிப்புகள் வெற்றிகரமாக புதுப்பிக்கப்பட்டன',
    toastPrefsCalibrated: 'விருப்பங்கள் புதுப்பிக்கப்பட்டன: காக்னிஷன் மேட்ரிக்ஸ் மறுசீரமைக்கப்பட்டது!',
    toastExportSuccess: 'பயணத்திட்டம் வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது!',
  },
};

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  'en-IN': { ...RAW_TRANSLATIONS['en-IN'], ...COMMON_EXTRA_STRINGS['en-IN'] },
  'hi-IN': { ...RAW_TRANSLATIONS['hi-IN'], ...COMMON_EXTRA_STRINGS['hi-IN'] },
  'ml-IN': { ...RAW_TRANSLATIONS['ml-IN'], ...COMMON_EXTRA_STRINGS['ml-IN'] },
  'kn-IN': { ...RAW_TRANSLATIONS['kn-IN'], ...COMMON_EXTRA_STRINGS['kn-IN'] },
  'ta-IN': { ...RAW_TRANSLATIONS['ta-IN'], ...COMMON_EXTRA_STRINGS['ta-IN'] },
};

