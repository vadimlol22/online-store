import * as React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ page, handlePageChange }) => {
  return (
    <Pagination
      page={page}
      onChange={handlePageChange}
      count={50}
      variant="outlined"
      shape="rounded"
      color="secondary"
      size="large"
    />
  );
};

export default CustomPagination;
