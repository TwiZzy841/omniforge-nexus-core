
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { PenTool } from 'lucide-react';

const CreationStudio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <PenTool className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Studio de création</h1>
              <p className="text-foreground/70">Outils de conception et de création assistée par IA</p>
            </div>
          </div>
          
          <section className="bg-card rounded-lg border border-muted p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plateforme créative complète</h2>
            <p className="text-foreground/80 mb-6">
              Le studio de création OmniForge regroupe tous les outils dont vous avez besoin pour concevoir, 
              créer et éditer vos contenus graphiques, audio et vidéo. Grâce à l'assistance IA avancée, 
              vous pouvez donner vie à vos idées plus rapidement que jamais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Design et graphisme</h3>
                <p className="text-foreground/80">
                  Notre suite d'outils graphiques vous permet de créer des designs professionnels, 
                  des illustrations, des interfaces et bien plus encore avec une assistance IA intelligente.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Édition multimédia</h3>
                <p className="text-foreground/80">
                  Éditez vos photos, vidéos et fichiers audio avec des outils puissants et intuitifs. 
                  L'IA vous aide à automatiser les tâches répétitives et à optimiser vos contenus.
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

export default CreationStudio;
