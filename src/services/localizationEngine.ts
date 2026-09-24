import { LanguageCode, DestinationTrip, TravelStyle, LocalizedDestinationTrip, LocalizedTravelStyle, DayItinerary } from '../types';
import { LOCALIZED_PLACE_EXPLANATIONS, LOCALIZED_TRAVEL_STYLES } from '../i18n/localizedData';
import { TRANSLATIONS } from '../i18n/translations';

export type ShortLangCode = 'en' | 'hi' | 'ml' | 'kn' | 'ta';

export const toShortLang = (code: LanguageCode): ShortLangCode => {
  switch (code) {
    case 'hi-IN':
      return 'hi';
    case 'ml-IN':
      return 'ml';
    case 'kn-IN':
      return 'kn';
    case 'ta-IN':
      return 'ta';
    case 'en-IN':
    default:
      return 'en';
  }
};

/**
 * Universal dynamic taxonomy dictionary for travel domain terminology.
 * Automatically translates common categories, tags, badges, and modifiers
 * for any future recommendation or backend object that enters the frontend.
 */
export const TRAVEL_TAXONOMY: Record<string, Record<ShortLangCode, string>> = {
  // Categories
  'homestay': {
    en: 'Homestay',
    hi: 'होमस्टे',
    ml: 'ഹോംസ്റ്റേ',
    kn: 'ಹೋಮ್‌ಸ್ಟೇ',
    ta: 'ஹோம்ஸ்டே',
  },
  'tea estate': {
    en: 'Tea Estate',
    hi: 'चाय बागान',
    ml: 'തേയിലത്തോട്ടം',
    kn: 'ಚಹಾ ತೋಟ',
    ta: 'தேயிலைத் தோட்டம்',
  },
  'tea estate bungalow': {
    en: 'Tea Estate Bungalow',
    hi: 'चाय बागान बंगला',
    ml: 'ടീ എസ്റ്റേറ്റ് ബംഗ്ലാവ്',
    kn: 'ಚಹಾ ತೋಟದ ಬಂಗಲೆ',
    ta: 'தேயிலைத் தோட்ட பங்களா',
  },
  'cardamom homestay': {
    en: 'Cardamom Homestay',
    hi: 'इलायची होमस्टे',
    ml: 'ഏലത്തോട്ട ഹോംസ്റ്റേ',
    kn: 'ಏಲಕ್ಕಿ ಹೋಮ್‌ಸ್ಟೇ',
    ta: 'ஏலக்காய் ஹோம்ஸ்டே',
  },
  'boutique villa': {
    en: 'Boutique Villa',
    hi: 'बुटीक विला',
    ml: 'ബൊട്ടീക് വില്ല',
    kn: 'ಬೊಟಿಕ್ ವಿಲ್ಲಾ',
    ta: 'பொட்டிக் வில்லா',
  },
  'eco-cottage': {
    en: 'Eco-Cottage',
    hi: 'इको-कॉटेज',
    ml: 'ഇക്കോ-കോട്ടേജ്',
    kn: 'ಪರಿಸರ ಕಾಟೇಜ್',
    ta: 'சுற்றுச்சூழல் குடில்',
  },
  'eco-cabin': {
    en: 'Eco-Cabin',
    hi: 'इको-केबिन',
    ml: 'ഇക്കോ-ക്യാബിൻ',
    kn: 'ಪರಿಸರ ಕ್ಯಾಬಿನ್',
    ta: 'சுற்றுச்சூழல் கேபின்',
  },
  'resort': {
    en: 'Resort',
    hi: 'रिसॉर्ट',
    ml: 'റിസോർട്ട്',
    kn: 'ರೆಸಾರ್ಟ್',
    ta: 'ரிசார்ட்',
  },
  'heritage palace': {
    en: 'Heritage Palace',
    hi: 'हेरिटेज पैलेस',
    ml: 'പൈതൃക കൊട്ടാരം',
    kn: 'ಪಾರಂಪರಿಕ ಅರಮನೆ',
    ta: 'பாரம்பரிய அரண்மனை',
  },
  'riverside camp': {
    en: 'Riverside Camp',
    hi: 'नदी किनारा कैंप',
    ml: 'നദീതീര ക്യാമ്പ്',
    kn: 'ನದಿತೀರದ ಕ್ಯಾಂಪ್',
    ta: 'நதிக்கரை முகாம்',
  },

  // Tags & Badges
  'mist view': {
    en: 'Mist View',
    hi: 'धुंध का दृश्य',
    ml: 'മഞ്ഞ് കാഴ്ച',
    kn: 'ಮಂಜಿನ ನೋಟ',
    ta: 'பனிமூட்ட பார்வை',
  },
  'quiet zone': {
    en: 'Quiet Zone',
    hi: 'शांत क्षेत्र',
    ml: 'ശാന്ത മേഖല',
    kn: 'ಶಾಂತ ವಲಯ',
    ta: 'அமைதியான பகுதி',
  },
  'estate bungalow': {
    en: 'Estate Bungalow',
    hi: 'एस्टेट बंगला',
    ml: 'എസ്റ്റേറ്റ് ബംഗ്ലാവ്',
    kn: 'ತೋಟದ ಬಂಗಲೆ',
    ta: 'தோட்ட பங்களா',
  },
  'cardamom grove': {
    en: 'Cardamom Grove',
    hi: 'इलायची वाटिका',
    ml: 'ഏലത്തോട്ടം',
    kn: 'ಏಲಕ್ಕಿ ವನ',
    ta: 'ஏலக்காய் தோப்பு',
  },
  'culinary trail': {
    en: 'Culinary Trail',
    hi: 'पाक कला अनुभव',
    ml: 'പാചക പാരമ്പര്യം',
    kn: 'ಆಹಾರ ಪಯಣ',
    ta: 'உணவு கலாச்சாரப் பாதை',
  },
  'private stream': {
    en: 'Private Stream',
    hi: 'निजी जलधारा',
    ml: 'സ്വകാര്യ അരുവി',
    kn: 'ಖಾಸಗಿ ನೈಸರ್ಗಿಕ ಝರಿ',
    ta: 'பிரத்யேக நீரோடை',
  },
  'off-grid solar': {
    en: 'Off-Grid Solar',
    hi: 'ऑफ-ग्रिड सोलर',
    ml: 'ഓഫ്-ഗ്രിഡ് സോളാർ',
    kn: 'ಆಫ್-ಗ್ರಿಡ್ ಸೌರಶಕ್ತಿ',
    ta: 'சூரிய சக்தி பயன்பாடு',
  },
  'ridge balcony': {
    en: 'Ridge Balcony',
    hi: 'रिज बालकनी',
    ml: 'റിഡ്ജ് ബാൽക്കണി',
    kn: 'ಬೆಟ್ಟದ ಬಾಲ್ಕನಿ',
    ta: 'மலை முகடு பால்கனி',
  },
  'stargazing deck': {
    en: 'Stargazing Deck',
    hi: 'तारा दर्शन डेक',
    ml: 'നക്ഷത്ര നിരീക്ഷണ ഡെക്ക്',
    kn: 'ನಕ್ಷತ್ರ ವೀಕ್ಷಣಾ ಡೆಕ್',
    ta: 'நட்சத்திர பார்வை தளம்',
  },

  // Styles & Cadence
  'relaxed': {
    en: 'Relaxed',
    hi: 'शांत एवं सुकून',
    ml: 'ശാന്തമായ വിശ്രമം',
    kn: 'ಶಾಂತ ವಿಶ್ರಾಂತಿ',
    ta: 'அமைதியான வேகம்',
  },
  'adventure': {
    en: 'Adventure',
    hi: 'रोमांचक यात्रा',
    ml: 'സാഹസിക യാത്ര',
    kn: 'ಸಾಹಸಮಯ ಪಯಣ',
    ta: 'சாகசப் பயணம்',
  },
  'luxury': {
    en: 'Luxury',
    hi: 'विलासिता',
    ml: 'ലക്ഷ്വറി അനുഭവം',
    kn: 'ಐಷಾರಾಮಿ',
    ta: 'ஆடம்பரப் பயணம்',
  },
  'family': {
    en: 'Family',
    hi: 'पारिवारिक प्रवास',
    ml: 'കുടുംബ യാത്ര',
    kn: 'ಕುಟುಂಬ ಪ್ರವಾಸ',
    ta: 'குடும்பப் பயணம்',
  },
  'budget': {
    en: 'Budget',
    hi: 'बजट अनुकूल',
    ml: 'ബജറ്റ് സൗഹൃദം',
    kn: 'ಮಿತವ್ಯಯ',
    ta: 'சிக்கனப் பயணம்',
  },
  'culture': {
    en: 'Culture',
    hi: 'संस्कृति व विरासत',
    ml: 'പൈതൃകവും സംസ്കാരവും',
    kn: 'ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆ',
    ta: 'கலாச்சாரம் மற்றும் பாரம்பரியம்',
  },
  'moderate': {
    en: 'Moderate',
    hi: 'मध्यम गति',
    ml: 'മിതമായ വേഗത',
    kn: 'ಮಧ್ಯಮ ವೇಗ',
    ta: 'மிதமான வேகம்',
  },
  'action-packed': {
    en: 'Action-packed',
    hi: 'गतिशील अन्वेषण',
    ml: 'സജീവമായ പര്യവേക്ഷണം',
    kn: 'ಚುರುಕಾದ ಅನ್ವೇಷಣೆ',
    ta: 'விறுவிறுப்பான ஆய்வு',
  },
  'immersive': {
    en: 'Immersive',
    hi: 'गहरा अनुभव',
    ml: 'ആഴത്തിലുള്ള അനുഭവം',
    kn: 'ಆಳವಾದ ಅನುಭವ',
    ta: 'ஆழ்ந்த அனுபவம்',
  },

  // Status & Densities
  'low': {
    en: 'Low',
    hi: 'कम',
    ml: 'കുറവ്',
    kn: 'ಕಡಿಮೆ',
    ta: 'குறைவு',
  },
  'high': {
    en: 'High',
    hi: 'उच्च',
    ml: 'കൂടുതൽ',
    kn: 'ಹೆಚ್ಚು',
    ta: 'அதிகம்',
  },
  'sparse': {
    en: 'Sparse',
    hi: 'विरल',
    ml: 'കുറഞ്ഞ തിരക്ക്',
    kn: 'ವಿರಳ',
    ta: 'குறைந்த கூட்டம்',
  },
  'verified': {
    en: 'Verified',
    hi: 'प्रमाणित',
    ml: 'സാക്ഷ്യപ്പെടുത്തിയത്',
    kn: 'ದೃಢೀಕೃತ',
    ta: 'சரிபார்க்கப்பட்டது',
  },
};

