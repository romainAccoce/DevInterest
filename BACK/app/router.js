const {Router} = require('express');
const checkJwt = require('./middlewares/checkJwt');

const cardController = require('./controllers/cardController');
const userController = require('./controllers/userController');
const bookmarksController = require('./controllers/userBookmarks');
const fetchUrlController = require('./controllers/fetchUrlController');
const contributorController = require('./controllers/contributorController');

const router = Router();

//CARDS
//liste de toutes les cartes, paginées par 30 dans l'ordre chronologique descendant
router.get('/cards', cardController.findAllCards);
//ajout d'une carte
    //1. renseigner l'URL et fetcher les infos open graph
    router.post('/cards',checkJwt, fetchUrlController.findUrl);
    //2. remplir le formulaire et envoyer au back
    router.post('/cards/save',checkJwt, cardController.save);
//modification d'une carte
router.put('/contributor/cards/:id',checkJwt, contributorController.update);
// DELETE carte
router.delete('/cards/:id/users', checkJwt, contributorController.deleteCardById);

//résultat de recherche
router.get('/cards/search?',cardController.findQueryAllCards);

// VOIR les cartes en favoris
router.get('/users/:id/bookmarks',checkJwt, bookmarksController.findBookmarksByUserId);
// Ajout d'une carte en favoris
router.post('/cards/:id/bookmarks',checkJwt, bookmarksController.addBookmarkById);
//Delete une carte des favoris
router.delete('/users/:id/bookmarks/:id',checkJwt, bookmarksController.deleteBookmarkById);

// voir les cartes crées
router.get('/contributor/cards', checkJwt, contributorController.findByContributor);

//USERS by id
router.get('/users/:id' ,checkJwt, userController.findById);
//DELETE USER BY ID
router.delete('/users/:id' ,checkJwt, userController.deleteUserById);
//modifier un user
router.put('/users/:id' ,/* checkJwt,  */userController.update);

//LOGIN - SIGNUP
router.post('/login', userController.login);
router.post('/signup', userController.signUp);

/**
 * Une route au cas où aucune ne répond
 * 
 */
 router.use((_, response) => response.status(404).json('Endpoint non trouvé'));


module.exports = router;
