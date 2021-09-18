import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

import ShipListView from '../views/ShipListView';

const Home: NextPage = ({ships}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Ship Database</title>
        <meta name='keywords' content='star wars, ships, spaceships'/>
      </Head>
      
      <ShipListView ships={ships}></ShipListView>
    </div>
  )
}
export default Home;

//api call getStaticProps teszteléshez
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3001/ships');
  const ships = await res.json();

  return {
    props: { ships }
  }
}