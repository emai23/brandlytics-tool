import React from 'react';
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h2 className="text-xl font-medium">Loading...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we load your content</p>
      </div>
    </div>
  );
};

export default Loading;