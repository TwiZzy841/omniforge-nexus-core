
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogIn, Settings, Search, Code, FileCode, Terminal, Database, Webhook, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground/70 hover:text-omni-primary">
                  Développement
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-600 to-blue-800 p-6 no-underline outline-none focus:shadow-md"
                          to="/modules/development"
                        >
                          <Code className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Studio de développement
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Éditeur universel avec support IA et déploiement avancé
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/modules/development/languages"
                        >
                          <div className="flex items-center gap-2">
                            <FileCode className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Langages & Frameworks</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Du no-code à l'assembleur quantique
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/modules/development/devops"
                        >
                          <div className="flex items-center gap-2">
                            <Terminal className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">DevOps & CI/CD</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Automatisez vos pipelines, tests et déploiements
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/modules/development/databases"
                        >
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Bases de données</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            SQL, NoSQL, NewSQL, Time Series, Graph, Vectorielles
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/modules/development/api"
                        >
                          <div className="flex items-center gap-2">
                            <Webhook className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">APIs & Intégrations</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            REST, GraphQL, gRPC, WebSockets, MQTT et plus
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/modules/development/collab"
                        >
                          <div className="flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Développement collaboratif</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Édition en temps réel, version control, merge IA
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/modules/creation" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Création
          </Link>
          <Link to="/modules/commerce" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Commerce
          </Link>
          <Link to="/modules/collaboration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Collaboration
          </Link>
          <Link to="/modules/accessibility" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Accessibilité
          </Link>
          <Link to="/modules/administration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors">
            Administration
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            <LogIn className="h-4 w-4" />
            <span>Connexion</span>
          </Button>

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
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/modules/development/languages" className="text-xs font-medium text-foreground/60 hover:text-omni-primary transition-colors py-1 flex items-center">
                <FileCode className="h-3 w-3 mr-1" />
                Langages & Frameworks
              </Link>
              <Link to="/modules/development/devops" className="text-xs font-medium text-foreground/60 hover:text-omni-primary transition-colors py-1 flex items-center">
                <Terminal className="h-3 w-3 mr-1" />
                DevOps & CI/CD
              </Link>
              <Link to="/modules/development/databases" className="text-xs font-medium text-foreground/60 hover:text-omni-primary transition-colors py-1 flex items-center">
                <Database className="h-3 w-3 mr-1" />
                Bases de données
              </Link>
              <Link to="/modules/development/api" className="text-xs font-medium text-foreground/60 hover:text-omni-primary transition-colors py-1 flex items-center">
                <Webhook className="h-3 w-3 mr-1" />
                APIs & Intégrations
              </Link>
              <Link to="/modules/development/collab" className="text-xs font-medium text-foreground/60 hover:text-omni-primary transition-colors py-1 flex items-center">
                <GitBranch className="h-3 w-3 mr-1" />
                Développement collaboratif
              </Link>
            </div>
            <Link to="/modules/creation" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Création
            </Link>
            <Link to="/modules/commerce" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Commerce
            </Link>
            <Link to="/modules/collaboration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Collaboration
            </Link>
            <Link to="/modules/accessibility" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Accessibilité
            </Link>
            <Link to="/modules/administration" className="text-sm font-medium text-foreground/70 hover:text-omni-primary transition-colors py-2">
              Administration
            </Link>
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
