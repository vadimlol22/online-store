import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialPage) => {
  const [params, setParams] = useSearchParams({ page: initialPage, limit: 20 });

  const page = +Object.fromEntries(params.entries()).page;

  useEffect(() => {
    setParams({ page, limit: 12 });
  }, [page, setParams]);

  const handlePageChange = (_, page) => {
    setParams({ page, limit: 12 });
  };

  return [page, handlePageChange];
};

export default usePagination;
