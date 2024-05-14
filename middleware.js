const express = require("express");

exports.checkTime = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay(); // 0 pour dimanche, 1 pour lundi, ..., 6 pour samedi
  const hour = date.getHours();

  // Vérification des heures ouvrables (lundi à vendredi, de 9h à 17h)
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 1 && hour < 17) {
    next(); // Continuer vers la prochaine étape
  } else {
    res.send(
      "L'application n'est disponible que pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h)."
    );
  }
};
express.static;
