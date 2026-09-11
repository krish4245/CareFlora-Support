import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar, TabType } from './components/Navbar';
import { Hero } from './components/Hero';
import { SupportSection } from './components/SupportSection';
import { PrivacySection } from './components/PrivacySection';
import { OverviewSection } from './components/OverviewSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTabState] = useState<TabType>('overview');

  // Detect route from URL pathname or hash on initial load
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('privacy') || hash.includes('privacy')) {
        setActiveTabState('privacy');
      } else if (path.includes('support') || hash.includes('support')) {
        setActiveTabState('support');
      } else {
        setActiveTabState('overview');
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTabState(tab);
    const newPath = tab === 'overview' ? '/' : tab === 'support' ? '/support' : '/privacy-policy';
    window.history.pushState({ tab }, '', newPath);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#1c281e]">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      <Hero activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <OverviewSection key="overview" setActiveTab={handleTabChange} />}
          {activeTab === 'support' && <SupportSection key="support" />}
          {activeTab === 'privacy' && <PrivacySection key="privacy" />}
        </AnimatePresence>
      </main>

      <Footer activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}

export default App;
