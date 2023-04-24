import React from 'react'
import aboutme from '../images/aboutme.jpeg'
import Socials from './Socials'
import resume from '../pages/about/resume.pdf'

const Aboutme = ({brand, email, location, availability}) => {
    const handleDownload = () =>{
        const link = document.createElement('a')
        link.href = resume
        link.download = "Priyanshi_Porwal_Resume.pdf"
        link.onload = () => {
            link.remove();
        }
        document.body.appendChild(link);
        link.click()
    }
  return (
    <>
    <div className='aboutContainer container'>
        <div className='row'>
            <img src={aboutme} className='rounded mx-auto d-block' style={{width: "300px", height: "250px"}} alt="image">

            </img>
            <div className='contentContainer'>
                <h4>Nice to meet you</h4>
                <h5>Having fun building this portfolio</h5>
                <div className='contentDescription'>
                    <p>{brand}</p>
                </div>
                <div className='infoContainer'>
                    <div className='row'>
                        <div className='col-12 col-md-6 info'>
                            <span>
                                Name:
                            </span>
                            <p>Priyanshi Porwal</p>
                        </div>
                        <div className='col-12 col-md-6 info'>
                            <span>
                                Email:
                            </span>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 info'>
                            <span>
                                Location:
                            </span>
                            <p>{location}</p>
                        </div>
                        <div className='col-12 col-md-6 info'>
                            <span>
                                Availability:
                            </span>
                            <p>{availability}</p>
                        </div>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button className='btn downloadCV' onClick={handleDownload}>
                        Download Resume
                    </button> {" "}
                    <Socials />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutme