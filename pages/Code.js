import React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'

import { motion } from 'framer-motion'


export default function Code() {

  const bg = useColorModeValue('pink.100', 'green.900')
  const text = useColorModeValue('rgba(0, 0, 0, 0.92)', 'rgba(255, 255, 255, 0.48)')


  return (
    <motion.div 
      key='code' 
      initial={{ x: '100%'}} 
      animate={{ x: 0, transition: { delay: .5, duration: .75}}} 
      exit={{x: '100%', transition:{ delay: .5, type: 'just'}}}
    >
        <Box className={styles.center}  bg={bg} height={'93vh'} minW={'100%'} p={4}>
       
            <Heading>Tester here</Heading>
        </Box>
    </motion.div>
  )
}
