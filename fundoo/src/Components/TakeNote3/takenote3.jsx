import React from 'react'
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
    

    // const ListenToPopper = (color) => {
    //     setNoteObj((prevState) => ({ ...prevState, color: color}));
    
    //   }


    return (
        <div >
            <div class="Note3Container" style = {{backgroundColor : props.note.color}}>
                <div class="Note3Title">
                {/* <div style={{border:"1px solid black", height:"100%" ,width:"70%",display:"flex",justifyContent:"flex-start", alignItems:"center"}}> */}
                    <div>
                        {props.note.title}
                    </div>
                    <PushPinOutlinedIcon  />
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

export default TakeNote3