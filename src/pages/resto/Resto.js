import React from 'react'
import { SingleResto } from './SingleResto'
import data from '../../restaurantsList.json'

const Resto = () => {
    return (
        <div className='resto'>
             <h1 className='title-resto-page'>
                Les Restaurants A Faire:
            </h1>
            <div className='resto-list'>
                {data.restaurants.map(({ link, picture, name }, i) => (
                    <SingleResto key={i} link={link} picture={picture} name={name} />
                ))}
            </div>
        </div>
    )
}

export default Resto