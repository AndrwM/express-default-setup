const express = require('express');
const application = express();

application.get('/', (request, response) => {
  
});

application.listen(3000, () => {
  console.log('listening on port 3000');
});
