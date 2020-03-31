const PORT = 8080;
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, 'build')));
app.use('/top-20-viewed-news', express.static(path.join(__dirname, 'build')));
// app.get('/top-20-viewed-news', (_, res) => {
//     return res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use('/api', async (_, res) => {
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
