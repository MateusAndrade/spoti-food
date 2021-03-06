/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const app = express(); // create express app

app.use(express.static(__dirname + '/build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log('server started on port 5000');
});
