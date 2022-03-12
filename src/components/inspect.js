
import React, { useState } from 'react';
import c1 from "../cmp.png"
import Link from "./link";

import v3 from "../star1.png"
import v1 from "../v77.png"
import v2 from "../v3.png"
import Comment from'./comment'
import Workers from './workers'
import Report from './report'
function Welcome1(props) {
const [count, setCount] = useState(0); 
    if(count==2)
    {
      return (
        <div>
          <Link/>
  <div id="ins2">
  <img    id="ins1" src={c1}></img>
  <div>
  <b >MK CONSTRUCTION</b>
  <p>civil construction | chennai | 1991 | pipeline | govScheme </p>
  </div>
  <button class="ins3"onClick={() => setCount(1)}><img class="v1" src={v1}></img><br></br>workers</button>
  <button class="ins3"onClick={() => setCount(2)}><img class="v2" src={v2}></img><br></br>Report</button>
  <button class="ins3"onClick={() => setCount(3)}><img class="v3" src={v3}></img><br></br>Comments</button>
  </div>
  <hr id="line"></hr> 
        
  <Report/>

  </div>
        );
      
    }
    else if(count==3)
    {
      return(
        <div>
          <Link/>
<div id="ins2">
<img    id="ins1" src={c1}></img>
<div>
<b >MK CONSTRUCTION</b>
<p>civil construction | chennai | 1991 | pipeline | govScheme </p>
</div>
<button class="ins3"onClick={() => setCount(1)}><img class="v1"src={v1}></img><br></br>workers</button>
<button class="ins3"onClick={() => setCount(2)}><img class="v2"src={v2}></img><br></br>Report</button>
<button class="ins3"onClick={() => setCount(3)}><img class="v3"src={v3}></img><br></br>Comments</button>
</div>
<hr id="line"></hr> 
      <Comment name={props.name}></Comment>
        </div>
    );
      

    }
      return (
      <div >
        <Link/>
<div id="ins2">
<img    id="ins1" src={c1}></img>
<div>
<b >MK CONSTRUCTION</b>
<p>civil construction | chennai | 1991 | pipeline | govScheme </p>
</div>
<button class="ins3"onClick={() => setCount(1)} ><img class="v1"src={v1}></img><br></br>workers</button>
<button class="ins3"onClick={() => setCount(2)}><img class="v2"src={v2}></img><br></br>Report</button>
<button class="ins3"onClick={() => setCount(3)}><img class="v3"src={v3}></img><br></br>Comments</button>
</div>
<hr id="line"></hr> 
<Workers/>
</div>);
    
      }
  export default Welcome1;
 