import React from 'react'
import Navbar from '../../Component/Navbar'
import Hero from '../../Component/Hero'
import videoSrc from '../../Videos/homepage-bg.mp4'

const Homepage = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative z-10">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}

export default Homepage
