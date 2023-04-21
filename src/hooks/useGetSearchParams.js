import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useGetSearchParams = () => {
  const location = useLocation();
  const [categories, setCategories] = useState();
  const [queryText, setQueryText] = useState();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParamValue = searchParams.get("search");
    const categoryParamValue = searchParams.get("category");
    setQueryText(queryParamValue ? queryParamValue : "");
    setCategories(categoryParamValue);
  }, [location.search]);
  return { categories, queryText };
};

export default useGetSearchParams;
