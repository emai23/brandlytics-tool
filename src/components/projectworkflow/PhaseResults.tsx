import React from 'react';
import { Phase } from '../../types/phase';

interface PhaseResultsProps {
  phase: Phase;
}

export const PhaseResults: React.FC<PhaseResultsProps> = ({ phase }) => {
  return (
    <div className="phase-results">
      <h3 className="text-lg font-bold">Results for {phase.name}</h3>
      <p>Status: {phase.status}</p>
    </div>
  );
};
