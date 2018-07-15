const replace = require('replace-in-file');
const options = {
  files: './dist/index.html',
  from: /<script /g,
  to: '<script defer ',
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
