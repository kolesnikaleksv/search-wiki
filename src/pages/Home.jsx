import Navigation from "../components/Navigation";
import SearchBox from "../components/SearchBox"
import './home.scss';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <SearchBox />
        Home page
      </div>
    </div>
  )
}

export default Home;