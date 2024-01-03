import React from 'react'
import ReusableChef from '../Chef/ReusableChef'
import images from '../../constants/images'

const Contact = () => {
  return (
    <section className='contact'>
        <ReusableChef img1={images.findus} heading="Find Us" spoonImg={images.spoon} info="Contact" info1="Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG " contact="true" />      
    </section>
  )
}

export default Contact
