import React, { useState } from 'react'

const Collections = (props) => {

    const { title, image1, image2, image3, image4, image5, image6 } = props.gentsFashion

    
    return (
        <div className='collectionsSection'>

            <h1 className='ladiesTitle'>{title}</h1>
            <div className='imagessection'>
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
                <img src={image5} alt={title} />
                <img src={image6} alt={title} />
            </div>
            <h1 className='gentsTitle'> Kids Shopping </h1>
            <div className='imagessection'>
                <img src={image6} alt={title} />
                <img src={image3} alt={title} />
                <img src={image5} alt={title} />
                <img src={image4} alt={title} />
                <img src={image1} alt={title} />
                
                <img src={image2} alt={title} />

                


            </div>
        </div>
    )
}

export default Collections
