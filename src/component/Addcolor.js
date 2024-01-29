import React, { useState } from 'react'
import { ColorBox } from './ColorBox';

const Addcolor = () => {

    const [color,setcolor]=useState("orange ");
    const [ColorList,setcolorList]=useState(["red","blue","navy"])
    const styles={
        fontsize:"20px",
        backgroundColor:color,
    }
  return (
<div>
    <div className='add-color'>

        <input 
        onChange={Event =>setcolor(Event.target.value)}
        style={styles} 
        type='text'
        placeholder='enter the color'
        value={color}
        />
        <button
        onClick={()=>setcolorList([...ColorList,color])}
        >Addcolor
        </button> 
     
    </div>
    {ColorList.map((clr)=>(
        <ColorBox color={clr}/>
        ))}
    </div>
  );
}
export default Addcolor

