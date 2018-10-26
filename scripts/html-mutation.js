const replace = require('replace-in-file');
const fs = require('fs');
const folderPath = './dist';
const getOptions = ({from, to}) => ({files: `${folderPath}/index.html`, from, to});

const mutateHtml = (options) => replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

const mutateTemplate = () => fs.readdir(folderPath, (err, files) => {
  const getScriptFont = ({name, ext}) => `<link rel="preload" as="font" href="${name}.${ext}" type="font/${ext}" crossorigin />`;
  const getScriptCss = ({name}) => `<link rel="preload" href="${name}.css" as="style" />`;
  const scriptsString = files.map(fileName => {
    const [name, uuid, ext] = fileName.split('.');
    const fullName = `${name}.${uuid}`
    if (['woff', 'woff2', 'ttf', 'eot'].includes(ext)) return getScriptFont({name: fullName, ext});
    if ('css' === ext) return getScriptCss({name: fullName});
  }).join('');

  mutateHtml(getOptions({
    from: [/<script /g, '<preload-links></preload-links>'],
    to: ['<script defer ', scriptsString]
  }));
})

mutateTemplate();
