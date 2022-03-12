import logo from "./login.jpeg";
import React, { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [name, setName] = useState("sumathi");
  const [email, setEmail] = useState("sumathi@gmail.com");
  const [type, setType] = useState("p");
  const [password, setPassword] = useState("password");
  if(count1==2)
  {
    return  <Redirect to='/'/>
  } 
  if(count1==3)
  {
    return  <Redirect to='/'/>
  } 
  return (
    <div id="body">
      <center>
        <div class="row">
          <div class="col-md-6">
            <div id="l1">
              <h5 id="l2">
                "Whatever you do may seem insignificant, but it is most
                important that you do it "
              </h5>
            </div>
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
              <input
                class="lg"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="  USERNAME"
                required
              ></input>
            </p>
            <br></br>

            <p>
              <input
                class="lg"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder=" EMAIL "
                required
              ></input>
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
              <input
                class="lg"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="  PASSWORD"
                required
              ></input>
            </p>
            <br></br>

            <p>
              <input
                class="lg"
                type="password"
                placeholder="  CONFIRM  PASSWORD"
                required
              ></input>
            </p>
            <br></br>

            <p>
              Already have an account?
              <button onClick={() => setCount1(2)} id="atag">
                Login here
              </button>
            </p>
            <p class="col-md-6"></p>
            <button type="button" class="btn btn-dark" id="s1" onClick={() => setCount1(3)}>
              SIGN UP
            </button>
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
                <h6 class="text-uppercase">See other books</h6>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-book fa-fw fa-sm me-2"></i>All books
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our
                      authors
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase">Execution of the contract</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                      Supply
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="far fa-file-alt fa-fw fa-sm me-2"></i>
                      Regulations
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy
                      policy
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase">Publishing house</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" id="li" class="flinks">
                      The BookStore
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      123 Street
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      05765 NY
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      Send us a book
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 class="text-uppercase">Write to us</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-at fa-fw fa-sm me-2"></i>Help in
                      purchasing
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check
                      the order status
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="li" class="flinks">
                      <i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the
                      newsletter
                    </a>
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

export default App;
