import { useEffect, useState } from "react";

export const useFetchData = () => {
   const [data, setData] = useState([
   ]);

   const fetchData = async () => {
      try {
         const response = await fetch(
            "https://672751df302d03037e709eb0.mockapi.io/api/products")
         const datas = await response.json();
         console.log(datas);
         setData(datas);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return {data}

}