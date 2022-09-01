import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/header'
import TakeNote1 from '../../Components/TakeNote1/takenote1'
import TakeNote2 from '../../Components/TakeNote2/takenote2'
import TakeNote3 from '../../Components/TakeNote3/takenote3'

import './Dashboard.css'
import { getNotes } from '../../Services/DataService'
import MiniDrawer from '../../Components/Drawer/Drawer'

function Dashboard() {
  const [view, setview] = useState(true)
  const [notes, setNotes] = useState([])
  const [drawer, setDrawer] = useState(false)
  const [currentNotes, setCurrentNotes] = useState("Notes")
  const notesarray = notes.map(note => (<TakeNote3 note={note} />))

  useEffect(() => {
    getNotes().then((response) => {
      console.log(response)
      let filterArray = response.data.success.filter((note) => {
        if (currentNotes == "Notes") {
          if (note.archive == false && note.Trash == false) {
            return note
          }
        }
        if (currentNotes == "Archive") {
          if (note.archive == true && note.Trash == false) {
            return note
          }
        }
        if (currentNotes == "Trash") {
          if (note.archive == false && note.Trash == true) {
            return note
          }
        }
      })
      {
        console.log(response);
        // setNotes(response.data.success) 
        setNotes(filterArray)
      }
    })
    .catch(error => {console.log(error)})
  }, [currentNotes])

  function listenToTakeNote1() {
    setview(false)
  }

  const listenToHeader = () => {
    setDrawer(!drawer)
  }

  const listenToDrawer = (data) => {
    setCurrentNotes(data)
    // console.log(data)
  }



  return (
    <div>
      <Header listenToHeader={listenToHeader} />
      <MiniDrawer drawer={drawer} listenToDrawer={listenToDrawer} />
      {
        view ? <TakeNote1 listenToTakeNote1={listenToTakeNote1} /> : <TakeNote2 />
      }
      <div className='NotesArray' >
        {
          notesarray
        }

      </div>
    </div>
  )
}

export default Dashboard