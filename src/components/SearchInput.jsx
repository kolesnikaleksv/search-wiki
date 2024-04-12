import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

export default function SearchInput() {
  const [value, setValue] = useState(null);
  const {articles} = useSearch(value);
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={articles}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      sx={{ width: 300, my: "20px"}}
      onInputChange={(event, newInputValue) => {
        setValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Wikipedia" />}
    />
  );
}