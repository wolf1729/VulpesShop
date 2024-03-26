import { Card, CardBody, Image, Text, Stack, Heading, CardFooter, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../utils/backendAPI'

function ProductPage() {
    const { productId } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        const gettingProductDetails = async() => {
            try{
                console.log(productId)
                const res = await getDetails(productId)
                setDetails(res)
                console.log(res)
            }
            catch(err) {
                console.log(err)
            }
        }

        gettingProductDetails()
    }, [productId, details])


    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>productName</Heading>
                    <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default ProductPage