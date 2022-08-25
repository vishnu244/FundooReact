import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/header'
import TakeNote1 from '../../Components/TakeNote1/takenote1'
import TakeNote2 from '../../Components/TakeNote2/takenote2'
import TakeNote3 from '../../Components/TakeNote3/takenote3'

import './Dashboard.css'
import { getNotes } from '../../Services/DataService'

function Dashboard() {
  const [view, setview] = useState(true)
  const [notes, setNotes] = useState([])
  const notesarray = notes.map(note => (<TakeNote3 note={note} />))

  useEffect(() => {
    getNotes().then((response) => { console.log(response); setNotes(response.data.success) })
  }, [])

  function listenToTakeNote1() {
    setview(false)
  }
  return (
    <div>
      <Header />
      {
        view ? <TakeNote1 listenToTakeNote1={listenToTakeNote1} /> : <TakeNote2 />
      }
      <div className='NotesArray' >
        {
          notesarray
        }

      </div>


      {/* <TakeNote1 />
        <TakeNote2 /> */}
    </div>
  )
}

export default Dashboard