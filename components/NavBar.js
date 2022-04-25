import React, { useState, useEffect } from "react";
import { Flex, useDisclosure, useColorMode } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import styles from '../styles/Motion.module.css'
import Link from 'next/link'
import Full from "./nav/Full";
import Small from "./nav/Small";

export default function NavBar() {
  const router = useRouter()

  const { colorMode, toggleColorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);


  return (
  <>
    <Flex className={styles.navBar}>

      {router.pathname !== '/' && 
      <>
        <motion.h1 key='navName' className={styles.name} layoutId={'name'}>
          <Link href='/' passHref>Mike Henshaw</Link>
        </motion.h1>
          {width > 760 ? (
            <Full onOpen={onOpen} colorMode={colorMode} toggleColorMode={toggleColorMode}/>
          )
          :
          (
            <Small onOpen={onOpen} colorMode={colorMode} toggleColorMode={toggleColorMode}/>
          )}
        </>
      }
    </Flex>
    <ContactForm isOpen={isOpen} onClose={onClose}/>
    </>
  );
}
