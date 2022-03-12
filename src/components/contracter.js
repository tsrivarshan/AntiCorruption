
import Link from './link'
import conimg from '../construt1.jpg'

import React, {  useState } from 'react';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import pg from '../pg1.jpg';

function Contract()
{
    const [count, setCount] = useState(0); 
    const [projects, setProject] = useState([]); 
  
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
    if(count==20)
    {
        return  <Redirect to='/Update'/>
    } 
    if(count==30)
    {
        return  <Redirect to='/dailyReport'/>
    }

    
    return( 
        <div id="top" >
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
            <button  id="n1" onClick={() => setCount(1) } disabled>HOME</button> 
            <button  id="n1" onClick={() => setCount(2)}>PROJECTS</button> 
            <button  id="n1" onClick={() => setCount(3)}>WORKERS</button>
            <button  id="mi101" onClick={() => setCount(4)}>LOG OUT</button>
        </div>
</div>
<hr></hr>
      
        

      
<div>
                <div class="row">
            <div class="col-md-9" id="en1"><div id="z2">
                <img id="cim"src={conimg}></img>
                <div class="pl-3">
                   <div id="status"> <b >FLY OVER</b><p id="status2">Status | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg></p></div><br></br>
                    <p>This is government project.In this project around 2000-3000 workers involved.This work takes more then 6 months</p>
                    <br></br>  <div class="row">
                    <button class="col-md-3" id="z3" onClick={() => setCount(30)}>REPORT</button>
                    <button class="col-md-3" id="z3"  onClick={() => setCount(20)}>REVIEWS</button>
                    <br></br>
                    <br></br>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</link>
<br></br>
<hr></hr>
<div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
       

                </div>
                </div>
                </div>
                </div>
        </div>
            <hr></hr>
                <div class="row">
            <div class="col-md-9" id="en1"><div id="z2">
                <img id="cim"src={conimg}></img>
                <div class="pl-3">
                   <div id="status"> <b >BRIDGE CONSTRUCTION</b><p id="status2">Status | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg></p></div><br></br>
                    <p>    One of the biggest government project in coimbatore.This bridge construction project comes under Make in india scheme.  
</p>
                    <br></br>  <div class="row">
                    <button class="col-md-3" id="z3" onClick={() => setCount(30)}>REPORT</button>
                    <button class="col-md-3" id="z3"  onClick={() => setCount(20)}>REVIEWS</button>
                    <br></br>
                    <br></br>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</link>
<br></br>
<hr></hr>
<div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
       

                </div>
                </div>
                </div>
                </div>
        </div>
            <hr></hr>
                <div class="row">
            <div class="col-md-9" id="en1"><div id="z2">
                <img id="cim"src={conimg}></img>
                <div class="pl-3">
                   <div id="status"> <b >ROAD CONSTRUCTION</b><p id="status2">Status | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg></p></div><br></br>
                    <p>This is government project.This project associated with National highway corporation.This project connects madurai and chennai.
</p>
                    <br></br>  <div class="row">
                    <button class="col-md-3" id="z3" onClick={() => setCount(30)}>REPORT</button>
                    <button class="col-md-3" id="z3"  onClick={() => setCount(20)}>REVIEWS</button>
                    <br></br>
                    <br></br>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</link>
<br></br>
<hr></hr>
<div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
       

                </div>
                </div>
                </div>
                </div>
        </div>
            <hr></hr>
        
         
</div>
          
            
    </div>);
}
export default Contract; 