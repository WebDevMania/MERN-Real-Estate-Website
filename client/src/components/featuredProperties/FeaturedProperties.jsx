import React from 'react'
import classes from './featuredProperties.module.css'
import { FaBed, FaSquareFull } from 'react-icons/fa'
import person from '../../assets/person.jpg'
import img1 from '../../assets/estate.jpg'
import img2 from '../../assets/estate2.jpg'
import img3 from '../../assets/estate3.jpg'
import img4 from '../../assets/estate4.jpg'

const FeaturedProperties = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <div className={classes.titles}>
                    <h5>Properties you may like</h5>
                    <h2>Our Featured Properties</h2>
                </div>
                <div className={classes.featuredProperties}>
                    <div className={classes.featuredProperty}>
                        <div className={classes.imgContainer}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.details}>
                            <div className={classes.priceAndOwner}>
                                <span className={classes.price}>$ 390,000</span>
                                <img src={person} className={classes.owner} />
                            </div>
                            <div className={classes.moreDetails}>
                                <span>2 <FaBed className={classes.icon} /></span>
                                <span>80.4 square meters <FaSquareFull className={classes.icon} /></span>
                            </div>
                            <div className={classes.desc}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores doloribus totam quia sit inventore illo! Maiores incidunt, corrupti veritatis repudiandae quaerat, reiciendis expedita ex rem quisquam ab consequuntur pariatur!
                            </div>
                        </div>
                    </div>
                    <div className={classes.featuredProperty}>
                        <div className={classes.imgContainer}>
                            <img src={img2} alt="" />
                        </div>
                        <div className={classes.details}>
                            <div className={classes.priceAndOwner}>
                                <span className={classes.price}>$ 390,000</span>
                                <img src={person} className={classes.owner} />
                            </div>
                            <div className={classes.moreDetails}>
                                <span>2 <FaBed className={classes.icon} /></span>
                                <span>80.4 square meters <FaSquareFull className={classes.icon} /></span>
                            </div>
                            <div className={classes.desc}>
                                Nice house located in Ger....
                            </div>
                        </div>
                    </div>
                    <div className={classes.featuredProperty}>
                        <div className={classes.imgContainer}>
                            <img src={img3} alt="" />
                        </div>
                        <div className={classes.details}>
                            <div className={classes.priceAndOwner}>
                                <span className={classes.price}>$ 390,000</span>
                                <img src={person} className={classes.owner} />
                            </div>
                            <div className={classes.moreDetails}>
                                <span>2 <FaBed className={classes.icon} /></span>
                                <span>80.4 square meters <FaSquareFull className={classes.icon} /></span>
                            </div>
                            <div className={classes.desc}>
                                Nice house located in Ger....
                            </div>
                        </div>
                    </div>
                    <div className={classes.featuredProperty}>
                        <div className={classes.imgContainer}>
                            <img src={img4} alt="" />
                        </div>
                        <div className={classes.details}>
                            <div className={classes.priceAndOwner}>
                                <span className={classes.price}>$ 390,000</span>
                                <img src={person} className={classes.owner} />
                            </div>
                            <div className={classes.moreDetails}>
                                <span>2 <FaBed className={classes.icon} /></span>
                                <span>80.4 square meters <FaSquareFull className={classes.icon} /></span>
                            </div>
                            <div className={classes.desc}>
                                Nice house located in Ger....
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties