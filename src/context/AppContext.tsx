import { createContext, useContext, useState, type ReactNode } from "react";
import { SITE } from "@/constants/site";

interface AppContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  isConsultationOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState(SITE.city);
  const [isConsultationOpen, setConsultationOpen] = useState(false);

  const value: AppContextType = {
    selectedCity,
    setSelectedCity,
    isConsultationOpen,
    openConsultation: () => setConsultationOpen(true),
    closeConsultation: () => setConsultationOpen(false),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
