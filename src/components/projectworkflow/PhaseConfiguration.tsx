import React from 'react';
import { Phase } from '../../types/phase';

interface PhaseConfigurationProps {
  phase: Phase;
  onUpdate: (updatedPhase: Phase) => void;
}

export const PhaseConfiguration: React.FC<PhaseConfigurationProps> = ({ phase, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...phase, name: e.target.value });
  };

  return (
    <div className="phase-configuration">
      <label className="block text-sm font-medium">Phase Name</label>
      <input
        type="text"
        value={phase.name}
        onChange={handleChange}
        className="mt-1 block w-full border rounded-md p-2"
      />
    </div>
  );
};
