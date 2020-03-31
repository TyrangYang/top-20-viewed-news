const PORT = 8080;
const express = require('express');
const axios = require('axios');
var cors = require('cors');

const app = express();
app.use(cors());

app.use('/*', async (_, res) => {
    let private_key = 'CU3gZvAR7Apw1ApR3qU7oVJ3MXqb1Gjp';
    let {
        data: { results }
    } = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${private_key}`
    );
    return res.send(results);
});
app.listen(PORT, () => {
    console.log(`test server start on http://localhost:${PORT}`);
});
