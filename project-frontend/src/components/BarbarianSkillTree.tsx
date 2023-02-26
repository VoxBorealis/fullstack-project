import { Container, Flex, VStack, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Node from './Node'
import { Skill } from '../types';

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
  const callOfTheAncients: Skill = {
    name: 'Call of the Ancients',
    icon: '/skill_icon.png',
    rank: 0,
    description: '<p><span class="d3-color-gold\
                ">Generate:</span> <span class="d3-color-green\
                ">6</span> Fury per attack</p>\n\n<p>Brutally smash an enemy for <span class=\
                "d3-color-green">320%</span> weapon damage.</p>'
  }


  return (
    <TransformWrapper
      doubleClick={{ 'disabled': true }}
      wheel={{ 'step': 0.08 }}
      initialScale={2}
      initialPositionX={0}
      initialPositionY={0}
      centerOnInit={true}
      panning={{ 'velocityDisabled': true, 'excluded': ['talent'] }}
    >
      <TransformComponent>
        <Container h={'95vh'} w={'100vw'} maxW={'full'} py={'32'}>
          <Flex justify={'center'}>
            <HStack justify={'center'}>
              <VStack spacing={10}>
                <Node skill={callOfTheAncients} />
                <Node skill={callOfTheAncients} />
                <Node skill={callOfTheAncients} />
                <Node skill={callOfTheAncients} />
              </VStack>

            </HStack>
          </Flex>
        </Container>
      </TransformComponent>
    </TransformWrapper>


  )
}

export default BarbarianSkillTree