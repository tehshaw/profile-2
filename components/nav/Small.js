import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Ham from '../svg/Ham'
import Link from 'next/link'

export default function Small({onOpen, colorMode, toggleColorMode}) {

  const grad = useColorModeValue(
    'gray.400',
    'purple.700'
  );

  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: .75}}}
    exit={{opacity: 0, transition: {duration: .55}}}
  >
        <Menu
          width={'50px'}
        >
        <MenuButton
            as={IconButton}
            aria-label='Main Menu'
            bg='black'
            _hover={{bg: 'gray.800'}}
            _active={{
              bg: 'gray.500',
              transform: 'scale(0.98)',
              boxShadow: '0px 2px 40px 5px rgba(14, 82, 241, 1)',
              borderColor: '#bec3c9',
            }}
            icon={<Ham />}
            variant='outline'
        />
        <MenuList
          bg={grad}
          fontFamily={'bebas neue'}
          fontSize={'23px'}
          minW={'auto'}
          
        >
            <MenuItem justifyContent={'center'} width='150px'>
              <Link href='/Code' passHref>The Code</Link>
            </MenuItem>
            <MenuItem justifyContent={'center'} width='150px'>
              <Link href='/About' passHref >The Person</Link>
            </MenuItem>
            <MenuItem onClick={onOpen} justifyContent={'center'} width='150px'>
              The Ping
            </MenuItem>
            <MenuItem justifyContent={'center'} width='150px' 
              closeOnSelect={false}
              onClick={toggleColorMode}
            >
              {colorMode === 'dark' ? 'Light-Mode' : 'Dark-Mode'}
            </MenuItem>
        </MenuList>
        </Menu>
        </motion.div>
        </>
  )
}
