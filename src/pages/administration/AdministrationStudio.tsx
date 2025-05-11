
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { Shield } from 'lucide-react';

const AdministrationStudio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-slate-600 to-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Administration système</h1>
              <p className="text-foreground/70">Gestion et sécurité de vos environnements</p>
            </div>
          </div>
          
          <section className="bg-card rounded-lg border border-muted p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contrôle total</h2>
            <p className="text-foreground/80 mb-6">
              Notre suite d'outils d'administration vous donne un contrôle complet sur tous vos environnements, 
              avec une sécurité renforcée et des fonctionnalités avancées de gestion des accès et des ressources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Gestion des utilisateurs</h3>
                <p className="text-foreground/80">
                  Gérez facilement les utilisateurs, les rôles et les permissions avec des outils 
                  d'authentification et d'autorisation avancés et une intégration SSO.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Sécurité et conformité</h3>
                <p className="text-foreground/80">
                  Protégez vos données avec des outils de chiffrement, d'audit de sécurité et de 
                  surveillance continue des menaces, tout en assurant la conformité réglementaire.
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

export default AdministrationStudio;
