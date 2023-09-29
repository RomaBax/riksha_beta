import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Img, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { BsFillCartFill } from "react-icons/bs";
import Logo from '../assets/logo.png'
import Burger_menu from "./Drawer";

export const Header = () => {
  const {store} = useContext(BasketContext)
  return (
    <Box position={''} top={'0'} bg={'white'} borderBottom={"1px solid grey"}>
      <Container
        maxW={"1280px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        pt={"0.5%"}
        pb={{base:'0.5%',md:'0%'}}
      >

        <Burger_menu/>

        
          <Box w={'8%'}>
            <Link  to={'/'}>
        <Img w={"100%"} src={Logo}/>
        </Link>
        </Box>
        


        <Box display={{base:'none',md:'flex'}} gap={'1%'}>
          <Link to={'/Pizza'}>
          <Button size={'lg'} variant={'solid'}  colorScheme="orange"><Text color={'white'}>Пицца</Text></Button>
          </Link>
          <Link to={'/Sushi'}>
          <Button size={'lg'} variant={'solid'}  colorScheme="orange"><Text color={'white'}>Суши</Text></Button>
          </Link>
          <Link to={'/dostavka'}>
          <Button size={'lg'} variant={'solid'} colorScheme="orange"><Text color={'white'}>Доставка</Text></Button>
          </Link>
        </Box>



        <Link to={'/basket'}>
        <Box position={"relative"}>
          <Text
            right={'-15px'}
            top={-2}
            background={"#E07153"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={150}
            w={'25px'}
            h={'25px'}
            position={"absolute"}
            color={"black"}>
            {store.length}
          </Text>
          <BsFillCartFill fontSize={'30px'} />
        </Box>
              </Link>
      </Container>
    </Box>
  );
};
