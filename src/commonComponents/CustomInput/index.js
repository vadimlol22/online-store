import TextField from "@mui/material/TextField";

import PropTypes from "prop-types";

const CustomInput = ({
  type,
  name,
  value,
  onChange,
  label,
  color,
  variant,
  id,
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      color={color}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CustomInput;
