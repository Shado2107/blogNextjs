import React from 'react'
import Image from 'next/image'
import image1 from '../public/assets/image1.jpg'
import image2 from '../public/assets/image2.jpg'
import image3 from '../public/assets/image3.jpg'

export default function galery() {
  return (
    <div>
        <Image layout='responsive' src={image1} width="3680" height="5674" alt='' />
        <Image layout='responsive' src={image2} width="3648" height="5472" alt='' />
        <Image layout='responsive' src={image3} width="3848" height="2565" alt=''/>

        {/* <img src='/assets/image1.jpg' alt=''/>
        <img src='/assets/image2.jpg' alt=''/>
        <img src='/assets/image3.jpg' alt=''/> */}
    </div>
  )
}
