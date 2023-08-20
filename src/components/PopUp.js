import React from 'react'


const PopUp = (props) => {
    return (
        <div>
            <div className='pop-overlay'></div>
            <div className='pop-up'>
                <img src={props.myImg} alt='sneaker' />
                <span onClick={() => props.setPopUp(!props.popUp)}> X </span>
            </div>
        </div>
    )
}

export default PopUp