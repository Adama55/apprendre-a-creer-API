/**
 emporter le package http
*/
const http = require('http');
const app = require('./app');

/*
on cree une requette avec deux argument 
 */
app.set('port', process.env.PORT || 3000); // dire a app sur quel elle va tourner
const server = http.createServer(app);

/*
on va ecouter le port et par defaut le 3000
 */
server.listen(process.env.PORT || 3000);