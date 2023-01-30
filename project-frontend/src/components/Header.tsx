import { Box, Heading, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box textAlign={'center'} color={'#F7FAFC'} bg={'#423F3E'} pt={90} pb={198} maxW='994' margin='auto' mt='120'>
      <Heading fontWeight='extrabold' fontSize='5xl'>Inar.io</Heading>
      <Text fontWeight='medium' fontSize='2xl' pt='4'>Diablo IV Planning Tool.</Text>
    </Box>
  )
}