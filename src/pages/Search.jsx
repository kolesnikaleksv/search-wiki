import { Container } from "@mui/material";
import Navigation from "../components/Navigation";
import useSearch from "../hooks/useSearch";
import ListItem from "../components/ListItem/ListItem";

const Search = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get('query');
  const {articles} = useSearch(query, 50)

  return (
    <div>
      <Navigation />
      <Container>
        <p>Search query: {query}</p>
        <ul style={{listStyle: 'none', padding: 0}}>
          <ListItem />
          {/* {
            articles.length ?
            articles.map((article, i) => {
              return (
                <li key={i}><a href={article.url} target="_blank" rel="noreferrer">{article.label}</a></li>
              )
            })
            : <h3>There are no articles for {query}</h3>
          } */}
            {
              articles.length ?
              articles.map((article, i) => {
                return (
                  <ListItem key={i} article={article} />
                  // <li key={i}><a href={article.url} target="_blank" rel="noreferrer">{article.label}</a></li>
                )
              })
              : <h3>There are no articles for {query}</h3>
            }
        </ul>
      </Container>
    </div>
  )
}

export default Search;