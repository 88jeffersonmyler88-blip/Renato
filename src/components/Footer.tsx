import React from 'react';
import { Shield, Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          
          {/* Col 1: Brand Logo & Subtitle */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={STORE_INFO.logoUrl}
                alt="PeliCar - Películas de Controle Solar"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
              />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Películas especiais de controle solar, alta performance térmica e estética automotiva em Itajaí - SC.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Nota 5.0 com clientes 100% satisfeitos
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#produtos" className="hover:text-[#E0222D] transition-colors">Produtos & Tecnologias</a></li>
              <li><a href="#galeria" className="hover:text-[#E0222D] transition-colors">Galeria de Serviços</a></li>
              <li><a href="#avaliacoes" className="hover:text-[#E0222D] transition-colors">30 Avaliações no Google</a></li>
              <li><a href="#localizacao" className="hover:text-[#E0222D] transition-colors">Mapa & Endereço</a></li>
            </ul>
          </div>

          {/* Col 3: Contato & Redes */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contato Direto</h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C71A24] shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C71A24] shrink-0" />
              <span className="text-white font-semibold">{STORE_INFO.phone}</span>
            </p>
            <p className="pt-1">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <span className="text-pink-500 font-bold">@</span>
                <span>Instagram: <span className="text-white underline underline-offset-2">Pelicarrenato</span></span>
              </a>
            </p>
          </div>

          {/* Col 4: Horário & Atendimento */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Horário</h4>
            <p className="text-neutral-400">
              Segunda a Sexta: 08:00 – 18:00 <br />
              Sábado: 08:00 – 12:00 (Com Agendamento) <br />
              Domingo: Fechado
            </p>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-xl rswf-gradient-btn text-white font-bold uppercase text-[10px] tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direto
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} PeliCar · Películas de Controle Solar. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C71A24]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
