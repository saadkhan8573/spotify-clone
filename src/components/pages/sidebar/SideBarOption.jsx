import React from 'react'

const SideBarOption = ({ title, Icon }) => {
    return (
        <>
            <div className="text-gray-600 h-10 cursor-pointer transition-all hover:text-white flex items-center gap-3 pl-3">
                {Icon && <p className="">{Icon}</p> }
                {Icon ? <h4 className="text-lg"> {title} </h4> : <p> {title} </p>}
            </div>
        </>
    )
}

export default SideBarOption
