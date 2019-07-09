function moyenne(notes){
    const somme = notes.reduce((acc,curr) => acc + curr);
    return Math.floor(somme/notes.length);

}
const notesDesEleves = [10, 20, 5, 10, 3, 1, 0, 11, 8, 18, 15];

console.log('moyenne des notes:', moyenne(notesDesEleves));