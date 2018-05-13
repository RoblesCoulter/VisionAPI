/*jshint esversion: 6 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

require('./src/routes')(app, {});

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}...`);
});

// app.get()
// app.post()
// app.put()
// app.delete()