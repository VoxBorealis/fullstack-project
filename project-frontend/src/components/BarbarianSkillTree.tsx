import { Container, Flex, VStack, HStack, Heading } from '@chakra-ui/react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Node from './Node'
import { Skill } from '../types';
import { Tooltip } from "react-tooltip";

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
    description: 'Summons the powers of the Ancients to...',
  }

  return (
    <div className='skillTree'>
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
      <Tooltip id="my-tooltip" place='right' style={{ padding: 25 }}>
        <div>
          <Heading as='h3' size={'md'}>Call of the Ancients</Heading>
          <p>Here's some interesting stuff:</p>
          <ul>
            <li>Some</li>
            <li>Interesting</li>
            <li>Stuff</li>
          </ul>
        </div>
      </Tooltip>
    </div>
  )
}

export default BarbarianSkillTree