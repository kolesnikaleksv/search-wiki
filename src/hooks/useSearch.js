import { useState, useEffect } from "react";
import axios from 'axios';

export const useSearch = (query) => {
  const [state, setState] = useState({
    articles: [],
    status: "Idle",
    error: ''
  });

  useEffect(() => {
    if(!query) {
      return
    } else {
      axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`)
      .then(function (response) {
        const parsedResponce = [];
        for(let i=0; i < response.data[1].length; i++) {
          parsedResponce.push({
            label: response.data[1][i],
            url: response.data[3][i]
          })
        }
        setState({
          articles: parsedResponce,
          status: "Success",
          error: ''
        })
      })
      .catch(function (error) {
        setState({
          articles: [],
          status: "Error",
          error: error
        })
      })
      .finally(function () {
        // always executed
    });
    }
  },[query]);

  return state;
}