import React from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { Button } from "@/components/ui/button";
import { Pencil, Save, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function EditModeToggle() {
  const { isEditMode, setEditMode, saveChanges, resetToDefault, hasUnsavedChanges } =
    usePortfolio();

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2",
        "transition-all duration-300"
      )}
    >
      {isEditMode && (
        <>
          <Button
            variant="outline"
            size="sm"
            onClick={resetToDefault}
            className="bg-card shadow-lg border-border hover:bg-destructive hover:text-destructive-foreground"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={saveChanges}
            disabled={!hasUnsavedChanges}
            className="bg-card shadow-lg border-border hover:bg-secondary hover:text-secondary-foreground"
          >
            <Save className="w-4 h-4 mr-1" />
            Save
          </Button>
        </>
      )}
      <Button
        onClick={() => setEditMode(!isEditMode)}
        className={cn(
          "shadow-lg transition-all duration-300",
          isEditMode
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        size="lg"
      >
        {isEditMode ? (
          <>
            <X className="w-5 h-5 mr-2" />
            Exit Edit
          </>
        ) : (
          <>
            <Pencil className="w-5 h-5 mr-2" />
            Edit Portfolio
          </>
        )}
      </Button>
    </div>
  );
}
