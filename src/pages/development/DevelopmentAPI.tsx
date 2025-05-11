
import React from 'react';
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import { Webhook } from 'lucide-react';

const DevelopmentAPI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Webhook className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">APIs & Intégrations</h1>
              <p className="text-foreground/70">REST, GraphQL, gRPC, WebSockets, MQTT et plus</p>
            </div>
          </div>
          
          <div className="grid gap-8">
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Conception d'APIs</h2>
              <p className="text-foreground/80 mb-6">
                Créez des APIs REST, GraphQL, gRPC et plus avec assistance IA, générateurs de spécifications, documentation automatique et tests intégrés.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['REST', 'GraphQL', 'gRPC', 'WebSockets', 'MQTT', 'WebRTC', 'Server-Sent Events'].map((type, index) => (
                  <div key={index} className="bg-background p-4 rounded border border-muted hover:border-omni-primary transition-colors">
                    {type}
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Client API universel</h2>
              <p className="text-foreground/80 mb-6">
                Testez et interagissez avec n'importe quelle API via une interface unifiée, avec génération automatique de code client dans tous les langages.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Intégrations et connecteurs</h2>
              <p className="text-foreground/80">
                Connectez-vous à des milliers de services tiers via des intégrations prêtes à l'emploi, ou créez vos propres connecteurs avec notre framework d'intégration.
              </p>
            </section>
            
            <section className="bg-card rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-semibold mb-4">Sécurité et gouvernance</h2>
              <p className="text-foreground/80">
                Gestion complète de l'authentification, des autorisations, des quotas, et de la surveillance pour toutes vos APIs et intégrations.
              </p>
            </section>
          </div>
        </div>
      </main>
      <OmniFooter />
    </div>
  );
};

export default DevelopmentAPI;
