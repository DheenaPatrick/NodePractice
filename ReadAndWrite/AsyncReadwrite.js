const fsPromise = require('fs').promises;
const path = require('path');
console.log(__dirname);
readAndWrite();
async function readAndWrite() {
  try {
    const data = await fsPromise.readFile(path.join(__dirname,'starter.txt'), 'utf-8');
    console.log(data);
    await fsPromise.unlink(path.join(__dirname,'starter.txt') );
    await fsPromise.writeFile(path.join(__dirname,'newWrite.txt'), data);
    await fsPromise.appendFile(path.join(__dirname,'newWrite.txt'), '\n\nhey, I am new data');
    await fsPromise.rename(path.join(__dirname,'newWrite.txt'), 'newName.txt');
   
  } catch (err) {
    console.error(err);
  }
}

