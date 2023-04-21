import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { courseSearch } from "../../features/courses/courseSlice";

export const SearchInput = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [queryText, setQueryText] = useState(
    location.search.replace("?search=", "")
  );
  const navigate = useNavigate();
  useEffect(() => {
    const param = new URLSearchParams({
      search: queryText,
    });
    if (queryText) {
      dispatch(courseSearch(queryText));
      navigate(`/courses?${param}`);
    }
  }, [navigate, queryText, dispatch]);
  return (
    <>
      <input
        type="text"
        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Search"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
    </>
  );
};
