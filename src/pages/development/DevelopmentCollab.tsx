
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { GitBranch } from 'lucide-react';

const DevelopmentCollab = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Développement collaboratif</h1>
              <p className="text-foreground/70">Édition en temps réel, version control, merge IA</p>
            </div>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Édition collaborative</h2>
              <p className="text-foreground/80 mb-6">
                Travaillez simultanément sur les mêmes fichiers avec votre équipe, en temps réel, avec gestion avancée des conflits et assistance IA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Édition en temps réel</h3>
                  <p className="text-sm text-foreground/70">Modifications synchronisées instantanément avec tous les collaborateurs</p>
                </div>
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Gestion des conflits</h3>
                  <p className="text-sm text-foreground/70">Résolution intelligente de conflits avec suggestions IA</p>
                </div>
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Communication intégrée</h3>
                  <p className="text-sm text-foreground/70">Chat, commentaires et annotations directement dans le code</p>
                </div>
              </div>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Gestion de version avancée</h2>
              <p className="text-foreground/80 mb-6">
                Une interface unifiée pour Git et autres systèmes de contrôle de version, avec visualisations avancées et automatisation des workflows.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Merge IA et revue de code</h2>
              <p className="text-foreground/80">
                Intelligence artificielle pour fusionner intelligemment les branches, suggérer des améliorations de code et faciliter les revues.
              </p>
            </section>
          </div>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentCollab;
