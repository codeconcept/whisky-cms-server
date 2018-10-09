const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');

app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', api);
app.listen(app.get('port'), () => {
  console.log(`API server listening on port ${app.get('port')}`);
});

