import React, { useState } from 'react'
import './takenote3.css'
import ColorPopper from '../ColorPopper/ColorPopper';

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { archiveNotes } from '../../Services/DataService';


function TakeNote3(props) {

    const [viewNote, setViewNote] = useState(true)

    const updateArchive = () => {
        let data = { 
            id : props.note.id
        }
        archiveNotes(data).then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    if(viewNote)
    {
        return (
            <div >
                <div class="Note3Container" onMouseEnter={ () => setViewNote(false)} style = {{backgroundColor : props.note.color}}>
                    <div class="Note3Title">
                        <div>
                            {props.note.title}
                        </div>
                        <PushPinOutlinedIcon style={{ cursor: "pointer" }} />
                    </div>
                    <div class="Note3Text">
                            {props.note.description}                        
                    </div>
                    </div>
                    </div>
        )
    }
    else
    {

        
    return (
        <div >
            <div class="Note3Container" onMouseLeave={ () => setViewNote(true)} style = {{backgroundColor : props.note.color}}>
                <div class="Note3Title">
                    <div>
                        {props.note.title}
                    </div>
                    <PushPinOutlinedIcon style={{ cursor: "pointer" }} />
                </div>
                <div class="Note3Text">
                        {props.note.description}                        
                </div>
                <div class="Note3footer">
                    <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
                    <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
                    <ColorPopper action = "update" id={props.note.id}/>
                    <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
                    <ArchiveOutlinedIcon style={{ cursor: "pointer" }} onClick={updateArchive}/>
                    <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
    }


}

export default TakeNote3