import React, { useState, useRef, useEffect } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  multiline?: boolean;
  placeholder?: string;
}

export function EditableText({
  value,
  onChange,
  as: Component = "span",
  className,
  multiline = false,
  placeholder = "Click to edit...",
}: EditableTextProps) {
  const { isEditMode } = usePortfolio();
  const [localValue, setLocalValue] = useState(value);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    if (localValue !== value) {
      onChange(localValue);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    setLocalValue(e.currentTarget.textContent || "");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
      elementRef.current?.blur();
    }
    if (e.key === "Escape") {
      setLocalValue(value);
      elementRef.current?.blur();
    }
  };

  if (!isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  return (
    <Component
      ref={elementRef as any}
      className={cn(
        className,
        "editable-field",
        "outline-none cursor-text",
        "hover:bg-primary/5 focus:bg-primary/10",
        "rounded px-1 -mx-1",
        "transition-colors duration-200"
      )}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      data-placeholder={placeholder}
    >
      {localValue}
    </Component>
  );
}