/**
 * Universal content resolver. Resolves any piece of dynamic text,
 * multilingual object, AI response, or catalogue term into the target language.
 *
 * Fallback Hierarchy:
 * 1. Exact targetLang in content object (e.g. 'hi-IN')
 * 2. Short language code in content object (e.g. 'hi')
 * 3. AI response model language alignment
 * 4. Domain taxonomy / vocabulary match for strings
 * 5. English / default fallback
 * 6. Native raw string (preserving proper nouns without crashing)
 * 7. Safe fallback string (never null/undefined/[object Object])
 */
export const localizeContent = (
  content: unknown,
  targetLang: LanguageCode = 'en-IN',
  fallback: string = ''
): string => {
  if (content === null || content === undefined) {
    return fallback;
  }

  const shortCode = toShortLang(targetLang);

  // 1. Primitive string
  if (typeof content === 'string') {
    const trimmed = content.trim();
    if (!trimmed) return fallback;

    // Check domain taxonomy for ubiquitous terms (categories, tags, etc.)
    const normalizedKey = trimmed.toLowerCase();
    if (TRAVEL_TAXONOMY[normalizedKey]?.[shortCode]) {
      return TRAVEL_TAXONOMY[normalizedKey][shortCode];
    }

    // Direct return (proper noun or already localized string)
    return trimmed;
  }

  // 2. Primitive number / boolean
  if (typeof content === 'number' || typeof content === 'boolean') {
    return String(content);
  }

  // 3. Object representation
  if (typeof content === 'object') {
    const obj = content as Record<string, unknown>;

    // Case A: Multilingual dictionary: { 'hi-IN': '...', 'en-IN': '...' }
    if (typeof obj[targetLang] === 'string' && obj[targetLang]) {
      return obj[targetLang] as string;
    }

    // Case B: Multilingual dictionary with short codes: { hi: '...', en: '...' }
    if (typeof obj[shortCode] === 'string' && obj[shortCode]) {
      return obj[shortCode] as string;
    }

    // Case C: Object with nested translations: { translations: { 'hi-IN': '...', hi: '...' } }
    if (obj.translations && typeof obj.translations === 'object') {
      const trans = obj.translations as Record<string, unknown>;
      if (typeof trans[targetLang] === 'string' && trans[targetLang]) {
        return trans[targetLang] as string;
      }
      if (typeof trans[shortCode] === 'string' && trans[shortCode]) {
        return trans[shortCode] as string;
      }
      if (typeof trans['en-IN'] === 'string' && trans['en-IN']) {
        return trans['en-IN'] as string;
      }
      if (typeof trans['en'] === 'string' && trans['en']) {
        return trans['en'] as string;
      }
    }

    // Case D: AI-generated response object: { explanation: "...", language: "hi-IN" }
    if (typeof obj.explanation === 'string' && obj.explanation) {
      if (obj.language === targetLang || obj.language === shortCode) {
        return obj.explanation;
      }
      // If translations provided inside AI payload
      if (obj.translations && typeof obj.translations === 'object') {
        const trans = obj.translations as Record<string, unknown>;
        if (typeof trans[shortCode] === 'string' && trans[shortCode]) {
          return trans[shortCode] as string;
        }
      }
      return obj.explanation;
    }

    // Case E: Generic text fields: { text: "...", label: "...", title: "..." }
    for (const field of ['text', 'label', 'title', 'value', 'description']) {
      if (typeof obj[field] === 'string' && obj[field]) {
        return obj[field] as string;
      }
    }

    // Case F: Fallback to English in dictionary
    if (typeof obj['en-IN'] === 'string' && obj['en-IN']) {
      return obj['en-IN'] as string;
    }
    if (typeof obj['en'] === 'string' && obj['en']) {
      return obj['en'] as string;
    }
  }

  return fallback;
};

