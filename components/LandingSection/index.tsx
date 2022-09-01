import React from "react"
import styles from './LandingSection.module.scss'
import { Grid } from "@mui/material"

const LandingSection = () => {

  const MainHeading = () => {
    return (
      <div className={styles.mainHeading}>Discover, collect, and sell Digital Art</div>
    )
  }

  const PlaceBidButton = () => {
    return (
      <div className={styles.placeBidButton}>
        <div className={styles.text}>Place Bid</div>
        <img src="/long-white-arrow.png"/>
      </div>
    )
  }

  const ImageSection = () => {
    return (
      <div className={styles.imageSectionContainer}>
        <Grid container >
          <Grid item xs className={styles.desktopCertify}>
            <div className={styles.certifyContainer} style={{justifyContent: 'end'}}>
              <img src="/certify-purple.png" alt="certify-1" />
              <div className={styles.text}>NFT Place Bid <br/>Certified NFT<br/>Certified Place Bid</div>
            </div>
          </Grid>
          <Grid item xs={12} sm="auto">
            <div className={styles.nftImageContainer}>
              <img src="/nft-frame.png" alt="nft-frame"/>
            </div>
          </Grid>
          <Grid item xs className={styles.desktopCertify}>
            <div className={styles.certifyContainer}>
              <img src="/certify-white.png" alt="certify-2" />
              <div className={styles.text}>NFT Place Bid <br/>Certified NFT<br/>Certified Place Bid</div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.wrapper}>
          <div className={styles.mobileContainer}>
            <div className={styles.mobileCertify}>
              <div className={styles.certifyContainer} style={{justifyContent: 'end'}}>
                <img src="/certify-purple.png" alt="certify-1" />
                <div className={styles.text}>NFT Place Bid <br/>Certified NFT<br/>Certified Place Bid</div>
              </div>
            </div>
            <div>
              <div className={styles.certifyContainer}>
                <img src="/certify-white.png" alt="certify-2" />
                <div className={styles.text}>NFT Place Bid <br/>Certified NFT<br/>Certified Place Bid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
        <MainHeading/>
        <PlaceBidButton/>
        <ImageSection/>
    </div>
  )
}

export default LandingSection;