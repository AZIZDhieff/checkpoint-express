const express = require("express");
const middleware = require("./middleware");
const app = express();
const port = process.env.port || 3000;

// Middleware pour vérifier l'heure de la demande
app.use(middleware.checkTime);

// Définition des fichiers statiques
app.use(express.static("public"));

// Itinéraires
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/accueil.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/views/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", "./views");
