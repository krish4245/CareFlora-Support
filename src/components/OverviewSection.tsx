import React from 'react';
import { motion } from 'framer-motion';
import {
  Scan,
  Calendar,
  Users,
  Lock,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Droplets,
  Sun,
  ShieldCheck,
  Compass,
  Heart,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { TabType } from './Navbar';
import { ContactCard } from './ContactCard';

interface OverviewSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ setActiveTab }) => {
  const coreFeatures = [
    {
      id: 'ar',
      icon: Scan,
      title: 'RealityKit AR In Your Living Space',
      badge: 'LiDAR & A12+ Ready',
      desc: 'Accurately scale and visualize any plant variety inside your room, windowsill, or office patio before purchasing. Verify whether that Fiddle Leaf Fig or Monstera truly fits your aesthetic and sunlight zone.',
      highlight: 'Photorealistic 3D rendering with iOS RealityKit engine.',
    },
    {
      id: 'tasks',
      icon: Calendar,
      title: 'Smart Hydration & Care Tasks',
      badge: 'Automated Reminders',
      desc: 'Dynamic scheduling tailored to your exact botanical species. Careflora calculates precise cadences for watering, fertilizing, misting, and seasonal repotting so your plants never wilt.',
      highlight: 'Integrated iOS notifications keep you in rhythm.',
    },
    {
      id: 'community',
      icon: Users,
      title: 'Green-Thumb Grower Community',
      badge: 'Botanical Network',
      desc: 'Showcase your indoor jungle, post growth progress photos, leave encouraging comments, and bookmark propagation recipes shared by fellow growers worldwide.',
      highlight: 'A wholesome, plant-loving community space.',
    },
    {
      id: 'e2ee',
      icon: Lock,
      title: 'End-to-End Encrypted Chat',
      badge: 'X25519 + AES-256-GCM',
      desc: 'Trade cuttings and chat 1-on-1 with complete privacy. Your messages are cryptographically sealed on your device and can only be decrypted by your recipient.',
      highlight: 'Zero server inspection. Absolute conversation privacy.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="space-y-12"
    >
      {/* 4 Pillars Feature Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e5ebdf] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d5a3f]">
              <Sparkles className="w-3.5 h-3.5 text-[#b8862e]" />
              App Capabilities
            </div>
            <h2 className="font-serif text-3xl font-medium text-[#142617] mt-1">
              Everything Your Plants Need to Flourish
            </h2>
          </div>
          <span className="text-xs text-[#59715e] font-medium px-3 py-1 rounded-full bg-[#eef4ea] border border-[#d2e0ce] self-start sm:self-auto">
            Native iOS Experience
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#e2e8dc] shadow-xs hover:shadow-md hover:border-[#cbd8c5] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#edf5eb] text-[#2d5a3f] border border-[#d4e4d0] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f4f7f1] text-[#2c5339] border border-[#dce6d8]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#162a19] mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-[#455c4a] text-sm sm:text-base leading-relaxed mb-5">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f4ec] flex items-center gap-2 text-xs font-medium text-[#2d5a3f]">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f]" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Plant Care Showcase Card */}
      <section className="bg-gradient-to-br from-[#1b3523] via-[#21432c] to-[#122416] text-white rounded-3xl p-7 sm:p-10 border border-[#3c6648]/40 shadow-xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a3f]/70 border border-[#4c845f]/40 text-xs font-semibold uppercase tracking-wider text-[#cce6d3]">
              <Compass className="w-3.5 h-3.5 text-[#e5b567]" />
              Garden Hub &amp; Smart Diagnostics
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
              Personalized Plant Profiles at Your Fingertips.
            </h3>

            <p className="text-[#c1d6c5] text-sm sm:text-base leading-relaxed">
              Never guess when your plant needs moisture. Careflora monitors individual species cadences, sunlight recommendations, and seasonal dormancy patterns to keep your flora in pristine health.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-black/25 border border-white/10 text-center">
                <Droplets className="w-5 h-5 text-[#6ee7a4] mx-auto mb-1" />
                <span className="text-xs text-[#d6e7db] font-medium block">Hydration Cycles</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/25 border border-white/10 text-center">
                <Sun className="w-5 h-5 text-[#fcd34d] mx-auto mb-1" />
                <span className="text-xs text-[#d6e7db] font-medium block">Light Needs</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/25 border border-white/10 text-center col-span-2 sm:col-span-1">
                <Heart className="w-5 h-5 text-[#f87171] mx-auto mb-1" />
                <span className="text-xs text-[#d6e7db] font-medium block">Health Diary</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#b8dfc4]">Next Due Today</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#6ee7a4]/20 text-[#70e0a5]">In 2 Hours</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Monstera Deliciosa</h4>
              <p className="text-xs text-[#bed6c3]">Watering &amp; Foliar Misting</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#b8dfc4]">Upcoming Task</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#e5b567]/20 text-[#fcd34d]">In 3 Days</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-white">String of Pearls</h4>
              <p className="text-xs text-[#bed6c3]">Organic Succulent Feed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Links to Support & Policy */}
      <section className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e2e8dc] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-medium text-[#152918]">
              Looking for Support or Privacy Documentation?
            </h3>
            <p className="text-sm text-[#506654]">
              Everything required for Apple App Store review and grower assistance is open and transparent.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('support')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2d5a3f] text-white text-sm font-semibold hover:bg-[#224731] transition-all shadow-xs"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Support Guide</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f2f6ee] text-[#254b33] border border-[#d2e0ce] text-sm font-semibold hover:bg-[#e4ede0] transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* Official Contact Card */}
      <ContactCard
        email="leafora070511@gmail.com"
        title="Direct Developer Support"
        subtitle="Have a question about Careflora or an idea for new AR plant models? Reach out directly to our engineering inbox."
      />
    </motion.div>
  );
};
