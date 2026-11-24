/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoogleProfileBar } from './components/GoogleProfileBar';
import { QuickActionsModal } from './components/QuickActionsModal';
import { ProductsShowcase } from './components/ProductsShowcase';
import { DynamicGallery } from './components/DynamicGallery';
import { OwnerRenatoSection } from './components/OwnerRenatoSection';
import { Testimonials } from './components/Testimonials';
import { StoreLocationMap } from './components/StoreLocationMap';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeModal, setActiveModal] = useState<'rotas' | 'salvar' | 'compartilhar' | 'fachada' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col selection:bg-[#C71A24] selection:text-white">
      {/* Top Bar */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToProducts={() => scrollToSection('produtos')}
          onScrollToGallery={() => scrollToSection('galeria')}
        />

        {/* Google Business Profile Bar & Quick Actions */}
        <GoogleProfileBar
          onOpenModal={(modal) => setActiveModal(modal)}
          onScrollToGallery={() => scrollToSection('galeria')}
          onScrollToMap={() => scrollToSection('localizacao')}
        />

        {/* Products Showcase (Photo Spaces & Tint Lines) */}
        <ProductsShowcase onTriggerToast={showToast} />

        {/* Dynamic Gallery of Completed Jobs */}
        <DynamicGallery onTriggerToast={showToast} />

        {/* Special Section for Owner Renato (Infinite Carousel) */}
        <OwnerRenatoSection />

        {/* Testimonials (5,029 Google Reviews 5.0 Stars) */}
        <Testimonials />

        {/* Google Maps Location & Store Info */}
        <StoreLocationMap
          onTriggerToast={showToast}
          onOpenRotasModal={() => setActiveModal('rotas')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons & Toasts */}
      <FloatingActions toastMessage={toastMessage} />

      {/* Quick Action Modals (Rotas, Salvar, Compartilhar, Fachada) */}
      <QuickActionsModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onTriggerToast={showToast}
      />
    </div>
  );
}
