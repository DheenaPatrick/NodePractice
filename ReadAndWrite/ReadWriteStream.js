const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'starter.txt'), 'utf-8');
const ws = fs.createWriteStream(path.join(__dirname, 'newWrite.txt'));

rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
})



if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err){
            throw err;
        }
    })
}

if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err){
            throw err;
        }
    })
}
