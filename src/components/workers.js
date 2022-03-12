import e1 from '../e1.jpg'
import React, { useState } from 'react';

function Workers()
{
    const [Im, setIm] = useState("vivi");
    const [commentCon, setCommentCon] = useState([]);

  var i=0;
    return (
        <div>
            <link
rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
crossorigin="anonymous"
></link>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
crossorigin="anonymous"
></link>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
crossorigin="anonymous"
></script>
<link
href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
rel="stylesheet"
></link>
<link rel="stylesheet" href="table.css"></link>

        <div >
        <div class="row">
                <div class="col-md-6" > 
                <img class="imgs"  src={e1} alt="..."></img ></div>
                   <div class="col-md-6"> <h4>ASSOCIATIVE ENGINEER</h4><hr></hr><br></br><p id="work1">I am Vishal Rupak.I am working in MK construction as Associative Engineer.I am completed my ME in civil engineering.I will make this construction more quality.I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible, reliable and possess excellent time keeping skills.</p>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    </div>
                    );
                
                


           
              
               

        </div>
    );
    
}
export default Workers;