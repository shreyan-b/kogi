import React, { useState, useEffect, useRef } from 'react';
import { TravelTab, LanguageCode } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentTab: TravelTab;
  onSelectTab: (tab: TravelTab) => void;
  savedCount: number;
  onOpenOnboarding: () => void;
}

interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en-IN', name: 'English', nativeName: 'English' },
  { code: 'hi-IN', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ml-IN', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'kn-IN', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ta-IN', name: 'Tamil', nativeName: 'தமிழ்' },
];

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  savedCount,
  onOpenOnboarding,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langMenuRef = useRef<HTMLDivElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      title: 'Micro-climate update in Munnar',
      desc: 'Morning fog density expected at 92% between 5:45 AM and 7:15 AM.',
      time: '12m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Session Adaptation triggered',
      desc: 'Lowered crowd friction threshold based on your slow-cadence preference.',
      time: '1h ago',
      unread: false,
    },
    {
      id: 3,
      title: 'Vembanad Estuary rate alert',
      desc: 'Private solar kettuvallam prices dipped 12% for midweek departures.',
      time: '3h ago',
      unread: false,
    },
  ];

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf8fc]/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="h-16 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        
        {/* Brand Lockup: Abstract Navigation / Compass Mark + SARATHI */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectTab('discover')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f50] rounded-xl transition-transform active:scale-98 group cursor-pointer"
            aria-label="Sarathi Home"
          >
            {/* Abstract Navigation / Compass Emblem */}
            <div className="w-8 h-8 rounded-xl bg-[#005f50] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0d7a68] transition-colors shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.5L18.5 12L12 21.5L5.5 12L12 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6.5L15.5 12L12 17.5L8.5 12L12 6.5Z"
                  fill="#99f3dd"
                />
                <circle cx="12" cy="12" r="1.5" fill="#005f50" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-[17px] font-bold text-[#18181B] tracking-[-0.03em] leading-tight">
                SARATHI
              </span>
              <span className="hidden sm:inline text-[10px] text-[#52525B] font-medium tracking-tight">
                {t.brandSubtitle}
              </span>
            </div>
          </button>

          {/* Desktop Subtle Tagline */}
          <div className="hidden 2xl:flex items-center gap-2 pl-2 border-l border-[#E5E7EB]">
            <span className="text-xs text-[#71717A] tracking-normal font-normal">
              {t.brandTagline}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB]/80 shadow-2xs">
          <button
            onClick={() => onSelectTab('discover')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 whitespace-nowrap cursor-pointer ${
              currentTab === 'discover'
                ? 'bg-[#E6F4F1] text-[#005f50] font-bold border border-[#005f50]/20 shadow-2xs'
                : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5] font-medium border border-transparent'
            }`}
          >
            {t.navDiscover}
          </button>

          <button
            onClick={() => onSelectTab('recommendations')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 whitespace-nowrap cursor-pointer ${
              currentTab === 'recommendations'
                ? 'bg-[#E6F4F1] text-[#005f50] font-bold border border-[#005f50]/20 shadow-2xs'
                : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5] font-medium border border-transparent'
            }`}
          >
            {t.navRecommendations}
          </button>

          <button
            onClick={() => onSelectTab('saved-trips')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'saved-trips'
                ? 'bg-[#E6F4F1] text-[#005f50] font-bold border border-[#005f50]/20 shadow-2xs'
                : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5] font-medium border border-transparent'
            }`}
          >
            <span>{t.navSavedTrips}</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#005f50] text-white font-bold leading-tight">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('live-session-adaptation')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 whitespace-nowrap cursor-pointer ${
              currentTab === 'live-session-adaptation'
                ? 'bg-[#E6F4F1] text-[#005f50] font-bold border border-[#005f50]/20 shadow-2xs'
                : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5] font-medium border border-transparent'
            }`}
          >
            {t.navLiveSession}
          </button>

          <button
            onClick={() => onSelectTab('evaluation-dashboard')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 whitespace-nowrap cursor-pointer ${
              currentTab === 'evaluation-dashboard'
                ? 'bg-[#E6F4F1] text-[#005f50] font-bold border border-[#005f50]/20 shadow-2xs'
                : 'text-[#52525B] hover:text-[#18181B] hover:bg-[#F4F4F5] font-medium border border-transparent'
            }`}
          >
            {t.navEvaluation}
          </button>
        </nav>

        {/* Right Controls: Personalization Status, Language, Notifications, User Profile */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Personalization Status Indicator */}
          <button
            type="button"
            onClick={onOpenOnboarding}
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E7EB] hover:border-[#005f50]/40 transition-all cursor-pointer group shadow-2xs"
            title="Click to recalibrate preferences"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005f50] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005f50]"></span>
            </span>
            <span className="text-xs font-semibold text-[#005f50] group-hover:underline">
              {t.personalizationActive}
            </span>
          </button>

          {/* Compact SaaS Language Selector */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-white hover:bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] text-xs font-medium text-[#18181B] transition-colors shadow-2xs cursor-pointer"
              aria-label="Select language"
            >
              <span className="material-symbols-outlined text-[#71717A] text-[16px]">
                language
              </span>
              <span className="text-xs text-[#18181B] font-medium">{currentLangObj.name}</span>
              <span className="material-symbols-outlined text-[#71717A] text-[14px]">
                expand_more
              </span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-1.5 w-44 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-1.5 z-50 animate-in fade-in duration-150">
                <div className="px-2.5 py-1.5 text-[10px] font-bold text-[#71717A] uppercase tracking-wider border-b border-[#F4F4F5]">
                  {t.languageLabel || 'Select Language'}
                </div>
                <div className="py-1 space-y-0.5">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                        language === lang.code
                          ? 'bg-[#E6F4F1] text-[#005f50] font-bold'
                          : 'text-[#18181B] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      {language === lang.code && (
                        <span className="material-symbols-outlined text-[15px] text-[#005f50]">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications Bell */}
          <div className="relative" ref={notifMenuRef}>
            <button
              aria-label="Notifications"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
                setShowLangMenu(false);
              }}
              className="relative w-9 h-9 flex items-center justify-center rounded-xl text-[#52525B] hover:text-[#18181B] hover:bg-[#FAF9F6] border border-[#E5E7EB] transition-colors shadow-2xs cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px]">notifications</span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#005f50]"></span>
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-1.5 w-80 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-3 z-50 animate-in fade-in duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-[#F4F4F5] px-1">
                  <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
                    {t.cognitiveAlerts || 'Cognitive Alerts'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowNotifications(false)}
                    className="text-[11px] text-[#005f50] font-medium cursor-pointer hover:underline"
                  >
                    {t.markAllRead || 'Mark all read'}
                  </button>
                </div>
                <div className="divide-y divide-[#F4F4F5] max-h-64 overflow-y-auto mt-1">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-2.5 px-1 hover:bg-[#FAF9F6] rounded-lg transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-semibold text-[#18181B]">{n.title}</p>
                        <span className="text-[10px] text-[#71717A] shrink-0">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-[#52525B] mt-0.5 leading-relaxed">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar & Menu */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
                setShowLangMenu(false);
              }}
              className="w-9 h-9 rounded-xl bg-[#005f50] text-white flex items-center justify-center font-bold text-xs hover:bg-[#0d7a68] transition-colors shadow-2xs cursor-pointer"
              type="button"
              aria-label="User Profile"
            >
              AK
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-1.5 w-72 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-4 z-50 animate-in fade-in duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-[#F4F4F5]">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] text-[#005f50] flex items-center justify-center font-bold text-sm border border-[#005f50]/20">
                    AK
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-[#18181B]">Anu Karageni</p>
                    <p className="text-[11px] text-[#71717A] truncate">anukarageninarayanaswamy@gmail.com</p>
                  </div>
                </div>

                <div className="py-2.5 text-[11px] space-y-1.5 text-[#52525B]">
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">{t.cognitiveArchetype || 'Cognitive Archetype'}</span>
                    <span className="font-semibold text-[#005f50]">{t.sensorySlowPace || 'Sensory Slow-Pace'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">{t.vectorState || 'Vector State'}</span>
                    <span className="font-semibold text-[#18181B]">{t.activeSession || 'Active Session'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">{t.savedJourneys}</span>
                    <span className="font-semibold text-[#18181B]">{savedCount} {t.destinationsCount || 'itineraries'}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F4F4F5] space-y-1">
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      onOpenOnboarding();
                    }}
                    className="w-full py-2 px-2.5 rounded-xl hover:bg-[#FAF9F6] text-xs font-medium text-[#18181B] transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#005f50]">tune</span>
                    <span>{t.travelPreferences}</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      onSelectTab('saved-trips');
                    }}
                    className="w-full py-2 px-2.5 rounded-xl hover:bg-[#FAF9F6] text-xs font-medium text-[#18181B] transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#005f50]">bookmark_border</span>
                    <span>{t.navSavedTrips} ({savedCount})</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      onOpenOnboarding();
                    }}
                    className="w-full py-2 px-2.5 rounded-xl hover:bg-[#FAF9F6] text-xs font-medium text-[#18181B] transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#71717A]">settings</span>
                    <span>{t.cognitiveSettings}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#52525B] hover:text-[#18181B] hover:bg-[#FAF9F6] border border-[#E5E7EB] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Deliberate Mobile SaaS Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#005f50]">
              <span className="w-2 h-2 rounded-full bg-[#005f50] animate-pulse"></span>
              <span>{t.personalizationActive}</span>
            </div>
            
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-1 bg-[#FAF9F6] px-2.5 py-1 rounded-lg border border-[#E5E7EB]">
              <span className="material-symbols-outlined text-[14px] text-[#71717A]">language</span>
              <select
                aria-label="Select language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="bg-transparent text-xs text-[#18181B] font-medium focus:outline-none cursor-pointer"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                onSelectTab('discover');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${
                currentTab === 'discover'
                  ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/20'
                  : 'text-[#52525B] hover:bg-[#FAF9F6]'
              }`}
            >
              <span>{t.navDiscover}</span>
              <span className="material-symbols-outlined text-[16px]">travel_explore</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('recommendations');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${
                currentTab === 'recommendations'
                  ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/20'
                  : 'text-[#52525B] hover:bg-[#FAF9F6]'
              }`}
            >
              <span>{t.navRecommendations}</span>
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('saved-trips');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${
                currentTab === 'saved-trips'
                  ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/20'
                  : 'text-[#52525B] hover:bg-[#FAF9F6]'
              }`}
            >
              <span>{t.navSavedTrips}</span>
              {savedCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#005f50] text-white font-bold">
                  {savedCount}
                </span>
              ) : (
                <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
              )}
            </button>

            <button
              onClick={() => {
                onSelectTab('live-session-adaptation');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${
                currentTab === 'live-session-adaptation'
                  ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/20'
                  : 'text-[#52525B] hover:bg-[#FAF9F6]'
              }`}
            >
              <span>{t.navLiveSession}</span>
              <span className="material-symbols-outlined text-[16px]">sync_alt</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('evaluation-dashboard');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer ${
                currentTab === 'evaluation-dashboard'
                  ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/20'
                  : 'text-[#52525B] hover:bg-[#FAF9F6]'
              }`}
            >
              <span>{t.navEvaluation}</span>
              <span className="material-symbols-outlined text-[16px]">analytics</span>
            </button>
          </div>

          <div className="pt-2 border-t border-[#F4F4F5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnboarding();
              }}
              className="w-full py-2.5 px-3 bg-[#FAF9F6] rounded-xl text-xs font-semibold text-[#18181B] flex items-center justify-center gap-1.5 border border-[#E5E7EB] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#005f50]">tune</span>
              <span>{t.recalibratePreferences}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
