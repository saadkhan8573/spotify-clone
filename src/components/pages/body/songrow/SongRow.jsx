import React from 'react'

const SongRow = ({track}) => {
    console.log(track)
    return (
        <>
            <div className="ml-5 p-3 flex items-center gap-4 text-white hover:cursor-pointer hover:bg-black hover:opacity-70">
                <img src={track?.album?.images[0]?.url} alt={track.name} className="w-9 h-9" />
                <div>
                    <h1 className="text-lg font-sans"> {track.name} </h1>
                    <p className="text-xs">
                        {track.artists.map(artist => artist.name)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SongRow
