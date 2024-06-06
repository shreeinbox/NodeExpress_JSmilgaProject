const fs = require('fs');

fs.readFile('./text.txt','utf8', (err, data) => {
    if (err) throw err;
    const result1 = data
    fs.writeFile('./result.txt',`here is the result ${result1}`,(err,result)=>{
        if(err) throw err;
    })
})