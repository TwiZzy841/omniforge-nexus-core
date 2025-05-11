
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { Terminal } from 'lucide-react';

const DevelopmentDevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Terminal className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">DevOps & CI/CD</h1>
              <p className="text-foreground/70">Automatisez vos pipelines, tests et déploiements</p>
            </div>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Automatisation CI/CD</h2>
              <p className="text-foreground/80 mb-6">
                Créez et gérez des pipelines d'intégration et de déploiement continus avec une interface visuelle intuitive. Compatible avec tous les principaux fournisseurs cloud et outils DevOps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Tests automatisés</h3>
                  <p className="text-sm text-foreground/70">Tests unitaires, d'intégration et fonctionnels avec génération IA</p>
                </div>
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Déploiements</h3>
                  <p className="text-sm text-foreground/70">Déploiements automatiques, progressifs et rollbacks</p>
                </div>
                <div className="bg-background p-4 rounded border border-muted">
                  <h3 className="font-medium mb-2">Monitoring</h3>
                  <p className="text-sm text-foreground/70">Métriques, alertes et tableaux de bord personnalisables</p>
                </div>
              </div>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Infrastructure as Code</h2>
              <p className="text-foreground/80 mb-6">
                Gérez votre infrastructure avec Terraform, CloudFormation, Pulumi, et plus encore, tout ça avec l'assistance d'IA pour optimiser vos configurations.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Orchestration de conteneurs</h2>
              <p className="text-foreground/80">
                Intégration native avec Kubernetes, Docker, et autres technologies de conteneurisation pour une gestion simplifiée de vos environnements.
              </p>
            </section>
          </div>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentDevOps;
