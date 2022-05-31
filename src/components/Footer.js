import React from 'react'

const Footer = () => {
    return (
        <div>
            <p className='textmarginBottom'>© {new Date().getFullYear()}{'.'} <a  className="copyrightLink" href="https://www.linkedin.com/in/geekahmed/">Ahmed Mostafa</a> | <a className="copyrightLink"href="https://www.linkedin.com/in/mahmoud-abdallah-hassan-942227185/">Mahmoud Abdallah</a></p>
            <p className='textmarginTop'>All rights reserved.</p>
        </div>
    )
}

export default Footer