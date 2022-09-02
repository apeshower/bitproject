import React from "react";
import { Grid } from "@mui/material";
import styles from './MainHeader.module.scss';

const MainHeader = () => {
    return (
        <Grid container className={styles.mainHeaderContainer}>
            <Grid item xs="auto" className={styles.mobileMenu}>
                <img src="/hamburger-icon.png" alt="mobile-nav" />
            </Grid>
            <Grid item xs>
                <div className={styles.logoContainer}>
                    <div className={styles.text}>BID NFT</div>
                </div>
            </Grid>
            <Grid item xs="auto" className={styles.desktopMenu}>
                <div className={styles.menuContainer}>
                    <ul>
                        <li>Menu</li>
                        <li>Product</li>
                        <li>About</li>
                    </ul>
                </div>
            </Grid>
            <Grid item xs className={styles.actionButton}> 
                <div className={styles.actionContainer}>Launch App</div>
            </Grid>
        </Grid>
    )
}

export default MainHeader