import React from 'react';
import { ShieldCheck, Flame, ArrowRight, Sun, Sparkles, Award } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface HeroProps {
  onScrollToProducts: () => void;
  onScrollToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProducts, onScrollToGallery }) => {
  return (
    <section className="relative overflow-hidden bg-[#070709] pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Background ambient lighting in RSWF crimson tones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#C71A24]/15 via-[#55080E]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#C71A24]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#8F0F16]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (5 Cols): Punchy, minimal text with high conversion */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Tagline kicker with official PeliCar logo emblem */}
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#E0222D]">
              <img
                src={STORE_INFO.logoUrl}
                alt="PeliCar"
                className="h-8 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
              />
              <span className="h-3 w-px bg-neutral-700" />
              <span>Alta Performance & Estética Automotiva</span>
            </div>

            {/* Primary Headline with balance and intense red accent */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black italic tracking-tight text-white uppercase leading-[1.05]">
              Controle Solar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F02834] via-[#C71A24] to-[#8F0F16]">
                Extremo.
              </span>
            </h1>

            {/* Concise value proposition */}
            <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Conheça as películas premium de Nano Cerâmica e Carbono da <strong className="text-white font-semibold">PeliCar</strong>. Reduza em até <strong className="text-white font-semibold">95% dos raios infravermelhos</strong> e bloqueie até <strong className="text-white font-semibold">99% dos raios UV</strong>, com alta rejeição de calor, mais privacidade e conforto térmico para você e sua família.
            </p>

            {/* Metric counters: minimal, tabular, crisp */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-2 border-y border-neutral-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                  95<span className="text-[#C71A24]">%</span>
                </div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium mt-0.5">
                  Rejeição de IR
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                  99<span className="text-[#C71A24]">%</span>
                </div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium mt-0.5">
                  Proteção UV
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                  5.0<span className="text-amber-400">★</span>
                </div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium mt-0.5">
                  +30 Avaliações
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl rswf-gradient-btn text-white font-black text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onScrollToGallery}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-850 text-white border border-neutral-800 hover:border-[#C71A24]/60 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <span>Ver Galeria de Serviços</span>
              </button>
            </div>

          </div>

          {/* Right Column (7 Cols): Marquee Visual Hero Studio */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#8F0F16]/50 shadow-2xl shadow-[#55080E]/60 group">
              
              {/* Main Visual Image */}
              <div className="aspect-[4/5] max-h-[620px] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src="/assets/aistudio/Oficina_Automotiva_Moderna_com_Detalhes_em_Azul_0ff4dd60.png"
                  alt="Estúdio de Aplicação de Películas Especiais PeliCar"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dynamic Overlay badge and lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Card Footer Details */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#8F0F16]/60">
                  <span className="w-2 h-2 rounded-full bg-[#C71A24] animate-ping" />
                  <span className="font-semibold text-neutral-200">Estúdio Climatizado PeliCar · Itajaí</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
