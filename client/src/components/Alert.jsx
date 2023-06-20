import React, { useEffect } from 'react'
import './Alert.css'

function Alert({ type = 'success', message = "this is message" }) {
    const bgColor = {
        success: '#48D583',
        danger: '#EF233C',
        info: '#EDF2F4'
    }

    useEffect(() => {
        const alertCont = document.querySelector('.alert-container');
        // const snake = document.querySelector('.snake');
        // snake.classList.add('active')
        alertCont.classList.add('active');
        setTimeout(() => {
            alertCont.classList.remove('active');
            // snake.classList.remove('active');
        }, 6000);
    }, [])

    return (
        <div className='alert-container' >
            <div
                className="alert"
                style={{
                    background: bgColor[type],
                }}>
                {message}
            </div>
            {/* <div className="snake"></div> */}
        </div>
    )
}

export default Alert