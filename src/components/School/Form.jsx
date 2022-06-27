import { TextField, Button } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Form = ({ formik, id, setDisplayImage }) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="heading">
          <div className="title">
            <h3>{id ? "Update Company" : "Add A Company"}</h3>
          </div>
          <Link to="/companies" className="link">
            <CancelOutlined className="icon" />
          </Link>
        </div>
        <div className="form">
          <div className="doubleInputWrapper">
            <TextField
              id="outlined-basic-1"
              label="Company Name"
              variant="outlined"
              className="input"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <TextField
              id="outlined-basic-2"
              label="Email"
              variant="outlined"
              className="input"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="doubleInputWrapper">
            <TextField
              id="outlined-basic-1"
              label="Address"
              variant="outlined"
              className="input"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <TextField
              id="outlined-basic-2"
              label="Contact Numbers"
              variant="outlined"
              className="input"
              name="contact"
              onChange={formik.handleChange}
              value={formik.values.contacts}
            />
          </div>
          <div>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              name="image"
              onChange={(e) => {
                const img = URL.createObjectURL(e.target.files[0]);
                setDisplayImage(img);
                formik.values.image = e.target.files[0];
              }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
