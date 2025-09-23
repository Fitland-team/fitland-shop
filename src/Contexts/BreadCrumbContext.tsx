import React, { createContext, useContext, useState } from "react";

type BreadcrumbContextType = {
  items: string[];
  setRest: (values: string[]) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const setRest = (values: string[]) => {
    setItems(() => [...values]);  
  };

  return (
    <BreadcrumbContext.Provider value={{ items, setRest }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const ctx = useContext(BreadcrumbContext);
  if (!ctx) throw new Error("useBreadcrumb must be used within BreadcrumbProvider");
  return ctx;
};
