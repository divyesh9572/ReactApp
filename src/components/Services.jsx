import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3 (2).jpg"
import img2 from "../assets/4 (1).jpg";

 const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
          interval={1000} showThumbs={true}>

            <div>
                <img src={img1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <p className='legend'>Peer-to-Peer Support </p>
            </div>

        </Carousel>
    </div>
  )
}
export default Services;
