import { Link } from "react-router-dom";
import {
  LocalCarWash,
  Map,
  BrandingWatermark,
  Inbox,
} from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="card-wrapper">
        <Link to="/" className="card first">
          <div className="text-wrapper">
            <h1>3</h1>
            <p>Item 1</p>
          </div>
          <Inbox className="icon" />
        </Link>
        <Link to="/" className="card">
          <div className="text-wrapper">
            <h1>10</h1>
            <p>Item 2</p>
          </div>
          <BrandingWatermark className="icon" />
        </Link>
        <Link to="/" className="card">
          <div className="text-wrapper">
            <h1>120</h1>
            <p>Item 3</p>
          </div>
          <LocalCarWash className="icon" />
        </Link>
        <Link to="/" className="card">
          <div className="text-wrapper">
            <h1>120</h1>
            <p>Item 4</p>
          </div>
          <Map className="icon" />
        </Link>
      </div>
    </>
  );
};

export default Home;
