import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import './navigation.scss';

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li>
          <Button variant="contained" size="small">
            <Link to="/">Home</Link>
          </Button>
          </li>
          <li>
          <Button variant="contained" size="small">
            <Link to="/about">About</Link>
          </Button>
          </li>
          <li>
          <Button variant="contained" size="small">
            <Link to="/contact">Contact</Link>
          </Button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;