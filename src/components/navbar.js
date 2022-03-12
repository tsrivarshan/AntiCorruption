import Link from './link';
import pg from '../pg1.jpg';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import React, {  useState } from 'react';


function Nav()
{
   
    const [count, setCount] = useState(0);
    if(count==1)
    {
        return  <Redirect to='/contracter'/>
    } 
    if(count==2)
    {
        return  <Redirect to='/project'/>
    } 
    if(count==3)
    {
        return  <Redirect to='/staff'/>
    }
    if(count==4)
    {
        return  <Redirect to='/'/>
    }
    return (

        <div >
      
<Link></Link>
<div id="z1" >
    <div id="ins2">
        <img    id="ins1" src={pg}></img>
            <div>
                 <b >MK CONSTRUCTION</b>
                <p id="san">civil construction | chennai | 1991 | pipeline | govScheme </p>
            </div>
    </div>     
   <div id="pro2">
            <button  id="n1" onClick={ ()=>{ setCount(1)}}>HOME</button> 
            <button  id="n1" onClick={ ()=>{ setCount(2)}}  >PROJECTS</button> 
            <button  id="n1" onClick={ ()=>{ setCount(3)}}>WORKERS</button>
            <button  id="mi101" onClick={ ()=>{ setCount(4)}}>LOG OUT</button>
        </div>
</div>
<hr></hr>
</div>
    );
}
export default Nav;