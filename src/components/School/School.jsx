import { useState, useEffect } from "react";
import Axios from "./../../api/server";
import configuration from "./../../helper/config";
import { Link } from "react-router-dom";
import "./../../css/Wrapper.scss";
import { AddCircle } from "@mui/icons-material";

const School = () => {
  const [schools, setSchools] = useState([]);
  const [config, setConfig] = useState(null);
  let sn = 0;

  useEffect(() => {
    setConfig(configuration);
  }, []);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const res = await Axios.get("/admin/schools", config);
        setSchools(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSchool();
  }, [config]);

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <Link to="/schools/create" className="icon-wrapper">
            <AddCircle className="add-icon" />
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => {
              return (
                <tr key={index}>
                  <td>{sn}</td>
                  <td>
                    <p>{school.name}</p>
                  </td>
                  <td>
                    <img src={school.image} alt="" />
                  </td>
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

export default School;
