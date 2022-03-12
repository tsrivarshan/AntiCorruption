import { useState } from "react";
import Link from "./link";
import Navbar from "./navbar";


function DailyReport() {
  const [reportcon, setReportcon] = useState([]);
  const [flag, setFlag] = useState(0);
  const [flag1, setFlag1] = useState(1);
  const [fl, setFl] = useState(2);

  const d = new Date();
  let h = new Date().getHours().toLocaleString();
  let m = new Date().getMinutes().toLocaleString();
  let s = new Date().getSeconds().toLocaleString();
  let hour1 = 24 - h;
  let min1 = 60 - m;
  let sec1 = 60 - s;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daywise = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
  var monthwise = month[d.getMonth()] + " " + d.getFullYear();

  const [hours, setHours] = useState(hour1);
  const [min, setMin] = useState(min1);
  const [sec, setSec] = useState(sec1);

  // function hours2() {
  //   hour1 = hour1 - 1;
  //   // if (hour1 < 10) {
  //   //   setHours("0" + hour1);
  //   // } else {
  //   setHours(hour1 + "");
  //   // }
  // }
  function min2() {
    min1 = min1 - 1;
  //   // if (min1 < 10) {
  //   //   setMin("0" + min1);
  //   // } else {
    setMin(min1 + "");
    // }
  }
  function sec2() {
    sec1 = sec1 - 1;
    // if (sec1 < 10) {
    //   setSec("0" + sec1);
    // } else {
    setSec(sec1 + "");
    // }
  }
  // setTimeout(hours2, 1000);
  if(sec!=0 && fl!=1)
  {
    setFl(1)
  setTimeout(min2,60000-sec*1000);
}
else{
  setTimeout(min2,60000);
  
  }
    setTimeout(sec2, 1000);





      if(reportcon.length==0 )
      {
        return(<><Link />

          <Navbar></Navbar>
    
          <br></br>
    
          <div class="row">
            <div class="col-md-2" id="idbol4">
              <b>PIPE LINING 2021</b>
              <br></br>
              <br></br>
              <div id="state">
                <p>1 Update pending</p>
                <p>1 Missing</p>
                <p>365 Updated</p>
              </div>
            </div>
            <div class="col-md-7" id="idbol4">
    <a class="sf">
        <span>{daywise}</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
              Yet To Update the Daily report - {monthwise}
            </span>
          </h4>
          <label for="file-ip-1" id="willup" name="report">
            UPDATE
          </label>
          <input
            type="file"
            class="col-md-3"
            id="file-ip-1"
          ></input>
          <button id="willup" >SUBMIT</button>
        </div>
      </a>
    <a class="sf">
        <span>10 March 2022</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
              Updated Daily report - {monthwise}
            </span>
          </h4>
        
          <button id="willup" >SUBMITED</button>
        </div>
      </a>
    <a class="sf">
        <span>9 MARCH 2022</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
               Updated  Daily report - {monthwise}
            </span>
          </h4>
        
          <button id="willup" >SUBMITED</button>
        </div>
      </a>
    <a class="sf">
        <span>8 MARCH 2022</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
               Updated  Daily report - {monthwise}
            </span>
          </h4>
        
          <button id="willup" >SUBMITED</button>
        </div>
      </a>
    <a class="sf">
        <span>7 MARCH 2022</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
               Updated  Daily report - {monthwise}
            </span>
          </h4>
        
          <button id="willup" >SUBMITED</button>
        </div>
      </a>
    <a class="sf">
        <span>6 MARCH 2022</span>
        <div id="dr2">
          <h4 class="sf1">
            <span>
               Updated  Daily report - {monthwise}
            </span>
          </h4>
        
          <button id="willup" >SUBMITED</button>
        </div>
      </a>
        </div>
      <div class="col-md-3">
          <center>
            <h3>
              {hours}:{min}:{sec}
            </h3>
            <p id="time">Hours left</p>
            {/* <Helmet></Helmet> */}
            {/* <br></br>
         <iframe width="300" height="200" src="https://www.youtube.com/embed/3Tnf9AxEtnc">
</iframe> */}
          </center>
        </div>
      </div>
  
    </>);
      }















  return (
    <div>
      <Link />

      <Navbar></Navbar>

      <br></br>

      <div class="row">
        <div class="col-md-2" id="idbol4">
          <b>PIPE LINING 2021</b>
          <br></br>
          <br></br>
          <div id="state">
            <p>1 Update pending</p>
            <p>1 Missing</p>
            <p>365 Updated</p>
          </div>
        </div>
        <div class="col-md-7" id="idbol4">


          {reportcon.map((val) => {
           

            if (
              val.Day != new Date().getDay() &&
              val.Month != new Date().getMonth() &&
              val.Year != new Date().getFullYear &&
              flag != 1
            ) {
              setFlag(1);
              return (
                <>
                  <a class="sf">
                    <span>{daywise}</span>
                    <div id="dr2">
                      <h4 class="sf1">
                        <span>
                          Yet To Update the Daily report - {monthwise}
                        </span>
                      </h4>
                      <label for="file-ip-1" id="willup" name="report">
                        UPDATE
                      </label>
                      <input
                        type="file"
                        class="col-md-3"
                        id="file-ip-1"
                      ></input>
                      <button id="willup">SUBMIT</button>
                    </div>
                  </a>
                  <a class="sf">
                    <span>{val.daywise}</span>
                    <div id="dr2">
                      <h4 class="sf1">
                        <span>
                          {" "}
                          Daily report update is Missed- {val.monthwise}
                        </span>
                      </h4>
                      <label for="file-ip-1" id="willup" name="report">
                        UPDATED
                      </label>
                      <input
                        type="file"
                        class="col-md-3"
                        id="file-ip-1"
                      ></input>
                    </div>
                  </a>
                </>
              );
            } else {
              return (
                <a class="sf">
                  <span>{val.daywise}</span>
                  <div id="dr2">
                    <h4 class="sf1">
                      <span>
                        {" "}
                        Click here to download the Daily report - {val.monthwise}
                      </span>
                    </h4>
                    <label for="file-ip-1" id="willup" name="report" >
                      UPDATED
                    </label>
                    <input type="file" disabled class="col-md-3" id="file-ip-1"></input>
                  </div>
                </a>
              );
            }
          })}
          <br></br>
        </div>

        <div class="col-md-3">
          <center>
            <h3>
              {hours}:{min}:{sec}
            </h3>
            <p id="time">Hours left</p>
            {/* <Helmet></Helmet> */}
            {/* <br></br>
         <iframe width="300" height="200" src="https://www.youtube.com/embed/3Tnf9AxEtnc">
</iframe> */}
          </center>
        </div>
      </div>
    </div>
  );
}
export default DailyReport;
