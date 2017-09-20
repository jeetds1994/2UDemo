import React from 'react'
import Slider from 'react-slick'

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };


const Message = () => {
  var data = require('./data')
  var messages = data.messages
  let display = messages.map((message, index) => {
    return(
      <div>
        <h1 id="message">{message}</h1>
      </div>
    )
  })

  return(
    <div>
       <Slider {...settings}>
        {display}
       </Slider>
     </div>
  )
}

export default Message
