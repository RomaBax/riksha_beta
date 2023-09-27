import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    Box,
  } from '@chakra-ui/react'
  import {BsFillHddRackFill } from "react-icons/bs";
  import { Link } from "react-router-dom";
  import React from 'react'
  import { useDisclosure } from '@chakra-ui/react'


function Burger_menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
  
        <Button display={{base:'',md:'none'}} colorScheme='orange' onClick={onOpen}>
          <BsFillHddRackFill/>
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Menu :</DrawerHeader>
            <DrawerBody>
<Box>
            <Link to={'/Pizza'}>
          <Button width={'100%'} size={'lg'} variant={'solid'}  colorScheme="orange"><Text color={'white'}>Пицца</Text></Button>
          </Link>
          <Link to={'/Sushi'}>
          <Button width={'100%'} m={'2% 0%'} size={'lg'} variant={'solid'}  colorScheme="orange"><Text color={'white'}>Суши</Text></Button>
          </Link>
          <Link to={'/dostavka'}>
          <Button width={'100%'} size={'lg'} variant={'solid'} colorScheme="orange"><Text color={'white'}>Доставка</Text></Button>
          </Link>
</Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Burger_menu