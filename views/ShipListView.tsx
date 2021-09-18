import React from 'react'; //React névtér importálás
import shipStyles from '../styles/Ship.module.css'; //component-specifikus css

import ShipItemView from './ShipItemView';

export const ShipListView: React.FC = ({ ships }): JSX.Element => {
    return (
        <div className={shipStyles.grid}>
            {ships.map((ship) => (
                <ShipItemView ship={ship} />
            ))}
        </div>
    )
  }

export default ShipListView