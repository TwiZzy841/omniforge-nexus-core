
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { Database } from 'lucide-react';

const DevelopmentDatabases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Bases de données</h1>
              <p className="text-foreground/70">SQL, NoSQL, NewSQL, Time Series, Graph, Vectorielles</p>
            </div>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Explorer les types de bases de données</h2>
              <p className="text-foreground/80 mb-6">
                Accédez à tous types de bases de données avec une interface unifiée, des outils de requête avancés et une optimisation automatique par IA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['SQL', 'NoSQL', 'NewSQL', 'Time Series', 'Graph', 'Vectorielle', 'In-Memory', 'Distribuée', 'Multi-modèle'].map((type, index) => (
                  <div key={index} className="bg-background p-4 rounded border border-muted hover:border-omni-primary transition-colors">
                    {type}
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Modélisation et conception</h2>
              <p className="text-foreground/80 mb-6">
                Créez visuellement vos modèles de données avec assistance IA, générez les schémas, et optimisez automatiquement vos structures pour les performances.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Administration et monitoring</h2>
              <p className="text-foreground/80">
                Gérez toutes vos bases de données depuis une interface unifiée avec des outils de surveillance, de sauvegarde, de migration et d'optimisation automatisés.
              </p>
            </section>
          </div>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentDatabases;
