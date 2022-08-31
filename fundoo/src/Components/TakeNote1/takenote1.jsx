import React from 'react'
import './takenote1.css'

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNote1(props) {
    return (
        <div onClick={() => props.listenToTakeNote1()} >
            <div class="Note1Container">
                <div class="Note1Text">
                    <input type="text" placeholder="Take a note..."  ></input>
                </div>
                <div class="Note1icon">
                    <CheckBoxOutlinedIcon style={{ width: "33px", height: "33px", color: "grey", cursor: "pointer" }} />
                    <BrushOutlinedIcon style={{ width: "33px", height: "33px", color: "grey",cursor: "pointer" }} />
                    <ImageOutlinedIcon style={{ width: "33px", height: "33px", color: "grey", cursor: "pointer" }} />
                </div>

            </div>
        </div>
    )
}

export default TakeNote1