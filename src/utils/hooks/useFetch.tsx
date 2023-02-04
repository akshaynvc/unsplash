import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../redux/action";
import { InitialValuesType } from "../../redux/model";

const useFetch = (query: string) => {
  const splashData = useSelector(
    (state: InitialValuesType) => state.splashData
  );
  const isLoading = useSelector((state: InitialValuesType) => state.isLoading);

  const apiID = "KaDwZLT0PbsSrycs-b9GGySrmCfGvF0ThAMFvzFKY8g";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (searchQuery: string) => {
      let result = await axios.get(
        `https://api.unsplash.com/photos/random?count=30&client_id=${apiID}&query=${
          searchQuery || "potrait"
        }`
      );
      dispatch(setData(result.data));
    };
    fetchData(query);
  }, [dispatch, query]);

  return { isLoading, splashData };
};

export default useFetch;
