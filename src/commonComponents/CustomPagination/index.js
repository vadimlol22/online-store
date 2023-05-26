import * as React from "react";
import Pagination from "@mui/material/Pagination";

import PropTypes from "prop-types";

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

CustomPagination.propTypes = {
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
