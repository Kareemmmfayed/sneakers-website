import React, { useState } from 'react'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'


const imgs = [img1, img2, img3, img4]

const Landing = () => {
    const [myImg, setMyImg] = useState(img1)
    return (
        <div className='landing'>
            <div className='toHide'>
                <Slide>
                    {imgs.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt='pic' className='myImg'/>
                        </div>
                    ))}
                </Slide>
            </div>
            <div className='desk'>
                <div className='pics'>
                    <img src={myImg} alt='First sneaker' className='big' />
                    <ul>
                        <li onClick={() => setMyImg(img1)}> <img src={img1} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img2)}> <img src={img2} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img3)}> <img src={img3} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img4)}> <img src={img4} alt='sneaker'/> </li>
                    </ul>
                </div>
                <div className='data'>
                    <span>sneaker company</span>
                    <h1>Fall limited edition sneakers</h1>
                    <p>These low-profile sneakers are your perfect caual wear companion. Featuring a durable rubber outer sole, They'll
                        withstand anything the weather can offer.
                    </p>
                </div>
                <div className='price'>
                    
                </div>
            </div>  
        </div>
    )
}

export default Landing