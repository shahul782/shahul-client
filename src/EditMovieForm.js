import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import yup from 'yup'

import { API } from './global';


// const formvalidationschema=yup.object({
//   name :yup.string().required("why not fill this name?"),
//   Poster: yup.string().required("why not fill this poster?"),
//   rating:yup.number().required("why not fill this rating?").min(0).max(10),
//   summary:yup.string().required("why not fill this summary?").min(20),
//   trailer:yup.string().required("why not fill this trailer?").min(4),

// })

function EditMovieForm() {
const {id} = useParams();
console.log(id);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [Poster, setposter] = useState();
  const [rating, setrating] = useState();
  const [summary, setsummary] = useState();
  const [trailer, settrailer] = useState();
  const [editMovie, setEditMovie] = useState();
  console.log(editMovie);
  const getEditMovieDetail = ()=>{
    // fetch(`https://64d0e744ff953154bb79af35.mockapi.io/Movies/${id}`,
    fetch(`${API}/movies/getmoviebyid/${id}`,

    { method:"GET"}).then((res)=>res.json())
    .then((detail)=>{console.log(detail)
     setEditMovie(detail)
    })
  }
useEffect(()=>getEditMovieDetail(),[id])
  const addmovie = () => {
    const Newmovie = {
      name,
      Poster,
      rating,
      summary,
      trailer
    };
    console.log(Newmovie);
    // //  setMovieList([...movieList,Newmovie])
    // fetch(`https://64d0e744ff953154bb79af35.mockapi.io/Movies/${id}`, {
      fetch(`${API}/movies/edit/${id}`, {
      method: "PUT", body: JSON.stringify(Newmovie),
      headers: {
        'Content-type': 'Application/json'
      },
    })
      .then((e) => {
        navigate('/movies')
        console.log(e)});

  };
  return (
    <div>
      <div>{JSON.stringify(editMovie)}</div>


      {editMovie?
       <div className='add-movie-form'>

       <TextField  InputLabelProps={{
           shrink: true,
         }}
        onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" defaultValue={editMovie.name} />
       <TextField  InputLabelProps={{
           shrink: true,
         }}
       onChange={(event) => setposter(event.target.value)} label="Poster" variant="outlined" defaultValue={editMovie.Poster} />
       <TextField  InputLabelProps={{
           shrink: true,
         }}
       onChange={(event) => setrating(event.target.value)} label="rating" variant="outlined" defaultValue={editMovie.rating} />
       <TextField  InputLabelProps={{
           shrink: true,
         }}
        onChange={(event) => setsummary(event.target.value)} label="summary" variant="outlined" defaultValue={editMovie.summary} />
       <TextField  InputLabelProps={{
           shrink: true,
         }}
       onChange={(event) => settrailer(event.target.value)} label="trailer" variant="outlined" defaultValue={editMovie.trailer} />
       <Button color="success" variant="contained" onClick={addmovie}>Save</Button>

     </div> :<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    }
   

    </div>
  );
}

export default EditMovieForm;