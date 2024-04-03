import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import CarouselItems from './data/carouselItems.json'

export default function CarouselSlide()
{
  return (
    <Carousel>
      {
          CarouselItems.map( item => <Item key={item.id} item={item} /> )
      }
    </Carousel>
  )
}