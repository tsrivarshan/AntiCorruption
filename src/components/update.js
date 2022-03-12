import Link from './link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
import React, { componentDidMount , useEffect, useState } from 'react';
import { ProgressBar, Button, Row } from 'react-bootstrap';
function Update(){
  const progress1=70;
  const progress2=20;
  const progress3=80;
  const [commentCon, setCommentCon] = useState([]); 
  
  return (
    <div >
          <Link/>
          <Navbar></Navbar>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</link>
<div class="row"> 
<div class="col-md-6" id="idbol4">
              
         
           
           <h5>Comments</h5>
           <br></br>
   

   
        
      <div class="col-md-12" id="maindiv"  >
        <div class="cm0" >
          <button id="com1">VJ</button> 
          <div>
            <b class="cm2" >visnu kiran
            </b>
            <p id="cm3">12 Jan 2021
            </p>
          </div>      
        </div>
        <p class="reply">This construction is good and quality.but it takes more months then expected</p>
        <div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
        <hr></hr>
      </div>
      <div class="col-md-12" id="maindiv"  >
        <div class="cm0" >
          <button id="com1">VJ</button> 
          <div>
            <b class="cm2" >Manish
            </b>
            <p id="cm3">11 Jan 2022
            </p>
          </div>      
        </div>
        <p class="reply">This construction is makes environment beautiful</p>
        <div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
        <hr></hr>
      </div>
      <div class="col-md-12" id="maindiv"  >
        <div class="cm0" >
          <button id="com1">VJ</button> 
          <div>
            <b class="cm2" >Krish
            </b>
            <p id="cm3">11 Jan 2022
            </p>
          </div>      
        </div>
        <p class="reply">This project uses quality products</p>
        <div class="small-ratings" id="d1"> <p id="mailr">Ratings :&nbsp;&nbsp;</p><i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>
        <hr></hr>
      </div>
     

      </div>
<div class="col-md-6">

<div class="row">      
<div class="col-md-2">

    

  </div>



 <Row>
   <b>PIPE LINING-2021</b>
   <br></br>
   <br></br>
        <div class="row">
        <div class="col-md-1 ">
         <p class="pr0">5</p>
         </div>
         <div class="col-md-1"><i class="fa fa-star rating-color"></i></div> 
        <div class="col-md-10">

         <ProgressBar id="pro1" now={progress1}/>
         </div>
         </div>
        <div class="row">
        <div class="col-md-1 ">
         <p class="pr0">4</p>
         </div>
         <div class="col-md-1"><i class="fa fa-star rating-color"></i></div> 
        <div class="col-md-10">

         <ProgressBar id="pro1" now={progress2}/>
         </div>
         </div>
        <div class="row">
        <div class="col-md-1 ">
         <p class="pr0">3</p>
         </div>
         <div class="col-md-1"><i class="fa fa-star rating-color"></i></div> 
        <div class="col-md-10">

         <ProgressBar id="pro1" now={progress2}/>
         </div>
         </div>
        <div class="row">
        <div class="col-md-1 ">
         <p class="pr0">2</p>
         </div>
         <div class="col-md-1"><i class="fa fa-star rating-color"></i></div> 
        <div class="col-md-10">

         <ProgressBar id="pro1" now={progress1}/>
         </div>
         </div>
        <div class="row">
        <div class="col-md-1 ">
         <p class="pr0">1</p>
         </div>
         <div class="col-md-1"><i class="fa fa-star rating-color"></i></div> 
        <div class="col-md-10">

         <ProgressBar id="pro1" now={progress2}/>
         </div>
         </div>
   <br></br>
   
   <br></br>
   <br></br>
   

         </Row> 
      

      
  <h3>FINAL RATING : 4.3</h3>
   <br></br>
   <br></br>
   <br></br>
  <div class="small-ratings" id="d1"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i><p id="mailr">&nbsp; 4.3(1444)</p></div>

                  
        
</div> 



      
<br></br>
                  <br></br>
<button  id="z5">18<br></br>Comment</button>
                  
                  <button id="z5">46<br></br>Likes</button>
               
                  <button  id="z5">98<br></br>Dislike</button>
                  <br></br>
                  <br></br>
             


     
    
    

     
  </div>
     
  </div>
     
  </div>
  



    );
}
export default Update;
