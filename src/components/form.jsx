import React from 'react'

function Form() {

    return(
        <form action="submit" id="generator-form">

            <div className="form-line">
                
                <label htmlFor="">Second Line
                    <input type="text" name="first-line-input" id="first-line-input"/>
                </label>
                    
                    <label htmlFor="">First Line
                        <input type="text" name="second-line-input" id="second-line-input"/>
                    </label>
            </div>
            <button type="submit">Generate</button>
        </form>
    )

}

export default Form