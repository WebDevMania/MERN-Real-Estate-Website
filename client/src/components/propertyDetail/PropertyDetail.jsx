import React from 'react'
import classes from './propertyDetail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { request } from '../../util/fetchAPI'

const PropertyDetail = () => {
  const [propertyDetail, setPropertyDetail] = useState(null)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/find/${id}`, "GET")
        setPropertyDetail(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetails()
  }, [id])

  console.log(propertyDetail)

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {/* img here of the property */}
      </div>
      <div className={classes.right}>
        <h2 className={classes.title}></h2>
        <p className={classes.desc}></p>
        <span className={classes.price}></span>
      </div>
    </div>
  )
}

export default PropertyDetail