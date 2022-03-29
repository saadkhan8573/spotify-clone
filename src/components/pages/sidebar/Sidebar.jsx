import React from 'react'
import SideBarOption from './SideBarOption'
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from '../../../datalayer/Datalayer';
const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <>
            <div style={{ flex: 0.2 }} className="min-h-screen bg-black text-white px-3 ">
                <img src="./images/spotifyLogo.png" alt="Logo" className="h-20 mr-auto p-2" />
                <SideBarOption Icon={<Home />} title="Home" />
                <SideBarOption Icon={<Search />} title="Search" />
                <SideBarOption Icon={<LibraryMusic />} title="Your Library" />

                <div className="px-3">
                    <br />
                    <p> <strong className="uppercase font-bold text-white text-sm mb-3 border-b border-gray-600">Playlist</strong> </p>
                    <hr className="text-gray-190" />
                </div>

                {
                    playlists?.items?.map((playlist) => (
                        <SideBarOption title={playlist.name} />
                    ))
                }
            </div>
        </>
    )
}

export default Sidebar
