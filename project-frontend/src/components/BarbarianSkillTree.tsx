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
    <TransformWrapper doubleClick={{ 'disabled': true }} wheel={{ 'step': 0.08 }}>
      <TransformComponent>
        <Container h={'95vh'} w={'100vw'} maxW={'full'}>
          <Flex justify={'center'}>
            <HStack justify={'center'}>
              <VStack>
                <Node icon={'/skill_icon.png'} />
                <Node icon={'/skill_icon.png'} />
                <Node icon={'/skill_icon.png'} />
                <Node icon={'/skill_icon.png'} />
              </VStack>

            </HStack>
          </Flex>
        </Container>
      </TransformComponent>
    </TransformWrapper>


  )
}

export default BarbarianSkillTree