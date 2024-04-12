import { useState, useEffect, useRef } from "react";
import axios from 'axios';

const useSearch = (query) => {

  const [state, setState] = useState({
    articles: [],
    status: "Idle",
    error: ''
  });

  const cancelTocken = useRef(null);

  useEffect(() => {

    if(!query || query.length < 3) {
      setState({
        articles: ['Type three or more caracters']
      })
      return
    }

    if(cancelTocken.current) {
      cancelTocken.current.cancel();
    }
    
    cancelTocken.current = axios.CancelToken.source();

    axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`, {
      cancelToken: cancelTocken.current.token
    })
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
      if(axios.isCancel(error)) {
        console.log("Request canceled")
      } else {
        setState({
          articles: [],
          status: "Error",
          error: error
        })
      }
    });
  },[query]);

  return state;
}

export default useSearch;