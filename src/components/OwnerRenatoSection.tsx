import React, { useState } from 'react';
import { Award, Pause, Play, Maximize2, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface RenatoPhoto {
  id: string;
  imageUrl: string;
  caption: string;
  alt: string;
}

const RENATO_PHOTOS: RenatoPhoto[] = [
  {
    id: 'renato-1',
    imageUrl: '/assets/aistudio/ghrthjtr_358bb233.jpeg',
    caption: 'Renato moldando película térmica com precisão',
    alt: 'Renato aplicando película de controle solar em vidro traseiro no estúdio PeliCar'
  },
  {
    id: 'renato-2',
    imageUrl: '/assets/aistudio/fsafasf_68895026.jpeg',
    caption: 'Acabamento interno detalhado no para-brisa',
    alt: 'Renato realizando acabamento interno em Porsche no estúdio PeliCar'
  },
  {
    id: 'renato-3',
    imageUrl: '/assets/aistudio/trjratj_752aa031.jpeg',
    caption: 'Aplicação técnica de película de controle solar',
    alt: 'Renato com uniforme PeliCar preparando película no estúdio'
  },
  {
    id: 'renato-6',
    imageUrl: '/assets/aistudio/ajaj45trea_07cefc4c.jpeg',
    caption: 'Corte computadorizado em plotter com moldes digitais',
    alt: 'Plotter de recorte computadorizado com película e notebook no estúdio PeliCar'
  },
  {
    id: 'renato-7',
    imageUrl: '/assets/aistudio/hh_223a3916.jpeg',
    caption: 'Moldagem térmica de precisão no vidro lateral',
    alt: 'Renato aplicando moldagem térmica no vidro da porta de Porsche na PeliCar'
  },
  {
    id: 'renato-4',
    imageUrl: '/assets/aistudio/acsffasf_7aa81027.jpeg',
    caption: 'Cuidado artesanal em cada detalhe da porta',
    alt: 'Renato trabalhando no acabamento da porta de veículo esportivo na PeliCar'
  }
];

export const OwnerRenatoSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Duplicate list to create a seamless infinite loop (-50% translateX)
  const carouselItems = [...RENATO_PHOTOS, ...RENATO_PHOTOS];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + RENATO_PHOTOS.length) % RENATO_PHOTOS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % RENATO_PHOTOS.length);
    }
  };

  return (
    <section id="renato" className="py-20 bg-[#070709] border-t border-neutral-900 overflow-hidden relative">
      {/* Subtle crimson ambient glow */}
      <div className="absolute top-1/3 right-0 w-[420px] h-[320px] bg-[#C71A24]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Owner Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E0222D] mb-2">
              <Award className="w-4 h-4 shrink-0" />
              <span>Fundador &amp; Mestre Aplicador · Itajaí, SC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black italic text-white tracking-tight uppercase text-balance">
              Renato · Dedicação Pessoal em Cada Veículo
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mt-3">
              À frente da <strong className="text-white font-semibold">PeliCar</strong>, Renato acompanha e executa pessoalmente cada instalação — unindo corte computadorizado em plotter, moldagem térmica precisa e acabamento limpo dentro de um estúdio climatizado.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 mt-3">
              <span>Atendimento direto com o dono</span>
              <span aria-hidden="true" className="text-[#C71A24]">·</span>
              <span>Corte computadorizado em plotter</span>
              <span aria-hidden="true" className="text-[#C71A24]">·</span>
              <span>Estúdio climatizado</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 hover:border-[#8F0F16] text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
              aria-label={isPaused ? 'Retomar carrossel' : 'Pausar carrossel'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#E0222D]" /> : <Pause className="w-3.5 h-3.5 text-[#E0222D]" />}
              <span>{isPaused ? 'Retomar Carrossel' : 'Pausar Carrossel'}</span>
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(
                'Olá Renato! Vi seu trabalho no site da PeliCar e gostaria de conversar sobre um orçamento.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl rswf-gradient-btn text-white text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar com o Renato</span>
            </a>
          </div>
        </div>
      </div>

      {/* Seamless Infinite Carousel Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

        <div className={`animate-renato-marquee ${isPaused ? 'is-paused' : ''}`}>
          {carouselItems.map((item, idx) => {
            const originalIndex = idx % RENATO_PHOTOS.length;
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group w-[260px] sm:w-[300px] lg:w-[330px] shrink-0 bg-[#0b0b0f] border border-neutral-800/80 hover:border-[#8F0F16] rounded-2xl overflow-hidden cursor-pointer transition-colors duration-200 shadow-lg flex flex-col"
              >
                {/* Original Photo Container: 3:4 natural vertical ratio, zero overlays or cropping */}
                <div className="aspect-[3/4] w-full bg-black relative flex items-center justify-center overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption below the photo */}
                <div className="p-3.5 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between gap-2 text-xs">
                  <span className="text-neutral-200 font-medium truncate">{item.caption}</span>
                  <span className="text-[#E0222D] font-bold shrink-0 text-[11px] group-hover:underline">
                    Ampliar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for full-size inspection */}
      {lightboxIndex !== null && RENATO_PHOTOS[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50 hidden sm:flex"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50 hidden sm:flex"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-3xl w-full bg-[#0e0e11] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[78vh] w-full bg-black flex items-center justify-center">
              <img
                src={RENATO_PHOTOS[lightboxIndex].imageUrl}
                alt={RENATO_PHOTOS[lightboxIndex].alt}
                className="max-h-[78vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {RENATO_PHOTOS[lightboxIndex].caption}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Renato · Estúdio PeliCar em Itajaí, SC
                </p>
              </div>

              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Olá Renato! Vi as fotos do seu trabalho na PeliCar e gostaria de agendar um serviço.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agendar com o Renato</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
