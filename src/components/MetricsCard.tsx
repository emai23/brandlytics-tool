
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from './MotionContainer';

export interface MetricsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  isLoading?: boolean;
  change?: {
    value: number;
    type: 'increase' | 'decrease' | 'neutral';
  };
}

const MetricsCard = ({ title, value, description, icon, change, isLoading }: MetricsCardProps) => {
  if (isLoading) {
    return (
      <Card className="glass-card overflow-hidden h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 overflow-hidden">
          <CardTitle className="text-sm font-medium">Loading...</CardTitle>
          <div className="h-4 w-4 rounded-full bg-muted animate-pulse"></div>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="h-4 w-16 rounded-full bg-muted animate-pulse"></div>
          <p className="text-xs text-muted-foreground mt-2">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <MotionContainer>
      <Card className="glass-effect h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 overflow-hidden">
          <CardTitle className="text-sm font-medium truncate max-w-[70%]">{title}</CardTitle>
          <div className="h-8 w-8 text-primary bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="text-2xl font-bold truncate">{value}</div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>
          {change && (
            <div className={`flex items-center mt-3 text-xs font-medium ${
              change.type === 'increase' ? 'text-green-500 dark:text-green-400' : 
              change.type === 'decrease' ? 'text-red-500 dark:text-red-400' : 
              'text-muted-foreground'
            }`}>
              {change.type === 'increase' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 flex-shrink-0">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              ) : change.type === 'decrease' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 flex-shrink-0">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 flex-shrink-0">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              )}
              <span>{change.value}%</span>
            </div>
          )}
        </CardContent>
      </Card>
    </MotionContainer>
  );
};

export default MetricsCard;
