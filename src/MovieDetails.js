import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { Initialmovielist } from './Initialmovielist';
import Button from '@mui/material/Button';
import { API } from './global';


export function MovieDetails() {
  const { id } = useParams();
  console.log(id)
  const Navigate = useNavigate();
  // const movie = Initialmovielist[parseInt(movieid)];
  const [movie,setmovie]=useState({})
  useEffect(()=>{
    // fetch(`https://64d0e744ff953154bb79af35.mockapi.io/Movies/${id}`,)
    fetch(`${API}/movies/getmoviebyid/${id}`)
    .then((data)=>data.json())
    .then((Mv)=>{
      console.log(Mv);
      setmovie(Mv);
    })

   },[id])
  console.log(movie);
  const Styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (
    <div>
      <div className='movie-container'>
         <iframe width="1226" height="480" src={movie.trailer}
          title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

        </iframe>

        {/* <img className='movie-poster' src={movie.Poster} alt={movie.name}/> */}
        <div className='Movie-detail-container'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={Styles} className='movie-rating'>🌟{movie.rating}</p>
        </div>
        {/* <h1>{movie.name}</h1> */}
        <p className='movie-summary'>{movie.summary}</p>
        <Button onClick={() => Navigate(-1)} contained="variant">Back</Button>
      </div>
    </div>
       
  );
}
