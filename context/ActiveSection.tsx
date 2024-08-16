"use client";

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";


type ActiveSectionProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClick:number;
  setLastClick:React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionProvider({ children }: ActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastClick, setLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClick,
        setLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if(context === null){
        throw new Error(
            "useCOntext sect must be used within activeSectionProvider"
        );
    }
    return context;
}