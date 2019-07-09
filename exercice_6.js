let myStr = `         Hello wOrld! \n fOObar!   \n pomme orange    `;
myStr = myStr.replace( 'orange', 'verte');
var sousChaine = myStr.split('\n')

sousChaine.forEach((val,index)=>{
    sousChaine[index] = val.trim()
})
myStr = (sousChaine[0].concat(', ',sousChaine[1],', ',sousChaine[2])).toLowerCase()


console.log(myStr.length);
console.log(myStr);