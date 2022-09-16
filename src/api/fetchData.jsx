import { useState, useEffect } from "react";

export const fetchingData = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const API_URL =
    "https://newsdata.io/api/1/news?apikey=pub_11252fb597be1a6b04b471da47e0999adb015&language=en&category=world,technology";

  const API_TWO =
    "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b14ec70b007e4ca3ad27994c1919398c";

  const firstFetch = fetch(API_URL).then((res) => res.json());

  const secondFetch = fetch(API_TWO).then((res) => res.json());

  useEffect(() => {
    Promise.all([firstFetch, secondFetch]).then((links) => {
      const response1 = links[0];
      const response2 = links[1];

      setData1(response1.results);
      setData2(response2.articles);
      //console.log(response1, response2);
    });
  }, []);

  return { data1, data2 };
};
