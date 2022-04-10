import Main from "../components/Main";
import { AnimatePresence, motion } from 'framer-motion'
import styles from '../styles/Motion.module.css'

export default function Home() {
  return (
      <motion.div key='main' className={styles.main} 
        initial={{ opacity: 1}} 
        animate={{ opacity: 1}}
        exit={{opacity: 0, transition: {duration: .25}}}
      >

        <Main />

      </motion.div>
  )
}
