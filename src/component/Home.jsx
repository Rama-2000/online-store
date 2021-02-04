import React from 'react'
import banner from './img/man1.jpg'
import './css/Home.css'

function Home() {
    return (
        <div className="home">
            <img  className="home_image" src={banner} alt=""/>
        </div>
    )
}

export default Home