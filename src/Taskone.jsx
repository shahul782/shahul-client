import { Movie } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Counter from "./movieproject/Counter";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Taskone = () => {
    const navigate =useNavigate();
const movies =[


    {
            id:100,
            name: "Captain Miller",
            rating: 8,
            Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsiMgWlU476zDXikxyQDK8W87f6C3Ia86cvcZ2FnpEj_9OPA1ONMaTDc0uU-9v5WWZxk&usqp=CAU",
            summary: "A renegade Captain and his unconventional outlaws execute daring heists in the 1930s and 1940s. Miller must decide whether to continue running or confront the challenges head-on.",
            trailer:"https://www.youtube.com/embed/bSkOF-mEbUU"
          },
        
          {
            id:101,
            name: "LEO",
            rating: 8,
            Poster: "https://navbharattimes.indiatimes.com/thumb/97861784/leo-movie-97861784.jpg?imgsize=41374&width=1200&height=900&resizemode=75",
            summary: "Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.",
            trailer:"https://www.youtube.com/embed/Po3jStA673E"
          },
          {
            id:102,
            name: "vadachennai",
            rating: 9,
            Poster: "https://igimages.gumlet.io/tamil/gallery/movies/vadachennai271115/vadachennaimovie031018_24.jpg?w=600&dpr=1.0",
            summary: "Dhanush as Anbu, a skilled carrom player and Padma's husband.Ameer as Rajan, a prominent local fishermen and Chandra's husband.",
            trailer: "https://www.youtube.com/embed/q5GG5HJ1hVk",
          },
          {
            id:103,
            name: "KGF2",
            rating: 9,
            Poster: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/04/check-out-day-to-day-collection-of-kgf-chapter-2-hindi-001.jpg",
            summary: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia.",
            trailer:"https://www.youtube.com/embed/tLeTx5OdjZs" ,
          },
        
          {
            id:"104",
            name: "vikram",
            rating: 9,
            Poster: "https://w0.peakpx.com/wallpaper/442/459/HD-wallpaper-vikram-movie-kamal-haasan.jpg",
            summary: "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
            trailer: "https://www.youtube.com/embed/OKBMCL-frPU" ,
          },
          {
            id:"105",
            name: "Salaar",
            Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkbmiJOALSRMG_n0Rbu7hMx-iRR6fzCJuhYAEfe9dKg&s",
            rating: 8.9,
            summary: "A gang leader makes a promise to a dying friend by taking on other criminal gangs",
            trailer:"https://www.youtube.com/embed/efrYtSEnJFc" 
          },
          {
            id:"106",
            name:"Kanguva",
            Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeianz6XN7UgntkfwdV1zmSum4w172ExtdZA1e7RmYg&s",
            rating:9,
            summary:"Kanguva: A Mighty Valiant Saga, is an upcoming Indian Tamil-language period action drama film[a] directed by Siva and written by Adi Narayana. It is produced by K. E. Gnanavel Raja, V. Vamsi Krishna Reddy and Pramod Uppalapati under the banners of Studio Green and UV Creations.",
            trailer:"https://www.youtube.com/embed/oBlxdr1KbEA" 
          },
        
          {
            id:"107",
            name: "jailer",
            Poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqK3_nPn_8UHFtyOFgDtrx1d_DfmngcZ3qbTLHZq7vbIrrllSx",
            rating: 7,
            summary: "Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison.",
            trailer: "https://www.youtube.com/embed/xenOE1Tma0A" 
          },
          {
            id:"108",
            name: "Thunivu",
            Poster: "https://static.toimg.com/photo/96714242.cms",
            rating: 8,
            summary: "A group of gangsters plot to steal money from a bank. However, when they execute their plan, they discover that a mysterious man already hijacked the bank.",
            trailer:"https://www.youtube.com/embed/jnBZboK17_A"
          },
]


  return (

    <div>
 {/* {movies.map((e)=>{
//  e.rating<= 7 ?   

 })} */}

{movies?.map((mv) => (
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
  )
}
export default Taskone;