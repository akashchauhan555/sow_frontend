import { type ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ConsultationModal from "@components/Sections/Estimator/ConsultationModal";

interface MainLayoutProps {
  children: ReactNode;
}

// Wraps every page with the shared Navbar + Footer + global consultation modal.
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ConsultationModal />
    </div>
  );
}
