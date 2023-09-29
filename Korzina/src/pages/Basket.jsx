import { useContext,useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import trash from '../assets/trash.svg'
export const Basket = () => {
  const { store ,setStore} = useContext(BasketContext);
  console.log(store);
  const onDelete = ()=>{
    setStore([])
  }

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState()

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  

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
        <HStack mt={'2%'}  mb={5} key={item.length} borderRadius={'8px'} boxShadow={'0px 0px 14px rgba(34, 60, 80, 0.2)'} > 
          <Box   width={'10%'} height={'auto'}>
          <Image borderLeftRadius={'8px'} width={'100%'} objectFit={'cover'}  src={item.images[0]}  />
          </Box>
        <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'} width={'80%'}> 
        <Box p={2}>
            <Heading>{item.title}</Heading>
            <Text w={'450px'}>{item.description}</Text>
            
          </Box>
          <Box  display={'flex'}>
<Box display={'flex'} gap={'5%'}>
          <Button onClick={decreaseCount}>-</Button>
      <Heading mt={'4%'} size={'md'}>{count}</Heading>
      <Button onClick={() => setCount(count + 1,item.price + item.price)}>+</Button>
</Box>
          <Heading m={'4% 2% 0% 4%'} size={'md'}>${item.price}</Heading>
          <Button colorScheme="orange" onClick={()=>deleteOne(item.id)}>Delete</Button>
          </Box>
        </Box>
        
        </HStack>
        
      ))}
      
      {store.length &&  <Button my={10} onClick={onDelete} colorScheme="orange"  justifyContent={'center'} gap={2}>Delete all <Image color={'white'} src={trash}/></Button>}
    <Button w={'100%'} height={'2px'}></Button>
    <Button>Заказать</Button>
    </Box>
  );
};
