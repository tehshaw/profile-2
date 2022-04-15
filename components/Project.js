import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'

import { motion } from 'framer-motion'


export default function Project({project}) {

    const { name, description, image, id } = project

  return (
        <motion.div
        className={styles.project}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { duration: .75}}}
            exit={{opacity: 0, transition: {duration: .75}}}
        >

            <Grid width='100%' height='100%'>
                <GridItem colStart={1} bg={'green.700'}>
                    {name}
                </GridItem>

                <GridItem colStart={2} colSpan={2} bg={'red.700'}>
                    {description}
                </GridItem>
            </Grid>

        </motion.div>
    
  )
}
