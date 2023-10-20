import React from 'react'
import { GalleryData } from '../utils/data'
import { GalleryCard } from '../UI/Cards'

const Gallery = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                {GalleryData.map((item) => (
                    <GalleryCard key={item.id} img={item.img} />
                ))}
            </div>
        </div>
    )
}

export default Gallery