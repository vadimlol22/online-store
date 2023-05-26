import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";

import basket from "./../../static/images/basket.png";

const CustomBagde = ({ badgeContent }) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={badgeContent} color="secondary">
        <img src={basket} alt="basket" />
      </Badge>
    </IconButton>
  );
};

CustomBagde.propTypes = {
  badgeContent: PropTypes.number.isRequired,
}

export default CustomBagde;
