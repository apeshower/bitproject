import React from 'react';
import styles from './NftList.module.scss';
import { Grid } from "@mui/material";

const NftList = () => {

    const NftItemList= [
        {
            id: 1,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item.png'
        },
        {
            id: 2,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-2.png'
        },
        {
            id: 3,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-3.png'
        },
        {
            id: 4,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-4.png'
        },
        {
            id: 5,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-5.png'
        },
        {
            id: 6,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-6.png'
        },
        {
            id: 7,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-7.png'
        },
        {
            id: 8,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-8.png'
        },
        {
            id: 9,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-9.png'
        },
        {
            id: 10,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-10.png'
        },
        {
            id: 11,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-11.png'
        },
        {
            id: 12,
            nftName: 'Apple Eth 410989 NFT',
            nftOwner: 'djmatoomt12',
            nftCollection: 'Spaceship on mars',
            nftDurationHour: '23',
            nftDurationMin: '46',
            nftDurationSec: '00',
            image: 'nft-item-12.png'
        },

    ]

    const MainHeading = () => {

        
        return (
            <div className={styles.headingContainer}>
                <Grid container>
                    <Grid item xs>
                        <div className={styles.title}>Top Trending NFTs</div>
                    </Grid>
                    <Grid item xs="auto">
                        <div className={styles.actionButton}>
                            View All
                            <img src="/long-white-arrow.png" alt="white-arrow"/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const NftItem = () => {
        return (
            <Grid container columnSpacing={1} >
                { NftItemList.map((item) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={item.id} >
                            <div className={styles.nftItemContainer}>
                                <img className={styles.nftImage} src={item.image} alt="nft-item-0"/>
                                <div className={styles.nftItemDetailContainer}>
                                    <Grid container>
                                        <Grid item xs="auto">
                                            <div className={styles.nftName}>{item.nftName}</div>
                                            <div className={styles.nftOwner}>
                                                <img src="/nft-owner.png" alt="nft-owner" />
                                                <div className={styles.text}>{item.nftOwner}</div>
                                            </div>
                                            <div className={styles.nftCollectionSecondary}>{item.nftCollection}</div>
                                            <div className={styles.nftPrice}>
                                                <img src="/white-eth-logo.png" />
                                                <div className={styles.text}>Place on Bid</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs className={styles.secondColumn}>
                                            <div className={styles.nftCollection}>{item.nftCollection}</div>
                                            <div className={styles.nftDuration}>
                                                <div className={styles.time}>
                                                    <div className={styles.number}>{item.nftDurationHour}</div>
                                                    <div className={styles.text}>Hrs</div>
                                                </div>
                                                <div className={styles.time}>
                                                    <div className={styles.number}>{item.nftDurationMin}</div>
                                                    <div className={styles.text}>Mins</div>
                                                </div>
                                                <div className={styles.time}>
                                                    <div className={styles.number}>{item.nftDurationSec}</div>
                                                    <div className={styles.text}>Secs</div>
                                                </div>
                                            </div>
                                            <div className={styles.nftBidButton}>Place Bid</div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
            
        )
    }
    return (
        <div className={styles.container}>
            <MainHeading/>
            <NftItem/>
        </div>
    )
}

export default NftList