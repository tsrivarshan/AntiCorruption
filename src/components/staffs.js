

import Link from './link'
import e1 from '../e1.jpg'
import React, { useState } from 'react';
import pg from '../pg1.jpg';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function Staffs()
{
    const [image, setImage] = useState({}); 
    const [name, setName] = useState("_______________________"); 
    const [desc, setDesc] = useState("______________________"); 
    const [degree, setQualification] = useState("____________________"); 
    const [course, setSkilll] = useState("_______________"); 
    const [institute, setSkill2] = useState("_________________"); 
    const [skill, setSkill3] = useState("______________________"); 
    const [maindesc, setMaindesc] = useState(""); 
    
    const [count, setCount] = useState(0);
    if(count==1)
    {
      return  <Redirect to='/contracter'/>
    } 
    if(count==2)
    {
      return  <Redirect to='/project'/>
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
            <button  id="n1" onClick={ ()=>{ setCount(2)}}  >PROJECTS</button> 
            <button  id="n1" onClick={ ()=>{ setCount(3)}} disabled  class="fs5">WORKERS</button>
            <button  id="mi101" onClick={ ()=>{ setCount(4)}}>LOG OUT</button>
        </div>
</div>
<hr></hr>
            <br></br>
          
            <div class="row"
            ><div class="col-md-6" id="worker2">

        <div id="worker101">
            <img class="imgs1" src={e1} id="prevw" alt="..."></img >
               <br></br>
               <br></br>
            
               <div > <h6>{name.toUpperCase()}</h6><hr></hr><br></br>
               </div>
                  </div>
                  <p id="work1">I am Viru working as {name.toLowerCase()} in MK construction past few years.
                I am completed my {degree} in {course} from the {institute}.I have been specialized in {skill}.{desc}
               </p>
             
                </div>
             
            
                <div class="col-md-6">
                
                
 <form id="contact1" >
 <fieldset>
 <label for="file-ip-1" id="reviewlol">Click here to Upload profile Image</label>

<input   type="file" id="file-ip-1" accept="image/*" name="image"  onChange={(e)=>{ if(e.target.files.length > 0){
  var src = URL.createObjectURL(e.target.files[0]);
  var preview = document.getElementById("prevw");
  setImage(e.target.files[0]);
  preview.src= src;
}}}></input>
    
    </fieldset>
    <br></br>
    
    <fieldset>
      <input placeholder="Designation" name="name" type="text" tabindex="2" onChange={(e)=>{setName(e.target.value)}} ></input>
 
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="Degree" name="Degree" type="text" tabindex="2" onChange={(e)=>{setQualification(e.target.value)}} ></input>
 
    </fieldset>
    <br></br>
    
    <fieldset>
      <input placeholder="Course" type="text" name="Course"  tabindex="2" onChange={(e)=>{setSkilll(e.target.value)}} ></input>
 
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="Insitutte" type="text" name="Insitutte"   tabindex="2" onChange={(e)=>{setSkill2(e.target.value)}} ></input>
 
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="Skill" name="Skill" type="text" tabindex="2" onChange={(e)=>{setSkill3(e.target.value)}} ></input>
 
    </fieldset>
    <br></br>
    <fieldset>
      <textarea name="desc" placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}  tabindex="5" ></textarea>
    </fieldset>
    <br></br>
 
   
   
    
    <fieldset>
      <button name="submit" type="submit" id="contact-submit"  >Submit</button>
    </fieldset>

  </form>


                </div>
                </div>
        </div>
    );
  }
  export default Staffs;