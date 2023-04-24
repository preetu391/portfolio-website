import React from 'react'

const PageHeader = ({title, description}) => {
  return (
    <>
    <p className='pageDescription'>{description}</p>
    <h3 className='pageTitle'>{title}</h3>
    </>
  )
}

export default PageHeader