import axios from "axios";
import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../redux/action";
import { InitialValuesType } from "../../redux/model";

const useFetch = (query:string) => {
  const splashData = useSelector(
    (state: InitialValuesType) => state.splashData
  );
  const isLoading = useSelector((state: InitialValuesType) => state.isLoading);

  const apiID = "nVnREBSsRk_QvXRz_Fvi1y-DQzJFIwS3V3iikFiXPMc";

  const dispatch = useDispatch();

  const fetchData = async (searchQuery: string) => {
    let result = await axios.get(
      `https://api.unsplash.com/photos/random?count=30&client_id=${apiID}&query=${
        searchQuery || "potrait"
      }`
    );
    dispatch(setData(result.data));
  };
  useEffect(() => {
    fetchData(query);
  }, [query]);

  return { isLoading, splashData };
};

export default useFetch;
