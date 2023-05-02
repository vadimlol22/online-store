import { useEffect } from "react";

const useScrollTop = (value) => {
  useEffect(() => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  }, [value]);
};

export default useScrollTop;
