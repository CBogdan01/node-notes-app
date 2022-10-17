import fs from "fs"
import { green, red} from "./chalk.js"

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(green('New note added!'))
    } else {
        console.log(red('Note title taken!'))
    }
}

export const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(green('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(red('No note found!'))
    }
}

export const readNote = (title) => {
    const notes = loadNotes()

    const foundNote = notes.find((note) => note.title === title)

    debugger

    if (foundNote) {
        console.log(green('Your note: '))
        console.log(green(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(red('Note not found!'))
    }

}

export const listNotes = () => {
    const notes = loadNotes()
    console.log(green('Your notes: '))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const  dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}