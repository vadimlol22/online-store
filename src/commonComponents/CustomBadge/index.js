import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
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

export default CustomBagde;
