import React, { useState } from 'react';
import { 
  Camera, 
  X, 
  ExternalLink, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { INITIAL_GALLERY, STORE_INFO } from '../data/mockData';

interface DynamicGalleryProps {
  onTriggerToast?: (msg: string) => void;
}

export const DynamicGallery: React.FC<DynamicGalleryProps> = () => {
  const gallery = INITIAL_GALLERY;
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Duplicate list to create a mathematically seamless infinite loop
  const carouselItems = [...gallery, ...gallery];

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % gallery.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-[#070709] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#E0222D] mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>Serviços Realizados PELICAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black italic text-white tracking-tight uppercase">
              Galeria Dinâmica de Aplicações
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Aplicações reais feitas no nosso estúdio no Bairro São Vicente, Itajaí.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 hover:border-[#8F0F16] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            aria-label={isPaused ? 'Retomar carrossel' : 'Pausar carrossel'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-[#E0222D]" /> : <Pause className="w-3.5 h-3.5 text-[#E0222D]" />}
            <span>{isPaused ? 'Retomar Carrossel' : 'Pausar Carrossel'}</span>
          </button>
        </div>
      </div>

      {/* Seamless Infinite Carousel Track - Original unaltered photos */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

        <div className={`animate-gallery-marquee ${isPaused ? 'is-paused' : ''}`}>
          {carouselItems.map((item, idx) => {
            const originalIndex = idx % gallery.length;
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group relative w-[320px] sm:w-[440px] lg:w-[540px] xl:w-[600px] shrink-0 bg-[#0b0b0f] border border-neutral-800/80 hover:border-[#8F0F16]/80 rounded-2xl overflow-hidden cursor-pointer transition-colors duration-200 shadow-lg flex flex-col"
              >
                {/* Unaltered Full Photo Container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-black relative flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Zoom Icon indicator on hover only */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Clean Caption Footer below the photo */}
                <div className="p-3.5 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between gap-2 text-xs">
                  <span className="text-neutral-200 font-semibold truncate">{item.title}</span>
                  <span className="text-[#E0222D] font-bold shrink-0 group-hover:underline text-[11px]">
                    Ampliar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50 hidden sm:flex"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 z-50 hidden sm:flex"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div 
            className="relative max-w-5xl w-full bg-[#0e0e11] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[75vh] w-full bg-black relative flex items-center justify-center">
              <img
                src={gallery[lightboxIndex].imageUrl}
                alt={gallery[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800">
              <div>
                <h3 className="text-xl font-black text-white">
                  {gallery[lightboxIndex].title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {gallery[lightboxIndex].vehicleOrPlace}
                </p>
              </div>

              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(
                  `Olá PELICAR! Vi a aplicação "${gallery[lightboxIndex].title}" na galeria e gostaria de um orçamento para o meu veículo.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                <span>Orçamento no WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
