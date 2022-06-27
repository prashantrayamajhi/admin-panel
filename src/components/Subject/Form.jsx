import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { TextField } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Form = ({ formik, id }) => {
  const [classes, setClasses] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await Axios.get("/admin/classes", config);
        setClasses(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (config) {
      fetchClasses();
    }
  }, [config]);

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="heading">
          <div className="title">
            <h3>{id ? "Update Subject" : "Add A Subject"}</h3>
          </div>
          <Link to="/classes" className="link">
            <CancelOutlined className="icon" />
          </Link>
        </div>
        <div className="form">
          <div className="doubleInputWrapper">
            <TextField
              id="outlined-basic-1"
              label="Subject Name"
              variant="outlined"
              className="input"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <FormControl variant="outlined" className="select">
              <InputLabel id="demo-simple-select-outlined-label">
                Company
              </InputLabel>
              <Select
                id="demo-simple-select-outlined"
                label="Company"
                name="company"
                value={formik.values.company}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              >
                {classes?.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
