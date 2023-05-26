import Skeleton from "@mui/material/Skeleton";

import PropTypes from "prop-types";

const CustomSkeleton = ({ width, height }) => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      width={width}
      height={height}
      sx={{
        margin: "155px auto",
        bgcolor: "rgb(214 108 192)",
        border: "2px solid black",
        borderRadius: "15px",
      }}
    />
  );
};

CustomSkeleton.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default CustomSkeleton;
