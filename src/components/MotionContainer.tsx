
import React from "react";
import { cn } from "@/lib/utils";

interface MotionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  animation?: "fade-in" | "scale-in" | "slide-up";
}

export const MotionContainer = ({
  children,
  delay = 0,
  animation = "fade-in",
  className,
  ...props
}: MotionContainerProps) => {
  const animationClass = `animate-${animation}`;
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};
  
  return (
    <div
      className={cn(animationClass, className)}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
};
