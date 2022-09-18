import React from 'react'
import { IPosts } from '../../styles/types'
import { Card } from '../Card'

export function Posts({ photos }: IPosts) {
  return (
    <div className="flex bg-white w-full justify-center py-16 px-6">
      <div
        className="
      max-w-[90rem] 
      grid grid-cols-4 gap-4 
      lg:grid lg:grid-cols-3 
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
