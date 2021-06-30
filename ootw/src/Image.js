import './Image.css'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const Image = props => {

    const { image } = props
    const [description, setDescription] = useState(false)
    const [title, SetTitle] = useState(false)

    const toggleDescription = () =>{
        setDescription(!description)
        SetTitle(!title)
    }

    let buttonTitle = title ? "Close Description" : "View Description"

    //<img src={image.url} alt={image.explaination}
    // https://youtu.be/q9ZCBR-onRw
    return (
        <div className="Image">
            <h2>Name:<br></br>{image.title}</h2>
            <div classname="imgContainer">
                <ReactPlayer className="player" url={image.url} playing={true} loop={true}/>
            </div>
        
            <div>
                {
                    description ?
                    <div>
                        <h2>Description:</h2>
                        <p>{image.explanation}</p>
                    </div>
                    : null
                }
                <button onClick={() => toggleDescription()}>{buttonTitle}</button>
            </div>
            
        </div>
    )
}

export default Image
