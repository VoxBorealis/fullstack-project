import { ReactNode } from 'react'
import { Box, Text, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react"

const NavBar = () => {
  const Links = ['Necromancer', 'Rogue', 'Sorceress']

  const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      color={'#85847E'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

  return (
    <Box bg={useColorModeValue('#222222', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Text color={'#BA4244'} fontFamily={'-moz-initial'}>inar.io</Text>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default NavBar