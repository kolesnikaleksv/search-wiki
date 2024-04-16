import Navigation from "../components/Navigation";
// import SearchInput from "../components/searchInput/SearchInput";
import SearchBox from "../components/SearchBox"
import './home.scss';
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        {/* <SearchInput /> */}
        <SearchBox />
        Home page
      </div>
    </div>
  )
}

export default Home;