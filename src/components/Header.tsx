import React, { useState } from 'react';
import { TravelTab } from '../types';

interface HeaderProps {
  currentTab: TravelTab;
  onSelectTab: (tab: TravelTab) => void;
  savedCount: number;
  onOpenOnboarding: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  savedCount,
  onOpenOnboarding,
}) => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf8fc]/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="h-16 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onSelectTab('discover')}
            className="flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f50] rounded-lg"
          >
            <img
              alt="Sarathi Brand Logo"
              className="h-8 w-auto object-contain cursor-pointer"
              src="https://lh3.googleusercontent.com/aida/AEtjO1X2CrOOUNpBMNHwgNJHl3-H05-YuBa0jRxtCjFSwF2hRFWbn9tCte4D9hjXks_iN8z1o7IwUhSZGUAQxmMsnkk0pfwGGfDCMwrK4MTwr6l1NhmLNoeXC10EfofF1MF_uX9zcIMkDirYUOX5UoFhoVTenqPr_kBgi_imB9eIR8bNcVV-XnkATMguo3Av__U81Y-RJRszyGgHq7pkqAuoQNYZtquZ5BStI-jXseB8zi_c8138Y-r3npIlx2I"
              onError={(e) => {
                // High-fidelity fallback SVG if URL is blocked
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'logo-fallback flex items-center gap-2';
                  fallback.innerHTML = `<div class="w-8 h-8 rounded-lg bg-[#005f50] flex items-center justify-center text-white font-bold text-lg">S</div><span class="font-bold text-lg tracking-tight text-[#1b1b1e]">Sarathi</span>`;
                  parent.prepend(fallback);
                }
              }}
            />
          </button>
          
          <div className="hidden xl:flex items-center gap-2">
            <span className="text-[#bdc9c4] select-none">/</span>
            <span className="text-[11px] text-[#3e4946] font-normal tracking-normal">
              Travel recommendations that understand you
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[#f6f2f7]/70">
          <button
            onClick={() => onSelectTab('discover')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap ${
              currentTab === 'discover'
                ? 'bg-[#eae7eb] text-[#1b1b1e] font-semibold shadow-xs'
                : 'text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1]'
            }`}
          >
            Discover
          </button>

          <button
            onClick={() => onSelectTab('recommendations')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap ${
              currentTab === 'recommendations'
                ? 'bg-[#eae7eb] text-[#1b1b1e] font-semibold shadow-xs'
                : 'text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1]'
            }`}
          >
            Recommendations
          </button>

          <button
            onClick={() => onSelectTab('saved-trips')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'saved-trips'
                ? 'bg-[#eae7eb] text-[#1b1b1e] font-semibold shadow-xs'
                : 'text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1]'
            }`}
          >
            <span>Saved Trips</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#005f50] text-white font-bold">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('live-session-adaptation')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap ${
              currentTab === 'live-session-adaptation'
                ? 'bg-[#eae7eb] text-[#1b1b1e] font-semibold shadow-xs'
                : 'text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1]'
            }`}
          >
            Live Session Adaptation
          </button>

          <button
            onClick={() => onSelectTab('evaluation-dashboard')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap ${
              currentTab === 'evaluation-dashboard'
                ? 'bg-[#eae7eb] text-[#1b1b1e] font-semibold shadow-xs'
                : 'text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1]'
            }`}
          >
            Evaluation Dashboard
          </button>
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center bg-[#ffffff] rounded-full px-2.5 py-1 border border-[#E5E7EB] shadow-[0_1px_3px_0_rgba(24,24,27,0.03)]">
            <span className="material-symbols-outlined text-[#6e7a75] text-[16px] mr-1">
              language
            </span>
            <select
              aria-label="Select language"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-transparent text-[12px] text-[#3e4946] font-medium focus:outline-none cursor-pointer pr-1"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ml">Malayalam</option>
              <option value="kn">Kannada</option>
              <option value="ta">Tamil</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              aria-label="Notifications"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="relative w-9 h-9 flex items-center justify-center rounded-lg text-[#3e4946] hover:text-[#1b1b1e] hover:bg-[#f0edf1] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#005f50]"></span>
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-3 z-50">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB] px-1">
                  <span className="text-xs font-bold text-[#1b1b1e] uppercase tracking-wider">
                    Cognitive Alerts
                  </span>
                  <span className="text-[11px] text-[#005f50] font-medium cursor-pointer hover:underline">
                    Mark all read
                  </span>
                </div>
                <div className="divide-y divide-[#f0edf1] max-h-64 overflow-y-auto mt-1">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-2.5 px-1 hover:bg-[#f6f2f7] rounded-lg transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-semibold text-[#1b1b1e]">{n.title}</p>
                        <span className="text-[10px] text-[#6e7a75] shrink-0">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-[#3e4946] mt-0.5 leading-relaxed">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Active Personalizing Status */}
          <div className="flex items-center gap-2 pl-1">
            <div 
              onClick={onOpenOnboarding}
              className="hidden md:flex flex-col items-end cursor-pointer group"
              title="Click to recalibrate baseline"
            >
              <span className="text-[11px] text-[#005f50] font-semibold flex items-center gap-1 group-hover:underline">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005f50] animate-pulse"></span>
                Personalizing active
              </span>
            </div>

            {/* Profile Avatar */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className="w-8 h-8 rounded-full bg-[#005f50] flex items-center justify-center text-white hover:opacity-95 transition-opacity"
                type="button"
                aria-label="User Profile"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-4 z-50">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#E5E7EB]">
                    <div className="w-10 h-10 rounded-full bg-[#99f3dd] text-[#00201a] flex items-center justify-center font-bold text-sm">
                      AK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1b1b1e]">Anu Karageni</p>
                      <p className="text-[11px] text-[#6e7a75]">anukarageninarayanaswamy@gmail.com</p>
                    </div>
                  </div>
                  <div className="py-2.5 text-[11px] space-y-1.5 text-[#3e4946]">
                    <div className="flex justify-between">
                      <span className="text-[#6e7a75]">Cognitive Archetype</span>
                      <span className="font-semibold text-[#005f50]">Sensory Slow-Pace</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6e7a75]">Vector Memory</span>
                      <span className="font-semibold">128-d Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6e7a75]">Saved Journeys</span>
                      <span className="font-semibold">{savedCount} itineraries</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      onOpenOnboarding();
                    }}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-[#f0edf1] hover:bg-[#eae7eb] text-xs font-semibold text-[#1b1b1e] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">tune</span>
                    Recalibrate Preference Matrix
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#3e4946] hover:bg-[#f0edf1]"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] px-4 py-3 space-y-2">
          <button
            onClick={() => {
              onSelectTab('discover');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentTab === 'discover' ? 'bg-[#f0edf1] text-[#005f50]' : 'text-[#3e4946]'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => {
              onSelectTab('recommendations');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentTab === 'recommendations' ? 'bg-[#f0edf1] text-[#005f50]' : 'text-[#3e4946]'
            }`}
          >
            Recommendations
          </button>
          <button
            onClick={() => {
              onSelectTab('saved-trips');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              currentTab === 'saved-trips' ? 'bg-[#f0edf1] text-[#005f50]' : 'text-[#3e4946]'
            }`}
          >
            <span>Saved Trips</span>
            {savedCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs bg-[#005f50] text-white">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              onSelectTab('live-session-adaptation');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentTab === 'live-session-adaptation' ? 'bg-[#f0edf1] text-[#005f50]' : 'text-[#3e4946]'
            }`}
          >
            Live Session Adaptation
          </button>
          <button
            onClick={() => {
              onSelectTab('evaluation-dashboard');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              currentTab === 'evaluation-dashboard' ? 'bg-[#f0edf1] text-[#005f50]' : 'text-[#3e4946]'
            }`}
          >
            Evaluation Dashboard
          </button>
        </div>
      )}
    </header>
  );
};
