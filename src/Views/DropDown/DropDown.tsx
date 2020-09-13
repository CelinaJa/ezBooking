import React, { ChangeEvent } from 'react';

interface Option {
  id: string;
  name: string;
}

interface DropDownProps {
  options: Option[];
  setSelected: (event: ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
}

export const DropDown: React.FC<DropDownProps> = ({
  options,
  setSelected,
  selected,
}) => {
  return (
    <select value={selected} onChange={setSelected}>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
