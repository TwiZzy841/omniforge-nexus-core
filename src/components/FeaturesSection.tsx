
import {
  Cpu,
  Globe,
  Layers,
  Lock,
  Palette,
  Sparkles,
  Users,
  Zap
} from "lucide-react";

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-omni-primary" />,
    title: "Développement IA",
    description:
      "Éditeur universel avec IA omniprésente : copilote, générateur, refactoriseur, coach, auditeur, architecte."
  },
  {
    icon: <Palette className="h-8 w-8 text-omni-secondary" />,
    title: "Création Multimédia & XR",
    description:
      "Moteur 2D/3D/XR universel et génération IA multimodale pour jeux, simulations, design et métavers."
  },
  {
    icon: <Zap className="h-8 w-8 text-omni-accent" />,
    title: "Commerce & Automatisation",
    description:
      "Générateur de business et automatisation totale avec bots, workflows, RPA et IA stratégique."
  },
  {
    icon: <Users className="h-8 w-8 text-omni-primary" />,
    title: "Collaboration & Réseau",
    description:
      "Espace collaboratif universel et réseau social intégré pour l'édition, le mentorat et la formation."
  },
  {
    icon: <Lock className="h-8 w-8 text-omni-secondary" />,
    title: "Sécurité & Gouvernance",
    description:
      "Sécurité avancée avec chiffrement, MFA, audit et conformité aux normes internationales."
  },
  {
    icon: <Globe className="h-8 w-8 text-omni-accent" />,
    title: "Accessibilité & Inclusion",
    description:
      "Interfaces adaptatives, multi-modalités et internationalisation native pour tous les utilisateurs."
  },
  {
    icon: <Layers className="h-8 w-8 text-omni-primary" />,
    title: "Architecture Modulaire",
    description:
      "Core ultra-modulaire avec microservices, cloud natif et performance ultime pour tous types de projets."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-omni-secondary" />,
    title: "UX Personnalisable",
    description:
      "Interface personnalisable à l'infini avec thèmes, layouts et modes immersifs pour tous les besoins."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une Infrastructure Universelle
          </h2>
          <p className="text-lg text-foreground/80">
            OmniForge combine des technologies avancées pour créer un
            méta-système qui transcende les limites des outils traditionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-muted rounded-lg hover:border-omni-primary/50 transition-all duration-300"
            >
              <div className="mb-5 p-3 rounded-lg bg-muted inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
