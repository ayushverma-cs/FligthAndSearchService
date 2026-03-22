const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    //create express app
    const app = express();
    const PORT =3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(process.env);
    });
}
setupAndStartServer();