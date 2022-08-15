import React from 'react'
import memeData from './../memeData'
import Meme from './meme'

function Form() {

    const [meme, setMeme] = React.useState({
        topLine : 'Top line',
        bottomLine : 'Bottom Line', 
        imgUrl : 'https://i.imgflip.com/30b1gx.jpg'
    })


    function generateMeme() {

        const topLineInput = document.getElementById('top-line-input')
        const bottomLineInput = document.getElementById('bottom-line-input')

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                topLine : topLineInput.value,
                bottomLine: bottomLineInput.value,
                imgUrl : getRandomImgUrl()
            }
        })

    }


    function getRandomImgUrl() {

        const memeDataArray = memeData.data.memes
        const randomIndex = Math.floor(Math.random() * memeDataArray.length)
        return memeDataArray[randomIndex].url

    }



    return(
        <div>
        <form action="submit" id="generator-form">

            <div className="form-line">
                
                <label htmlFor="">Second Line
                    <input type="text" name="top-line-input" id="top-line-input"/>
                </label>
                    
                    <label htmlFor="">First Line
                        <input type="text" name="bottom-line-input" id="bottom-line-input"/>
                    </label>
            </div>
            <button type="button" onClick={generateMeme}>Generate</button>
        </form>
        <Meme 
        imgUrl={meme.imgUrl}
        topLine = {meme.topLine}
        bottomLine = {meme.bottomLine} />
        </div>
    )

}

export default Form