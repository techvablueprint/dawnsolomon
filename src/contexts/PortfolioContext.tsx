import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  PortfolioData,
  getPortfolioData,
  savePortfolioData,
  resetPortfolioData,
  defaultPortfolioData,
} from "@/lib/portfolio-data";
import { toast } from "sonner";

interface PortfolioContextType {
  data: PortfolioData;
  isEditMode: boolean;
  setEditMode: (value: boolean) => void;
  updateData: (newData: Partial<PortfolioData>) => void;
  updateField: <K extends keyof PortfolioData>(
    section: K,
    field: keyof PortfolioData[K],
    value: any
  ) => void;
  saveChanges: () => void;
  resetToDefault: () => void;
  hasUnsavedChanges: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(defaultPortfolioData);
  const [isEditMode, setEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [originalData, setOriginalData] = useState<PortfolioData>(defaultPortfolioData);

  useEffect(() => {
    const storedData = getPortfolioData();
    setData(storedData);
    setOriginalData(storedData);
  }, []);

  const updateData = (newData: Partial<PortfolioData>) => {
    setData((prev) => ({ ...prev, ...newData }));
    setHasUnsavedChanges(true);
  };

  const updateField = <K extends keyof PortfolioData>(
    section: K,
    field: keyof PortfolioData[K],
    value: any
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
    setHasUnsavedChanges(true);
  };

  const saveChanges = () => {
    savePortfolioData(data);
    setOriginalData(data);
    setHasUnsavedChanges(false);
    toast.success("Portfolio saved successfully!");
  };

  const resetToDefault = () => {
    resetPortfolioData();
    setData(defaultPortfolioData);
    setOriginalData(defaultPortfolioData);
    setHasUnsavedChanges(false);
    toast.success("Portfolio reset to default!");
  };

  const handleSetEditMode = (value: boolean) => {
    if (!value && hasUnsavedChanges) {
      // Auto-save when exiting edit mode
      saveChanges();
    }
    setEditMode(value);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isEditMode,
        setEditMode: handleSetEditMode,
        updateData,
        updateField,
        saveChanges,
        resetToDefault,
        hasUnsavedChanges,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
