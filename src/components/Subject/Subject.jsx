import { useState, useEffect } from "react";
import Axios from "../../api/server";
import configuration from "../../helper/config";
import { Link } from "react-router-dom";
import "./../../css/Wrapper.scss";
import { AddCircle } from "@mui/icons-material";

const Subject = () => {
  const [classes, setClass] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [config, setConfig] = useState(null);
  let sn = 0;

  useEffect(() => {
    setConfig(configuration);
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await Axios.get("/admin/classes", config);
        setClass(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClasses();
  }, [config]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await Axios.get("/admin/subjects", config);
        setSubjects(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSubjects();
  }, [config]);

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <Link to="/classes/create" className="icon-wrapper">
            <AddCircle className="add-icon" />
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{sn}</td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.class.name}</p>
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

export default Subject;
