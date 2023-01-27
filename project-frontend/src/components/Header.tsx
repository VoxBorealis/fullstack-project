import { Box, Heading, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box color={'#F7FAFC'} bg={'#423F3E'} pt={90} pb={198}>
      <Heading fontWeight={800} fontSize={48}>Inar.io</Heading>
      <Text fontWeight={500} fontSize={24} pt={16}>A simple GUI for planning Diablo IV talent trees.</Text>
    </Box>
  )
}