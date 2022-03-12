import logo from "../login.jpeg";
import React, { useState,createContext} from 'react';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState("sumathi"); 
  const studentContext=createContext(name);
  const [type,setType]= useState("p"); 
  const [dbname, setDBname] = useState("sumathi"); 
  const [password, setPassword] = useState("password"); 
  const [dbpassword, setDBpassword] = useState("password"); 
  const [Value, setValue] = useState([]); 
  const [isSuccess, setSuccess] = useState("no"); 
  const [almsg, setAlsmg] = useState(" "); 
  const [flag, setFlag] = useState("true"); 
  const [flag1, setFlag1] = useState("true"); 
    
  if(count==2)
  {
    return  <Redirect to='/signup'/>
  } 
  
  if(count==3)
  {
 
    if(type=="p")
    
    {
      return  <Redirect to='/home'/>
    } 
    if(type=="c")
    {
      return  <Redirect to='/contracter'/>
    } 
    
  }
      return(
        <div id="body">
          
          
<center>
    
<div class="row">
<div class="col-md-6">
<div id="l1"><h5 id="l2">"Whatever you do may seem insignificant, but it is most important that you do it "
</h5></div>
</div>
<div class="col-md-6">



  <div>
<br></br>
<br></br>
<img src={logo} alt="..."></img>
</div>
<br></br>
<br></br>

<p>
<input  class="lg"  type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="  USERNAME" required></input>

</p>
<br></br>
<p>
              <select
                name="type"
                class="lg1"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="p">PUBLIC </option>
                <option value="c"> CONTRACTOR </option>
              </select>
            </p>
            <br></br>

<p>
<input  class="lg"  type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="  PASSWORD" required></input>
</p>
<br></br>





<p>
Don't have an account?<button onClick={()=>{setCount(2)}} id="atag" >SignUp here</button>
</p>
<p class="col-md-6"></p>
<button type="button" class="btn btn-dark" id="s1" onClick={()=>{setCount(3)}}>
LOG IN
</button>
<p id="loginalert">{almsg}</p>
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>

</center>
<div class="container my-5">

  <footer id="foot" class=" text-center text-lg-start flinks">
   
    <div class="container p-4">

      <div class="row mt-4">
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase">See other Websites</h6>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-book fa-fw fa-sm me-2"></i>Rights to Information</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-book fa-fw fa-sm me-2"></i>Government of India</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Tamil Nadu Government website</a>
            </li>
          </ul>
        </div>
      

      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase">Execution of the contract</h6>

          <ul class="list-unstyled">
            <li>
              <a href ="#!" id="li" class="flinks"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
            </li>
            <li>
              <a href="#!" id="li"   class="flinks"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
            </li>
          </ul>
        </div>
      

      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase">Website Orgin</h6>

          <ul class="list-unstyled">
            <li>
              <a href="#!" id="li" class="flinks">About us</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks">Contacts</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks">Feedback</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks">Related articles</a>
            </li>
          </ul>
        </div>
      

      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase">Write to us</h6>

          <ul class="list-unstyled">
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-at fa-fw fa-sm me-2"></i>Help</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the  status</a>
            </li>
            <li>
              <a href="#!" id="li" class="flinks"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the community</a>
            </li>
          </ul>
        </div>
   
      </div>
      
    </div>
 
    <div class="text-center p-3 " id="cpy">
      © 2021 Copyright : Virtual Private L.td
         </div>

  </footer>

</div>

</div>

);
  
}

export default Login;
