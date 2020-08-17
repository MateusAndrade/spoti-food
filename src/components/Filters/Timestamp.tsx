import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { CommonProps } from './interface';

const Timestamp = ({ label, onChange }: CommonProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      onChange(selectedDate);
    }
  }, [selectedDate]);

  const handleChange = (e: any) => {
    setSelectedDate(e.target.value);
  };

  return (
    <TextField
      label={label}
      type="datetime-local"
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default Timestamp;
