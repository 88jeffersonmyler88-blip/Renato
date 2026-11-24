import React from 'react';
import { MessageSquare, Phone, Check } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface FloatingActionsProps {
  toastMessage: string | null;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ toastMessage }) => {
  return (
    <>
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none">
          <div className="bg-[#101015] border border-[#C71A24]/80 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 shadow-[#55080E]/80">
            <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating WhatsApp and Call CTA */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-0.5 rounded-2xl bg-[#25D366]/40 blur-sm group-hover:blur-md animate-pulse" />
          
          <div className="relative flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 fill-white" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">
              Orçamento WhatsApp
            </span>
          </div>
        </a>
      </div>
    </>
  );
};
