import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { BasketContext } from "../context/BasketContext";
import React from 'react'
import axios, { formToJSON } from "axios"
import { useEffect, useState, useContext } from "react";
import Ellipse from "../assets/Ellipse 8.svg";
import Button1 from "../assets/path22.png";
import About from "../assets/About.png";
import About_img from "../assets/img_About.png";


function Sushi_str() {
    const [data, setData] = useState([]);
    const {setBasket} = useContext(BasketContext)
  
    useEffect(() => {
    
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setData(res.data.products))
        .catch((error) => console.log(error));
    }, []);
  
    const addToBasket = (Sushi_str) => {
      setBasket(Sushi_str);
    };
  
    return (
      <>
      
      <Box display={'flex'} mb={'3%'} gap={'1%'}>
        <Text>Главная</Text>
        <Text color={'gray'}>// Суши</Text>
      </Box>
  
      <Heading mb={'3%'}>Суши</Heading>
  
      <Box  w={'100%'} h={'auto'}>
        <Box>
    
   
          <Grid mb={'5%'} mt={"4%"}   templateColumns={{base:"auto ", sm:'auto',md:'auto auto',lg:'auto auto',xl:"auto auto auto" , '2xl':'auto auto auto '}} gap={"1%"}>
            {data.slice(3,12).map((product) => (
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
                <Button size={'lg'}>Купить</Button>
                  <Button size={'lg'} bgImage={Button1} colorScheme='orange' onClick={() => addToBasket(product)} >
                    <Text>В корзину</Text>
                  </Button>
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

export default Sushi_str