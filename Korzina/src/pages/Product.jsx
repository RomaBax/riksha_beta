import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import sushi1 from '../assets/1.png'
import sushi2 from '../assets/2.png'
import sushi3 from '../assets/3.png'
import sushi4 from '../assets/4.png'
import './style.css'
import sushi5 from '../assets/5.png'
import sushi6 from '../assets/6.png'
import { FaInstagram } from "react-icons/fa";

import {BsInstagram } from "react-icons/bs";
import axios, { formToJSON } from "axios";
import React from "react";
import { useEffect, useState, useContext, } from "react";

import Ellipse from "../assets/Ellipse 8.svg";
import Pizza_Captain from "../assets/Sushi.png";
import About from "../assets/About.png";
import About_img from "../assets/img_About.png";
import Hot from "../assets/hot.png";
import Baked from "../assets/baked.png";
import Button1 from "../assets/path22.png";

import { BasketContext } from "../context/BasketContext";
import { json } from "react-router-dom";
import { Pizza } from "./Pizza";
import Cart from "../components/Delivery_Cart";
import { useToast } from "@chakra-ui/react";
import Carausel from "../components/Carausel";
import styled from "@emotion/styled";

export const Products = () => {

  const [data, setData] = useState([]);
  const {store,setStore} = useContext(BasketContext)
  const {openCard,setOpenCard} = useState(false)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const toast = useToast()

    // useEffect(() => {
    //   const raw = localStorage.getItem('data') || []
    //   setData(JSON.parse(raw))
    // })

  useEffect(() => {
  
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  const [ Del, setDel ] = useState(false)
  const [ Imgs, setImgs ] = useState()
  const [ Desc, setDesc ] = useState()
  const [ Title, setTitle ] = useState()
  const [ Price, setPrice ] = useState()

  let Todo = product => {Del ? setDel(false) : setDel(true), setImgs(product.thumbnail),setDesc(product.description), setTitle(product.title),setPrice(product.price)} //если можна укаратить ;)

  return (
    <Box  w={'100%'} h={'auto'}>

      <Carausel/>

      <Cart/>
      

    <Box>
      

<Box  bg={'white'} display={'flex'} mb={'2%'}  gap={'1%'} mt={'2%'}>
                <Image w={'4%'} src={Pizza_Captain} />
                <Heading>Суши</Heading>
            </Box>
      <Grid mb={'5%'} mt={"4%"}   templateColumns={{base:"auto ", sm:'auto',md:'auto auto',lg:'auto auto',xl:"auto auto auto" , '2xl':'auto auto auto '}} gap={"1%"}>
        {data.slice(0,3).map((product) => (
          <>
          <GridItem borderRadius={'10px'} p={'0% 0% 5% 0%'} boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} bg={'white'} key={product.id}  >
<Box display={'flex'}>

            <Image
            borderRadius={'10px'}
              src={product.thumbnail}
              w={"100%"}
              h={250}
              objectFit={"cover"}
              mb={"3%"}
            />

     </Box>
             <Box ml={'3%'} display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
            <Heading ml={'3%'} size={"md"}>{product.title}</Heading>
            <Box ml={'3%'} w={'90%'} height={'80px'}  gap={2} display="flex" alignItems={"center"}>
              <Text>
                {product.description}
              </Text>
            </Box >

            <Box w={'100%'} justifyContent={'center'} alignItems={'center'} pl={'0%'} gap={'3%'} display={'flex'} mt={'5%'}>
              <Heading size={'lg'}>{product.price}$</Heading>
            <Button size={'lg'} onClick={() => [Del ? setDel(false) : setDel(true), Todo(product)]}>Купить</Button>
 
             <Button size={'lg'} bgImage={Button1} colorScheme='orange'  onClick={() => setStore((el) => [ ...el, product ])} >
                <Text>В корзину</Text>
              </Button>
              </Box>
          </GridItem>


            <Box position='fixed' backdropFilter={'blur(8px)'} top='0' left='0' w='100%' h='100%' display={Del ? 'flex' : 'none'} alignItems='center' justifyContent='center' zIndex='9'>
              <Box boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} m={'1%'} w='1200px' h={{base:'650px',sm:'700px',md:'750px'}} bg='gray.100' borderRadius={'8px'} p={'1%'} position='relative'>
                <Button position='absolute' colorScheme="orange"  onClick={() => setDel(false)}>X</Button>
                <Box width={'80%'}>
                  <Image borderRadius={'8px'} w='100%' m={'5% 0% 5% 12%'} h='400px' src={Imgs}/>
                </Box>
<Box textAlign={'center'}>
                <Heading size={'2xl'} mb={'2%'}>{Title}</Heading>
                <Text>{Desc}</Text>
                <Heading size={'xl'} m={'0.5% 2%'}>{Price}$</Heading>
                <Button
      onClick={() =>
        toast({
          title: 'Успешно',
          description: "Покупка прошла успешно",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      colorScheme="orange"
      size={'lg'}
      mt={'0%'}
    >
      Купить
    </Button>
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </Grid>
    </Box>

    <Pizza/>

    <Box   w={'100%'}h={{base:'1000px',md:"600px"}} mt={{base:"67%",sm:'10%'}}>
                <Box  display={'flex'} gap={'1%'}>
                <Heading>О компании</Heading>
                <Image w={'3%'} src={About} />
                </Box>

                <Box gap={'2%'} w={'100%'} h={{base:'1000px'}} display={'grid'} gridTemplateColumns={{base:"auto ",sm:'auto ',md:"auto auto",lg:'auto auto',xl:'auto auto','2xl':'auto auto'}}>
                  <Box width={'100%'}>
                <Text mt={'3%'} fontSize={{base:"md", sm:"md", md:"md", lg:"md",xl:"lg" ,'2xl':'2xl'}} width={'100%'}>
                Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш сто
                л и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара.
                Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время.
                </Text>
                </Box>
                <Box w={'100%'}>
                <Image objectFit={'cover'} ml={'1%'} mt={'-6%'}  src={About_img} />
                </Box>
                </Box>
            </Box>




            <Box  width={'100%'} maxWidth={'1250px'} padding={'0 25px'} margin={'15% auto'}>
    <Box  fontFamily={'open sans'}>
        <Box display={{base:'inline',md:'flex'}} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Heading w={{base:'80%',md:'100%'}} Size={{base:'sm',md:'lg'}} color={'#1B1B1B'} fontWeight={'600'}>А вы уже подписались на наш <Heading Size={{base:'sm',md:'lg'}} color={'#E07153'} fontWeight={'600'} >Instagram?</Heading></Heading>
            </Box>
            <Box>
              <Button display={'flex'} size={{base:'lg'}} alignItems={'center'} justifyContent={'center'} gap={'20px'}  color={'#FFF'}  colorScheme="orange" fontFamily={'open sans ,sans-serif'}><FaInstagram/>@baxramov_dev</Button>
            </Box>
        </Box>
      </Box>


      <Box display={'grid'} w={'100%'} gridTemplateColumns={{base:'auto ',md:'auto auto'}} gap={'12px'} mt={'3%'} >
            <Box display={'flex'} flexDirection={'column'} gap={'12px'}>
              <Box display={'grid'} gridTemplateColumns={{base:'auto',md:'auto auto'}} gap={'12px'}>
              <Image src={sushi1} w={'280px'} h={'254px'}/> 
              <Image src={sushi2} w={'280px'} h={'254px'}/>
              </Box> 
               <Box>
                  <Image src={sushi3} w={'573px'} h={'254px'}/>
              </Box>
            </Box>
            <Box display={'flex'} gap={'13px'}>
              <Box display={'flex'} flexDirection={'column'} gap={'12px'}> 
              <Image src={sushi4} w={'299px'} h={'254px'}/> 
              <Image src={sushi5} w={'299px'} h={'254px'}/>
              </Box>
              <Box>  <Image src={sushi6} w={'288px'} h={'520px'}/></Box>
            </Box>
      </Box>
    </Box>
    </Box>
  );
};
