import { Box, Image, Text } from '@chakra-ui/react'
import { MouseEvent, useState } from 'react'
import { Skill } from '../types'

interface NodeProps {
  skill: Skill
}

const Node = ({ skill }: NodeProps) => {
  const [nodeActive, setNodeActive] = useState(false)
  const [tooltipActive, setTooltipActive] = useState(false)

  const handleClick = (_event: MouseEvent<HTMLElement>) => {
    nodeActive ? setNodeActive(false) : setNodeActive(true)
  }
  const handleHover = (_event: any) => {
    tooltipActive ? setTooltipActive(false) : setTooltipActive(true)
  }

  return (
    <div>
      <Box boxSize={'30'} data-tooltip-id="my-tooltip" onClick={handleClick} border={'1px'} onMouseLeave={handleHover} onMouseEnter={handleHover} borderColor={nodeActive ? '#8a1517' : '#222222'} _hover={{ filter: 'brightness(150%)' }} className={'talent'}>
        <Image src={skill.icon} filter={nodeActive ? 'grayscale(0%)' : 'grayscale(75%)'} />
        <Text fontSize={10} color={'white'}>{tooltipActive.toString()}</Text>
      </Box>
    </div>
  )
}

export default Node