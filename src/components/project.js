import conimg from '../construt1.jpg'
import Link from './link'
import React, { useState } from 'react';
import pg from '../pg1.jpg';

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function Project()
{
  const [duration, setDuration] = useState(""); 
  const [region, setRegion] = useState(8); 
  const [scheme,setScheme ] = useState(""); 
  const [free,setfree ] = useState(1); 
  const [title, setTitle] = useState("PROJECT TITLE-2021"); 
  const [desc, setDesc] = useState("your project Description"); 
  const [status2, setStatus2] = useState("status3"); 
  const [count, setCount] = useState(0);
  
  if(count==1)
  {
    return  <Redirect to='/contracter'/>
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
      <div>
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
            <button  id="n1" onClick={ ()=>{ setCount(2)}} disabled >PROJECTS</button> 
            <button  id="n1" onClick={ ()=>{ setCount(3)}}>WORKERS</button>
            <button  id="mi101" onClick={ ()=>{ setCount(4)}}>LOG OUT</button>
        </div>
</div>
<hr></hr>
            <br></br>
            <br></br>
    
            <div class="row">
                <div class="col-md-6" id="idbol4">
                <div class="row">
            <div class="col-md-12" id="en1"><div id="z2">
                <img id="cimtemp"src={conimg}></img>
                <div class="pl-3">
                   <div id="status"> <b id="btemp">{title}</b><p id={status2}>Status | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg></p></div><br></br>
                    <p id="ptemp">{desc}</p>
                    <br></br>  <div class="row">
                    <button class="col-md-3" id="z3temp" >REPORT</button>
                    <button class="col-md-3"id="z3temp" >REVIEWS</button>
                    <button class="col-md-3" id="z3temp"  >UPDATES</button>
                    <br></br>
                    <br></br>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</link>
<br></br>



                </div>
                </div>
                </div>
                </div>
        </div>


                </div>
                <div class="col-md-6">
                      
<div class="container">  
  <form id="contact1" >
    <fieldset>
      <input placeholder="Project Title" onChange={(e)=>{setTitle((e.target.value)+"-2021")}} type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <br></br>
    
    <fieldset>
  <select name="type" class="lg1" onChange={(e)=>{setDuration(e.target.value)}}  >
  <option value="1"  >Duration </option>
  <option value="1" >1 Month </option>
  <option value="1" >3 Month </option>
  <option value="1"> 6 Month</option>
  <option value="1"> 1 Year</option>
  <option value="1"> 5 Year</option>
 
</select>
    </fieldset>
    <br></br>
    
    <fieldset>
      <input placeholder="Project Region" onChange={(e)=>{setRegion(e.target.value)}} type="tel" tabindex="3" required></input>
    </fieldset>
    <br></br>
    
    <fieldset>
      <input placeholder="Scheme" type="text" onChange={(e)=>{setScheme(e.target.value)}} tabindex="2" required></input>
 
    </fieldset>
    <br></br>
    
    <fieldset>
      <textarea placeholder="Project Description" onChange={(e)=>{setDesc(e.target.value)}} tabindex="5" required></textarea>
    </fieldset>
    <br></br>
    
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
    <br></br>
    
      </form>
</div>  

<br></br>
                </div>
            </div>
        </div>
    );
}
export default Project;