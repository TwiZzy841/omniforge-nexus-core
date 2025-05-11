
import { useParams } from "react-router-dom";
import OmniHeader from "@/components/OmniHeader";
import OmniFooter from "@/components/OmniFooter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleInfo {
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();

  // Module data - in a real app, this would come from an API or database
  const moduleData: Record<string, ModuleInfo> = {
    development: {
      title: "Développement & Code",
      description: "Le module Développement d'OmniForge révolutionne la création de logiciels avec un éditeur universel supportant tous les langages et paradigmes, de l'assembleur quantique au no-code, le tout avec une IA omniprésente qui agit comme copilote, générateur, refactoriseur, coach et architecte.",
      features: [
        "Éditeur universel pour tout langage et paradigme",
        "IA omniprésente : copilote, générateur, architecte",
        "Reverse engineering universel et décompilation",
        "Déploiement partout (cloud, edge, IoT, blockchain)",
        "Automatisation extrême des pipelines et tests",
        "Programmation collaborative planétaire",
        "Support multi-paradigme et multi-plateforme",
      ],
      color: "from-blue-600 to-blue-800"
    },
    creation: {
      title: "Création Multimédia & XR",
      description: "Le module Création Multimédia & XR offre un moteur 2D/3D/XR/VR/AR/MR universel pour créer des jeux, simulations, designs architecturaux, visualisations scientifiques, films, métavers et jumeaux numériques avec une génération IA multimodale pour tous types d'assets.",
      features: [
        "Moteur 2D/3D/XR/VR/AR/MR universel",
        "Génération IA multimodale d'assets",
        "Scripting total (textuel, visuel, vocal, gestuel)",
        "Export universel vers tous formats",
        "Support pour impression 3D et holographie",
        "Animation procédurale et cinématique avancée",
        "Intégration métavers et NFT native",
      ],
      color: "from-purple-600 to-purple-800"
    },
    commerce: {
      title: "Commerce & Gestion",
      description: "Le module Commerce & Gestion transforme n'importe quelle idée en business opérationnel avec des générateurs de boutiques, marketplaces et SaaS, ainsi que des systèmes ERP/CRM/BI universels et une automatisation totale pilotée par l'IA pour optimiser toutes les opérations.",
      features: [
        "Générateur de business complet (boutiques, SaaS, APIs)",
        "ERP/CRM/BI/HRM/SCM universels intégrés",
        "Automatisation totale via bots et workflows",
        "IA stratégique pour analyse de marché et pricing",
        "Gestion documentaire et conformité automatisée",
        "Support pour NFT, DAO et crowdfunding",
        "Optimisation continue des processus métier",
      ],
      color: "from-green-600 to-green-800"
    },
    collaboration: {
      title: "Collaboration & Réseau Social",
      description: "Le module Collaboration & Réseau Social offre un espace collaboratif universel avec édition synchrone/asynchrone, communication intégrée, réseau social pour portfolios et communautés, ainsi que des outils de formation continue et de gestion de connaissance.",
      features: [
        "Espace collaboratif universel multi-modalité",
        "Réseau social intégré avec profils et portfolios",
        "Formation continue avec MOOC et tutos IA",
        "Gestion de connaissance et wiki dynamique",
        "Traduction multilingue instantanée",
        "Hackathons virtuels et mentorat intégré",
        "Suivi de progression et analytics d'apprentissage",
      ],
      color: "from-blue-500 to-purple-700"
    },
    administration: {
      title: "Administration & Sécurité",
      description: "Le module Administration & Sécurité assure une gestion multi-tenant et multi-organisation avec une sécurité avancée comprenant chiffrement bout-en-bout, SSO, MFA, et conformité aux normes mondiales, tout en offrant une gouvernance intelligente.",
      features: [
        "Gestion multi-tenant et multi-organisation",
        "Sécurité avancée (chiffrement, SSO, MFA)",
        "Conformité automatique (RGPD, ISO, SOC2)",
        "Gouvernance intelligente avec workflows",
        "Auditabilité totale et logs sécurisés",
        "Réponse automatisée aux incidents",
        "Privacy by design et contrôles granulaires",
      ],
      color: "from-gray-600 to-gray-800"
    },
    accessibility: {
      title: "Accessibilité & Inclusion",
      description: "Le module Accessibilité & Inclusion garantit que tous les utilisateurs peuvent accéder à OmniForge grâce à des interfaces adaptatives et personnalisables, avec support multi-modalité (vocal, gestuel, BCI), accessibilité cognitive et internationalisation native.",
      features: [
        "Interface adaptive et personnalisable",
        "Support multi-modalité (clavier, vocal, gestuel, BCI)",
        "Accessibilité cognitive et physique complète",
        "Internationalisation native pour toutes langues",
        "Support pour braille et langue des signes",
        "Adaptation automatique aux capacités utilisateur",
        "Conformité WCAG et normes d'accessibilité",
      ],
      color: "from-yellow-600 to-orange-700"
    }
  };

  // Get current module info or default if not found
  const currentModule = moduleData[moduleId || ""] || {
    title: "Module inconnu",
    description: "Ce module n'existe pas ou n'est pas encore disponible.",
    features: [],
    color: "from-gray-500 to-gray-700"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      
      <main className="flex-grow pt-16">
        {/* Module header */}
        <div className={`bg-gradient-to-r ${currentModule.color} py-20`}>
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentModule.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              {currentModule.description}
            </p>
          </div>
        </div>
        
        {/* Module content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Fonctionnalités principales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {currentModule.features.map((feature, index) => (
                  <div key={index} className="bg-card border border-muted rounded-lg p-6">
                    <div className="h-2 w-10 bg-gradient-to-r from-omni-primary to-omni-secondary mb-4 rounded-full"></div>
                    <p className="font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-card border border-muted rounded-lg p-6 mb-12">
                <h3 className="text-xl font-semibold mb-4">Intégration avec les autres modules</h3>
                <p className="text-foreground/80 mb-4">
                  Ce module s'intègre parfaitement avec tous les autres modules d'OmniForge, offrant une expérience fluide et cohérente pour tous vos projets et workflows.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Synchronisation automatique des données</li>
                  <li>• Workflows cross-modules pour des projets complexes</li>
                  <li>• Partage d'assets et de ressources entre modules</li>
                  <li>• IA unifiée fonctionnant à travers tous les modules</li>
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-muted rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Explorer ce module</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-omni-primary hover:bg-blue-600">
                    Démarrer maintenant
                  </Button>
                  <Button variant="outline" className="w-full">
                    Documentation
                  </Button>
                  <Button variant="outline" className="w-full">
                    Tutoriels
                  </Button>
                  <Button variant="outline" className="w-full">
                    Communauté
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <OmniFooter />
    </div>
  );
};

export default ModuleDetail;
