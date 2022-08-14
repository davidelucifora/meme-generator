import React from 'react'
import Form from './form'


function Meme() {
    return(
        <div id="meme-generator">
            <Form />
            <img src="https://source.unsplash.com/random/300×300/" id="meme-image"/>
        </div>
    )
}

export default Meme