import React, { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
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
      key="code"
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { delay: 0.5, duration: 0.75 } }}
      exit={{ x: "100%", transition: { delay: 0.5, type: "just" } }}
    >
      <Box className={styles.mainSlide} bgGradient={grad} color={text} p={10}>
        <Box onClick={() => nextProject("left")}>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
          >
            <LeftArrow height="100px" width="100px" fill={text} />
          </motion.div>
        </Box>

        <Box
          className={styles.center}
          width="75vw"
          height="75vh"
          border="solid black"
          borderRadius="10px"
          m={5}
        >
          {projects.map((project, index) => {
            return (
              <>
                {index === current && <Project project={project} text={text} />}
              </>
            );
          })}
        </Box>

        <Box onClick={() => nextProject("right")}>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
          >
            <RightArrow height="100px" width="100px" fill={text} />
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}
