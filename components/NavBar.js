import React from "react";
import Image from 'next/image'
import { Flex, Grid, Box, GridItem, useDisclosure, useColorMode } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import styles from '../styles/Motion.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'


export default function NavBar() {
  const router = useRouter()

  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

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

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: .75}}}
          exit={{opacity: 0, transition: {duration: .55}}}
        >
            <Grid gap={4}>

              <GridItem gridArea={' 1 / 1 / span 1 / span 1'}>
                <motion.div className={styles.name} whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.2,
                  transition: { type: 'just'},
                }}>
                  <Link href='/Code' passHref>The Code</Link>
                </motion.div>
              </GridItem>
              
              <GridItem gridArea={' 1 / 2 / span 1 / span 1'} alignSelf='end'>
                <Image src='/vpipes.svg' height='20px' width='20px' alt='pipes' />
              </GridItem>

              <GridItem gridArea={' 1 / 3 / span 1 / span 1'}>
                <motion.div className={styles.name} whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.2,
                    transition: { type: 'just'}
                  }}>
                  <Link href='/About' passHref>The Person</Link>
                </motion.div>              
              </GridItem>

              <GridItem gridArea={' 1 / 4 / span 1 / span 1'} alignSelf='end'>
                <Image src='/vpipes.svg' height='20px' width='20px' alt='pipes' />
              </GridItem>

              <GridItem gridArea={' 1 / 5 / span 1 / span 1'} alignSelf='end'>
                  <motion.div className={styles.name} whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.2,
                    transition: { type: 'just'}
                  }}>
                    <Box onClick={onOpen}>The Ping</Box>
                </motion.div> 
              </GridItem>


              <GridItem gridArea={' 1 / 6 / span 1 / span 1'} alignSelf='end'>
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
    </Flex>
    <ContactForm isOpen={isOpen} onClose={onClose}/>
    </>
  );
}
