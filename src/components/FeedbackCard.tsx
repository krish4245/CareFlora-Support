import React, { useState } from 'react';
import { Send, Check, MessageSquareHeart, Mail, ExternalLink, Copy } from 'lucide-react';

export const FeedbackCard: React.FC = () => {
  const [topic, setTopic] = useState('Feature Suggestion');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const getEmailContent = () => {
    const subject = `[Careflora Feedback] - ${topic}`;
    const body = `Hello Careflora Team,\n\nI would like to share feedback regarding: ${topic}\n\n${message || '(Write your thoughts here)'}\n\n-- Sent from Careflora Web Portal`;
    return { subject, body };
  };

  const handleOpenGmail = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject, body } = getEmailContent();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=leafora070511@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  };

  const handleOpenMailto = () => {
    const { subject, body } = getEmailContent();
    window.location.href = `mailto:leafora070511@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopy = () => {
    const { subject, body } = getEmailContent();
    const fullText = `To: leafora070511@gmail.com\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#dde4d6] p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-[#eef5eb] text-[#2d5a3f] border border-[#d6e5cf]">
          <MessageSquareHeart className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#1a2d1d] font-medium">
            Feedback &amp; Community Suggestions
          </h3>
          <p className="text-xs sm:text-sm text-[#5a6f5e]">
            Have a plant species you want added to AR, or an idea to make Careflora better? We love hearing from growers.
          </p>
        </div>
      </div>

      <form onSubmit={handleOpenGmail} className="space-y-4 mt-6">
        <div>
          <label className="block text-xs font-semibold text-[#3b4e3f] uppercase tracking-wider mb-2">
            Feedback Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              'Plant Species Request',
              'AR Feature Idea',
              'Care Schedule Tips',
              'General Feedback',
            ].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`text-xs py-2 px-3 rounded-lg border text-center font-medium transition-all ${
                  topic === t
                    ? 'bg-[#2d5a3f] text-white border-[#2d5a3f] shadow-xs'
                    : 'bg-[#f7faf5] text-[#435947] border-[#dde4d8] hover:bg-[#eef3eb]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#3b4e3f] uppercase tracking-wider mb-2">
            Your Thoughts &amp; Suggestions
          </label>
          <textarea
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you'd like to see, or describe your experience..."
            className="w-full px-4 py-3 rounded-xl bg-[#fafcf8] border border-[#d9e2d3] text-sm text-[#1d2d20] placeholder-[#8ea191] focus:outline-none focus:ring-2 focus:ring-[#2d5a3f]/30 focus:border-[#2d5a3f] transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#f0f4ed]">
          <span className="text-xs text-[#6e8372]">
            Recipient: <strong className="font-mono text-[#2d5a3f]">leafora070511@gmail.com</strong>
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Gmail Inbox Compose Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2d5a3f] hover:bg-[#234832] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95"
              title="Open directly in Gmail web compose"
            >
              <Mail className="w-4 h-4 text-[#70e0a5]" />
              <span>Send in Gmail</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
            </button>

            {/* Default Mail Client Button */}
            <button
              type="button"
              onClick={handleOpenMailto}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#f2f6ee] hover:bg-[#e6ede1] text-[#2c5339] border border-[#d3dfd0] text-xs sm:text-sm font-medium transition-all"
              title="Open your device default mail app"
            >
              <span>Mail App</span>
            </button>

            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-[#f6faf3] text-[#4d6351] border border-[#dbe3d6] text-xs sm:text-sm font-medium transition-all"
              title="Copy message and email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#70e0a5]" />
                  <span className="text-[#2d5a3f]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
