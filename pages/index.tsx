import { Button, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const{toggleColorMode} =useColorMode();
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Review</title>
        <meta name="description" content="Disecto fontend internship task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
      <Button onClick={toggleColorMode} variant="solid" color={"white"} bg={["disecto.red", "purple.700"]}>Toggle Color Mode</Button>
    </div>
  )
}

export default Home
