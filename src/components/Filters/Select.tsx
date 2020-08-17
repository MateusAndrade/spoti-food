import React, { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { SelectProps } from './interface';
import { Value } from '../../services/filters/interface';

const SelectFilter = <T extends Value>({
  label,
  onChange,
  items,
}: SelectProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    if (selectedValue) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  const handleChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    setSelectedValue(e.target.value as string);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        fullWidth
        value={selectedValue}
        onChange={handleChange}
        label={label}>
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
