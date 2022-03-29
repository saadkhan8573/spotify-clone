import React from 'react'
import { accessUrl } from '../../Spotify';

const Login = () => {
    return (
        <>
            <div className="flex justify-around items-center flex-col h-screen bg-black gap-5">
                <img src="./images/Spotify.jpg" alt="Spotify Logo" className="w-1/4 " />
                <a href={accessUrl}>
                    <button className="bg-green-800 hover:bg-green-900 text-white rounded-2xl px-5 py-2 ">
                        Login with Spotify
                    </button>
                </a>
            </div>
        </>
    )
}

export default Login
