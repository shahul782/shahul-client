import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Counter from "./movieproject/Counter";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
export default function Movie({ movie, id, deleteButton, editButton }) {
  const Styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setshow] = useState(true);
  const navigate = useNavigate();

  const summarystyle = {
    display: show ? "block" : "none",
  };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movie.Poster} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}-{id}{" "}
            <IconButton
              color="primary"
              onClick={() => navigate(`/movies/${movie.id}`)}
              aria-label="like"
            >
              <InfoIcon />
            </IconButton>
            <IconButton onClick={() => setshow(!show)} aria-label="like">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>

          <p style={Styles} className="movie-rating">
            🌟{movie.rating}
          </p>
        </div>

        {/* <button onClick={() => setshow(!show)}>togle summary</button> */}
        {/* <button onClick={() => navigate('/movies/' + id)}>info</button> */}

        {/* <p style={summarystyle} className='movie-summary'>{movie.summary}</p> */}
        {/* (OR) */}

        {/* conditional rendaring */}

        {show ? (
          <p style={summarystyle} className="movie-summary">
            {movie.summary}
          </p>
        ) : (
          " "
        )}
      </CardContent>

      <CardActions>
        <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
