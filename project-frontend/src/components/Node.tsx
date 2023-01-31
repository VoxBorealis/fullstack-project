import { Box, Image } from '@chakra-ui/react'
import React from 'react'

interface NodeProps {
  icon: string
}

const Node = ({ icon }: NodeProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`clicked on: ${event.target}`)
  }

  return (
    /*<Box w={"64px"} h={"64px"} bg={'#222222'} _hover={{
      bg: "gray"
    }}>

    </Box>*/
    <Box boxSize={'75'}>
      <Image src={icon} filter={'grayscale(50%)'} onClick={handleClick} />
    </Box>
  )
}

export default Node