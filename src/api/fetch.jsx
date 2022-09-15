const API_URL =
  "https://newsdata.io/api/1/news?apikey=pub_1125224ebb42af237847c8b35edc028f76cc2&language=en&category=technology";

const API_TWO =
  "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b14ec70b007e4ca3ad27994c1919398c";

export const fetchNews = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);
};
