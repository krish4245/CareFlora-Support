import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Smartphone, KeyRound, BellRing, MessageSquareLock, RefreshCw, Trash2, Search } from 'lucide-react';

interface TroubleItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  category: 'ar' | 'auth' | 'notifications' | 'chat' | 'media' | 'account';
  tags: string[];
}

const TROUBLESHOOTING_DATA: TroubleItem[] = [
  {
    id: 'ar-preview',
    icon: <Smartphone className="w-5 h-5 text-[#2d5a3f]" />,
    question: "AR view won't open, or camera preview shows a blank black screen.",
    category: 'ar',
    tags: ['ar', 'camera', 'lidar', 'a12', 'iphone', 'black screen'],
    answer: "AR plant visualization requires an iPhone equipped with a LiDAR scanner (iPhone 12 Pro/Pro Max or newer Pro models) or an Apple A12 Bionic processor or newer. It is not supported on iOS Simulator or older devices. Additionally, verify camera permissions in your iOS Settings → Careflora → Camera (toggle ON).",
  },
  {
    id: 'otp-reset',
    icon: <KeyRound className="w-5 h-5 text-[#b8862e]" />,
    question: "I didn't receive my password reset one-time passcode (OTP).",
    category: 'auth',
    tags: ['otp', 'password', 'reset', 'email', 'spam', 'code'],
    answer: "Check your spam or junk folder first. Automated transactional emails may occasionally get filtered. Password reset OTP codes expire after a short 10-minute security window. If the code expires, return to Careflora and tap 'Resend Code'. If you still don't receive it, email us at leafora070511@gmail.com with your registered email.",
  },
  {
    id: 'task-reminders',
    icon: <BellRing className="w-5 h-5 text-[#2d5a3f]" />,
    question: "Plant watering, feeding, or repotting reminders aren't alerting me.",
    category: 'notifications',
    tags: ['notifications', 'reminders', 'watering', 'tasks', 'focus mode'],
    answer: "Ensure notifications are enabled under iOS Settings → Notifications → Careflora. Also verify that an active iOS Focus Mode (e.g., Do Not Disturb or Sleep) is not suppressing alerts. In Careflora, ensure you have set up a care cadence for each individual plant in its profile.",
  },
  {
    id: 'chat-messages',
    icon: <MessageSquareLock className="w-5 h-5 text-[#2d5a3f]" />,
    question: "Direct chat messages aren't delivering or appear stuck.",
    category: 'chat',
    tags: ['chat', 'e2ee', 'encryption', 'messaging', 'stuck'],
    answer: "Careflora messages use cryptographic End-to-End Encryption (E2EE) with an X25519 key agreement. Both parties must have opened the app while connected to the internet at least once to initiate the secure key handshake. Check your network connection and force-close and relaunch the app if a conversation appears unsynced.",
  },
  {
    id: 'media-loading',
    icon: <RefreshCw className="w-5 h-5 text-[#b8862e]" />,
    question: "3D plant AR models or high-resolution community photos load slowly.",
    category: 'media',
    tags: ['3d', 'models', 'loading', 'slow', 'cache', 'cloudinary'],
    answer: "3D RealityKit plant models and high-res photos are streamed on-demand the first time you view them to minimize initial app download size. Once viewed, models are safely cached locally in your iPhone storage for instant subsequent rendering. On slower mobile networks, the first download might take several seconds.",
  },
  {
    id: 'account-deletion',
    icon: <Trash2 className="w-5 h-5 text-[#dc2626]" />,
    question: "How do I permanently delete my account and associated data?",
    category: 'account',
    tags: ['delete', 'account', 'gdpr', 'privacy', 'erasure'],
    answer: "You can request immediate and permanent deletion of your account, plant data, and community posts by sending an email from your registered account to leafora070511@gmail.com with the subject 'Account Deletion Request'. We process all deletion requests within 48 hours in accordance with Apple and privacy regulations.",
  },
];

export const TroubleshootingAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('ar-preview');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = TROUBLESHOOTING_DATA.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.includes(query))
    );
  });

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#758a79] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search issues (e.g. AR camera, notifications, OTP, chat, deletion)..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#dde3d8] text-sm text-[#1c281e] placeholder-[#8a9e8e] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f]/30 focus:border-[#2d5a3f] transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#758a79] hover:text-[#1c281e] bg-[#f0f3ec] px-2 py-0.5 rounded-md"
          >
            Clear
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-white/60 rounded-2xl border border-dashed border-[#ccd6c7]">
            <p className="text-[#5b6e5e] text-sm font-medium">No troubleshooting topics found matching "{searchQuery}".</p>
            <p className="text-xs text-[#839786] mt-1">Try another keyword or reach out directly to our support email.</p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#2d5a3f]/30 shadow-md ring-1 ring-[#2d5a3f]/10'
                    : 'bg-white/80 hover:bg-white border-[#e2e7dc] hover:border-[#ccd6c7] shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-[#f2f6ee] border border-[#d9e4d3] shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[#1d2d20] text-base sm:text-lg leading-snug">
                        {item.question}
                      </h4>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-1.5 rounded-lg text-[#617764] hover:bg-[#f0f4ec] shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#f0f3eb] text-[#425445] text-sm sm:text-base leading-relaxed pl-[4.5rem]">
                        <p className="bg-[#f8faf6] p-4 rounded-xl border border-[#e4ece0]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};
