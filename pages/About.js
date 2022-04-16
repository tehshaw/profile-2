import React from 'react'
import { Box, Heading, Grid, GridItem, Link, Center, Text, useColorModeValue, Tooltip } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'
import Github from '../components/svg/Github'
import Linkedin from '../components/svg/Linkedin'

import { motion } from 'framer-motion'
import Me from '../components/Me'


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
        <Box className={styles.mainSlide} color={text} bg={bg} height={'93vh'} minW={'100%'} p={4}>
       
            <Grid 
                templateRows={'repeat (1, 50vh)'}
                templateColumns={'repeat ('}
                border={'2px'}
                gap={4}
                borderRadius
                width='600px'
            >
                <GridItem gridArea={'1 / 1 / span 1 / span 1'} textAlign='center' m={4} styles={{position: 'relative'}}>
                    <Me />
                    <Heading m='2'>{"Hi, I'm Mike!"}</Heading>
                    <Center>
                        <Tooltip hasArrow label="Let's connect on LinkedIn" bg='blue.300' color='black' placement={'top'}>
                            <Link href='https://www.linkedin.com/in/mrhenshaw/' target={'_blank'}>
                                <Linkedin fill={text} height={'50px'} width={'50px'} />
                            </Link>
                        </Tooltip>

                        <Tooltip hasArrow label="See my projects on GitHub" bg='blue.300' color='black' placement={'top'}>
                            <Link href='https://github.com/tehshaw' p={2} target={'_blank'}>
                                <Github fill={text} height={'50px'} width={'50px'} />
                            </Link>
                        </Tooltip>

                        <Tooltip hasArrow label="Check out my resume!" bg='blue.300' color='black' placement={'top'}>
                            <Link href='https://github.com/tehshaw' target={'_blank'}>
                                <Heading fontSize={'4xl'} p={2} >CV</Heading>
                            </Link>
                        </Tooltip>
                    </Center>
                </GridItem>
                <GridItem gridArea={'1 / 2 / span 1 / span 1'}>
                    <Box width={'500px'}>
                        <Heading fontSize={'4xl'} p={2}>About Me.</Heading>
                        <Text p={2}>
                        {"After almost 10 years in Personal Lines Insurance help desk and data analytics, I took a leap and decided to pursue my passion of becoming a Software Engineer- Full Stack. Now, a recent graduate of the University of Central Florida's Coding Bootcamp, I have the certification to enforce the knowledge I've gained after years in workforce. My education didn't start of stop there- I have since mastered external courses in continuing education for coding in software development, such as “Java Programming Masterclass for Software Developers” and “JavaScript Algorithms and Data Structures Master Class”, along with continuing to learn new platforms, languages and gaining additional certifications through sites like Hacker Rank."}
                        </Text>
                        <Text p={2}>
                        {"Most recently I've been working as a Graduate Tutor for a new start-up, Develop.This.org. Develop This, LLC provides support to a network of post bootcamp grads and aspiring junior developers with career services, continuing education, private tutoring, and staffing resources. I've been lucky to be a part of this start-up from their beginning roots providing additional assistance and expertise in working with code to a community of up-and-coming engineers."}
                        </Text>
                        <Text p={2}> 
                        {"When I'm not spending my time tutoring,  writing and learning about all things coding I'm spending time with my kids, catching up with the latest Star Wars or Marvel universe continuation, or playing Farming Simulator (which I'm pretty sure counts as a form of meditation)."}
                        
                        </Text>
                    </Box>
                </GridItem>

            </Grid>
        </Box>
    </motion.div>  )
}
