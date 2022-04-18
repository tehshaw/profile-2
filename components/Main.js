import { Grid, GridItem, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import styles from '../styles/Motion.module.css'


export default function Main() {

    const bg = useColorModeValue('blue.200', 'green.900')
    const text = useColorModeValue('blackAlpha.900', 'whiteAlpha600')


  return (

    <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} height={'93vh'}>

        <Grid  templateColumns={{base: '1fr', lg: 'repeat (1, 1fr'}} alignContent={'center'} gap={8}>

            <GridItem gridArea={'1/1 / span 1 / span 1'} alignSelf={'center'} justifySelf='center'
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

            <GridItem gridArea={'1/2 / span 1 / span 1'} alignSelf={'center'}>
                <motion.div key='myName' layoutId={'name'} initial='hidden' animate='visible' variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { delay: .75 }}
                }}>
                    <Heading fontSize={{base: '2xl', lg: '8xl'}} fontFamily={'Rajdhani'} fontWeight={'500'} color="white">
                        Mike Henshaw
                    </Heading>
                </motion.div>
            </GridItem>



            <GridItem gridArea={'1/3 / span 1 / span 1'} alignSelf={'center'} justifySelf='center'
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
