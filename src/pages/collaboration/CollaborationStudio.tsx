
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { Users } from 'lucide-react';

const CollaborationStudio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Outils de collaboration</h1>
              <p className="text-foreground/70">Communication et coordination d'équipe en temps réel</p>
            </div>
          </div>
          
          <section className="bg-card rounded-lg border border-muted p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Collaboration seamless</h2>
            <p className="text-foreground/80 mb-6">
              Notre suite d'outils collaboratifs permet à votre équipe de travailler ensemble sans friction, 
              quelle que soit sa taille ou sa localisation géographique, avec une assistance IA pour optimiser 
              la productivité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Gestion de projet</h3>
                <p className="text-foreground/80">
                  Planifiez, suivez et gérez vos projets avec des outils flexibles qui s'adaptent à votre 
                  méthode de travail, complétés par des automatisations intelligentes.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Communication d'équipe</h3>
                <p className="text-foreground/80">
                  Restez connectés avec des outils de messagerie, visioconférence et partage de documents 
                  intégrés, le tout avec des fonctionnalités de traduction en temps réel et de prise de notes assistée.
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

export default CollaborationStudio;
