import React, { useState } from "react";
import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/Motion.module.css";
import Project from "../components/Project";
import { projects } from "../data/projects";
import LeftArrow from "../components/svg/LeftArrow";
import RightArrow from "../components/svg/RightArrow";
import { motion } from "framer-motion";

export default function Code() {
  const [current, setCurrent] = useState(0);

  const grad = useColorModeValue(
    "linear(to-tl, gray.400 5%, #0099E0)",
    "linear(to-tr, blue.700 0%, purple.700 30%, orange.800)"
  );
  const text = useColorModeValue(
    "rgba(0, 0, 0, 0.92)",
    "rgba(255, 255, 255, 0.6)"
  );

  function nextProject(dir) {
    switch (dir) {
      case "right":
        current < projects.length - 1
          ? setCurrent((prevState) => prevState + 1)
          : setCurrent(0);
        break;

      case "left":
        current > 0
          ? setCurrent((prevState) => prevState - 1)
          : setCurrent(projects.length - 1);
        break;
    }
  }

  return (
    <motion.div
      key='code'
      className={styles.max}
      initial={{ x: "-100%"}}
      animate={{ x: 0, transition: { delay: 0.5, duration: 0.75 } }}
      exit={{ x: "100%", transition: { delay: 0.5, type: "just" } }}
    >
      <Grid className={styles.mainSlide} bgGradient={grad} color={text} p={{base: 0, md: 10}} >
    
        <GridItem key='left' onClick={() => nextProject("left")} gridRow={{base: '2 / 3', md: '1 / 2'}} gridColumn={{base: '1 / 2'}} alignSelf={'center'}>
          <motion.div
            whileHover={{
              scale: .9,
            }}
          >
            <LeftArrow height="75px" width="75px" fill={text} />
          </motion.div>
        </GridItem>


        <GridItem
          key={'ProjectDetails'}
          gridColumn={{base: '1/ 3', md: '2 / 3'}}
          // gridRow={{base: '1 / 3', md: '1 / 2'}}
          className={styles.center}
          width={{md: "75vw"}}
          border={{md:"solid black"}}
          borderRadius="10px"
          m={{base: 0, md: 5}}
        >
          {projects.map((project, index) => {
            return (
              <>
                {index === current && <Project project={project} text={text} />}
              </>
            );
          })}
        </GridItem>
   
          <GridItem key='right' onClick={() => nextProject("right")} gridRow={{base: '2 / 3', md: '1 / 2'}} gridColumn={{base: '2 / 3', md: '3 / 4'}} 
            justifySelf={{base: 'right', md: 'left'}} alignSelf={'center'}>
            <motion.div
              whileHover={{
                scale: .9,
              }}
            >
              <RightArrow height="75px" width="75px" fill={text} />
            </motion.div>
          </GridItem>

      </Grid>
    </motion.div>
  );
}
