import { Autocomplete, Button, TextField } from '@mui/material';
import { useState } from 'react';
import useSearch from '../hooks/useSearch';
import useDebounce from '../hooks/useDebounce';
import { Link } from 'react-router-dom';

export default function SearchInput() {
  const [value, setValue] = useState(null);
  const {articles} = useSearch(useDebounce(value));

  return (
    <div className='search box' style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={articles}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        sx={{ width: 300, my: "20px"}}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        //                       renderOption add wiki-link to each option item
        // renderOption={(props, option) => (
        //   <li {...props}>
        //     <a href={option.url} target="_blank" rel="noopener noreferrer">
        //      { option.label ? option.label : 'Type three or more caracters' }
        //     </a>
        //   </li>
        // )}
        renderInput={(params) => <TextField {...params} label="Wikipedia" />}
      />
      <Button style={{height: "40px", marginLeft: "20px"}} variant="contained">
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/search?query=${value}`}>See all results</Link>
      </Button>
    </div>
  );
}