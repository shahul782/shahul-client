import { useEffect, useState } from "react"

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
function Counter(){

    const[like, setLike]=useState(0);
    const[disLike,setdisLike]=useState(0);
    const incrementLike=()=>setLike(like+1);
    const incrementdisLike =()=>setdisLike(disLike+1);
  //     useEffect(()=>{
  //   console.log("like is value :",like)

  // },[like])


    return(
        <div>
     
<IconButton  color="primary" onClick={incrementLike} aria-label="like">
  <Badge badgeContent={like}  >

    👍
  </Badge>
</IconButton>
<IconButton color="error"  onClick={incrementdisLike} aria-label="Dislike">
  <Badge badgeContent={disLike} >
    👎
  </Badge>
</IconButton>
     

        </div>
    )
}
export default Counter;