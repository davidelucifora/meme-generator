import React from 'react'


function Meme(props) {
    return(
        <div id="meme-generator">
            <img src={props.imgUrl} id="meme-image"/>
        </div>
    )
}

export default Meme