import React from 'react'
import Image from 'next/image'
import { Box, Heading, Grid, GridItem, Link, Center, Text, useColorModeValue } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'
import Github from '../components/svg/Github'
import Linkedin from '../components/svg/Linkedin'

import { motion } from 'framer-motion'


export default function About() {
    
    const bg = useColorModeValue('orange.200', 'blue.800')
    const text = useColorModeValue('rgba(0, 0, 0, 0.92)', 'rgba(255, 255, 255, 0.48)')


  return (
    <motion.div 
      key='code' 
      initial={{ x: '-100%'}} 
      animate={{ x: 0, transition: { delay: .5, duration: .75}}} 
      exit={{x: '-100%', transition:{ delay: .5, type: 'just'}}}
    >
        <Box className={styles.center} color={text} bg={bg} height={'93vh'} minW={'100%'} p={4}>
       
            <Grid 
                templateRows={'repeat (1, 50vh)'}
                templateColumns={'repeat ('}
                border={'2px'}
                gap={4}
                borderRadius
                width='600px'
            >
                <GridItem gridArea={'1 / 1 / span 1 / span 1'} textAlign='center' m={4}>
                    <Image src='/1576690805346.jpg' 
                        className={styles.photo}
                        height='250px' width='250px'
                        alt='Picture of me!'
                        />
                    <Heading m='2'>Hi, I'm Mike!</Heading>
                    <Center>
                        <Link href='https://www.linkedin.com/in/mrhenshaw/'>
                            <Linkedin fill={text} height={'50px'} width={'50px'} />
                        </Link>
                        <Link href='https://github.com/tehshaw' p={2}>
                            <Github fill={text} height={'50px'} width={'50px'} />
                        </Link>
                        <Link href='https://github.com/tehshaw'>
                            <Heading fontSize={'4xl'} p={2} >CV</Heading>
                        </Link>
                    </Center>
                </GridItem>
                <GridItem gridArea={'1 / 2 / span 1 / span 1'}>
                    <Box width={'500px'}>
                        <Heading p={2}>About Me</Heading>
                        <Text p={2}>
                            I am a recent graduate of the University of Central Flordia 
                            coding bootcamp. I am pursueing a role as a full-stack developer
                            to untilize my growing skills and knowledge. Currently I am an intern with develop.This.org helping
                            other bootcamp graduates prepare for a role as developer. 
                        </Text>
                        <Text p={2}>
                            Previously, I worked within the personal lines
                            insurance industry. With many years of customer and professional 
                            interactions, 
                        </Text>
                        <Text> </Text>
                    </Box>
                </GridItem>


            </Grid>
        </Box>
    </motion.div>  )
}
