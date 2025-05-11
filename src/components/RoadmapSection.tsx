
import { Badge } from "@/components/ui/badge";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Prototype du Core universel",
    date: "Q4 2025",
    description:
      "Développement de l'éditeur, IA, moteur 3D/2D, automation et IoT.",
    status: "En cours"
  },
  {
    phase: "Phase 2",
    title: "Modules avancés",
    date: "Q2 2026",
    description:
      "E-commerce, gestion, formation, marketplace, social, robotique, XR, science.",
    status: "Planifié"
  },
  {
    phase: "Phase 3",
    title: "Optimisation & Ouverture",
    date: "Q4 2026",
    description:
      "API, extensions, cloud, onboarding IA, edge computing, open hardware.",
    status: "Futur"
  },
  {
    phase: "Phase 4",
    title: "Lancement public",
    date: "Q1 2027",
    description:
      "Ouverture totale, hackathons, écosystème, partenariats mondiaux.",
    status: "Futur"
  },
  {
    phase: "Phase 5+",
    title: "Innovation continue",
    date: "Post 2027",
    description:
      "Interfaces cerveau-machine, IA auto-évolutive, intégration quantique...",
    status: "Visionnaire"
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Roadmap Galactique</h2>
          <p className="text-lg text-foreground/80">
            Notre vision ambitieuse se déploie en phases stratégiques pour
            construire le méta-système universel de demain.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-muted -translate-x-1/2"></div>

          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 last:mb-0 md:flex ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-omni-primary bg-background"></div>

              {/* Content */}
              <div className="md:w-1/2 md:px-10">
                <div className="bg-background border border-muted rounded-lg p-6 hover:border-omni-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-omni-primary">
                      {item.phase}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`
                        ${
                          item.status === "En cours"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : item.status === "Planifié"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                            : "bg-muted text-muted-foreground"
                        }
                      `}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
