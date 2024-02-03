import AddMovieForm from "../../components/addMovieForm/AddMovieForm";
import Main from "../../components/main/Main";
import "./CreateMovie.scss";
import Hero from "../../components/hero/Hero";

const CreateMovie = () => {
  return (
    <>
      <Main>
        <Hero />
        <AddMovieForm />
      </Main>
    </>
  );
};

export default CreateMovie;
