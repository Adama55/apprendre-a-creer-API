/**
 emporter le package http
*/
const http = require('http');

/*
on cree une requette avec deux argument avec req et res
 */
const server = http.createServer((req, res) => {
    res.end('voila la reponse du serveur !');
});

/*
on va ecouter le port et par defaut le 3000
 */
server.listen(process.env.PORT || 3000);