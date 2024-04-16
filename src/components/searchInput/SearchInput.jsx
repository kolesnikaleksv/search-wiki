import { Autocomplete, TextField } from '@mui/material';

export default function SearchInput({articles, setValue}) {
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