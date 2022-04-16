import React from 'react'
import Image from 'next/image'
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Box  } from '@chakra-ui/react'
import styles from '../styles/Motion.module.css'



export default function Me() {
  return (
    
    <Popover placement='left' arrowShadowColor={'white'} arrowSize={'10'} arrowBackground={'white'} >
        <PopoverTrigger>
            <Box>
                <Image src='/me.jpg' 
                    className={styles.photo}
                    height='250px' width='250px'
                    alt='Picture of me!'
                    placeholder='blue'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPUCOg8AgADcAHHGP6wmQAAAABJRU5ErkJggg=='
                />
            </Box>
        </PopoverTrigger>

        <PopoverContent bg={'white'} color={'black'} > 
            <PopoverArrow bg="white" />
            <PopoverHeader>Hey!</PopoverHeader>
            <PopoverBody>{"You shouldn't go around poking people!"}</PopoverBody>
        </PopoverContent>
    </Popover>


  )
}
