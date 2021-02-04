import React from 'react'
import {Link} from 'react-router-dom'
import './css/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <div className="title"><h4>About US</h4></div>
                            <Link className='footer__link'>Story</Link>
                            <Link className='footer__link'>Clients</Link>
                            <Link className='footer__link'>Testimonials</Link>    
                        
                    </div>
                    <div className="column">
                        <div className="title"><h4>Services</h4></div>
                            <Link className='footer__link'>Marketing</Link>
                            <Link className='footer__link'>Consulting</Link>
                            <Link className='footer__link'>Delivery</Link>    
                        
                    </div>
                    <div className="column">
                        <div className="title"><h4>Our Offices</h4></div>
                            <Link className='footer__link'>Tashkent</Link>
                            <Link className='footer__link'>Samarqand</Link>
                            <Link className='footer__link'>Kokand</Link>    
                        </div>
                    <div className="column">
                        <div className="title"><h4>Social Media</h4></div>
                            <Link className='footer__link'>Instagram</Link>
                            <Link className='footer__link'>Facebook</Link>
                            <Link className='footer__link'>Telegram</Link>    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
