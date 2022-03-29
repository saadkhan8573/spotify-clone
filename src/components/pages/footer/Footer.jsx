import { Grid, Slider } from '@material-ui/core'
import { PauseCircleOutline, PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import React, { useState } from 'react'

const Footer = () => {
    const [pauseIcon, setPauseIcon] = useState(false)
    return (
        <>
            <div style={{ backgroundColor: '#282828' }} className="fixed bottom-0 h-16 p-5 flex justify-between w-full">
                <div style={{ flex: '0.3' }} className="flex items-center text-white w-72 mr-5" >
                    <img src="./images/PlaylistCover.jpg" alt="PlaylistCover" className="w-12 h-12 object-contain mr-5" />
                    <div className="">
                        <h4 className="text-lg font-sans font-bold">Title</h4>
                        <p className="text-sm font-sans">Details</p>
                    </div>
                </div>
                <div style={{ flex: '0.4' }} className="max-w-lg center px-24 text-white flex justify-between items-center">
                    <Shuffle className="trtransition-allansition-all text-green-800 transform  hover:scale-125" />
                    <SkipPrevious className="transition-all transform  hover:scale-125" />
                    {
                        pauseIcon ? <PauseCircleOutline onClick={() => setPauseIcon(false)} className="transition-all transform  hover:scale-125" />
                            :
                            <PlayCircleOutline onClick={() => setPauseIcon(true)} className="transition-all transform  hover:scale-125" />
                    }
                    <SkipNext className="t ransition-alltransform  hover:scale-125" />
                    <Repeat className="transition-all text-green-800 transform  hover:scale-125" />
                </div>
                <div style={{ flex: '0.3' }} className="right">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlay />
                        </Grid>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Footer
