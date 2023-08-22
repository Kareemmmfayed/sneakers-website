import React, { useState } from 'react'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import PopUp from './PopUp'


const imgs = [img1, img2, img3, img4]

const Landing = ({final, setFinal, items, setItems}) => {
    const [myImg, setMyImg] = useState(img1)
    const [popUp, setPopUp] = useState(false)
    const [num, setNum] = useState(1)

    const handleChange1 = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const handleChange2 = () => {
        setNum(num + 1)
    }

    const addToCart = () => {
        if (num !== 0) {
            setItems(num)
            setFinal(true)
        }
    }

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
                    <img src={myImg} alt='First sneaker' className='big' onClick={() => setPopUp(!popUp)} />
                    <ul>
                        <li onClick={() => setMyImg(img1)}> <img src={img1} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img2)}> <img src={img2} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img3)}> <img src={img3} alt='sneaker'/> </li>
                        <li onClick={() => setMyImg(img4)}> <img src={img4} alt='sneaker'/> </li>
                    </ul>
                </div>
                <div className='data'>
                    <span className='sneaker'>sneaker company</span>
                    <h1>Fall limited edition sneakers</h1>
                    <p>These low-profile sneakers are your perfect caual wear companion. Featuring a durable rubber outer sole, They'll
                        withstand anything the weather can offer.
                    </p>
                    <div className='price'>
                        <div className='nums'>
                            <span>${(90 * num) / 2}</span>
                            <span>50%</span>
                            <span>${90 * num}</span>
                        </div>
                        <div className='number'>
                            <button onClick={handleChange1}>-</button>
                            <span>{num}</span>
                            <button onClick={handleChange2}>+</button>
                        </div>
                        <button className='add' onClick={addToCart} >Add to cart</button>
                    </div>
                </div>
            </div>  
            {popUp && <PopUp myImg={myImg} popUp={popUp} setPopUp={setPopUp} />}
        </div>
    )
}

export default Landing