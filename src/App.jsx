import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);

  const API_URL =
    "https://newsdata.io/api/1/news?apikey=pub_1125224ebb42af237847c8b35edc028f76cc2&language=en&category=technology";

  const API_TWO =
    "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b14ec70b007e4ca3ad27994c1919398c";

  const firstFetch = fetch(API_URL).then((res) => res.json());

  const secondFetch = fetch(API_TWO).then((res) => res.json());

  /*const allFetchData = Promise.all([firstFetch, secondFetch]);

  allFetchData.then((res) => console.log(res)); */

  useEffect(() => {
    Promise.all([firstFetch, secondFetch]).then((links) => {
      const response1 = links[0];
      const response2 = links[1];

      setData(response1.results);
      setScienceNews(response2.articles);
      console.log(
        "response1:",
        response1.results,
        "response2: ",
        response2.articles
      );
    });
  }, []);

  /*   const getData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results);
      });
  };

  const getTech = () => {
    fetch(API_TWO)
      .then((res) => res.json())
      .then((otherData) => {
        console.log("second api results: ", otherData.articles);
        setOtherData(otherData.articles);
      });
  };

  useEffect(() => {
    getData();
    getTech();
  }, []); */

  return (
    <main>
      <h1 className="title">FETCHING NEWS</h1>
      {data.map((item, i) => (
        <section key={i}>
          <li>{item.title}</li>
          <a href={item.link} target="_blank">
            <button>more about</button>
          </a>
          <button>{item.category}</button>
        </section>
      ))}
      <h1>second data api</h1>
      <section>
        {scienceNews.map((ite, index) => (
          <section key={index}>
            <li>{ite.title}</li>
            <img src={ite.urlToImage} />
            <p>{ite.description}</p>
          </section>
        ))}
      </section>
    </main>
  );
};

export default App;
