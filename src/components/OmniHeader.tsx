
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogIn, Settings, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const OmniHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-card/80 backdrop-blur-md z-50 border-b border-muted">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md omni-gradient animate-gradient-shift"></div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">OMNI<span className="text-omni-primary">FORGE</span></h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/modules/development" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Développement
          </Link>
          <Link to="/modules/creation" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Création
          </Link>
          <Link to="/modules/commerce" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Commerce
          </Link>
          <Link to="/modules/collaboration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Collaboration
          </Link>
          {/* Nouvelle option #1 */}
          <Link to="/modules/accessibility" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Accessibilité
          </Link>
          {/* Nouvelle option #2 */}
          <Link to="/modules/administration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Administration
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Bouton de recherche */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          {/* Bouton de paramètres */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            <LogIn className="h-4 w-4" />
            <span>Connexion</span>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-muted py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/modules/development" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Développement
            </Link>
            <Link to="/modules/creation" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Création
            </Link>
            <Link to="/modules/commerce" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Commerce
            </Link>
            <Link to="/modules/collaboration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Collaboration
            </Link>
            {/* Nouvelles options dans le menu mobile */}
            <Link to="/modules/accessibility" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Accessibilité
            </Link>
            <Link to="/modules/administration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Administration
            </Link>
            {/* Boutons supplémentaires pour mobile */}
            <div className="flex items-center space-x-4 py-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="flex items-center space-x-2 w-full justify-center">
              <LogIn className="h-4 w-4" />
              <span>Connexion</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default OmniHeader;
