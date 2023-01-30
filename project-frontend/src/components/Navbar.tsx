import { Fragment } from 'react'
import { Link as RouteLink } from "react-router-dom";

import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react"


const NavBar = () => {
  const links = ['Necromancer', 'Rogue', 'Sorceress']

  const NavLink = ({ children }: { children: string }) => {
    console.log(typeof (children))
    return (
      <RouteLink to={`/${children.toLowerCase()}`}>
        <Link
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
      </RouteLink>
    )
  };

  return (
    <Box bg={useColorModeValue('#222222', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <RouteLink to={''}>
            <Link color={'#BA4244'} fontFamily={'heading'} fontSize={24}>inar.io</Link>
          </RouteLink>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {links.map((link, index) => (
              <Fragment key={link}>
                <NavLink key={link}>{link}</NavLink>
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