import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick, color, disabled }) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      variant="contained"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CustomButton;
