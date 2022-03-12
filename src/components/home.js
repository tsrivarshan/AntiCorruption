
import React, { useState} from 'react';
import Link from "./link";
import Inspect from './inspect';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import {studentContext} from './login'

function Home(props) {
  const [count, setCount] = useState(0); 
  const [count1, setCount1] = useState(0);
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [projects, setProject] = useState([]); 
  // const [student,setStudent]=useContext(studentContext);


  if(!count%2==0)
  {
     
      return  <Inspect name={props.name}></Inspect>
    }
    if(count1==2)
   {
       return  <Redirect to='/'/>
   }
    
    return (         <div className="App" id="hometop" >
   <Link></Link>

  
  
{/* <input
  class="col-md-3"
  id="dist"
  type="text"
  placeholder="Search Region"
  ></input>
  
<input id="inputbutton" type="submit"></input> */}

  
<div id="vin">
<div id="pad10">                    
        <button id="log21">VJ</button> 
        <b class="cm2" >User name</b></div>

   <div class="pb-1  rounded rounded-pill shadow-sm">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?"  aria-describedby="button-addon1" id="search101" class="form-control ">
</input>              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
              </div>
         
</div>

 
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Terms</a>
      <a class="nav-item nav-link" href="#">About us</a>

<button id="log1"  onClick={()=>{setCount1(2)}}>Log out</button>
{/* <img id="ac" src={logo} alt="..."></img> */}
</div>




<br></br>

<div class="row">


<div class="col-md-2" id="idbol4" >
  <div id="scrollui">
<h6>New Anouncements</h6>
<br></br>
<br></br>

<div id="scroll">
<div id="scrollfi">
<button id="logano">MAR <p id="black">11</p>

</button>

<div><p id="scroll1">CM  announcements </p></div>
<br></br>
</div>



<div id="scrollfi">
<button id="logano">MAR <p id="black">8</p></button>

<div><p id="scroll1">CM announcements</p></div>
<br></br>
</div>
<div id="scrollfi">
<button id="logano">Feb <p id="black">20</p></button>

<div><p id="scroll1">CM  announcements</p></div>
<br></br>
</div>
<div id="scrollfi">
<button id="logano">Feb <p id="black">15</p></button>

<div><p id="scroll1">CM  announcements</p></div>
<br></br>
</div>
</div>

</div>
</div>
<div class="col-md-7" id="scrollui" >
  <div >
  <div id="om">
  <div class='mdiv'>
  <div id='mdiv1'>
    
<div id="flex">
<button id="log"></button>
<div>
  <p id="om3">MK SERVICES &nbsp;&nbsp;<br></br>
  
  <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star " id="white"></i> <i class="fa fa-star" id="white"></i> 
</p>

</div>
</div>
</div>
  <div class='mdiv1'>
<p id="om1">19-2-2022</p>
<p id="om2">chennai</p>
</div>
</div>

<br></br>

<div>
<div id='mdive'>

  <div>
    <p id="om5">FLY OVER - 2021</p>
    <p id="om7">
    This is government project.In this project around 2000-3000 workers involved.This work takes more then 6 months
    </p>
 
</div>
<div id="but">
  <button id="om8" onClick={() => setCount(count + 1)}>Inspect</button>

</div>

</div>

</div>
</div>

<br></br>
<br></br>
</div>
  <div >
  <div id="om">
  <div class='mdiv'>
  <div id='mdiv1'>
    
<div id="flex">
<button id="log"></button>
<div>
  <p id="om3">SREE SAI CONSTRUCTION &nbsp;&nbsp;<br></br>
  
  <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star " id="white"></i> <i class="fa fa-star" id="white"></i> 
</p>

</div>
</div>
</div>
  <div class='mdiv1'>
<p id="om1">14-1-2022</p>
<p id="om2">Coimbatore</p>
</div>
</div>

<br></br>

<div>
<div id='mdive'>

  <div>
    <p id="om5">BRIDGE CONSTRUCTION - 2021</p>
    <p id="om7">
    One of the biggest government project in coimbatore.This bridge construction project comes under Make in india scheme.  
    </p>
 
</div>
<div id="but">
  <button id="om8" onClick={() => setCount(count + 1)}>Inspect</button>

</div>

</div>

</div>
</div>

<br></br>
<br></br>
</div>
  <div >
  <div id="om">
  <div class='mdiv'>
  <div id='mdiv1'>
    
<div id="flex">
<button id="log"></button>
<div>
  <p id="om3">VINAI CONSTRUCTIONS &nbsp;&nbsp;<br></br>
  
  <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star " id="white"></i> <i class="fa fa-star" id="white"></i> 
</p>

</div>
</div>
</div>
  <div class='mdiv1'>
<p id="om1">8-1-2022</p>
<p id="om2">Madurai</p>
</div>
</div>

<br></br>

<div>
<div id='mdive'>

  <div>
    <p id="om5">ROAD CONSTRUCTION - 2021</p>
    <p id="om7">
    This is government project.This project associated with National highway corporation.This project connects madurai and chennai.
    </p>
 
</div>
<div id="but">
  <button id="om8" onClick={() => setCount(count + 1)}>Inspect</button>

</div>

</div>

</div>
</div>

<br></br>
<br></br>
</div>
</div>
<div class="col-md-3" >

<h6>Related Articles</h6>
<br></br>

<button id="log11">MK</button>

<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<button id="log12"> MK</button>
<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<button id="log13">MK</button>
<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<button id="log14">MK</button>
<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<button id="log15">MK</button>
<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<button id="log13">MK</button>
<a>Arogya setu COVID-19</a>
<br></br>
<br></br>
<div>
  <br></br>
{/* <h6>We are recommended</h6> */}
{/* <br></br>

<img class="ad"src={ad1}></img>
<br></br>
<br></br>
<img class="ad" src={ad2}></img>
<br></br>
<br></br>
<img class="ad" src={ad3}></img>
<br></br>
<br></br>
<br></br> */}


<br></br>
<button id="fh">Feedback</button>
<br></br>
<br></br>
<input id="fi1" placeholder="   E-mail"></input>
<br></br>
<br></br>
<textarea id="fi2" placeholder="comment"></textarea>
<br></br>
<br></br>
<button id="ff">Send Message</button>

</div>
</div>
</div>

</div>);}
export default Home;