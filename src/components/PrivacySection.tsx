import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Database,
  EyeOff,
  UserCheck,
  Smartphone,
  AlertTriangle,
  Mail,
  Calendar,
  CheckCircle2,
  FileText,
  Server,
  Baby,
} from 'lucide-react';
import { ContactCard } from './ContactCard';

export const PrivacySection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('all');

  const dataCollection = [
    {
      category: 'Account Credentials',
      details: 'Name, email address, and securely salted password hash. For forgotten password flows, a temporary 6-digit OTP code is generated.',
      purpose: 'Account creation, secure session authentication, and account recovery.',
      shared: 'Never shared with third parties.',
    },
    {
      category: 'Profile & Plant Data',
      details: 'Optional avatar photo, display name, botanical plants added, care intervals, and task completion history (watering, feeding, repotting).',
      purpose: 'Providing personalized care schedules and local iOS notification reminders.',
      shared: 'Stored on secure cloud databases solely for your account.',
    },
    {
      category: 'Community Activity',
      details: 'Photos, captions, comments, likes, and saved tips you voluntarily post to the Community tab.',
      purpose: 'Powering the social gardening feed for other Careflora growers.',
      shared: 'Publicly visible to other active Careflora members by design.',
    },
    {
      category: 'End-to-End Encrypted Chat',
      details: 'Direct messages exchanged between users.',
      purpose: 'Private 1-on-1 communication.',
      shared: 'Zero server access. Protected by device-to-device X25519 key exchange and AES-256-GCM encryption. Relayed blindly through our servers.',
    },
    {
      category: 'AR & Media Cache',
      details: 'Downloaded 3D RealityKit plant models and cached gallery images.',
      purpose: 'Smooth offline rendering and reduced cellular data consumption.',
      shared: 'Retained locally in your iPhone app sandbox cache.',
    },
    {
      category: 'Diagnostics & Device Capability',
      details: 'iPhone hardware model, iOS version, and LiDAR/A12 camera capability status.',
      purpose: 'Enabling RealityKit AR rendering where supported and preventing app crashes.',
      shared: 'Internal crash diagnosis only; no advertising identifiers (IDFA) are collected.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="space-y-10"
    >
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#e2e8dc] shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#edf1e8] pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf4e8] text-[#2c543a] text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d5a3f]" />
              Official Legal Document
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#16291a]">
              Careflora Privacy Policy
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fafbf8] border border-[#e1e7dc] text-[#526857] text-xs font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#b8862e]" />
            Effective: September 12, 2026
          </div>
        </div>

        <p className="text-[#3c5040] text-base leading-relaxed">
          At <strong>Careflora</strong>, we believe your plant care journey and private conversations should remain strictly your own. This Privacy Policy details the exact data we collect, how your data is handled on our servers and your device, how cryptographic end-to-end encryption safeguards your direct messages, and our strict zero-advertising commitment.
        </p>
      </div>

      {/* Core Privacy Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#e2e8dc] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#edf5ea] text-[#2d5a3f] flex items-center justify-center mb-3">
            <EyeOff className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-[#18291c] text-base mb-1">Zero Advertising</h4>
          <p className="text-xs sm:text-sm text-[#576c5b] leading-relaxed">
            We never sell your personal information, nor do we partner with third-party ad networks or data brokers.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e2e8dc] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#edf5ea] text-[#2d5a3f] flex items-center justify-center mb-3">
            <Lock className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-[#18291c] text-base mb-1">End-to-End Encrypted</h4>
          <p className="text-xs sm:text-sm text-[#576c5b] leading-relaxed">
            Private chats are encrypted on your iPhone using X25519 & AES-256-GCM before transmission. We cannot read your chats.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e2e8dc] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#edf5ea] text-[#2d5a3f] flex items-center justify-center mb-3">
            <UserCheck className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-[#18291c] text-base mb-1">Full User Control</h4>
          <p className="text-xs sm:text-sm text-[#576c5b] leading-relaxed">
            You can delete individual posts, modify care routines, or request complete account erasure anytime.
          </p>
        </div>
      </div>

      {/* 1. What We Collect */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8dc] shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-[#edf1e8] pb-4">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              1. Information We Collect & How It Is Handled
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              A comprehensive summary of personal and operational data processed by Careflora.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#e1e7db] text-[#1c2e20] text-xs font-semibold uppercase tracking-wider bg-[#f8faf6]">
                <th className="py-3.5 px-4 rounded-tl-xl">Data Category</th>
                <th className="py-3.5 px-4">What Is Collected</th>
                <th className="py-3.5 px-4">Primary Purpose</th>
                <th className="py-3.5 px-4 rounded-tr-xl">Security & Sharing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf1e8] text-[#465a49]">
              {dataCollection.map((row, i) => (
                <tr key={i} className="hover:bg-[#fbfcf9] transition-colors">
                  <td className="py-4 px-4 font-semibold text-[#1a2d1d] align-top whitespace-nowrap">
                    {row.category}
                  </td>
                  <td className="py-4 px-4 align-top text-xs sm:text-sm">
                    {row.details}
                  </td>
                  <td className="py-4 px-4 align-top text-xs sm:text-sm">
                    {row.purpose}
                  </td>
                  <td className="py-4 px-4 align-top text-xs sm:text-sm">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-[#edf5eb] text-[#274f34] text-xs font-medium border border-[#d3e2ce]">
                      {row.shared}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-[#f7faf5] border border-[#dbe4d5] text-xs sm:text-sm text-[#4a5f4e]">
          <strong>Data Not Collected:</strong> Careflora does <em>not</em> track continuous GPS location, access your address book or contacts, record microphone audio, or collect financial/credit card details.
        </div>
      </section>

      {/* 2. End-to-End Encryption Security */}
      <section className="bg-gradient-to-br from-[#1b3423] to-[#122217] text-white rounded-3xl p-6 sm:p-9 border border-[#3b5e46]/40 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a3f]/70 border border-[#4d825f]/40 text-xs font-medium text-[#cbe4d2]">
            <Lock className="w-3.5 h-3.5 text-[#70e0a5]" />
            Cryptographic Architecture
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
            2. End-to-End Encrypted Messaging (E2EE)
          </h3>
          <p className="text-[#b9ccbe] text-sm sm:text-base leading-relaxed max-w-3xl">
            Private direct chats in Careflora utilize hardware-accelerated elliptic-curve cryptography (<strong>X25519</strong> key agreement combined with authenticated <strong>AES-256-GCM</strong> payload encryption). 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-black/25 border border-white/10">
              <div className="text-white font-medium text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#70e0a5]" /> On-Device Encryption
              </div>
              <p className="text-xs text-[#b0c4b5]">
                Messages are ciphered on your iPhone before sending. Only the intended recipient's device holds the private keys to decipher.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/25 border border-white/10">
              <div className="text-white font-medium text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#70e0a5]" /> Blind Relay Architecture
              </div>
              <p className="text-xs text-[#b0c4b5]">
                Our servers merely relay the ciphertext stream in real time and cannot decrypt, inspect, or retain chat contents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Third Party Services */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8dc] shadow-xs space-y-5">
        <div className="flex items-center gap-3 border-b border-[#edf1e8] pb-4">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              3. Service Providers & Cloud Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              How we utilize secure cloud services to deliver app functionality.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#3c5040] leading-relaxed">
          Careflora does not contain advertising SDKs or third-party behavioral analytics trackers. To operate our backend services, we contract strictly bound infrastructure providers:
        </p>

        <ul className="space-y-3 text-xs sm:text-sm text-[#475d4b]">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f] mt-2 shrink-0" />
            <span><strong>Cloud Database & API Hosting:</strong> Secure cloud instances maintain user accounts, plant care schedules, and community posts under industry-standard TLS encryption in transit and at rest.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f] mt-2 shrink-0" />
            <span><strong>Media Storage CDN:</strong> High-performance media hosting (e.g., Cloudinary) serves 3D RealityKit plant models and community photos with global low-latency delivery.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f] mt-2 shrink-0" />
            <span><strong>Transactional Email Provider:</strong> Delivers essential account recovery OTP codes. They process only your email address for dispatch and receive no other data.</span>
          </li>
        </ul>
      </section>

      {/* 4. Local Storage & Device Caching */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8dc] shadow-xs space-y-4">
        <div className="flex items-center gap-3 border-b border-[#edf1e8] pb-4">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              4. Local On-Device Storage & Caching
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              Data saved directly within your iPhone sandbox.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#3c5040] leading-relaxed">
          To provide smooth offline performance, Careflora caches your recent plants, reminders, and viewed 3D AR models in the iOS sandbox. This data never leaves your iPhone unless synced to your authorized account. When you uninstall Careflora from your device, iOS permanently purges all local sandbox caches immediately.
        </p>
      </section>

      {/* 5. Children's Privacy (COPPA) */}
      <section className="bg-[#fcfbf7] rounded-3xl p-6 sm:p-8 border border-[#e5dac2] shadow-xs space-y-4">
        <div className="flex items-center gap-3 border-b border-[#edd9b7] pb-4">
          <div className="p-2 rounded-xl bg-[#b8862e] text-white">
            <Baby className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1f2f22] font-medium">
              5. Children’s Privacy Policy (COPPA Compliance)
            </h3>
            <p className="text-xs sm:text-sm text-[#665636]">
              Safeguarding younger audiences and family guidance.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#3a4c3e] leading-relaxed">
          While plant care and gardening are delightful family-friendly hobbies, Careflora features an open community discussion board and private direct messaging between registered users. Consequently, Careflora is intended for a general audience aged <strong>13 and older</strong> (or the minimum legal age in your jurisdiction) and is not directed at children under 13.
        </p>
        <p className="text-sm sm:text-base text-[#3a4c3e] leading-relaxed">
          We do not knowingly solicit or collect personal information from children under 13. If you are a parent or legal guardian and discover that your child has registered for an account without your consent, please contact us immediately at <a href="mailto:leafora070511@gmail.com" className="text-[#2d5a3f] font-semibold underline">leafora070511@gmail.com</a>. We will promptly delete their account and wipe all associated personal data from our active databases.
        </p>
      </section>

      {/* 6. User Rights & Account Deletion */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8dc] shadow-xs space-y-4">
        <div className="flex items-center gap-3 border-b border-[#edf1e8] pb-4">
          <div className="p-2 rounded-xl bg-[#2d5a3f] text-white">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#16291a] font-medium">
              6. Your Rights & Data Deletion
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6f5e]">
              Exercise full control over your personal information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#fafbf9] border border-[#e3ebd9]">
            <h5 className="font-semibold text-sm text-[#1b2c1d] mb-1">Access & Export</h5>
            <p className="text-xs text-[#526656]">
              Request a portable copy of your profile, plant logs, and community interactions anytime.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#fafbf9] border border-[#e3ebd9]">
            <h5 className="font-semibold text-sm text-[#1b2c1d] mb-1">Correction & Editing</h5>
            <p className="text-xs text-[#526656]">
              Update your name, profile avatar, and plant care records directly in the app settings.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#fafbf9] border border-[#e3ebd9]">
            <h5 className="font-semibold text-sm text-[#1b2c1d] mb-1">Permanent Deletion</h5>
            <p className="text-xs text-[#526656]">
              Request total erasure of your user credentials and data by contacting support.
            </p>
          </div>
        </div>
      </section>

      {/* Official Contact Card for Privacy */}
      <ContactCard
        email="leafora070511@gmail.com"
        title="Privacy Officer Contact"
        subtitle="Questions about our cryptographic implementations, data storage, or wish to submit a GDPR/CCPA request? Reach out to our privacy officer."
      />
    </motion.div>
  );
};
