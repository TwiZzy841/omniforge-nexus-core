
import { Link } from 'react-router-dom';

const OmniFooter = () => {
  return (
    <footer className="bg-card border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">À propos</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Roadmap</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Tarifs</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Modules</h3>
            <ul className="space-y-2">
              <li><Link to="/modules/development" className="text-muted-foreground hover:text-omni-primary transition-colors">Développement</Link></li>
              <li><Link to="/modules/creation" className="text-muted-foreground hover:text-omni-primary transition-colors">Création</Link></li>
              <li><Link to="/modules/commerce" className="text-muted-foreground hover:text-omni-primary transition-colors">Commerce</Link></li>
              <li><Link to="/modules/collaboration" className="text-muted-foreground hover:text-omni-primary transition-colors">Collaboration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Tutoriels</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">API</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Communauté</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Carrières</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Partenaires</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-omni-primary transition-colors">Légal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded-md omni-gradient animate-gradient-shift"></div>
            <h1 className="text-lg font-bold tracking-wider">OMNI<span className="text-omni-primary">FORGE</span></h1>
          </div>
          
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} OmniForge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default OmniFooter;
