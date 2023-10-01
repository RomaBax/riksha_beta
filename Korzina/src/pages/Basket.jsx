import { useContext,useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import trash from '../assets/trash.svg'
import { useToast } from "@chakra-ui/react";
export const Basket = () => {
  const { store ,setStore} = useContext(BasketContext);
  console.log(store);
  const onDelete = ()=>{
    setStore([])
  }

  const toast = useToast()
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState()
  let Todo = item => {setPrice(item.price)}

  

  const deleteOne = (id)=>{
    const newData = store.filter((item)=>item.id !== id)
    setStore(newData)
  }
  return (
    <Box minH='700px'>

      
      {
        !store.length && <Heading my={10}fontSize={60} textAlign={'center'}>Еще нет товара !</Heading>
      }
      {store.map((item) => (
        <HStack mt={'2%'} pr={'1%'}  mb={5} key={item.length} borderRadius={'8px'} boxShadow={'0px 0px 14px rgba(34, 60, 80, 0.2)'} > 
          <Box   width={{base:'15%',sm:'20%',md:'25%',lg:'30%',xl:'15%','2xl':'15%'}}  >
          <Image borderLeftRadius={'8px'} width={'100%'} objectFit={'cover'}  src={item.images[0]}  />
          </Box>
        <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'} width={'80%'}> 
        <Box p={2}>
            <Heading size={{base:'xs',md:'md'}}>{item.title}</Heading>
            <Text display={{base:'none', sm:'flex'}} w={'92%'}>{item.description}</Text>
            
          </Box>
          <Box  display={'flex'}>

          <Heading m={'4% 2% 0% 4%'} size={'md'}>${item.price}</Heading>
          <Button colorScheme="orange" onClick={()=>deleteOne(item.id)}>Delete</Button>
          </Box>
        </Box>
        
        </HStack>
        
      ))}
      
      {store.length &&  <Button my={10} onClick={onDelete} colorScheme="orange"  justifyContent={'center'} gap={2}>Delete all <Image color={'white'} src={trash}/></Button>}
    <Button w={'100%'} height={'2px'}></Button>
    <Button
    colorScheme={'orange'}
          onClick={() =>
            toast({
              title: 'Заказ принят',
              description: "Ожидайте",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }>Заказать</Button>
    </Box>
  );
};
