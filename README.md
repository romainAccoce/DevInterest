# DEV INTEREST

DEV INTEREST est un projet de fin de formation développé en équipe de 4 élèves développeurs (2 développeurs front-end, 2 développeurs back-end) sur 4 sprints d'une semaine en méthodologie Scrum.

- 1 semaine de préparation (gestion de projet),
- 2 semaines de développement,
- 1 semaine de finitions

Il a été présenté en direct sur [Youtube](https://www.youtube.com/watch?v=jrl_DBlTLyM&t=425s) : 8 min de présentation suivies de 7 min de questions / réponses.

## PRESENTATION DU PROJET

DEV Interest est une plateforme permettant d'enregitrer ses liens autour du développement web et mobile en les transformant en banque de ressources présentées sous forme de cartes visuelles vers des contenus à déstination des développeurs. Ces cartes sont des liens vers des ressources diverses (astuces, tutos, inspiration, outils, plateformes de challenges, ...) aux formats variés (articles, vidéos, jeux...).

Le projet veut rendre l'accès aux contenus autour du développement accessible au plus grand nombre en créant une communauté basée sur le partage et en spécifiant des catégories permettant de s'y retrouver.

### La problématique

Au cours de son apprentissage du développement web, un développeur se retrouve rapidement avec un grand nombre de liens l'intéressant sans avoir de méthode optimale pour visualiser ces derniers et les retrouver facilement.

Par ailleurs, le développement web est tellement vaste et en perpétuelle évolution qu'il peut s'avérer difficile de faire son choix parmi un éventail infini de ressources éparpillées sur une multitudes de plateformes différentes.

### La solution

L'objectif principal du site est de permettre aux utilisateurs de sauvegarder des contenus sous forme de liens, de les organiser (par technologie, par catégorie et par difficulté) en un seul endroit et de pouvoir les partager.

La plateforme permet ainsi de :

- conserver ces liens rapidement dans un espace privé,
- les organiser par listes de favoris selon son envie (sera l'objet d'une V2),\*
- partager ces ressources publiquement avec la communauté.

Ce système offre par la même occasion à tous les visiteurs, connectés ou non, la possibilité de découvrir des liens vers d'autres ressources qui peuvent les inspirer ou leur être utiles.

L'objectif secondaire est de rendre la recherche de nouveau contenu pour les developpeurs plus agréable, intuitive et accessible.

## STACK TECHNIQUE

### Front-end

- [React](https://fr.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/fr/)
- [Sass](https://sass-lang.com/)
- [Semantic UI](https://semantic-ui.com/)

La partie front a été déployée sur [surge](https://devinterest.surge.sh/)

### Back-end

- [Node.js](https://nodejs.org/en/download/) (v12 ou supérieure)
- [Express](https://expressjs.com/fr/)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 ou supérieure)
- [Sqitch](https://sqitch.org/download/) (v1 ou supérieure) pour la gestion des migrations
- [Git](https://git-scm.com/downloads) pour le versionning

L'API a été déployée sur [Heroku](https://devinterest.herokuapp.com/cards).
