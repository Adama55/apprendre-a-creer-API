const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({
        massage : ' voila requete fonctionne bien'
    });
});

module.exports = app;
