
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import DevelopmentMenu from '@/components/DevelopmentMenu';
import { Code } from 'lucide-react';

const DevelopmentStudio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Studio de développement</h1>
              <p className="text-foreground/70">Éditeur universel avec support IA et déploiement avancé</p>
            </div>
          </div>
          
          <section className="bg-card rounded-lg border border-muted p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bienvenue dans le studio complet</h2>
            <p className="text-foreground/80 mb-6">
              Le studio de développement OmniForge regroupe tous les outils dont vous avez besoin pour concevoir, 
              développer, tester et déployer vos applications. Grâce à l'assistance IA avancée, vous pouvez 
              travailler plus efficacement que jamais, quel que soit le langage ou la plateforme.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Éditeur omniscient</h3>
                <p className="text-foreground/80">
                  Notre éditeur universel prend en charge tous les langages de programmation, avec coloration syntaxique, 
                  complétion de code IA, refactoring intelligent, et des dizaines d'autres fonctionnalités avancées.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Déploiement sans friction</h3>
                <p className="text-foreground/80">
                  Déployez vos applications n'importe où : cloud, edge, IoT, on-premise, blockchain, quantum, avec des 
                  pipelines de déploiement automatisés et une observabilité complète.
                </p>
              </div>
            </div>
          </section>
          
          <DevelopmentMenu />
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentStudio;
