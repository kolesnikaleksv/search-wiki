import { Container } from "@mui/material";
import Navigation from "../../components/Navigation";
import useSearch from "../../hooks/useSearch";
import ListItem from "../../components/ListItem/ListItem";

const Search = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get('query');
  const {articles} = useSearch(query, 50);
  
  return (
    <div>
      <Navigation />
      <Container>
        <p>Search query: {query}</p>
        <ul style={{listStyle: 'none', padding: 0, width: 'fit-content'}}>
          {
            articles.length ? 
            articles.map((article, i) => {
              if(!article.label) {
                return (
                  <div>
                    You didn't do the query. Go to the homePage and write what you are finding.
                    <a href="/">Go to the Home page</a>
                  </div>
                )
              } else {
                return (
                  <ListItem key={i} article={article} />
                )
              }             
            })
            : <h3>There are no articles for: {query}</h3>
          }
        </ul>
      </Container>
    </div>
  )
}

export default Search;