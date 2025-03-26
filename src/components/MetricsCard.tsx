
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MotionContainer } from "./MotionContainer";

interface MetricsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  change?: {
    value: number;
    type: "increase" | "decrease" | "neutral";
  };
  className?: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  description,
  icon,
  change,
  className,
}) => {
  return (
    <MotionContainer>
      <div className={cn("metrics-card relative overflow-hidden", className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 border-b border-white/10">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon && <div className="text-primary">{icon}</div>}
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-2xl font-bold text-white">{value}</div>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
          {change && (
            <div
              className={cn("mt-3 text-xs font-medium flex items-center", {
                "text-emerald-400": change.type === "increase",
                "text-rose-400": change.type === "decrease",
                "text-slate-400": change.type === "neutral",
              })}
            >
              {change.type === "increase" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {change.type === "decrease" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {change.type === "neutral" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span>{Math.abs(change.value)}%</span>
            </div>
          )}
        </CardContent>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </MotionContainer>
  );
};
