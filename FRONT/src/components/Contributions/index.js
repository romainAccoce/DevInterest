import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';

import './contributions.scss';

import Card from '../Card';

const BookmarkedCards = () => {
  const { contributions } = useSelector((state) => state.userCurrent);
  const { loading } = useSelector((state) => state.displayOptions);

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  if (loading) return null;

  return (
    <div className="search-container">
      <div className="search-results">
        <Masonry
          breakpointCols={breakpointsColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {
                contributions.map(
                  (card) => (
                    <div className="masonry-div" key={card.id}>
                      <Card key={card.id} card={card} />
                    </div>
                  ),
                )
              }
        </Masonry>
      </div>
    </div>
  );
};

export default BookmarkedCards;
