import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquareQuote, Shield, ExternalLink, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS, STORE_INFO } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [helpfulCounts, setHelpfulCounts] = useState<{ [key: string]: number }>({});

  const handleHelpful = (id: string) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-[#070709] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#E0222D] mb-2 flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#C71A24] text-[#C71A24]" />
              <span>Google Reviews Verificadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black italic text-white tracking-tight uppercase">
              Depoimentos de Quem Confia na PELICAR
            </h2>
          </div>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-[#C71A24]/60 text-white text-xs font-bold uppercase tracking-wider transition-colors self-start md:self-auto"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Big Trust Banner: 5.0 Rating with 5,029 Reviews */}
        <div className="bg-[#0b0b0f] border border-[#8F0F16]/50 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block (4 Cols) */}
            <div className="md:col-span-4 text-center md:text-left md:border-r md:border-neutral-800/80 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tighter">
                  5.0
                </span>
                <div className="flex flex-col items-start">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-neutral-400 mt-1 uppercase tracking-wider">
                    Excelente
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-neutral-200 mt-3">
                Com base em <strong className="text-white font-black">{STORE_INFO.reviewCount} avaliações</strong> reais de clientes no Google.
              </p>
              <span className="inline-block mt-2 text-xs text-emerald-400 font-semibold">
                ✓ 100% de satisfação e garantia
              </span>
            </div>

            {/* Right Breakdown (8 Cols) */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-4 text-xs">
                <span className="w-16 font-semibold text-neutral-300">5 estrelas</span>
                <div className="flex-1 bg-neutral-900 h-2.5 rounded-full overflow-hidden border border-neutral-800">
                  <div className="bg-amber-400 h-full rounded-full w-[99%]" />
                </div>
                <span className="w-10 text-right font-mono tabular-nums text-neutral-400">99%</span>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="w-16 font-semibold text-neutral-400">4 estrelas</span>
                <div className="flex-1 bg-neutral-900 h-2.5 rounded-full overflow-hidden border border-neutral-800">
                  <div className="bg-amber-400/80 h-full rounded-full w-[1%]" />
                </div>
                <span className="w-10 text-right font-mono tabular-nums text-neutral-400">1%</span>
              </div>

              <div className="flex items-center gap-4 text-xs opacity-40">
                <span className="w-16 font-semibold text-neutral-500">3 estrelas</span>
                <div className="flex-1 bg-neutral-900 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[0%]" />
                </div>
                <span className="w-10 text-right font-mono tabular-nums text-neutral-500">0%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0b0b0f] border border-neutral-800/80 hover:border-[#8F0F16]/80 rounded-2xl p-6 transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C71A24] to-[#55080E] flex items-center justify-center font-bold text-white text-sm shadow-md shadow-[#55080E]/60">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.author}
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      </h4>
                      <span className="text-[11px] text-neutral-400">{rev.vehicle} · {rev.timeAgo}</span>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                  "{rev.comment}"
                </p>
              </div>

              {/* Service Tag & Helpful Button */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-850 text-xs">
                <span className="text-[11px] font-semibold text-[#E0222D] bg-[#55080E]/30 px-2.5 py-1 rounded border border-[#8F0F16]/50">
                  {rev.service}
                </span>

                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-xs"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Útil ({helpfulCounts[rev.id] || 8})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
