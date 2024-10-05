import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <>
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
          <div className='text-center HeroArea'>
            <p className='BrandColor mt-5'>Meet your new car</p>
            <h1 className='font-weight-bold'>Honda Civic Type R</h1>
            <div className='HeroButton'>
                <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
                <button className='btn btn-primary font-weight-bold'>Test Drive</button>
            </div>
         </div>  
      </Carousel.Item>

      <Carousel.Item>
          <div className='text-center HeroArea'>
            <p className='BrandColor mt-5'>Join your new car</p>
            <h1 className='font-weight-bold'>Honda Civic Type R</h1>
            <div className='HeroButton'>
                <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
                <button className='btn btn-primary font-weight-bold'>Test Drive</button>
            </div>
         </div>  
      </Carousel.Item>



    </Carousel>
    
    </>
  )
}

export default Hero