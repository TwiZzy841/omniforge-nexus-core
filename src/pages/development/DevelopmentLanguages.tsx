
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { FileCode } from 'lucide-react';

const DevelopmentLanguages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <FileCode className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Langages & Frameworks</h1>
              <p className="text-foreground/70">Du no-code à l'assembleur quantique</p>
            </div>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Explore les langages et frameworks</h2>
              <p className="text-foreground/80 mb-6">
                Accédez à plus de 150 langages et frameworks de programmation, du no-code aux langages expérimentaux, avec des environnements intégrés d'exécution, de débogage et d'apprentissage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['No-Code', 'JavaScript', 'Python', 'Rust', 'Go', 'C/C++', 'Java', 'Kotlin', 'Swift', 'TypeScript', 'React', 'Vue', 'Angular'].map((lang, index) => (
                  <div key={index} className="bg-background p-4 rounded border border-muted hover:border-omni-primary transition-colors">
                    {lang}
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">IA pour le développement</h2>
              <p className="text-foreground/80 mb-6">
                Des assistants spécialisés pour chaque langage, capables de générer du code, refactoriser, optimiser, documenter et tester automatiquement.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Éditeur universel</h2>
              <p className="text-foreground/80">
                Une interface unique pour coder dans n'importe quel langage, avec une personnalisation complète, des raccourcis clavier, des snippets, et une intégration avec tous les outils de développement.
              </p>
            </section>
          </div>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentLanguages;
