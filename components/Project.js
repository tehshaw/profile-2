import React from "react";
import { Badge, Box, Center, Grid, GridItem, Text, Tooltip } from "@chakra-ui/react";
import styles from "../styles/Motion.module.css";
import Image from "next/image";
import { Link } from "@chakra-ui/react";
import Heroku from "./svg/Heroku";

import { motion } from "framer-motion";
import Github from "./svg/Github";

export default function Project({ project, text }) {
  const { name, description, image, featured, url, git } = project;

  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, transition: { duration: 0.75 } }}
    >
      <Box fontWeight="semibold" fontSize="4xl" as="h1">
        {name}

        {featured && (
          <Badge ml={2} borderRadius="full" bg={"teal"}>
            {featured}
          </Badge>
        )}
      </Box>

      <Grid
        width="100%"
        height="90%"
        templateColumns={"minMax(100px, 350px) auto auto"}
        gap={5}
      >
        <GridItem
          gridColumn={"1 / 2"}
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text textAlign={"center"} p={2}>
            {description}
          </Text>
          <Center p={5}>
            <Tooltip hasArrow label="View code the on GitHub" bg='blue.300' color='black' placement={'top'}>
                <Link href={git} alt="github link" m={2} textAlign={"center"} target={'_blank'}>
                    <Github fill={text} height={"50px"} width={"50px"} />
                </Link>
            </Tooltip>

            <Tooltip hasArrow label="See the site on Heroku" bg='blue.300' color='black' placement={'top'}>
                <Link href={url} alt="live link" m={2} textAlign={"center"} target={'_blank'}>
                    <Heroku fill={text} height={"50px"} width={"50px"} />
                </Link>
            </Tooltip>
          </Center>
        </GridItem>

        <GridItem gridColumn={"2 / 4"} alignSelf="center">
          <Link href={url} alt="live link" m={2} textAlign={"center"} target={'_blank'}>
            <Image
              src={image}
              width={16}
              height={9}
              layout="responsive"
              alt={name}
            />
          </Link>
        </GridItem>
      </Grid>
    </motion.div>
  );
}
