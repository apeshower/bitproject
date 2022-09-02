import React, {useState, useEffect} from 'react';
import styles from './TopTrendingList.module.scss';
import { Grid } from '@mui/material';

const TopTrendingList = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        console.log(width);
    }, [width])

    const TrendingItem = [
        {
            id: 1,
            name: 'Bored Ape Yatch Club',
            stat: '516,879',
            image: '/top-trending-list-1.png'
        },
        {
            id: 2,
            name: 'DeGods',
            stat: '494,909',
            image: '/top-trending-list-2.png'
        },
        {
            id: 3,
            name: 'Azuki',
            stat: '467,020',
            image: '/top-trending-list-3.png'
        },
        {
            id: 4,
            name: 'Finiliar',
            stat: '398,929',
            image: '/top-trending-list-4.png'
        },
        {
            id: 5,
            name: 'Projectcrak',
            stat: '389,383',
            image: '/top-trending-list-5.png'
        },
        {
            id: 6,
            name: 'MoonPudgy',
            stat: '350,020',
            image: '/top-trending-list-6.png'
        },
        {
            id: 7,
            name: 'Lady Ape Club',
            stat: '330,202',
            image: '/top-trending-list-7.png'
        },
        {
            id: 8,
            name: 'Mutant Ape Yatch Club',
            stat: '321,020',
            image: '/top-trending-list-8.png'
        },
        {
            id: 9,
            name: 'Art Blocks Curated',
            stat: '315,302',
            image: '/top-trending-list-9.png'
        },
    ]

    const TopTrendingItem = () => {
        return (
            <div className={styles.topTrendingWrapper}>
                <Grid container>
                    { width <= 425 ?
                        TrendingItem.slice(0, 3).map((item: any) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <div className={styles.topTrendingContainer}>
                                        <div className={styles.number}>{item.id}</div>
                                        <img src={item.image} />
                                        <div className={styles.name}>
                                            <div className={styles.title}>{item.name}</div>
                                            <div className={styles.stat}>{item.stat}</div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    : width <= 768 ?
                        TrendingItem.slice(0, 6).map((item: any) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <div className={styles.topTrendingContainer}>
                                        <div className={styles.number}>{item.id}</div>
                                        <img src={item.image} />
                                        <div className={styles.name}>
                                            <div className={styles.title}>{item.name}</div>
                                            <div className={styles.stat}>{item.stat}</div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    : 
                    TrendingItem.map((item: any) => {
                        return (
                            <Grid item xs={12} sm={6} md={'auto'} key={item.id}>
                                <div className={item.id === 3 || item.id === 6 || item.id === 9 ? `${styles.lastGrid} ${styles.topTrendingContainer}`: `${styles.grid} ${styles.topTrendingContainer}`}>
                                    <div className={styles.number}>{item.id}</div>
                                    <img src={item.image} />
                                    <div className={styles.name}>
                                        <div className={styles.title}>{item.name}</div>
                                        <div className={styles.stat}>{item.stat}</div>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </div>
        )
            
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.mainHeading}>Top Trending Collections Over Last 7 Days</div>
                <TopTrendingItem />
            </div>
        </div>
    )
}

export default TopTrendingList