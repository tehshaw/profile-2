import { Grid, GridItem, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import styles from '../styles/Motion.module.css'


export default function Main() {

    const bg = useColorModeValue('blue.200', 'green.900')
    const text = useColorModeValue('blackAlpha.900', 'whiteAlpha600')


  return (

    <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>

        <Grid  alignContent={'center'} templateRows={{base: 'auto 25px auto', md: 'auto auto auto'}} gap={8}>

            <GridItem gridArea={'1 / 1 / 1 / 1'} alignSelf={'center'} justifySelf='center'
                fontFamily={'Rajdhani'} fontWeight={'400'}
            >
                <motion.div key='codeTitle' className={styles.nav}
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: 0.2
                        }
                    }}
                    >
                    <Link href='/Code' passHref>
                        The Code
                    </Link>
                </motion.div>
            </GridItem>

            <GridItem gridArea={{ base: '2 / 1 / 2 / 1', lg: '1 / 2 / 1 / 2'}} alignSelf={'center'}>
                <motion.div key='myName' layoutId={'name'} initial='hidden' animate='visible' variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { delay: .75 }}
                }}>
                    <Heading fontSize={{base: '5xl', md: '6xl', lg: '8xl'}} fontFamily={'Rajdhani'} fontWeight={'500'} color="white">
                        Mike Henshaw
                    </Heading>
                </motion.div>
            </GridItem>

            <GridItem gridArea={{base: '3 / 1 / 3 / 1', lg: '1/3 / 1 / 3'}} alignSelf={'center'} justifySelf='center'
                fontFamily={'Rajdhani'} fontWeight={'400'}
            >
                <motion.div key='personTitle' className={styles.nav}
                    whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: 1.2,
                        transition: {
                            duration: 0.2
                        }
                    }} >
                    <Link href='/About' passHref>
                        The Person
                    </Link>
                </motion.div>
            </GridItem>

        </Grid>

    </Flex>
    )
}
