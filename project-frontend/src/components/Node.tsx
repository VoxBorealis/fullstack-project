import { Box, Image, Text } from '@chakra-ui/react'
import { MouseEvent, useState } from 'react'

interface NodeProps {
  icon: string
}

const Node = ({ icon }: NodeProps) => {
  const [nodeActive, setNodeActive] = useState(false)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    console.log(`clicked on: ${event.target}`)
    console.log(nodeActive)
    nodeActive ? setNodeActive(false) : setNodeActive(true)
  }

  return (
    /*<Box w={"64px"} h={"64px"} bg={'#222222'} _hover={{
      bg: "gray"
    }}>

    </Box>*/
    <Box boxSize={'75'} onClick={handleClick} border={'4px'} borderColor={nodeActive ? '#8a1517' : '#222222'}>
      <Image src={icon} filter={nodeActive ? 'grayscale(0%)' : 'grayscale(50%)'} />
      <Text color={'white'}>{nodeActive.toString()}</Text>
    </Box>
  )
}

export default Node