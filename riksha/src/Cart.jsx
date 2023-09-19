import { Box, Card,  CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image } from '@chakra-ui/react'
import {BsInstagram} from "react-icons/bs";
import Sushi1 from './Img/img_sushi1.png'
import Sushi2 from './Img/img_sushi2.png'
import Sushi3 from './Img/img_sushi3.png'
import Button1 from './Img/path22.png'
import About from './Img/About.png'
import Hot from './Img/hot.png'
import About_img from './Img/img_About.png'
import Baked from './Img/baked.png'
import Pizza_Captain from './Img/Sushi.png'
import Sushi_Captain from './Img/Pizza.png'
import Ellipse from './Img/Ellipse 8.svg'
import {Fragment} from 'react'

function Cart() {
    let obj = [
        { id: 1, img: Sushi1, name: "Sushi", price: 50000, weight: 1.5, kal: 100, text: "jnvihrevev evetve tvetrvet vetiun" },
        { id: 2, img: Sushi1, name: "Sushi", price: 50000, weight: 1.5, kal: 100, text: "jnvihrevev evetve tvetrvet vetiun" },
        { id: 3, img: Sushi1, name: "Sushi", price: 50000, weight: 1.5, kal: 100, text: "jnvihrevev evetve tvetrvet vetiun" },
        { id: 4, img: Sushi1, name: "Sushi", price: 50000, weight: 1.5, kal: 100, text: "jnvihrevev evetve tvetrvet vetiun" },
        { id: 5, img: Sushi1, name: "Sushi", price: 50000, weight: 1.5, kal: 100, text: "jnvihrevev evetve tvetrvet vetiun" },
    ]
    return (
        <Fragment>


                                                            {/* Cards */}
        <Box >
            
            <Box display={'flex'} mb={'2%'} ml={'15%'} gap={'1%'} mt={'2%'}>
                <Image w={'4%'} src={Pizza_Captain} />
                <Heading>Суши</Heading>
            </Box>
            <Box border={'1px solid red'} m={'2% 0% 5% 0%'} h={'700px'} width={"100%"}>
            <SimpleGrid p={'2%'} ml={{ base: "0%", '2xl': "15%" }} height={"479px"} spacing={4} templateColumns='repeat(auto-fill, minmax(392px, 2fr))'>


                {/* 1 Card */}


                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>


                {/* 2 Card */}


                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>

                {/* 3 Card */}

                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            </Box>




            <Box display={'flex'} ml={'15%'} gap={'1%'} mt={'10%'}>
                <Image w={'3%'} src={Sushi_Captain} />
                <Heading>Пицца</Heading>
            </Box>
            <Box border={'1px solid red'} m={'2% 0% 5% 0%'} h={'700px'} width={"100%"}>
            <SimpleGrid p={'2%'} ml={{ base: "0%", '2xl': "15%" }} height={"479px"} spacing={4} templateColumns='repeat(auto-fill, minmax(392px, 1fr))'>


                {/* 1 Card */}


                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>


                {/* 2 Card */}


                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>

                {/* 3 Card */}

                <Card>
                    <CardBody>
                        <Box >
                            <Box>
                                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
                            </Box>
                            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
                        </Box>
                        <Box display={'flex'} gap={'3%'} mb={'1%'}>
                            <Text color={'gray'}>200 грамм</Text>
                            <Image src={Ellipse} />
                            <Text color={'gray'}>130 Ккал</Text>
                        </Box>
                        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
                        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
                    </CardBody>
                    <CardFooter display={'flex'} gap={'5%'}>
                        <Heading size={'lg'}>219₽</Heading>
                        <Button size={'lg'}>В корзину</Button>
                        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            </Box>
            </Box>
 


                                                            {/* About */}
            <Box  ml={'16%'} maxWidth={'90%'} height={'600px'} mt={{base:"10%"}}>
                <Box  display={'flex'} gap={'1%'}>
                <Heading>О компании</Heading>
                <Image w={'3%'} src={About} />
                </Box>

                <Box gap={'12%'} display={'flex'}>
                <Text mt={'3%'} fontSize={{base:"md", sm:"md", md:"md", lg:"md",xl:"lg" ,'2xl':'2xl'}} width={'33%'}>
                Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш сто
                л и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара.
                 Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время.
                </Text>
                <Image  mt={'-6%'} width={{base:"25%",sm:"20%",md:"35%",lg:"40%",xl:"45%",'2xl':"25%"}} src={About_img} />
                </Box>
            </Box>




        <Box gap={'29%'} display={'flex'} border={'1px solid red'} mt={'6%'} >
            <Box  ml={'16%'} display={'flex'} w={'18%'}  >           
            <Heading    >А вы уже подписались на наш <span style={{color:'#E07153'}}>Instagram ?</span> </Heading>
            </Box>

            <Button size={'xl'} pr={'1%'} w={'12%'} display={'flex'} borderRadius={'0%'} bgImage={Button1} colorScheme='orange'>
                
                <BsInstagram  size={'30%'}/>
                
                <Heading ml={'-5%'}  size={'md'}> @baxramov_dev</Heading>
            </Button>
        </Box>

            </Fragment>
    )
}  
export default Cart