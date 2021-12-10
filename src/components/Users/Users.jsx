import { useState, useEffect } from "react";
import Axios from "./../../api/server";
import configuration from "./../../helper/config";
import { Link } from "react-router-dom";
import "./../../css/Wrapper.scss";
import { AddCircle } from "@mui/icons-material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [config, setConfig] = useState(null);
  let sn = 0;

  useEffect(() => {
    setConfig(configuration);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await Axios.get("/api/v1/admin/users", config);
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [config]);

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <Link to="/users/create" className="icon-wrapper">
            <AddCircle className="add-icon" />
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{sn}</td>
                  <td>
                    <p>{user.name}</p>
                  </td>
                  <td>{user.email}</td>
                  <td className="actions">
                    <p>Edit | Delete</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
