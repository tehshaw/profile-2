import React from "react";
import Image from "next/image";
import { Badge, Box, Center, Grid, GridItem, Text, Tooltip, Link } from "@chakra-ui/react";

import { motion } from "framer-motion";
import styles from "../styles/Motion.module.css";
import Github from "./svg/Github";
import Heroku from "./svg/Heroku";


export default function Project({ project, text }) {
  const { name, description, image, featured, url, git } = project;

  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, transition: { duration: 0.75 } }}
    >
      <Box fontWeight="semibold" fontFamily={'bebas neue'} fontSize="4xl" as="h1">
        {name}

        {featured && (
          <Badge ml={2} fontFamily={'arial'} borderRadius="full" bg={"teal"}>
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
          <Text textAlign={"center"} fontFamily={'noto sans'} p={2}>
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
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPUCOg8AgADcAHHGP6wmQAAAABJRU5ErkJggg=='
            />
          </Link>
        </GridItem>
      </Grid>
    </motion.div>
  );
}
