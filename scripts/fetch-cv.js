const fs = require('fs');
const mkdirp = require('mkdirp');
const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/johndi9/PersonalCV/master/curriculum/en.json')
  .then(res => res.json())
  .then(d => {
    writeFile('./src/assets/json', JSON.stringify(d))
    writeFile('./dist/assets/json', JSON.stringify(d))
  });

const writeFile = async (path, content) => {
  await mkdirp(path);
  await fs.writeFileSync(path + '/en.json', content);
}
