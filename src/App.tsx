
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModuleDetail from "./pages/ModuleDetail";
import DevelopmentLanguages from "./pages/development/DevelopmentLanguages";
import DevelopmentDevOps from "./pages/development/DevelopmentDevOps";
import DevelopmentDatabases from "./pages/development/DevelopmentDatabases";
import DevelopmentAPI from "./pages/development/DevelopmentAPI";
import DevelopmentCollab from "./pages/development/DevelopmentCollab";
import DevelopmentStudio from "./pages/development/DevelopmentStudio";
import CreationStudio from "./pages/creation/CreationStudio";
import CommerceStudio from "./pages/commerce/CommerceStudio";
import CollaborationStudio from "./pages/collaboration/CollaborationStudio";
import AccessibilityStudio from "./pages/accessibility/AccessibilityStudio";
import AdministrationStudio from "./pages/administration/AdministrationStudio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/modules/development" element={<DevelopmentStudio />} />
          <Route path="/modules/development/languages" element={<DevelopmentLanguages />} />
          <Route path="/modules/development/devops" element={<DevelopmentDevOps />} />
          <Route path="/modules/development/databases" element={<DevelopmentDatabases />} />
          <Route path="/modules/development/api" element={<DevelopmentAPI />} />
          <Route path="/modules/development/collab" element={<DevelopmentCollab />} />
          <Route path="/modules/creation" element={<CreationStudio />} />
          <Route path="/modules/commerce" element={<CommerceStudio />} />
          <Route path="/modules/collaboration" element={<CollaborationStudio />} />
          <Route path="/modules/accessibility" element={<AccessibilityStudio />} />
          <Route path="/modules/administration" element={<AdministrationStudio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
