import { TextField } from "@mui/material";

const Form = ({ title, setTitle }) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="heading">
          <div className="title">
            <h3>Settings</h3>
          </div>
        </div>
        <div className="form">
          <div className="doubleInputWrapper">
            <TextField
              id="outlined-basic-1"
              label="Title"
              variant="outlined"
              className="input"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic-2"
              label="Title 2"
              variant="outlined"
              className="input"
              name="width"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
