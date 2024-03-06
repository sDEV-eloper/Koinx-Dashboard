import { TriangleUpIcon } from '@chakra-ui/icons'
import {  Box, HStack, Heading, Image, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text,  } from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <SimpleGrid bg='#f1f1f1' columns={2} spacing={10} padding={10} margin='4px' borderRadius="5px" borderWidth='1px' borderColor='gray.500'>
    <Box bg='white' height='300px' padding={10}>
    <HStack >
    <Image borderRadius='full'  boxSize='25px'   src='https://static.vecteezy.com/system/resources/thumbnails/008/505/801/small_2x/bitcoin-logo-color-illustration-png.png'/>
    <Heading as='h5' size='sm' fontWeight="bold">
    Bitcoin
  </Heading>
  <Text fontSize='12px' color="gray" >BTC</Text>
  <Tag bg='#768396' borderRadius={5} padding={3} color="white" fontSize="10px" marginLeft={20}>Rank #1</Tag>
    </HStack>
    <HStack marginTop="20px">
    <Text as='h1' fontSize='30px' noOfLines={1} fontWeight="bold">
    $46953.098
  </Text>
  

    <Tag fontSize="15px" key="sm" variant='subtle' color="#14B709" borderRadius={5} bg='#EBF9F4' paddingX={5}>
      <TagLeftIcon boxSize='12px' as={TriangleUpIcon} />
      <TagLabel >2.51%</TagLabel>
    </Tag>
    <Text fontSize='12px' color="gray" >&#40;24h&#41;</Text>


    </HStack>
    </Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
  )
}

export default Dashboard
