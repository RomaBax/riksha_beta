

import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Carausel_img from '../assets/banner_carausel.png'

function Carausel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
   








      <Box width={'100%'} m={'5% 0% 10% 0%'}>
        
        <Slider {...settings}>
          <Box w={'100%'}>
            <Image src={Carausel_img}/>
          </Box>
          <Box w={'100%'}>
          <Image src={Carausel_img}/>
          </Box>
          <Box w={'100%'}>
          <Image src={Carausel_img}/>
          </Box>
        
        </Slider>
      </Box>
    );
  
  
}

export default Carausel