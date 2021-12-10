import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./../css/Home.scss";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";

import Home from "./Home/Home";
import Post from "./Posts/Posts";
import CreatePost from "./Posts/Create";
import Users from "./Users/Users";
import CreateUser from "./Users/Create";
import Inbox from "./Inbox/Inbox";
import Settings from "./Settings/Settings";

const RouterComponent = () => {
  const DefaultContainer = () => {
    return (
      <div className="home-wrapper">
        <Navbar />
        <div className="home">
          <Outlet />
        </div>
      </div>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DefaultContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/create/:id" element={<CreatePost />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/create/:id" element={<CreateUser />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
