const fs = require('fs').promises;
const path = require('path');
const { readdir } = require('fs/promises');


const dirInfo = async () => {
    try {
        const files = await readdir(path.join( __dirname, 'secret-folder'), { withFileTypes: true });
        for (const file of files)
        if(file.isFile()){
            const dir = path.join( __dirname, 'secret-folder');
            const fileStats = await fs.stat(`${path.join( dir, `${file.name}`)}`);
            const fileSizeKb = fileStats.size / 1024;
            console.log(
                `Name: ${file.name.replace(path.extname(file.name), '')} | Extension: ${path.extname(file.name)} | Size: ${fileStats.size} Bytes`
            );
        }   
    } catch (err) {
    console.error(err);
    }
}
  
dirInfo();
