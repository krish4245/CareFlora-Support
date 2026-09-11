import React, { useState } from 'react';
import { Send, Sparkles, Check, MessageSquareHeart } from 'lucide-react';

export const FeedbackCard: React.FC = () => {
  const [topic, setTopic] = useState('Feature Suggestion');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Careflora Feedback] - ${topic}`);
    const body = encodeURIComponent(
      `Hello Careflora Team,\n\nI would like to share feedback regarding: ${topic}\n\n${message}\n\n-- Sent from Careflora Web Portal`
    );
    window.location.href = `mailto:leafora070511@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#dde4d6] p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-[#eef5eb] text-[#2d5a3f] border border-[#d6e5cf]">
          <MessageSquareHeart className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#1a2d1d] font-medium">
            Feedback & Community Suggestions
          </h3>
          <p className="text-xs sm:text-sm text-[#5a6f5e]">
            Have a plant species you want added to AR, or an idea to make Careflora better? We love hearing from growers.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
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
            Your Thoughts & Suggestions
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

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-[#6e8372]">
            Sends directly via your default email app to <strong className="font-mono text-[#2d5a3f]">leafora070511@gmail.com</strong>
          </span>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2d5a3f] hover:bg-[#234832] text-white text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4 text-[#70e0a5]" /> Opened Mail App
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
