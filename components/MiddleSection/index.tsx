import React from "react";
import styles from './MiddleSection.module.scss';
import { Grid } from "@mui/material";


const MiddleSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Grid container>
                    <Grid item xs="auto">
                        <div className={styles.textContainer}>
                            <div className={styles.title}>The Best <br/>NFT on Web <br/>Let's Mint</div>
                            <div className={styles.description}>We specialize in Web3 development services and blockchain revolved <br/>solution for business</div>
                            <div className={styles.actionButton}>Let's get started</div>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.imageContainer}>
                            <img src="/photo-frame.png" alt="photo-frame" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MiddleSection