import { Divider, Grid, GridItem, Heading, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { skills } from '../../../data/skills'

export default function Skills() {

  const text = useColorModeValue(
    "rgba(0, 0, 0, 0.92)",
    "rgba(255, 255, 255, 0.6)"
  );
  
  return (
    <Grid templateColumns={'repeat(3, 1fr)'} justifyItems={'center'} p={2} gap={4}>

      <GridItem gridColumn={('1 / 4')}>
        <Heading fontFamily={'noto sans'}>Skills</Heading>
      <Divider />

      </GridItem>
      {skills.map( skill => {
        return (
          <>
            <GridItem>
              <Tooltip hasArrow label={skill.label} bg='blue.300' color='black' placement={'top'}>
                <svg stroke="currentColor" fill={text} strokeWidth="0" role="img" viewBox={skill.viewBox} height='50px' width='50px' xmlns="http://www.w3.org/2000/svg">
                  {skill.path}
                </svg>
              </Tooltip>
            </GridItem>
          </>
        )
      })}
    
    </Grid>
    )
}
