import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonBase, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

// import { Button } from '@mui/material';
function MovieList() {
  const [movieList, setMovieList] = useState([]);
  // const {id} = useParams();
  const getmovies = () => {
    fetch(`${API}/movies/getallmovie`, {
      // fetch('http://localhost:8080/movies/getallmovielist/',{
        
      method: "GET",
    })
      .then((data) => data.json())
      .then((Mv) => {setMovieList(Mv)
      console.log(Mv)});
  };

  //  const Movielist=Initialmovielist;
  useEffect(() => getmovies(), []);

  const deletemovie = (id) => {
    console.log("deleting the movie:", id);

    fetch(`${API}/${id}`,
     { method: "DELETE" }).then((data) =>data.json())
     .then((res)=>console.log(res))
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv._id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton style={{marginLeft:"auto"}} color="error" onClick={() => navigate(`/movies/delete/${mv.id}`)} aria-label="delete">
          <DeleteIcon />
           </IconButton>
            }
            editButton={
              // <ButtonBase >
          
                <IconButton   color="secondary" onClick={() => navigate(`/movies/edit/${mv.id}`)} aria-label="edit">
                < EditIcon />
              </IconButton>
            

            }
          />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
