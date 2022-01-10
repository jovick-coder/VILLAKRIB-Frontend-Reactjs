import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "./nav.style.css";

const NavComponent = () => {
  return (
    <>
      {/* <!-- The Modal --> */}

      <div class="modal fade" id="loginModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal body --> */}
            <div class="modal-body">
              {/* <!-- Nav pills --> */}
              <ul class="nav nav-pills">
                <li class="nav-item">
                  {/* <!-- Button to Open the Modal --> */}
                  <a
                    class=" modal-top-button active"
                    data-bs-toggle="pill"
                    href="#Login"
                  >
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class=" modal-top-button"
                    data-bs-toggle="pill"
                    href="#registar"
                  >
                    Regester
                  </a>
                </li>
                <li class="nav-item">
                  <span
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                  ></span>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}

              <div class="tab-content">
                {/* Login Tab */}
                <div class="tab-pane container active" id="Login">
                  {/* Login form */}
                  <div className="form-div">
                    <div className="icon-div text-center">
                      <i class="bi bi-person-circle"></i>
                    </div>
                    <form action="">
                      <div className="input-div">
                        <span>Email:</span>
                        <input type="email" placeholder="you@email.com" />
                      </div>
                      <div className="input-div">
                        <span>Password:</span>
                        <input type="password" placeholder="**********" />
                      </div>
                      <div className="input-div">
                        <div className="d-flex justify-content-between m-3">
                          <div>
                            <input type="checkbox" id="rememberMe" />{" "}
                            <label htmlFor="rememberMe">Remember Me</label>
                          </div>
                          <Link to="">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="input-div">
                        <input type="button" value="Submit" />
                      </div>
                      <div className="or-diver d-flex justify-content-around mt-3">
                        <hr />
                        <span className="my-auto ">OR</span>
                        <hr />
                      </div>
                      <div className="input-div login-social-icon">
                        <div className="btn">
                          <i class="bi bi-google"></i>
                        </div>
                        <div className="btn">
                          <i class="bi bi-facebook"></i>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Regester Tab */}
                <div class="tab-pane container fade" id="registar">
                  {/* Regester form */}
                  <div className="form-div">
                    <div className="icon-div text-center">
                      <i class="bi bi-person-circle"></i>
                    </div>

                    <div className="input-div login-social-icon">
                      <div className="btn">
                        <i class="bi bi-google"></i>
                      </div>
                      <div className="btn">
                        <i class="bi bi-facebook"></i>
                      </div>
                    </div>
                    <div className="or-diver d-flex justify-content-around mt-3">
                      <hr />
                      <span className="my-auto ">OR</span>
                      <hr />
                    </div>
                    <form action="">
                      <div className="input-div">
                        <span>Fullname:</span>
                        <input type="text" placeholder="you@email.com" />
                      </div>
                      <div className="input-div">
                        <span>Email:</span>
                        <input type="email" placeholder="you@email.com" />
                      </div>
                      <div className="input-div">
                        <span>Number:</span>
                        <input type="number" placeholder="000-000-000" />
                      </div>
                      <div className="input-div">
                        <span>Password:</span>
                        <input type="password" placeholder="**********" />
                      </div>
                      <div className="input-div">
                        <span>Confirm password:</span>
                        <input type="password" placeholder="**********" />
                      </div>
                      <div className="input-div">
                        <div className="d-flex justify-content-between m-3">
                          <div>
                            <input type="checkbox" id="rememberMe" />{" "}
                            <label htmlFor="rememberMe">Remember Me</label>
                          </div>
                          <Link to="">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="input-div">
                        <input type="button" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div id="nav">
        <div className="logo-div">
          <img src={logoImg} alt="" />
        </div>
        <div className="link-div">
          <ul>
            <li>
              <Link to="">Login</Link>{" "}
            </li>
            <li>
              <Link to="">Properties</Link>{" "}
            </li>
            <li>
              <Link to="">Aid</Link>{" "}
            </li>
            <li>
              <Link to="">Guide</Link>{" "}
            </li>
            <li>
              <Link to="">About Us</Link>{" "}
            </li>
            <li>
              <Link
                to=""
                // type="button"
                // class="login-button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login/Resgister <i class="bi bi-person-circle"></i>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
