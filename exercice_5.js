const sol = {};
const argv = process.argv.slice(2)

argv.forEach((currentArg,index) => {
    
    
    if (currentArg.substring(0,2) == '--' ){
        
        if (index + 1 == argv.length || argv[index + 1].substring(0,2) == '--'  ){
            argValue = true;
        }
        else{
            argValue = argv[index + 1];
        }
        
        sol[currentArg.substring(2)] = argValue;
    }
    

})
console.log(sol);
