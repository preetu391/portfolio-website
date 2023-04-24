import React from 'react'
import PageHeader from '../../components/PageHeader'
import Projects from '../../components/Projects'

const Portfolio = () => {
  return (
    <section className='portfolio' id="portfolio">
        <PageHeader title={"Projects"} description={"View my work"}/>
        <div className='row'>
        <Projects />
        </div>
    </section>
  )
}

export default Portfolio