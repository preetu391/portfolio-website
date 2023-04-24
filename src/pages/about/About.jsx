import React from 'react'
import PageHeader from '../../components/PageHeader'
import Aboutme from '../../components/Aboutme'

const About = ({name, brand, availability, email, location}) => {
  return (
    <section id="about" className='about'>
        <PageHeader title={"About me"} description={"about me"}/>
        <Aboutme name={name} brand={brand} email={email} location={location} availability={availability}/>
    </section>
  )
}

export default About