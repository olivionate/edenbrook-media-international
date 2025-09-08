import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PRMarketingConsultancy from "./pages/services/PRMarketingConsultancy";
import CreativeDesignBranding from "./pages/services/CreativeDesignBranding";
import EventManagementPlanning from "./pages/services/EventManagementPlanning";
import PublishingPrinting from "./pages/services/PublishingPrinting";
import WebDesignDevelopment from "./pages/services/WebDesignDevelopment";
import BusinessStrategicPlans from "./pages/services/BusinessStrategicPlans";
import MultimediaProduction from "./pages/services/MultimediaProduction";
import CapacityBuildingTraining from "./pages/services/CapacityBuildingTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/pr-marketing-consultancy" element={<PRMarketingConsultancy />} />
          <Route path="/services/creative-design-branding" element={<CreativeDesignBranding />} />
          <Route path="/services/event-management-planning" element={<EventManagementPlanning />} />
          <Route path="/services/publishing-printing" element={<PublishingPrinting />} />
          <Route path="/services/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/services/business-strategic-plans" element={<BusinessStrategicPlans />} />
          <Route path="/services/multimedia-production" element={<MultimediaProduction />} />
          <Route path="/services/capacity-building-training" element={<CapacityBuildingTraining />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
