
const notesDesEleves = [10, 20, 4, 10, 3, 1, 0, 11, 8, 18, 15, 20, 20];

function correcteur(note){
    if (note <= 19.5){
        note = note + 0.5
    }
    note = note/2
    return note
}
    const notesCorrigee = notes.map(correcteur)
    const somme = notesCorrigee.reduce((acc,curr) => acc + curr);
    


console.log(somme/notes.length);