import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import axios, { formToJSON } from "axios";
  import React from "react";
  import { useEffect, useState, useContext } from "react";
  
  import Ellipse from "../assets/Ellipse 8.svg";
  import Pizza_Captain from "../assets/Sushi.png";
  import Pizza1 from "../assets/Pizza.png";
  import Hot from "../assets/hot.png";
  import Baked from "../assets/baked.png";
  import Button1 from "../assets/path22.png";
  
  import { BasketContext } from "../context/BasketContext";
  import { json } from "react-router-dom";
  import { useToast } from "@chakra-ui/react";
  
  export const Pizza = () => {
    const [data, setData] = useState([]);
    const {store,setStore} = useContext(BasketContext)

    const toast = useToast()
    
  const [ Del, setDel ] = useState(false)
  const [ Imgs, setImgs ] = useState()
  const [ Desc, setDesc ] = useState()
  const [ Title, setTitle ] = useState()
  const [ Price, setPrice ] = useState()

  let Todo = product => {Del ? setDel(false) : setDel(true), setImgs(product.thumbnail),setDesc(product.description), setTitle(product.title),setPrice(product.price)}
  
  
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

  
    return (
      <Box  w={'100%'} h={'auto'}>
      <Box>
  
  <Box bg={'white'} display={'flex'} mb={'2%'}  gap={'1%'} mt={'10%'}>
                  <Image w={'4%'} src={Pizza1} />
                  <Heading>Пицца</Heading>
              </Box>
              <Grid mb={'5%'} mt={"4%"}   templateColumns={{base:"auto ", sm:'auto',md:'auto auto',lg:'auto auto',xl:"auto auto auto" , '2xl':'auto auto auto '}} gap={"1%"}>
        {data.slice(6,9).map((product) => (
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
              <Button size={'lg'} bgImage={Button1} colorScheme='orange' onClick={() => setStore((el) => [ ...el, product ])} >
                <Text>В корзину</Text>
              </Button>
              </Box>
          </GridItem>


            <Box position='fixed'  backdropFilter={'blur(8px)'} top='0' left='0' w='100%' h='100%' display={Del ? 'flex' : 'none'} alignItems='center' justifyContent='center' zIndex='9'>
              <Box  boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} w='1200px' h={{base:'650px',sm:'700px',md:'750px'}} bg='gray.100' borderRadius={'8px'} p={'1%'} position='relative'>
                <Button position='absolute' colorScheme="orange"  onClick={() => setDel(false)}>X</Button>
                <Box width={'80%'}>
                  <Image borderRadius={'8px'} w='100%' m={'5% 0% 5% 12%'} h='400px' src={Imgs}/>
                </Box>
<Box textAlign={'center'}>
                <Heading size={'2xl'} mb={'2%'}>{Title}</Heading>
                <Text mb={'2%'}>{Desc}</Text>
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
      </Box>
  
      
    );
  };