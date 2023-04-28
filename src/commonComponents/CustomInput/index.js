import TextField from "@mui/material/TextField";

import PropTypes from "prop-types";

const CustomInput = ({ type, name, value, onChange, label }) => {
  return (
    <TextField
      color="secondary"
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