/**
 * Universal entity localizer for destination trips / hotels / recommendations.
 * Normalizes any trip object (mock or future API response) into a localized presentation object.
 */
export const localizeTrip = (
  trip: DestinationTrip | null | undefined,
  targetLang: LanguageCode = 'en-IN'
): LocalizedDestinationTrip => {
  if (!trip) {
    // Return empty safe stub if null
    return {
      id: '',
      title: '',
      region: '',
      matchScore: 0,
      imageUrl: '',
      quotePrompt: '',
      metaBadge: '',
      metaIcon: 'spa',
      duration: '',
      cost: '',
      costNumeric: 0,
      climate: '',
      elevation: '',
      crowdLevel: 'Low',
      style: 'Relaxed',
      description: '',
      bestTime: '',
      intentTags: [],
      itinerary: [],
      coordinates: { lat: 0, lon: 0 },
      localizedTitle: '',
      localizedCategory: '',
      localizedBadge: '',
      localizedClimate: '',
      localizedWhyPicked: '',
      localizedBullets: [],
      localizedTags: [],
      localizedItinerary: [],
      localizedCost: '',
    };
  }

  const shortCode = toShortLang(targetLang);
  const t = TRANSLATIONS[targetLang] || TRANSLATIONS['en-IN'];
  const demoLocInfo = LOCALIZED_PLACE_EXPLANATIONS[targetLang]?.[trip.id];

  // 1. Title: preserve proper noun unless explicitly localized
  const localizedTitle = trip.title;

  // 2. Category
  const rawCat = trip.stayCategory || 'Boutique';
  const localizedCategory = demoLocInfo?.stayCategory || localizeContent(rawCat, targetLang, rawCat);

  // 3. Meta Badge
  const rawBadge = trip.metaBadge || 'Verified Stay';
  const localizedBadge = demoLocInfo?.metaBadge || localizeContent(rawBadge, targetLang, rawBadge);

  // 4. Climate
  const rawClimate = trip.climate || '';
  const localizedClimate = demoLocInfo?.climate || localizeContent(rawClimate, targetLang, rawClimate);

  // 5. Why Picked (AI explanation & reasoning)
  let localizedWhyPicked = '';
  if (trip.aiExplanation) {
    if (trip.aiExplanation.translations?.[targetLang]) {
      localizedWhyPicked = trip.aiExplanation.translations[targetLang]!;
    } else if (trip.aiExplanation.translations?.[shortCode]) {
      localizedWhyPicked = trip.aiExplanation.translations[shortCode]!;
    } else if (trip.aiExplanation.language === targetLang || trip.aiExplanation.language === shortCode) {
      localizedWhyPicked = trip.aiExplanation.explanation;
    }
  }

  if (!localizedWhyPicked && trip.whyPickedTranslations) {
    if (trip.whyPickedTranslations[shortCode]) {
      localizedWhyPicked = trip.whyPickedTranslations[shortCode]!;
    } else if (trip.whyPickedTranslations[targetLang]) {
      localizedWhyPicked = trip.whyPickedTranslations[targetLang]!;
    }
  }

  if (!localizedWhyPicked && demoLocInfo?.whyPicked) {
    localizedWhyPicked = demoLocInfo.whyPicked;
  }

  if (!localizedWhyPicked) {
    localizedWhyPicked = trip.whyPicked || trip.description || '';
  }

  // 6. Evidence Bullets
  let localizedBullets: string[] = [];
  if (trip.bulletTranslations?.[targetLang]) {
    localizedBullets = trip.bulletTranslations[targetLang]!;
  } else if (trip.bulletTranslations?.[shortCode]) {
    localizedBullets = trip.bulletTranslations[shortCode]!;
  } else if (demoLocInfo?.bullets && demoLocInfo.bullets.length > 0) {
    localizedBullets = demoLocInfo.bullets;
  } else if (trip.bullets && trip.bullets.length > 0) {
    localizedBullets = trip.bullets.map((b) => localizeContent(b, targetLang, b));
  } else {
    // Universal synthesized bullets in target language for ANY future destination
    const styleLabel = localizeContent(trip.style, targetLang, trip.style);
    localizedBullets = [
      `${t.synthesizedFor || 'Optimized for'} ${styleLabel} ${t.cadenceLabel || 'cadence'}`,
      `${t.verifiedPricedAt || 'Estimated at'} ${trip.cost} ${t.withLowCrowd || 'with verified tranquil atmosphere'}`,
      `${t.selectedAtmosphere || 'Curated for scenic micro-climate'}: ${localizedClimate}`,
    ];
  }

  // 7. Intent Tags
  let localizedTags: string[] = [];
  if (demoLocInfo?.tags && demoLocInfo.tags.length > 0) {
    localizedTags = demoLocInfo.tags;
  } else {
    localizedTags = (trip.intentTags || []).map((tag) => localizeContent(tag, targetLang, tag));
  }

  // 8. Itinerary
  const localizedItinerary: DayItinerary[] = (trip.itinerary || []).map((day) => ({
    ...day,
    title: localizeContent(day.title, targetLang, day.title),
    morning: localizeContent(day.morning, targetLang, day.morning),
    afternoon: localizeContent(day.afternoon, targetLang, day.afternoon),
    evening: localizeContent(day.evening, targetLang, day.evening),
    highlight: localizeContent(day.highlight, targetLang, day.highlight),
  }));

  // 9. Cost formatted
  const localizedCost = trip.cost || (trip.costNumeric ? formatCurrency(trip.costNumeric, targetLang) : '');

  return {
    ...trip,
    localizedTitle,
    localizedCategory,
    localizedBadge,
    localizedClimate,
    localizedWhyPicked,
    localizedBullets,
    localizedTags,
    localizedItinerary,
    localizedCost,
  };
};

