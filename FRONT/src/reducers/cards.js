import { SAVE_CARDS } from "../action/cards";

export const initialState = {
  cards: [{
    "id": 1,
    "slug": "comment-faire-une-base-de-donnees-avec-mongodb-et-manger-des-frites",
    "title": "Comment faire une ",
    "website": "lesnumeriques.com",
    "image": "https://www.mentalhealthtoday.co.uk/media/37238/young-people-diversity-prime.jpg",
    "description": "Super cool ce truc",
    "category": "Apprendre",
    "technos": ["JS", "PHP"],
    "level": "Beginner",
    "media": "Vidéo",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  },
  {
    "id": 2,
    "slug": "comment-faire-une-base-de-donnees-avec-postgres-et-manger-des-moules",
    "title": "Comment faire une base de données avec Postgres et manger des moules",
    "website": "lesnumeriques.com",
    "image": "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz",
    "description": "Super cool ce truc de fou",
    "category": "Approfondir",
    "technos": ["HTML", "CSS"],
    "level": "Intermediate",
    "media": "Article",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  },
  {
    "id": 3,
    "slug": "comment-faire-une-base-de-donnees-avec-mongodb-et-manger-des-frites",
    "title": "Comment faire une base de données avec MongoDB et manger des frites",
    "website": "lesnumeriques.com",
    "image": "https://www.mentalhealthtoday.co.uk/media/37238/young-people-diversity-prime.jpg",
    "description": "Super cool ce truc",
    "category": "Apprendre",
    "technos": ["JS", "PHP", "Mongo", "Python"],
    "level": "Advanced",
    "media": "Vidéo",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"

  },
  {
    "id": 4,
    "slug": "comment-faire-une-base-de-donnees-avec-postgres-et-manger-des-moules",
    "title": "Incroyable cette façon de faire du JS",
    "website": "lesnumeriques.com",
    "image": "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz",
    "description": "Super cool ce truc de fou",
    "category": "Approfondir",
    "technos": ["HTML", "CSS"],
    "level": "Expert",
    "media": "Article",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  },
  {
    "id": 5,
    "slug": "comment-faire-une-base-de-donnees-avec-mongodb-et-manger-des-frites",
    "title": "Comment faire une base de données avec MongoDB et manger des frites et c'est super chouette de voir comment ça se comporte avec ",
    "website": "lesnumeriques.com",
    "image": "https://www.mentalhealthtoday.co.uk/media/37238/young-people-diversity-prime.jpg",
    "description": "Super cool ce truc",
    "category": "Apprendre",
    "technos": ["JS", "PHP"],
    "level": "Beginner",
    "media": "Vidéo",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  },
  {
    "id": 6,
    "title": "Super Sympa",
    "slug": "comment-faire-une-base-de-donnees-avec-postgres-et-manger-des-moules",
    "website": "lesnumeriques.com",
    "image": "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz",
    "description": "Super cool ce truc de fou",
    "category": "Approfondir",
    "technos": ["HTML", "CSS"],
    "level": "Intermediate",
    "media": "Article",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  }],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  // console.log('reducer recipes', state);
  // dans un reducer qui a été combiné, on n'accède qu'à sa tranche de state
  switch (action.type) {
    case SAVE_CARDS:
      return {
        ...state,
        cards: action.cards,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
