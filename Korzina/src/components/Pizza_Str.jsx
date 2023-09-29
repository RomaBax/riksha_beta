import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { BasketContext } from "../context/BasketContext";
import React from 'react'
import axios, { formToJSON } from "axios"
import { useEffect, useState, useContext } from "react";
import Ellipse from "../assets/Ellipse 8.svg";
import Button1 from "../assets/path22.png";
import About from "../assets/About.png";
import About_img from "../assets/img_About.png";

function Pizza_Str() {

  const [data, setData] = useState([]);
  const {store,setStore} = useContext(BasketContext)

  const [ Del, setDel ] = useState(false)
  const [ Imgs, setImgs ] = useState()
  const [ Desc, setDesc ] = useState()
  const [ Title, setTitle ] = useState()
  const [ Price, setPrice ] = useState()

  let Todo = product => {Del ? setDel(false) : setDel(true), setImgs(product.thumbnail),setDesc(product.description), setTitle(product.title),setPrice(product.price)}

  useEffect(() => {
  
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  const addToBasket = (pizza_Str) => {
    setBasket(pizza_Str);
  };

  return (
    <>
    
    <Box display={'flex'} mb={'3%'} gap={'1%'}>
      <Text>Главная</Text>
      <Text color={'gray'}>// Пицца</Text>
    </Box>

    <Heading mb={'3%'}>Пицца</Heading>

    <Box  w={'100%'} h={'auto'}>
      <Box>
  
 
        <Grid mb={'5%'} mt={"4%"}   templateColumns={{base:"auto ", sm:'auto',md:'auto auto',lg:'auto auto',xl:"auto auto auto" , '2xl':'auto auto auto '}} gap={"1%"}>
          {data.slice(13,22).map((product) => (
            <GridItem borderRadius={'10px'} p={'0% 0% 5% 0%'} boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} bg={'white'} key={product.id}  >
  
              <Image
              borderRadius={'10px'}
                src={product.images[0]}
                w={"100%"}
                h={250}
                objectFit={"cover"}
                mb={"3%"}
              />
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
            </GridItem>
            
          ))}
        </Grid>
      </Box>
      </Box>

      <Box    w={'100%'}h={{base:'1500px',md:"600px"}} mt={{base:"110%",sm:"90%",md:'20%',lg:'15%'}}>
                <Box mb={'5%'} display={'flex'} gap={'1%'}>
                <Heading>Доставка суши и роллов в Краснодаре</Heading>
                
                </Box>

                <Box gap={'2%'} w={'100%'} h={{base:'1000px'}} display={'grid'} gridTemplateColumns={{base:"auto ",sm:'auto ',md:"auto auto",lg:'auto auto',xl:'auto auto','2xl':'auto auto'}}>
                  <Box width={'100%'}>
                <Text mt={'3%'} fontSize={{base:"md", sm:"md", md:"md", lg:"md",xl:"lg" ,'2xl':'2xl'}} width={'100%'}>
                Почему роллы с океанической рыбой, овощами и японскими деликаттесами стали любимым блюдом многих россиян? Во-первых, это очень полезно. Суши – это идеально сбалансированная пища, многое на полезные жиры, белки и витамины. Во-вторых, суше хорошо утоляют голод.
Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится  в кругу друзей. Все блюда готовятся исключительно из свежих продуктов  и по оригинальным рецептам Нашего шеф-повара. 
Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут!
 
У вас есть возможность сделать предварительный заказ на определенный день  и время. 
                </Text>
                </Box>
                <Box w={'100%'}>
                <Image objectFit={'cover'} ml={'1%'} mt={'-6%'}  src={About_img} />
                </Box>
                </Box>
            </Box>
    
    </>
  )
}

export default Pizza_Str