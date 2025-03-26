
import React from 'react';
import { Loader2 } from "lucide-react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3 glass-panel px-8 py-6 animate-pulse-glow">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <h2 className="text-xl font-medium text-gradient">Loading...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we load your content</p>
      </div>
    </div>
  );
};

export default Loading;
