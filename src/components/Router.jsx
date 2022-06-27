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
import Users from "./Users/Users";
import CreateUser from "./Users/Create";
import Inbox from "./Inbox/Inbox";
import Settings from "./Settings/Settings";

import Schools from "./School/School";
import CreateSchool from "./School/Create";

import Classes from "./Class/Class";
import CreateClass from "./Class/Create";

import Subject from "./Subject/Subject";
import CreateSubject from "./Subject/Subject";

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

            <Route path="/schools" element={<Schools />} />
            <Route path="/schools/create" element={<CreateSchool />} />
            <Route path="/schools/create/:id" element={<CreateSchool />} />

            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/create" element={<CreateClass />} />
            <Route path="/classes/create/:id" element={<CreateClass />} />

            <Route path="/subjects" element={<Subject />} />
            <Route path="/subjects/create" element={<CreateSubject />} />
            <Route path="/subjects/create/:id" element={<CreateSubject />} />

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
