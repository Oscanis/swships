import React from 'react';
import type { NextPage } from 'next';
import shipStyles from '../../../styles/Ship.module.css';
//import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

const ShipPage: NextPage = ({ ship }) => {

  /*trükk a route id kinyeréséhez az url-ből, de inkább serversideprops-al van most megoldva
  const router = useRouter();
  const {id} = router.query;
  */

  const imgurl = `/assets/${ship.picurl}`;

  return (
    <div className={shipStyles.container}>
      <div style={{ position: 'relative', width: '300px', height: '250px' }}>
        <Image
          src={imgurl}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3>{ship.name}</h3>
      <p>Class: {ship.starship_class}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Model: {ship.model}</p>
      <p>Length: {ship.length}</p>
      <p>Crew: {ship.crew}</p>
      <p>Cargo Capacity: {ship.cargo_capacity}</p>
      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
    </div>
  )
}
export default ShipPage

//serverSideProps az ID megállapításához
export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/ships/${context.params.id}`);
  const ship = await res.json();

  return {
    props: { ship }
  }
}