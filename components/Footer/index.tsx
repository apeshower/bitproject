import React from "react";
import { Grid } from "@mui/material";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={12} md>
                    <div className={styles.mainTitle}>Discover a rare <br/>abstract item <br/>around the <br/>world</div>
                </Grid>
                <Grid item xs="auto">
                    <div className={`${styles.firstColumn} ${styles.column}`}>
                        <div className={styles.title}>Plug In</div>
                        <div className={styles.list}>How It Works</div>
                        <div className={styles.list}>Support</div>
                        <div className={styles.list}>Community</div>
                        <div className={styles.list}>Connect to Wallet</div>
                    </div>
                </Grid>
                <Grid item xs="auto">
                    <div className={`${styles.secondColumn} ${styles.column}`}>
                        <div className={styles.title}>NFTs</div>
                        <div className={styles.list}>Download</div>
                        <div className={styles.list}>Donate</div>
                        <div className={styles.list}>Support</div>
                    </div>
                </Grid>
                <Grid item xs="auto">
                    <div className={`${styles.thirdColumn} ${styles.column}`}>
                        <div className={styles.title}>About Bid NFTs</div>
                        <div className={styles.list}>We're the best platform to use</div>
                        <div className={styles.inputContainer}>
                            <input type="text" placeholder="Sign up Email" />
                            <img className={styles.submitButton} src="/blue-submit-button.png" alt="submit-button"/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;