import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HelpCircle, Sprout } from 'lucide-react';

export type TabType = 'overview' | 'support' | 'privacy';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'App Overview', icon: Sprout, path: '/' },
    { id: 'support', label: 'Support & Help', icon: HelpCircle, path: '/support' },
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck, path: '/privacy-policy' },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf9f5]/90 border-b border-[#e2e8dc]/80 transition-colors shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <div 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3.5 cursor-pointer select-none group"
        >
          <div className="relative">
            <img
              src="/logo.png"
              alt="Careflora Logo"
              className="w-12 h-12 object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-all duration-300 ring-2 ring-[#2d5a3f]/15"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#6ee7a4] border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#142617] group-hover:text-[#2d5a3f] transition-colors">
                Careflora
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#e3ece0] text-[#2c5339] border border-[#cbd8c6]">
                iOS • AR
              </span>
            </div>
            <p className="text-xs text-[#556b59] font-medium hidden xs:block">
              Plant Care, AR &amp; Community
            </p>
          </div>
        </div>

        {/* Tab Switcher (Overview First) */}
        <nav className="flex items-center gap-1 bg-[#eae8dc]/70 p-1.5 rounded-2xl border border-[#d6dcce]/80">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#142617] font-bold'
                    : 'text-[#566c5a] hover:text-[#1e3422] hover:bg-[#e4e8dd]/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-[#cfd6c7]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
