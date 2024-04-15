import Navigation from "../components/Navigation";
import SearchInput from "../components/SearchInput";
import './home.scss';
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <SearchInput />
        Home page
      </div>
    </div>
  )
}

export default Home;