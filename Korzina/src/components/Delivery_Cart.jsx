import React from 'react'
import { Box, Heading, Img } from '@chakra-ui/react'

import Cart1 from '../assets/img_cart.png'
import Cart2 from '../assets/img_cart2.png'
import Friends from '../assets/img_Friend.png'

function Delivery_Cart() {
    return (
        <>
                <Box  mt={'5%'} mb={'10%'}  display={'grid'} gridTemplateColumns={{base:"auto",sm:"auto",md:"auto auto",lg:"auto auto",xl:"auto auto","2xl":"auto auto auto"}} justifyContent={'center'} alignItems={'center'} gap={'20px'} >
                    <Box borderRadius={'8px'} w={'100%'} h={'280px'} bg={'#D2F6FF'} padding={'5%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>


                    <Box>
                            <Heading width={'85%'} mb={'2%'} size={'md'}>Празднуй день рождения вместе с нами</Heading>
                            <Heading mb={"2%"} size={'xs'}>Ролл в подарок при заказе в день рождения</Heading>
                    </Box>
                    <Box w={'100%'} h={'149px'} >
                            <Img width={'50%'} ml={'55%'} src={Cart1} alt="" />
                    </Box>

                    </Box>

                    <Box  borderRadius={'8px'} w={'100%'} h={'280px'} bg={'#FFD8DA'} padding={'5%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>


<Box>
        <Heading width={'85%'} mb={'2%'} size={'md'}>Празднуй день рождения вместе с нами</Heading>
        <Heading mb={"2%"} size={'xs'}>Ролл в подарок при заказе в день рождения</Heading>
</Box>
<Box w={'100%'} h={'149px'}   marginLeft={'0%'}>
                            <Img  width={'100%'} src={Cart2} alt="" />
                    </Box>

</Box>



                    <Box borderRadius={'8px'}  w={'100%'} h={'280px'} bg={'#DBFFCF'} padding={'5%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>

                    <Box >
                            <Heading width={'85%'} mb={'2%'} size={'md'}>Приведи друга </Heading>
                            <Heading size={'xs'}>и получи 250 ₽ на бонусный счет</Heading>
                    </Box>
                    <Box w={'100%'} h={'149px'}  >
                            <Img  width={'50%'} ml={'50%'} justifyContent={'end'} src={Friends} alt="" />
                    </Box>

                    </Box>


                </Box>


        </>
    )
}

export default Delivery_Cart