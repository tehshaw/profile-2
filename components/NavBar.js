import React from "react";
import Image from 'next/image'
import { Flex, Button, Box, useDisclosure, Slide, Grid, Spacer, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { motion } from 'framer-motion'
import styles from '../styles/Motion.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()


  return (
  <>
    <Flex justifyContent={'space-between'} 
          alignItems={'center'} 
          p='4' bg='black' height={'7vh'}
          pos='relative'>
          

      {router.pathname !== '/' && <>
        <motion.h1 key='navName' className={styles.name} layoutId={'name'}>
          <Link href='/' passHref>Mike Henshaw</Link>
        </motion.h1>

        <Spacer />

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: .75}}}
          exit={{opacity: 0, transition: {duration: .55}}}
        >
            <Grid gap={5}>

              <GridItem gridArea={' 1 / 1 / span 1 / span 1'}>
                <motion.div className={styles.name} whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.2,
                  
                }}>
                  <Link href='/Code' passHref>The Code</Link>
                </motion.div>
              </GridItem>

              <GridItem gridArea={' 1 / 2 / span 1 / span 1'}>
                <motion.div className={styles.name} whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.2,
                    
                  }}>
                  <Link href='/About' passHref>The Person</Link>
                </motion.div>              
              </GridItem>

              <GridItem gridArea={' 1 / 3 / span 1 / span 1'} alignSelf='center'>
              {colorMode === 'dark' ? 
                    <Image src='/clouds.svg' height='25px' width='25px' alt='Sun behind clouds' onClick={toggleColorMode}/> 
                : 
                    <Image src='/sun.svg' height='25px' width='25px' alt='Shinning sun' onClick={toggleColorMode}/> 
                }
              </GridItem>

            </Grid>
            
        </motion.div>
        </>
      }
      
        {/* <Button onClick={onToggle}>
          <Image src='/menu.svg' height='25px' width='25px' alt='Menu button' />
        </Button> */}
    </Flex>
    </>
  );
}
