
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import OmniHeader from "@/components/OmniHeader";
import OmniFooter from "@/components/OmniFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center bg-muted w-24 h-24 rounded-full mb-8">
            <span className="text-4xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page introuvable</h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-md mx-auto">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild className="bg-omni-primary hover:bg-blue-600">
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" /> Retourner à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      
      <OmniFooter />
    </div>
  );
};

export default NotFound;
