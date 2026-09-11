import React, { useState } from 'react';
import { Copy, Check, Mail, ExternalLink } from 'lucide-react';

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

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d3826] to-[#122418] text-white p-7 sm:p-9 shadow-xl border border-[#3b5e47]/30">
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
          <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm">
            <span className="font-mono text-sm sm:text-base text-[#e5ede7] select-all mr-3">
              {email}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-[#b9ccbe] hover:text-white"
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

          <a
            href={`mailto:${email}?subject=Careflora%20Inquiry`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2e5b3e] hover:bg-[#386b49] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg border border-[#4d825f]/50 text-center"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
