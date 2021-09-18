import React from 'react'; //React névtér importálás
import Link from 'next/link';
import shipStyles from '../styles/Ship.module.css'; //component-specifikus css

export const ShipItemView: React.FC = ({ship}): JSX.Element => {
    return (
        <Link href="/ship/[id]" as={`/ship/${ship.id}`}>
            <a className={shipStyles.card}>
                <h3>{ship.name}</h3>
                <p>Class: {ship.starship_class}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
            </a>
        </Link>
    )
  }
export default ShipItemView