const express = require('express');
const application = express();
const mustache = require('mustache-express');

application.engine('mustache', mustache());
application.set('views', './views');
application.set('view engine', 'mustache');

application.get('/', (request, response) => {

});

application.listen(3000, () => {
  console.log('listening on port 3000');
});
