import React from 'react'
import "./aboutme.css"
import { Link } from 'react-router-dom'
const SecondPage = () => {
  return (
    <div className='b-black h-screen'>
       <div className="portfolio-container">
        <div className='navlist'>
            
        </div>
        <div className="left-container">
            <div className="content">
                <p className="intro"><span>Shreeya Srivastava</span></p>
                <h1>20243267</h1>
                <p className ="detail">I am a first year undergraduate from MNNIT Allahabad <br/> persuing Btech. I am a CP and Web Deveplopment <br></br> enthusiast and looking forward for more <br></br>opportunities in future to explore my capabilities in the best way<br></br> possible </p>
                <div className="btn-container">
                <button>  <Link to="https://www.instagram.com/shreesriv12/">Instagram</Link></button>
               <button> <Link to="https://www.linkedin.com/in/shreeya-srivastava-94a458327/"> Linkdln</Link></button>
                </div>
            </div>
        </div>
        <div className="right-container"></div>
        <div className="design">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </div>
    </div>
  )
}

export default SecondPage
