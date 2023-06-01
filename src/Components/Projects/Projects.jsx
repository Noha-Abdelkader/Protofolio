import React, { Fragment } from 'react'
import styles from './Projects.module.css';
import {Fade} from 'react-awesome-reveal';
import movieBg from '../Images/movie-bg.png';
import weatherBg from "../Images/wheather_bg.png";
import commerceBg from "../Images/e-commerce_bg.png";
import movieReactBg from '../Images/movie-app-react.png';
import proflioBg from '../Images/devfelio.png';
import crudBg from '../Images/crudBg.png';
import partyBg from '../Images/partyBg.png';
import simonBg from '../Images/simonBg.png';
import fokirBg from '../Images/fokirBg.png';
import constructBg from '../Images/constructBg.png';
import bakeryBg from '../Images/bakeryBg.png';
import convertorBg from "../Images/convertor.png"
import smartLoginBg from '../Images/smartLoginBg.png';


export default function Projects() {

	
return <Fragment>
    <section id="projects" className={`${styles.projects} py-5`}>
      <div className="container w-75 m-auto">
      <header className=" mb-2 ">
            <h4 className="text-uppercase fw-semibold mb-4">Projects</h4>
         </header>

  {/* ------- projects container ---------------------------- */}
       <div className=" g-4 justify-content-center align-items-center">


        {/* ---------- movie api react ----------------------------------- */}
 <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://movie-app-api-react.vercel.app/login'  className='p-0'> <img src={movieReactBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Movie API React App</h5>
    <Fade cascade damping={0.1} delay={500}>
<ul className={`${styles.note}`}>
  <li>Fetching movie-Db to get [now-playing & TopRated & Upcoming & Tv-Show ] </li>
  <li>Fetching dummyjson-API making Smart Login </li>
  <li>Checking user Inputs Validation </li>
  <li>Ability to Routing between Components using React Hooks</li>
  <li className='text-break mb-2'>using HTML,CSS,JS,React,Bootstrap,joi-validation,axios,swiper frameWork,jwt-decode</li>
  <div>
  <p><span className='text-danger fw-bold'>PS: </span>Iam using fake api So Try bellow info for correct login  </p>
  <table  >
    <thead>
        <tr>
        <th className='pe-2'>username</th>
        <th>password</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>atuny0</td>
        <td>9uQFF1Lh</td>
      </tr>
      <tr>
        <td>hbingley1</td>
        <td>CQutx25i8r</td>
      </tr>
    </tbody>
  </table>
 </div>
</ul>
    </Fade>
    <a className='text-decoration-none' href='https://movie-app-api-react.vercel.app/login'>Visit Project</a>

  </div>
   </div>
  </div>

   {/* ------- e-commerce ----------------------------------- */}
   <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://e-commerce-gmtbxh9jt-noha-elsayed.vercel.app/'  className='p-0'> <img src={commerceBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">E-commerce App</h5>
    <Fade cascade damping={0.1} delay={500}>

    <p> user able to add & remove from cart</p>
    <p className='mb-3'>using HTML,CSS,JS,jQuery,Slick slider, Aos Library </p>
    </Fade>
    <a className='text-decoration-none' href='https://e-commerce-gmtbxh9jt-noha-elsayed.vercel.app/'>Visit Project</a>

  </div>
   </div>
  </div>
  
{/* -------- Weather API-------------------- */}
<div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://weather-app-js-mu.vercel.app/'  className='p-0'> <img src={weatherBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Weather API App</h5>
    <Fade cascade damping={0.1} delay={500}>

    <p>Fetching weatherAPI to get predictable weather condition for next 3 days and get it by hours</p>
    <p> user able to use search-bar finding predictable weather condition in different countrys</p>
    <p className='mb-3'>using HTML,CSS,JS, Bootstrap,jQuery,Aos Library,owl-carousel,slick slider</p>
    </Fade>
    <a className='text-decoration-none' href='https://weather-app-js-mu.vercel.app/'>Visit Project</a>

  </div>
   </div>
  </div>
  
        {/* ------- Movie API----------------- */}
        <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://movie-api-js.vercel.app/'  className='p-0'> <img src={movieBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Movie API web page</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p>Fetching movie-Db API to get now_playing movie list</p>
    <p> User able to use search-bar</p>
    <p> Check Validation of user inputs</p>
    <p className='mb-3'>Finally iam using HTML,CSS,JS, Bootstrap,jQuery</p>
    </Fade>
    <a className='text-decoration-none' href='https://movie-api-js.vercel.app/'>Visit Project</a>

  </div>
   </div>
  </div>

  {/* -------- smart login js ---------------------------------------- */}
  <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://smart-login-wine.vercel.app/'  className='p-0'> <img src={smartLoginBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Smart Login using JS</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>Check User input Validation & Check if email exist! if not Go to the home page </p>
    <p className='mb-3'>HTML,CSS,JS,Bootstrap</p>
    </Fade>
    <a className='text-decoration-none' href='https://smart-login-wine.vercel.app/'>Visit Project</a>

  </div>
   </div>
  </div>
  {/* ------ protfolio web page-------------------------- */}
        <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Protfolio-web-page/'  className='p-0'> <img src={proflioBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Protfolio web page</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,JS,Typed js,Aos library,jQuery,Bootstrap</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Protfolio-web-page/'>Visit Project</a>

  </div>
   </div>
  </div>
  {/* ------ crud system-------------------------- */}
        <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Crud-System-JS/'  className='p-0'> <img src={crudBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Crud System JS</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p>Ability to add products & product detalis & count also update or delete it </p>
    <p className='mb-3'>HTML , CSS ,JS,Animsition jquery plugin</p>
    </Fade>
    <a className='text-decoration-none' href=' https://noha-elsayed.github.io/Crud-System-JS/'>Visit Project</a>

  </div>
   </div>
  </div>

  {/* ----- party web page------------------------------------- */}
        <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Party-web-page-JS/'  className='p-0'> <img src={partyBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Party web page JS</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p>Counting Down to the Party Date</p>
    <p className='mb-3'>usingHTML,CSS,JS,jQuery</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Party-web-page-JS/'>Visit Project</a>

  </div>
   </div>
  </div>

  {/* ---- simon web page-------------------- */}
  <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Protfolio-web-page2/'  className='p-0'> <img src={simonBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Protfolio web page</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,Bootstrap,Typed js,Aos library</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Protfolio-web-page2/'>Visit Project</a>

  </div>
   </div>
  </div>

{/* ----------- fokir web page-------------------------- */}
<div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Profile-WebPage/'  className='p-0'> <img src={fokirBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Profile web page</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,Bootstrap,Aos library</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Profile-WebPage/'>Visit Project</a>

  </div>
   </div>
  </div>

  {/* ----- construction template ---------- */}
  <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://construction-web-page.vercel.app/'  className='p-0'> <img src={constructBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Construction web page Template</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,JQuery,Bootstrap</p>
    </Fade>
    <a className='text-decoration-none' href='https://construction-web-page.vercel.app/'>Visit Project</a>

  </div>
   </div>
  </div>
 
 {/* -------- bakery template-------------- */}
 <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Bakery-templete/'  className='p-0'> <img src={bakeryBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Construction web page Template</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,JQuery,Bootstrap</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Bakery-templete/'>Visit Project</a>

  </div>
   </div>
  </div>
 {/* -------- convertor template-------------- */}
 <div className={`${styles.info_card}  p-3  rounded-3  mx-auto gy-3 gx-5n mt-2 mb-5 row`}>

<div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
<div>
<a href='https://noha-elsayed.github.io/Convertor-JS/'  className='p-0'> <img src={convertorBg} alt='project img' className='w-100'/> </a>

</div>
    </div>

   <div className='col-sm-12 col-md-6 p-3'>
   <div>
    
    <h5 className="fw-bolder">Construction web page Template</h5>
    <Fade cascade damping={0.1} delay={500}>
    <p className='mb-3'>HTML,CSS,JQuery,Bootstrap</p>
    </Fade>
    <a className='text-decoration-none' href='https://noha-elsayed.github.io/Convertor-JS/'>Visit Project</a>

  </div>
   </div>
  </div>
 

        </div>
        
       </div>
    </section>
  </Fragment>
}
