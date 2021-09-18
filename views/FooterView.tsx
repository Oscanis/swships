import React from 'react'; //React névtér importálás
import footerStyles from '../styles/Footer.module.css'; //component-specifikus css


export const FooterView: React.FC = (): JSX.Element => {
    return (
        <div className={footerStyles.footer}>
            <p>Copyright szöveg</p>
        </div>
    )
  }

export default FooterView