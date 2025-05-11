
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Développement & Code",
    description: "Éditeur universel avec support de tous les langages, IA omniprésente, et déploiement partout.",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
    link: "/modules/development"
  },
  {
    title: "Création Multimédia & XR",
    description: "Moteur 2D/3D/XR universel pour jeux, simulations, architecture, métavers et holographie.",
    image: "bg-gradient-to-br from-purple-600 to-purple-800",
    link: "/modules/creation"
  },
  {
    title: "Commerce & Gestion",
    description: "Générateur de business, ERP/CRM universels et automatisation totale pour toute activité.",
    image: "bg-gradient-to-br from-green-600 to-green-800",
    link: "/modules/commerce"
  },
  {
    title: "Collaboration & Formation",
    description: "Espace collaboratif universel, réseau social intégré et formation continue pour tous.",
    image: "bg-gradient-to-br from-blue-500 to-purple-700",
    link: "/modules/collaboration"
  },
  {
    title: "Administration & Sécurité",
    description: "Gestion multi-tenant, sécurité avancée et gouvernance intelligente pour toute organisation.",
    image: "bg-gradient-to-br from-gray-600 to-gray-800",
    link: "/modules/administration"
  },
  {
    title: "Accessibilité & Inclusion",
    description: "Interface adaptive, personnalisable et internationalisation native pour tous les utilisateurs.",
    image: "bg-gradient-to-br from-yellow-600 to-orange-700",
    link: "/modules/accessibility"
  }
];

const ModulesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Modules Puissants & Interconnectés
          </h2>
          <p className="text-lg text-foreground/80">
            Explorez les différents modules d'OmniForge, chacun conçu pour offrir
            des fonctionnalités avancées et parfaitement intégrées avec tous les autres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="module-card overflow-hidden group"
            >
              {/* Header with gradient background */}
              <div className={`h-32 ${module.image} rounded-t-lg -mx-6 -mt-6 mb-6`}></div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-omni-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-foreground/70 mb-6">
                {module.description}
              </p>
              <Link to={module.link} className="inline-flex items-center text-omni-primary hover:text-blue-400">
                Explorer <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-omni-primary hover:bg-blue-600">
            Tous les modules
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
