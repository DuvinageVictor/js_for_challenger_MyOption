function Eleve(nom) {
    this.nom = nom;
    this.scolariser = Math.random() > 0.5;
    if (this.scolariser) {
        this.noteMoyenne = Math.floor( Math.random() * 20 ) + 1;
    }
}

const eleves = [
    new Eleve("Thomas"),
    new Eleve("Alexandre"),
    new Eleve("Irvin"),
    new Eleve("Anthony"),
    new Eleve("Mark"),
    new Eleve("Bobby"),
    new Eleve("Martin"),
    new Eleve("Henry")
];

console.log(eleves)
let moyenneClasse = 0 
let elevesScolarise = []
let elevesNonScolarise = []
eleves.forEach((value) => {
    if(value.scolariser){
        moyenneClasse += value.noteMoyenne
        elevesScolarise.push(value)
        
         
    }
    else{
        elevesNonScolarise.push(value)
    }
    
})
if(elevesScolarise.length > 0 ){
    elevesScolarise = elevesScolarise.sort((a,b)=>{a.noteMoyenne - b.noteMoyenne})
}

console.log(moyenneClasse/elevesScolarise.length)
console.log(elevesScolarise)
console.log(elevesNonScolarise)