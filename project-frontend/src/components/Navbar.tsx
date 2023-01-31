import { Fragment } from 'react'
import { Link as RouteLink } from "react-router-dom";

import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react"


const NavBar = () => {
  const links = ['Necromancer', 'Rogue', 'Sorceress']



  const NavLink2 = ({ children }: { children: string }) => {
    return (
      <Link
        as={RouteLink}
        to={`/${children.toLowerCase()}`}
        px={2}
        py={1}
        rounded={'md'}
        color={'#85847E'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        fontFamily={'heading'}>
        {children}
      </Link>
    )
  };

  return (
    <Box bg={useColorModeValue('#222222', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Link as={RouteLink} to={''} color={'#BA4244'} fontFamily={'heading'} fontSize={24}>inar.io</Link>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {links.map((link, index) => (
              <Fragment key={link}>
                <NavLink2 key={link}>{link}</NavLink2>
                {index < links.length - 1 && (
                  <Box height="20px" width="1px" bg="#85847E" mx={6} />
                )}
              </Fragment>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default NavBar