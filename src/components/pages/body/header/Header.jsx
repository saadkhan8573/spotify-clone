import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../../../../datalayer/Datalayer'

const Header = ({ spotify }) => {
    const [{user},dispatch] = useDataLayerValue();
    return (
        <>
            <div className="flex justify-between mb-7">
                <div className="bg-white text-gray-600 rounded-3xl flex items-center p-2.5">
                    <Search />
                    <input type="text" placeholder="Search for Artists," name="" id="" className="outline-none w-full" />
                </div>
                <div className="flex items-center">
                    <Avatar src={user?.images[0]?.url} alt="RQ"/>
                    <h4 className="ml-2.5">Saad Khan</h4>
                </div>
            </div>
        </>
    )
}

export default Header
