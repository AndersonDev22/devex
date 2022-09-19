import React from 'react'
import { Card } from '../Card'
import { IPosts } from '../Types'

export function Posts({ photos }: IPosts) {
  return (
    <div className="flex w-full justify-center py-16 px-6 sm:py-4 md:py-16">
      <div
        className="
        max-w-[90rem] gap-4 
        2xl:grid 2xl:grid-cols-4 
        xl:grid xl:grid-cols-3      
        md:grid md:grid-cols-2
        sm:grid sm:grid-cols-1  
        "
      >
        {photos?.length &&
          photos.map((item) => (
            <Card
              key={item.id}
              img_src={item.img_src}
              id={item.id}
              sol={item.sol}
              earth_date={item.earth_date}
              camera={item.camera}
              rover={item.rover}
            />
          ))}
      </div>
    </div>
  )
}
