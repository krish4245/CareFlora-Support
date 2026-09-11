import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus,
  Search,
  Scan,
  CalendarCheck,
  BookOpen,
  Users,
  MessageSquareLock,
  Wrench,
  HelpCircle,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { TroubleshootingAccordion } from './TroubleshootingAccordion';
import { ContactCard } from './ContactCard';
import { FeedbackCard } from './FeedbackCard';

const STEPS = [
  {
    step: '01',
    title: 'Create Your Account',
    desc: 'Sign up securely with your email. Your credentials and profile are safely authenticated with encrypted tokens.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Add & Identify Plants',
    desc: 'Search our curated botanical database for personalized sunlight, soil, and hydration requirements.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Preview in RealityKit AR',
    desc: 'Place photorealistic 3D plants in your living room, balcony, or office before bringing them home. Requires LiDAR or A12+ chip.',
    icon: Scan,
  },
  {
    step: '04',
    title: 'Automate Care Tasks',
    desc: 'Careflora calculates smart schedules for watering, misting, feeding, and repotting with timely iOS notifications.',
    icon: CalendarCheck,
  },
  {
    step: '05',
    title: 'Explore the Garden Hub',
    desc: 'Browse diagnostic guides, seasonal propagation advice, and expert tips for thriving indoor and outdoor flora.',
    icon: BookOpen,
  },
  {
    step: '06',
    title: 'Join the Community',
    desc: 'Share growth progress, ask for care advice, and bookmark inspiring setups from fellow plant enthusiasts.',
    icon: Users,
  },
  {
    step: '07',
    title: 'Encrypted Chat',
    desc: 'Connect one-on-one with other plant parents. Messages are end-to-end encrypted directly on your device.',
    icon: MessageSquareLock,
  },
];

export const SupportSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="space-y-12"
    >
      {/* Intro Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8dc] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#edf1e8] pb-6 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d5a3f]">
              <Sparkles className="w-3.5 h-3.5 text-[#b8862e]" />
              App Overview & Help Desk
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#16291a] mt-1">
              Welcome to Careflora Support
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f6ee] text-[#2c5339] text-xs font-medium border border-[#d6e3d2]">
            Version 1.0 (iOS) • RealityKit AR
          </div>
        </div>

        <p className="text-[#3c5040] text-base leading-relaxed">
          <strong>Careflora</strong> is your all-in-one plant care companion for iPhone. Whether you are previewing how a Monstera looks in your living room with RealityKit AR, managing feeding schedules for rare succulents, or trading propagation tips with friendly plant lovers across the world, we are here to support every step of your plant journey.
        </p>
      </div>

      {/* Getting Started Step-by-Step */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              Getting Started with Careflora
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              A simple guide to setting up your green sanctuary in minutes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`p-6 rounded-2xl bg-white border border-[#e2e8dc] shadow-2xs hover:shadow-sm hover:border-[#ccd7c6] transition-all flex flex-col justify-between ${
                  idx === STEPS.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-[#edf4e9] text-[#2c543a]">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-[#f5f8f3] text-[#2d5a3f] border border-[#e2ebe0]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-[#182a1c] text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#506654] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              Troubleshooting & Diagnostics
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              Answers and quick fixes for common hardware, notifications, and encryption queries.
            </p>
          </div>
        </div>

        <TroubleshootingAccordion />
      </section>

      {/* Official Contact Card */}
      <ContactCard
        email="leafora070511@gmail.com"
        title="Need Personal Assistance?"
        subtitle="Encountering an unusual issue or have an account inquiry? Send our support engineers a note and we'll resolve it promptly."
      />

      {/* Feedback Section */}
      <FeedbackCard />
    </motion.div>
  );
};
