import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Motion.module.css'

import { Grid, Box, GridItem } from "@chakra-ui/react";
import { motion } from 'framer-motion'

export default function Full({ onOpen, colorMode, toggleColorMode}) {


  return (
<>

    
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
        
        <GridItem gridArea={' 1 / 2 / span 1 / span 1'} alignSelf='center'>
          <Image src='/vpipes.svg' height='20px' width='20px' alt='pipes' />
        </GridItem>

        <GridItem gridArea={' 1 / 3 / span 1 / span 1'}>
          <motion.div className={styles.name} whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.2,
              transition: { type: 'just'}
            }}>
            <Link href='/About' passHref >The Person</Link>
          </motion.div>              
        </GridItem>

        <GridItem gridArea={' 1 / 4 / span 1 / span 1'} alignSelf='center'>
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


        <GridItem gridArea={' 1 / 6 / span 1 / span 1'} alignSelf='center'>
          {colorMode === 'dark' ? 
              <Image src='/sun.svg' height='25px' width='25px' alt='Sun behind clouds' onClick={toggleColorMode}/> 
          : 
              <Image src='/clouds.svg' height='25px' width='25px' alt='Shinning sun' onClick={toggleColorMode}/> 
          }
        </GridItem>

      </Grid>
      
  </motion.div>
  </>
  )
}
