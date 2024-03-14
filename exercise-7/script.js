const fig = require('figlet')

fig('Ciao a tutti !' , function(data, err){
    if(err){
        console.log(err);
    }
    console.log(data);
})