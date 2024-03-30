const express = require('express');


const app = express();
const port = 7069;


app.listen(port, () => {
	console.log('Listening, port ' + port);
});