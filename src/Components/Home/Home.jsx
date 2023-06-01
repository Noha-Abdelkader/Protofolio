import React, { Fragment } from 'react'
import styles from './Home.module.css';
import profileImg from '../Images/personal.png';
import { ImGithub } from "react-icons/im";
import { Fade ,   Slide, JackInTheBox } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import Skills from '../Skills/Skills';



export default function Home() {
  return <Fragment>
      <section id="home">
      <div className="container-fluid px-0">
        <div className="row "  >

          <div className="col-md-5 p-0" >
            <div className={`position-relative ${styles.card_img}`} >
<Slide direction='up'> 
  
<div className={` ${styles.card}  text-center p-4 px-md-1 px-lg-4`} >
               <div className='d-flex justify-content-center align-items-center'>
               <img src={profileImg} className="rounded-circle w-50 mx-auto mb-4  p-lg-0" alt="profile_picture"/>
                <div>
                <Fade  cascade damping={0.5} >
                <h1 className="fw-bolder mb-4 ">Noha ELsayed</h1>
                </Fade>
                
                <JackInTheBox delay={500}>
                <h2 className="text-uppercase mb-4 ">front-end developer</h2>

                </JackInTheBox>
                </div>
               </div>

                <div className={styles.cart_footer}>
                <ImGithub className={styles.iconStyle}/>
                </div>

              </div>
 </Slide>

            </div>
            </div>


          <div className={`${styles.info} col-md-7 d-flex justify-content-center align-items-center `}>
<Slide direction='down'> 
           
            <div>
            {/* <h3 className="mb-3 mt-3">Hello</h3>

            <p className=""  >Here's who I am & what I do</p> */}
    
             
              <Fade cascade damping={0.1} delay={500} className='fs-5'>
<p>I am seeking a position in the development of web
applications.</p>
<p> I am eager to enhance my skills and use my
education, experience, and skills to provide the company with
new visions and share new ideas, along with dynamic and
valuable contributions.
</p>

              </Fade>
              <div className="mb-3 d-flex justify-content-start align-items-center">
               <Link  to='/projects'> <button type="submit">projects</button></Link>

              </div>
            </div>
            </Slide>
          </div>

        </div>
        <Skills/>
      </div>
     

    </section>
  </Fragment>
}
