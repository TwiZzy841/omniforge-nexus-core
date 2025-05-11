
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { ShoppingBag } from 'lucide-react';

const CommerceStudio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Plateforme de commerce</h1>
              <p className="text-foreground/70">Solutions e-commerce complètes avec outils d'analyse</p>
            </div>
          </div>
          
          <section className="bg-card rounded-lg border border-muted p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Commerce omnicanal</h2>
            <p className="text-foreground/80 mb-6">
              Notre plateforme de commerce unifiée vous permet de vendre partout : en ligne, sur mobile, 
              sur les marketplaces, en magasin et sur les réseaux sociaux, le tout depuis une interface unique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Boutique en ligne</h3>
                <p className="text-foreground/80">
                  Créez et gérez votre boutique en ligne avec nos outils de création de site, 
                  gestion de catalogue, paiements sécurisés et options de livraison flexibles.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Analytics et marketing</h3>
                <p className="text-foreground/80">
                  Analysez les performances de vos ventes, comprenez vos clients et optimisez vos campagnes 
                  marketing grâce à nos outils d'analyse avancés et nos fonctionnalités d'automatisation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default CommerceStudio;
