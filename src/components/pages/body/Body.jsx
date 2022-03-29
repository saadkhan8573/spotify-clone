import React from 'react'
import Header from './header/Header'
import { useDataLayerValue } from '../../../datalayer/Datalayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './songrow/SongRow';

const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log("discover_weekly", discover_weekly, "discover_weekly")
    return (
        <>
            <div style={{ flex: '0.8', background: "linear-gradient(rgb(91,87,115),rgba(0,0,0,1))" }} className="border border-black min-h-screen text-white p-8" >
                <Header spotify={spotify} />
                <div className="flex items-end gap-3">
                    {discover_weekly && <img src={discover_weekly.images[0].url} alt="Weekly" className="w-44 h-44 shadow-2xl" />}
                    <div className="flex-1">
                        <strong>Playlist</strong>
                        <h2 className="text-4xl font-bold">Discover Weekly</h2>
                        <p className="text-sm">{discover_weekly?.description}</p>
                    </div>
                </div>
                <div className="my-7">
                    <div className="flex items-center gap-4">
                        <PlayCircleFilled style={{ fontSize: '67px' }} className="transform hover:scale-110" />
                        <Favorite />
                        <MoreHoriz />
                    </div>
                    {discover_weekly?.tracks?.items.map((item) => {
                        return(<>
                            <SongRow track={item.track} />
                        </>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Body
