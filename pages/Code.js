import React, { useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'
import Project from '../components/Project'
import { projects } from '../data/projects'

import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Code() {

  const [current, setCurrent] = useState(0)

  const bg = useColorModeValue('orange.200', 'blue.800')
  const text = useColorModeValue('rgba(0, 0, 0, 0.92)', 'rgba(255, 255, 255, 0.48)')

  function nextProject(dir){

    dir === 'right' && current < projects.length-1 ? setCurrent(prevState => prevState + 1) : setCurrent(0)

  }

  return (
    <motion.div 
      key='code' 
      initial={{ x: '100%'}} 
      animate={{ x: 0, transition: { delay: .5, duration: .75}}} 
      exit={{x: '100%', transition:{ delay: .5, type: 'just'}}}
    >
        <Box className={styles.mainSlide} bg={bg} p={10}>

          <Image src='/left.svg' height='100px' width='100px' alt='Left arrow' onClick={() =>nextProject('left')}/>


          <Box className={styles.center} width='75vw' height='70vh' border='solid black' borderRadius='10px' m={5}>

          {projects.map((project, index) => {
            return (
              <>
        
                {index === current && 
  
                  <Project project={project} />
                }
              </>
            )
          })}

</Box>

          <Image src='/right.svg' height='100px' width='100px' alt='Left arrow' onClick={() => nextProject('right')}/>
   
        </Box>
    </motion.div>
  )
}
