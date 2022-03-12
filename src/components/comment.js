import Link from './link';
import React, { componentDidMount , useEffect, useState } from 'react';
function Comment(props) {

    const [commentCon, setCommentCon] = useState([]); 
    const [content, setContent] = useState(""); 
    
    return (
        <div>
          <Link/>
  

      
    <div class="row">
      <div class="col-md-5 " id="pad10">                    
        <button id="com1">| $ |</button> 
        <b class="cm2" >{props.name}</b>
                  <br></br>        
                  <br></br>        
                  <div id="searchcomment" > 
                  <br></br>        
                  <br></br>        
                    <input
                      id="dist1"
                      type="text"
                      placeholder="      Post your comments"
                      onChange={(e)=>{setContent(e.target.value)}}
                      value={content}
                      
                    >
                    </input>
                  
                    {/* <input id="inputbutton1" type="submit"></input>
                   */}
                  </div>
 
                <button id="subcan" onClick={()=>{setContent("")}} >CANCEL</button>
                <button id="subcan" >SUBMIT</button>
          </div>

               
                

      
          <div class="col-md-6" id="idbol4">
    
        <div class="col-md-12" id="maindiv">
          <div class="cm0" >
            <button id="com1">VJ
            </button> 
            <div>
              <b class="cm2" >Visnu Kiran
              </b>
              <p id="cm3">12 Jan 2022
              </p>
            </div>
          </div>
          <p class="reply">This construction is good and quality.but it takes more months then expected</p>

            <div class="col-md-12"> 
          <div class="row">  
              <div class="col-md-2"> 
                <c3-icon class="comment-action-icon"  data-selected="false"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
              <div class="col-md-2" >
                <c3-icon class="comment-action-icon" data-selected="false"><svg id="i1"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
            
            </div>  
          </div>
        <br></br>
        <br></br>
          <div class="cm0" >
            <button id="com1">VJ
            </button> 
            <div>
              <b class="cm2" >Manish
              </b>
              <p id="cm3">11 Jan 2022
              </p>
            </div>
          </div>
          <p class="reply">This construction is makes environment beautiful</p>

            <div class="col-md-12"> 
          <div class="row">  
              <div class="col-md-2"> 
                <c3-icon class="comment-action-icon"  data-selected="false"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
              <div class="col-md-2" >
                <c3-icon class="comment-action-icon" data-selected="false"><svg id="i1"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
            
            </div>  
          </div>
        <br></br>
        <br></br>
          <div class="cm0" >
            <button id="com1">VJ
            </button> 
            <div>
              <b class="cm2" >Krish
              </b>
              <p id="cm3">11 Jan 2022
              </p>
            </div>
          </div>
          <p class="reply">This project uses quality products</p>

            <div class="col-md-12"> 
          <div class="row">  
              <div class="col-md-2"> 
                <c3-icon class="comment-action-icon"  data-selected="false"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
              <div class="col-md-2" >
                <c3-icon class="comment-action-icon" data-selected="false"><svg id="i1"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="24"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg></c3-icon>
              </div>
            
            </div>  
          </div>
        <br></br>
        <br></br>
        </div>
        
        </div>
        </div>
        </div>
    );
}
export default  Comment;
