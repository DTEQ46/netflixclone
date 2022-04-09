import "./App.css";
import requests from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
//c843d9a59b016224e42bd979e5324e0d
//https://api.themoviedb.org/3/movie/550?api_key=c843d9a59b016224e42bd979e5324e0d
//https://clone-6fd92.web.app/

function App() {
  return (
    <div className="app">
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNextflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now " fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
