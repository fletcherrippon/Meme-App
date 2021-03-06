import React from 'react';

function displayMeme(props){
    return (
        <div className="memeRoot">
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <input
                    id="tText"
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={props.state.topText}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={props.state.bottomText}
                    onChange={props.handleChange}
                />
                <button id="submit1">submit</button>
                <br />
                <label>
                    <span> Text Color  </span>
                    <input
                        type="color"
                        name="bottomColor"
                        value={props.state.bottomColor}
                        onChange={props.handleColorChnage}
                    />
                </label>
                <br />
                <label>
                    <span> Border Color  </span>
                    <input
                        type="color"
                        name="bottomBorderColor"
                        value={props.state.bottomBorderColor}
                        onChange={props.handleColorChnage}
                    />
                </label>
                <br />
                <button type="submit">Random</button>
                <p>or</p>
                <button className="cutom-file-upload" type="button" onClick={() => {
                    const input = document.getElementById('file-upload');
                    input.click();
                }}>Upload Your Photo</button>
                <input id="file-upload" type="file" onChange={props.handleFileChange} />
            </form>
            <div className="meme">
                <center>
                    <canvas id="my-canvas" width="568px" height="335px"/>
                </center>
            </div>
        </div>
    )
}

export default displayMeme