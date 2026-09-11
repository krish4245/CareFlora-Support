import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Mail, ExternalLink, ChevronDown, Send } from 'lucide-react';

interface ContactCardProps {
  email?: string;
  title?: string;
  subtitle?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  email = 'leafora070511@gmail.com',
  title = 'Direct Developer Support',
  subtitle = 'We are here to help you get the best out of Careflora. Expect a response within 24–48 hours.',
}) => {
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subject = encodeURIComponent('Careflora App Inquiry');
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}`;
  const mailtoUrl = `mailto:${email}?subject=${subject}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative overflow-visible rounded-2xl bg-gradient-to-br from-[#1d3826] to-[#122418] text-white p-7 sm:p-9 shadow-xl border border-[#3b5e47]/30">
      {/* Subtle organic background glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#427a55]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#d4a359]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a4d35]/60 border border-[#4d7a5b]/40 text-xs font-medium text-[#c8e2cf] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6ee7a4] animate-pulse" />
            Official Contact Channel
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-[#b9ccbe] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Email Box with Copy Action */}
          <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm">
            <span className="font-mono text-sm sm:text-base text-[#e5ede7] select-all mr-3">
              {email}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-[#b9ccbe] hover:text-white flex items-center gap-1"
              title="Copy email to clipboard"
            >
              {copied ? (
                <span className="flex items-center text-xs text-[#70e0a5] font-sans font-medium gap-1">
                  <Check className="w-4 h-4 text-[#70e0a5]" /> Copied
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Email Action with Direct Inbox Redirection */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex rounded-xl shadow-md">
              {/* Primary Direct Gmail Redirect */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-l-xl bg-[#2e5b3e] hover:bg-[#386b49] text-white font-medium text-sm transition-all border-y border-l border-[#4d825f]/50 text-center"
                title="Compose directly in Gmail web inbox"
              >
                <Mail className="w-4 h-4 text-[#70e0a5]" />
                <span>Open in Gmail</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </a>

              {/* Dropdown toggle for alternative mail apps */}
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-2.5 py-3 rounded-r-xl bg-[#274f35] hover:bg-[#326142] text-white transition-all border border-[#4d825f]/50 flex items-center justify-center"
                title="More mail options"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#183120] border border-[#3e6b4a] shadow-2xl z-50 py-1.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-[#e0ece2] hover:bg-[#254d33] hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ea4335]" />
                  <span>Gmail (Web Inbox)</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>

                <a
                  href={outlookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-[#e0ece2] hover:bg-[#254d33] hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0078d4]" />
                  <span>Outlook.com (Web)</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>

                <div className="my-1 border-t border-[#2d5639]" />

                <a
                  href={mailtoUrl}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-[#e0ece2] hover:bg-[#254d33] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#70e0a5]" />
                  <span>Default System Mail App</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
