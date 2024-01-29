import './App.css';
import Counter from './movieproject/Counter';
import Addcolor from './component/Addcolor';
 import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
 import { Initialmovielist } from './Initialmovielist';
 import { Notfound } from './Notfound';
 import { MovieDetails } from './MovieDetails';
 import { Home } from './Home';
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import {  AddMovie1 } from './AddMovie1';
import Brightness7Icon from '@mui/icons-material/Brightness7';




import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { API } from './global';
import EditMovieForm from './EditMovieForm';
import Login from './Login';
import BasicForm from './BasicForm';
import DeleteMovieForm from './DeleteMovieForm';
import { Taskone } from './Taskone';
// import { Global } from './Global.js';


     function  App() {
  //  const [movieList,setMovieList]=useState([]);

  

   const  Navigate=useNavigate();
   const [mode,setmode]=useState('light')
   const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
})


   //link chage page  without refresh
   return (
    
    
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={0} style={{minimmumHeight:"100vh"}} >
 
    
     <div className='App'>
          <AppBar position="static">
          <Toolbar>
          <Button color="inherit" onClick={()=>Navigate('/home')} >Home</Button>
          <Button color="inherit" onClick={()=>Navigate('/movies')}>Movies</Button>
          <Button color="inherit" onClick={()=>Navigate('/movie/add')}>add Movie</Button>
          <Button color="inherit" onClick={()=>Navigate('/color-game')}>Add color</Button>
          <Button color="inherit" onClick={()=>Navigate('/basic-form')}>Login</Button>


          <Button style={{marginLeft:"auto"}} startIcon={mode=== 'dark' ?<Brightness7Icon /> :<Brightness4Icon /> } color="inherit" onClick={()=>setmode(mode === 'dark' ? 'light':'dark')}>{(mode === 'dark' ? 'light':'dark')} mode</Button>
          </Toolbar>
          </AppBar>
   <div className='router-container'>
           <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/movie/add/' element={< AddMovie1    />}/>
            <Route path='/movies/edit/:id' element={<EditMovieForm />}/>
            <Route path='/movies/delete/:id' element={<DeleteMovieForm />}/>


            <Route path='/movies' element={<MovieList  />} />
 
            <Route path='/films' element={<navigate replace to="/movies"/>}/>         
            <Route path='/color-game' element={<Addcolor/>} />
            <Route path='/basic-form' element={<BasicForm/>} />
            {/* <Route path='/basic-form' element={<BasicForm/>} /> */}
            <Route path='taskone' element={<Taskone/>}/>

            <Route path='/movies/:id' element={<MovieDetails   /> }/>
            <Route path='*' element={<Notfound/>} />
            <Route path='*' element={<Navigate replace to="/404"/>}/>


       </Routes>
       </div>
     </div>
      </Paper >
     </ThemeProvider>
     
       )
    }
   
    function EditMovies(){
      // const {id } = useParams();
      // const Navigate = useNavigate(null);
      // // const movie = Initialmovielist[parseInt(id)];
      // const [movie,setmovie]=useState()
      // useEffect(()=>{
      //   fetch(`https://64d0e744ff953154bb79af35.mockapi.io/Movies/Movies/${id}`)
      //   .then((data)=>data.json())
      //   .then((Mv)=>setmovie(Mv))
    
      //  },[id])
      // return(
      //   <div>
      //     {/* <pre>{JSON.stringify(movie)}</pre> */}

      //    {movie ? :<EditMovieForm  movie={movie}/> :"loading"}
      //   </div>
      // )

      // const {id}=useParams();
      // const [movie,setmovie]=useState(null);
      // useEffect()
    }
  
    
   export default App;



 
