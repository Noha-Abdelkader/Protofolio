import React, { Fragment } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
// import { SlMenu } from "react-icons/sl";
// import { CgMenuMotion } from "react-icons/cg";


export default function NavBar() {


  return (
    <Fragment>
      <nav className={` ${styles.navbar_react} ${styles.bg} navbar navbar-expand-md  position-fixed top-0 start-0 end-0 px-md-5 `}>
        <div className="container-fluid p-0">
          <span className={`${styles.navBrand_react} navbar-brand fs-2 me-0 fw-bolder ps-2 `}> Noha Elsayed
            <small className="fs-4 fw-light">/ FRONT-END DEVELOPER</small>
          </span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon '></span>
    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className={` ${styles.navLink_react}  nav-link active`} aria-current="page" to="home"> About me</Link>
              </li>
              <li className="nav-item">
                <Link className={` ${styles.navLink_react}  nav-link `} to="projects">projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
