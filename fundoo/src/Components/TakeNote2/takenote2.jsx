import React from 'react'
import './takenote2.css'
import ColorPopper from '../ColorPopper/ColorPopper';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { addNote } from '../../Services/DataService';

function TakeNote2(props) {
  const [ noteObj,  setNoteObj ] = React.useState({Title:" ", Description:" ",color:" ", archive:false})
  const takeTitle = (event) => {
    setNoteObj((prevState) => ({ ...prevState, Title: event.target.value }));

  }
  const takeDescription = (event) => {
    setNoteObj((prevState) => ({ ...prevState, Description: event.target.value }));
  }

  const ListenToPopper = (color) => {
    setNoteObj((prevState) => ({ ...prevState, color: color}));

  }
  
  const onClose = async () => {
     let response = await addNote(noteObj);
    console.log(response)
    // addNote(noteObj).then((response) => {console.log(response)}).catch((error)=>{console.log(error)}) //------------
    //  addNote(noteObj).then(() => props.listenToTakeNote2(false)).catch(()=>{props.listenToTakeNote2(false)}) //------------

  }

  const handleArchhive = () => {
    setNoteObj((prevState) => ({ ...prevState, archive: true}));
  }
  return (
    <div>
      <div class="Note2Container" style = {{backgroundColor : noteObj.color}}>
        <div className="Note2Title">
          <input style = {{backgroundColor : noteObj.color}} placeholder="Title" onChange={takeTitle} />
          <PushPinOutlinedIcon style={{ width: "33px", height: "28px", color: "black", cursor: "pointer" }} />
        </div>
        <div className="Note2Text">
          <textarea style = {{backgroundColor : noteObj.color}} placeholder="Take a note..." onChange={takeDescription}></textarea>
        </div>
        <div className="Note2footer">
          <div className="notes2icons">
            <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
            <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
            {/* <PaletteOutlinedIcon style={{ cursor: "pointer" }} /> */}
            <ColorPopper action = "create" ListenToPopper = {ListenToPopper} />
            <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
            <ArchiveOutlinedIcon style={{ cursor: "pointer" }} onClick={handleArchhive}/>
            <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
            <UndoRoundedIcon style={{ cursor: "pointer" }} />
            <RedoRoundedIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="close" >
            <button onClick={onClose} style = {{backgroundColor : noteObj.color}}>close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeNote2
