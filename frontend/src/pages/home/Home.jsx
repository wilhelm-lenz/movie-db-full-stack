import "./Home.scss";
import Main from "../../components/main/Main";
import MovieList from "../../components/movieList/MovieList";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Main>
        <Hero />
        <MovieList />
      </Main>
    </>
  );
};

export default Home;
