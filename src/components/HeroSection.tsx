
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-omni-primary/10 to-transparent pointer-events-none"></div>
      
      {/* Animated circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-omni-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-omni-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text omni-gradient animate-gradient-shift">
            Le Méta-système Universel
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed">
            OmniForge est une infrastructure universelle qui abolit toute limite à la création, 
            la gestion, l'automatisation et l'innovation dans tous les secteurs, pour tous les profils.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="text-lg py-6 px-8 bg-omni-primary hover:bg-blue-600 animate-pulse-glow">
              Découvrir
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-omni-primary text-omni-primary hover:bg-omni-primary/10">
              Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-muted mb-4 animate-float">
                <Code className="h-8 w-8 text-omni-primary" />
              </div>
              <h3 className="font-medium">Développement</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-muted mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Palette className="h-8 w-8 text-omni-secondary" />
              </div>
              <h3 className="font-medium">Création</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-muted mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <ShoppingBag className="h-8 w-8 text-omni-accent" />
              </div>
              <h3 className="font-medium">Commerce</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-muted mb-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <Users className="h-8 w-8 text-omni-primary" />
              </div>
              <h3 className="font-medium">Collaboration</h3>
            </div>
          </div>
          
          <Link to="/modules" className="inline-flex items-center gap-2 text-omni-primary hover:text-blue-400 transition-colors font-medium">
            Explorer tous les modules <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
