import React from 'react'
import Body from './body/Body'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'

const Player = ({spotify}) => {
    return (
        <>
            <div>
                <div className="flex">
                    <Sidebar/>
                    <Body spotify={spotify} />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Player
