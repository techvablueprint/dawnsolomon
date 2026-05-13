import React, { useState, ReactNode } from "react";
import { ChevronUp, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FolderRevealProps {
  label: string;
  count: number;
  previews?: string[]; // image URLs to show peeking out
  children: ReactNode;
}

export function FolderReveal({ label, count, previews = [], children }: FolderRevealProps) {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="animate-fade-in">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary hover:bg-primary/20 transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
            Close folder
          </button>
        </div>
        {children}
      </div>
    );
  }

  const peekItems = previews.slice(0, 3);
  const rotations = ["-rotate-[10deg]", "rotate-[2deg]", "rotate-[10deg]"];
  const offsets = ["-translate-x-20", "translate-x-0 -translate-y-3 z-10", "translate-x-20"];

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setOpen(true)}
        className="group relative outline-none"
        aria-label={`Open ${label} folder`}
      >
        {/* Peeking cards */}
        <div className="relative h-36 w-80 mb-[-2.5rem] pointer-events-none">
          {peekItems.length > 0
            ? peekItems.map((src, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-2 w-28 h-32 rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-card transition-all duration-500",
                    rotations[i],
                    offsets[i],
                    "group-hover:-translate-y-4"
                  )}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-2 w-28 h-32 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-primary/10 shadow-2xl transition-all duration-500",
                    rotations[i],
                    offsets[i],
                    "group-hover:-translate-y-4"
                  )}
                  style={{ transitionDelay: `${i * 60}ms` }}
                />
              ))}
        </div>

        {/* Folder / envelope */}
        <div className="relative w-80 h-52 transition-transform duration-500 group-hover:-translate-y-1">
          {/* Back panel */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]" />
          {/* Glassy front flap */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-inner overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <FolderOpen className="w-7 h-7 text-primary drop-shadow" />
              <span className="text-base font-semibold text-foreground drop-shadow">{label}</span>
              <span className="text-xs text-muted-foreground">{count} projects inside</span>
            </div>
          </div>
        </div>
      </button>

      <p className="mt-5 text-sm text-muted-foreground animate-pulse">
        Click the folder to view projects
      </p>
    </div>
  );
}
