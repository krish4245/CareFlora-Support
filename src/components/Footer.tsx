import React from 'react';
import { Mail, Shield, HelpCircle, Heart, ArrowUp } from 'lucide-react';
import { TabType } from './Navbar';

interface FooterProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-[#e2e8dc] bg-[#f4f2ea]/70 text-[#4c6250]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#e5ebdf]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#2d5a3f] text-white flex items-center justify-center font-serif text-base font-bold shadow-xs">
              C
            </div>
            <div>
              <span className="font-serif font-bold text-[#192b1c] text-lg">Careflora</span>
              <p className="text-xs text-[#637966]">Plant Care, AR & Community</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <button
              onClick={() => { setActiveTab('support'); scrollToTop(); }}
              className="hover:text-[#182c1b] transition-colors"
            >
              Support Center
            </button>
            <button
              onClick={() => { setActiveTab('privacy'); scrollToTop(); }}
              className="hover:text-[#182c1b] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => { setActiveTab('overview'); scrollToTop(); }}
              className="hover:text-[#182c1b] transition-colors"
            >
              App Overview
            </button>
            <a
              href="mailto:leafora070511@gmail.com"
              className="text-[#2d5a3f] font-semibold hover:underline"
            >
              leafora070511@gmail.com
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-[#dde4d6] text-[#556c59] hover:text-[#162719] hover:bg-[#edf3e8] transition-colors shadow-2xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f8573]">
          <p>© {new Date().getFullYear()} Careflora. All rights reserved. Built for iOS.</p>
          <p className="flex items-center gap-1">
            Careflora is an iPhone app powered by RealityKit AR &amp; End-to-End Encryption.
          </p>
        </div>
      </div>
    </footer>
  );
};
