import React from 'react'; //React névtér importálás
import styles from '../styles/Main.module.css'; //component-specifikus css

//View-k importálása
import NavView from './NavView';
import FooterView from './FooterView';

//a MainView a fő komponens, hogy az _app.tsx ne legyen túlbonyolítva
//a children az app.tsx-ből jövő input, lentebb megjelenítve (kb. mint az angular <router-outlet>)
export const MainView: React.FC = ({children}): JSX.Element => {
    return (
        <>
            <NavView />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
            <FooterView />
        </>
    )
  }

export default MainView;