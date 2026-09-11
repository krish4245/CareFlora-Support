import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Eye, Lock, HeartHandshake, ArrowRight, Smartphone } from 'lucide-react';
import { TabType } from './Navbar';

interface HeroProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTab, setActiveTab }) => {
  if (activeTab === 'overview') {
    return (
      <div className="relative overflow-hidden pt-12 pb-14 border-b border-[#e1e7dc]/80 bg-gradient-to-b from-[#f5f4eb]/60 via-[#faf9f5] to-[#faf9f5]">
        {/* Ambient botanical background radial gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-[#2d5a3f]/12 via-[#a3be8c]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#d4a359]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Main Centerpiece Logo Badge */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex justify-center mb-6"
          >
            <div className="relative group">
              {/* Outer pulsing organic aura */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2d5a3f]/25 to-[#c99f3f]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
              
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 p-2.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-[#2d5a3f]/25 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Careflora Official Emblem"
                  className="w-full h-full object-contain rounded-full drop-shadow-md"
                />
              </div>

              {/* Floating micro status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#1b3824] text-[#70e0a5] text-[11px] font-bold tracking-wide uppercase shadow-lg border border-[#3b6647] whitespace-nowrap flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#70e0a5] animate-ping" />
                <span>iPhone Exclusive</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Grand Title: Careflora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef4ea] border border-[#d2e0ce] text-[#2c5339] text-xs sm:text-sm font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#b8862e]" />
              Plant Care, RealityKit AR &amp; Community
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#122416] font-bold tracking-tight leading-none drop-shadow-xs">
              Careflora
            </h1>

            <p className="text-[#3e5644] text-lg sm:text-xl lg:text-2xl font-serif italic max-w-2xl mx-auto pt-1">
              "Care for your plants smarter, in your space and in your rhythm."
            </p>
          </motion.div>

          {/* Core App Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="text-[#475e4c] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-5"
          >
            Visualize any plant in your living space with <strong>true-to-scale RealityKit AR</strong> before you buy. Keep your indoor jungle thriving with automated care schedules, explore community tips, and chat privately with hardware-backed encryption.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
          >
            <button
              onClick={() => setActiveTab('support')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#234b32] hover:bg-[#1a3a26] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 group"
            >
              <span>Explore Support &amp; Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#f3f7f0] text-[#1b3322] border border-[#d0dbcc] text-sm sm:text-base font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <Shield className="w-4 h-4 text-[#2d5a3f]" />
              <span>Read Privacy Policy</span>
            </button>
          </motion.div>

          {/* Pill stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#384e3e] mt-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-[#dde4d8] shadow-2xs">
              <Eye className="w-3.5 h-3.5 text-[#2d5a3f]" /> LiDAR &amp; A12+ RealityKit
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-[#dde4d8] shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-[#2d5a3f]" /> X25519 E2EE Chat
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-[#dde4d8] shadow-2xs">
              <Shield className="w-3.5 h-3.5 text-[#2d5a3f]" /> Zero Advertising Trackers
            </span>
          </motion.div>
        </div>
      </div>
    );
  }

  // Support or Privacy Hero
  return (
    <div className="relative overflow-hidden pt-10 pb-8 border-b border-[#e1e7dc]/70">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d5a3f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e8] border border-[#cbdac4] text-[#285337] text-xs sm:text-sm font-medium mb-4 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#b8862e]" />
          <span>Official Careflora Legal &amp; Help Desk</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#142617] font-semibold tracking-tight leading-[1.15] mb-4"
        >
          {activeTab === 'support' ? 'Careflora Support & Guide' : 'Careflora Privacy Policy'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#495f4e] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {activeTab === 'support'
            ? 'Get quick answers to common questions, device requirements, troubleshooting steps, or message our engineering team directly.'
            : 'A transparent, plain-English breakdown of what data Careflora collects, how end-to-end encryption protects your messages, and our strict no-ad policy.'}
        </motion.p>
      </div>
    </div>
  );
};
