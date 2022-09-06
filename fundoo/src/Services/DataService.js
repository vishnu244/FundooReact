import axios from "axios";

let header = {
    headers:{
        Authorization : localStorage.getItem('token')
    }
}


export const getNotes = () => {
    // let response = axios.post('http://127.0.0.1:8000/api/jointables',header);
    let response = axios.get('http://127.0.0.1:8000/api/displayNotes',header);
    return response;
}

export const addColor = (colorNotesObj) => {
    let response = axios.post('http://127.0.0.1:8000/api/colorNoteById', colorNotesObj, header);
    return response;
}

export const trashNotes = (trashNotesObj) => {
    let response = axios.post('http://127.0.0.1:8000/api/TrashNotesById', trashNotesObj, header);
    return response;
}

export const archiveNotes = (archiveNotesObj) => {
    let response = axios.post('http://127.0.0.1:8000/api/ArchieveNotesById', archiveNotesObj, header);
    return response;
}

export const addNote = (noteObj) => {
    let response = axios.post('http://127.0.0.1:8000/api/Notes', noteObj, header);
    return response;
}

export const updateNotes = (updateNotesObj) => {
    let response = axios.post('http://127.0.0.1:8000/api/updateNotes/{id}', updateNotesObj, header);
    return response;
}

