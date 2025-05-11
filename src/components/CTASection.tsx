
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-omni-primary/10 pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-omni-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-omni-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Animated grid lines background */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participez à la Construction du Futur
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Rejoignez le projet OmniForge pour façonner ensemble le futur
            de la création, de l'innovation et de la collaboration mondiale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-omni-primary hover:bg-blue-600 animate-pulse-glow">
              Rejoindre la communauté
            </Button>
            <Button size="lg" variant="outline" className="border-omni-primary text-omni-primary hover:bg-omni-primary/10">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
