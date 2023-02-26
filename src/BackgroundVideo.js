import React from "react";
import backgroundVideo from './EarthSpinning.mp4'

class BackgroundVideo extends React.Component {
    render () {
        return (
            <div>
                <video id='video' autoPlay="autoplay" loop="loop" muted  >
                    <source src={backgroundVideo} type="video/mp4" ></source>
                </video>
            </div>
        )
    }
}

export default BackgroundVideo