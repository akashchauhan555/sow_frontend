import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "@components/layout/MainLayout";
import Loader from "@components/Common/Loader/Loader";

// Lazy-loaded pages for code splitting — improves initial load performance.
const Home = lazy(() => import("@pages/Home/Home"));
const About = lazy(() => import("@pages/About/About"));
const Projects = lazy(() => import("@pages/Projects/Projects"));
const ProjectDetails = lazy(() => import("@pages/Projects/ProjectDetails/ProjectDetails"));
const Services = lazy(() => import("@pages/Services/Services"));
const ServiceDetails = lazy(() => import("@pages/Services/ServiceDetails/ServiceDetails"));
const Packages = lazy(() => import("@pages/Packages/Packages"));
const Gallery = lazy(() => import("@pages/Gallery/Gallery"));
const FloorPlans = lazy(() => import("@pages/FloorPlans/FloorPlans"));
const Commercial = lazy(() => import("@pages/Commercial/Commercial"));
const Interior = lazy(() => import("@pages/Interior/Interior"));
const Architecture = lazy(() => import("@pages/Architecture/Architecture"));
const Renovation = lazy(() => import("@pages/Renovation/Renovation"));
const CostEstimator = lazy(() => import("@pages/CostEstimator/CostEstimator"));
const Blogs = lazy(() => import("@pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("@pages/Blogs/BlogDetails/BlogDetails"));
const Careers = lazy(() => import("@pages/Careers/Careers"));
const Contact = lazy(() => import("@pages/Contact/Contact"));
const BookConsultation = lazy(() => import("@pages/BookConsultation/BookConsultation"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));

// Central route configuration for the entire Story Of Walls frontend.
export default function AppRoutes() {
  const location = useLocation();

  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/renovation" element={<Renovation />} />
            <Route path="/cost-estimator" element={<CostEstimator />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </MainLayout>
  );
}
