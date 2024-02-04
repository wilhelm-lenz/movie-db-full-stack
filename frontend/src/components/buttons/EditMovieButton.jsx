/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./EditMovieButton.scss";
import { MovieContext } from "../../contextes/MovieContext";

const EditMovieButton = ({ btnText }) => {
  const { isOpenForm, setIsOpenForm } = useContext(MovieContext);

  const handleFormOpenClose = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <button className="btn-edit-movie" onClick={handleFormOpenClose}>
      {btnText}
    </button>
  );
};

export default EditMovieButton;
