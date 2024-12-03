# GRALETTE

## Description
Cette application permet de choisir de manière aléatoire un choix parmis une liste, avec un effet de style.   
Elle a été conçu de base pour permettre de choisir une destination culinaire les mardi.
  
## Technique
Cette V1 est techniquement très accessible: 
- VueJS non compilé
- CSS
- Enregistrements des choix en localStorage pour de la persistence

## Réutilisation
Il est possible de reprendre ce projets pour le réutiliser, pour de l'attribution de tickets par exemple. Les fichiers à modifiers sont les suivants:
- ``Index.html`` pour modifier le titre, sous-titre et nom du bouton de lancement
- ``js/roulette.js`` pour modifier ```ListeGrasse``` qui contient les choix par défaut de la roulette (attention: seront toujours chargé ceux en localStorage en priorité. Il vaut mieux tester en navigation privé)
- ``css/style.css`` pour tout changement de couleur, police, etc.


## Licence

![Mon avis sur les licences](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/800px-Karl_Marx_001.jpg)