/**
 * Universal entity localizer for Travel Styles.
 */
export const localizeTravelStyle = (
  style: TravelStyle,
  targetLang: LanguageCode = 'en-IN'
): LocalizedTravelStyle => {
  const demoStyle = LOCALIZED_TRAVEL_STYLES[targetLang]?.[style.id];
  if (demoStyle) {
    return {
      ...style,
      localizedName: demoStyle.name,
      localizedBadge: demoStyle.badge,
      localizedDesc: demoStyle.desc,
      localizedStat: demoStyle.stat,
    };
  }

  return {
    ...style,
    localizedName: localizeContent(style.name, targetLang, style.name),
    localizedBadge: localizeContent(style.badge, targetLang, style.badge),
    localizedDesc: localizeContent(style.description, targetLang, style.description),
    localizedStat: localizeContent(style.statLabel, targetLang, style.statLabel),
  };
};

/**
 * Locale-aware Currency Formatter
 */
export const formatCurrency = (amount: number, locale: LanguageCode = 'en-IN'): string => {
  try {
    const formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
    return formatted;
  } catch {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
};

/**
 * Locale-aware Number Formatter
 */
export const formatNumber = (value: number, locale: LanguageCode = 'en-IN'): string => {
  try {
    return new Intl.NumberFormat(locale).format(value);
  } catch {
    return String(value);
  }
};

/**
 * Locale-aware Percentage Formatter
 */
export const formatPercent = (value: number, locale: LanguageCode = 'en-IN'): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value / 100);
  } catch {
    return `${value}%`;
  }
};

/**
 * Locale-aware Date Formatter
 */
export const formatDate = (dateInput: string | Date, locale: LanguageCode = 'en-IN'): string => {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(date.getTime())) {
      return String(dateInput);
    }
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return String(dateInput);
  }
};
