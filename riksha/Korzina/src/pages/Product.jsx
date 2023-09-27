import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import {BsInstagram } from "react-icons/bs";
import axios, { formToJSON } from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";

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

import Carausel from "../components/Carausel";

export const Products = () => {
  const [data, setData] = useState([]);
    const {store,setStore} = useContext(BasketContext)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };


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

  let Todo = product => {Del ? setDel(false) : setDel(true), setImgs(product.thumbnail)} //если можна укаратить ;)

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
              <Text   >
                {product.description}
              </Text>
            </Box >
            <Box w={'100%'} justifyContent={'center'} alignItems={'center'} pl={'20%'} gap={'3%'} display={'flex'} mt={'5%'}>
            <Button size={'lg'} onClick={() => [Del ? setDel(false) : setDel(true), Todo(product)]}>Купить</Button>
              <Button size={'lg'} bgImage={Button1} colorScheme='orange' onClick={() => setStore((el) => [ ...el, product ])} >
                <Text>В корзину</Text>
              </Button>
              </Box>
          </GridItem>


            <Box position='fixed' top='0' left='0' w='100%' h='100%' display={Del ? 'flex' : 'none'} alignItems='center' justifyContent='center' zIndex='9'>
              <Box w='1200px' h='900px' bg='gray' position='relative'>
                <Button position='absolute' top='0' left='0' onClick={() => setDel(false)}>X</Button>
                <Image w='100%' h='400px' src={Imgs}/>
              </Box>
            </Box>
          </>
        ))}
      </Grid>
    </Box>

    <Pizza/>

    <Box   w={'100%'}h={{base:'1000px',md:"600px"}} mt={{base:"10%"}}>
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




        <Box gap={'29%'} display={'flex'} border={'1px solid red'} mt={'6%'} >
            <Box  ml={'0%'} display={'flex'} w={'100%'}  >           
            <Heading   w={'100%'} >А вы уже подписались на наш <span style={{color:'#E07153'}}>Instagram ?</span> </Heading>
            </Box>

            <Button size={'lg'} justifyContent={'center'} alignItems={'center'} w={'30%'} display={'flex'} borderRadius={'8px'} bgImage={Button1} colorScheme='orange' overflow='hidden'>
                <BsInstagram />
                <Heading textAlign={'center'} size='sm'> @baxramov_dev</Heading>
            </Button>
        </Box>
    </Box>
  );
};
