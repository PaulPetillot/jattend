import React from 'react'

export const SingleResto = ({ name, link, picture }) => {
    return (
        <div className='single-restaurant'>
            <a rel="noopener noreferrer" target='_blank' href={link}>
                <div className='resto-image' style={{ backgroundImage: `url(${picture})` }} />
                <h3>{name}</h3>
            </a>
        </div>
    )
}
