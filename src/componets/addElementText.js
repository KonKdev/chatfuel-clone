import React from 'react'

function AddElementText(props) {
    return (
        <div>
        <div className="card mb-4 box-shadow text-box">
            <div className="flex-column justify-content-between">
                
                <input type="text" placeholder="Enter Text" name="Input" value={props.title} className="form-control" id="cell2Input" />
                <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id="cell2Button" />      
                </div>
            </div>
        </div>
    )
}

export default AddElementText
