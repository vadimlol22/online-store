import Skeleton from "@mui/material/Skeleton";
// import Box from "@mui/material/Box";

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

export default CustomSkeleton;
