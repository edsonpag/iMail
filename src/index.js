const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const router = require('./routes/routes');
const app = express();
const port = 3000;

dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});