import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddMovie1({ movieList, setMovieList }) {
  const formValidationSchema = yup.object({
    name: yup.string().required("Why not fill this name?"),
    Poster: yup.string().required("Why not fill this poster?"),
    rating: yup.number().required("Why not fill this rating?").min(0).max(10),
    summary: yup.string().required("Why not fill this summary?").min(20),
    trailer: yup.string().required("Why not fill this trailer?").min(4),
  });
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        Poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addmovie(values);
      },
    });
  const addmovie = (Newmovie) => {
    console.log("form values", Newmovie);

    // Create a clean copy of the Newmovie object, excluding React-specific elements
    const cleanMovie = {
      name: Newmovie.name,
      Poster: Newmovie.Poster,
      rating: Newmovie.rating,
      summary: Newmovie.summary,
      trailer: Newmovie.trailer,
    };

    console.log("cleaned form values", cleanMovie);

    // Convert the cleanMovie object to JSON and send the API request
    fetch(`${API}/movies/createmovieone`, {
      method: "POST",
      body: JSON.stringify(cleanMovie),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then(() => navigate("/movies"))
      .catch((error) => console.error("Error adding movie:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name : ""}
      />

      <TextField
        name="Poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.Poster}
        label="Poster"
        variant="outlined"
        error={errors.Poster && touched.Poster}
        helperText={errors.Poster && touched.Poster ? errors.Poster : ""}
      />

      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        label="rating"
        variant="outlined"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating ? errors.rating : ""}
      />

      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        label="summary"
        variant="outlined"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary ? errors.summary : ""}
      />

      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="trailer"
        variant="outlined"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer ? errors.trailer : ""}
      />

      <Button variant="contained" type="submit">
        Add Movie
      </Button>
    </form>
  );
}
