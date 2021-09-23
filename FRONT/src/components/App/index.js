import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from '../Home';
import Footer from '../Footer';
import Header from '../Header';
import ConnexionModal from '../ConnexionModal';
import CardDetails from '../CardDetails';
import Page404 from '../Page404';
import UserBookmarks from '../UserAccount/UserBookmarks';
import AddCard from '../AddCard';
import Legal from '../Legal';
import TermsOfUse from '../TermsOfUse';
import About from '../About';
import UserAccount from '../UserAccount';
import SearchResults from '../SearchResults';
import SignUp from '../SignUp';
import AddCardModal from '../AddCardModal';

const App = () => {
  const connexionModal = useSelector((state) => state.user.connexionModal);
  const addCardModal = useSelector((state) => state.user.addCardModal);
  const cards = useSelector((state) => state.cards.cards);
  const user = useSelector((state) => state.user);
  console.log(cards);

  return (
    <div className="app">
      <div className={`main__page ${connexionModal ? 'blur' : ''} ${addCardModal ? 'blur' : ''}`}>
        <div className="content-wrap">
          <Header />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route exac path="/search">
              <SearchResults />
            </Route>
            {
                cards.map(
                  (card) => (
                    <Route key={card.id} path={`/card/${card.slug}/${card.id}`} exact>
                      <CardDetails />
                    </Route>
                  ),
                )
              }
            <Route path="/add-card" exact>
              <AddCard />
            </Route>
            <Route component={SignUp} path="/signup" exact />
            <Route path={`${user.username.toLowerCase()}/bookmarks`} exact>
              <UserBookmarks />
            </Route>
            <Route path={`${user.username.toLowerCase()}/account`} exact>
              <UserAccount />
            </Route>
            <Route component={Legal} path="/legal" exact />
            <Route component={TermsOfUse} path="/terms-of-use" exact />
            <Route component={About} path="/about" exact />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </div>
      <AddCardModal />
      <ConnexionModal />
    </div>
  );
};

export default App;
