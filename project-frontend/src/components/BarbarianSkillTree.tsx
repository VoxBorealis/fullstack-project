import { Stack, Container, Flex, VStack, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Node from './Node'

const BarbarianSkillTree = () => {
  /*useEffect(() => {
    const fetchSkillIcons = async () => {
      const url = 'http://media.blizzard.com/d3/icons/skills/64/monk_lashingtailkick.png'
      try {
        console.log(`axios get: ${url}`)
        const result = await axios.get(url)
        console.log(result)
      } catch (e) {
        console.error(e);
      }
    };
    void fetchSkillIcons();
  }, [])*/



  return (
    <TransformWrapper>
      <TransformComponent>
        <Container bg={'white'} h={'95vh'} w={'100vw'} maxW={'full'}>
          <Flex >
            <HStack>
              <img src={'/skill_icon.png'} />
              <Node />
              <Node />
              <Node />
              <Node />
              <Node />
            </HStack>
          </Flex>
        </Container>
      </TransformComponent>
    </TransformWrapper>


  )
}

export default BarbarianSkillTree