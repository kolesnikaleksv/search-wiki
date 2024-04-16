import SearchInput from "./searchInput/SearchInput"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import useSearch from "../hooks/useSearch"
import useDebounce from "../hooks/useDebounce"

const SearchBox = () => {
  const [value, setValue] = useState(null);
  const {articles} = useSearch(useDebounce(value));
  
  return (
    <div className='search box' style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
      <SearchInput articles={articles} setValue={setValue} />
      <Button style={{height: "40px", marginLeft: "20px"}} variant="contained">
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/search?query=${value}`}>See all results</Link>
      </Button> 
    </div>
  )
}

export default SearchBox;