import { useEffect, useState } from "react";
import { restaurantsApi } from "../api";

const bl_latitude = "12.113245";
const tr_latitude = "12.346705";
const bl_longitude = "109.095887";
const tr_longitude = "109.262909";
const limit = "10";
const currency = "USD";
const lang = "en_US";

export const useGetRestaurants = (index) => {
  const [dataMain, setDataMain] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPlacesDate = async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await restaurantsApi.get(
        `${index}/list-in-boundary?bl_latitude=${bl_latitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&tr_longitude=${tr_longitude}&limit=${limit}&currency=${currency}&lunit=km&lang=${lang}`
      );

      setDataMain(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return null;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPlacesDate();
  }, [index]);

  return { dataMain, isLoading };
};
