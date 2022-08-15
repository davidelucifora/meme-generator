import React from 'react'


function Meme(props) {
    return(
        <div id="meme-generator">
            <h1 className="meme-top-line meme-text">{props.topLine}</h1>
            <img src={props.imgUrl} id="meme-image"/>
            <h1 className="meme-bottom-line meme-text">{props.bottomLine}</h1>
        </div>
    )
}

export default Meme