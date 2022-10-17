import yargs from "yargs"
import { hideBin } from 'yargs/helpers'
import * as notes from "./utils/notes.js"
const y = yargs(hideBin(process.argv))

// --- ADD COMMAND ----
y.command({
    command: 'add',
    describe: 'Have Jenkins add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
// --- REMOVE COMMAND ----
y.command({
    command: 'remove',
    describe: 'Have Jenkins remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// --- READ COMMAND ----
y.command({
    command: 'read',
    describe: 'Have Jenkins read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
// --- LIST COMMAND ----
y.command({
    command: 'list',
    describe: 'Have Jenkins list all notes',
    handler() {
        notes.listNotes()
    }
})

y.parse()