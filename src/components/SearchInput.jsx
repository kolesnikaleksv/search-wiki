import { Autocomplete, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchInput() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!value) {
      return
    } else {
      axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
      .then(function (response) {
        const parsedResponce = [];
        for(let i=0; i < response.data[1].length; i++) {
          parsedResponce.push({
            label: response.data[1][i],
            url: response.data[3][i]
          })
        }
        setData(parsedResponce)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
    });
    }

  },[value]);
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      sx={{ width: 300, my: "20px"}}
      onInputChange={(event, newInputValue) => {
        setValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Wikipedia" />}
    />
  );
}