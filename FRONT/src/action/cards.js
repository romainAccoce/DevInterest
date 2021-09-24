export const FETCH_CARDS = 'FETCH_CARDS';
export const fetchCards = () => (
  {
    type: FETCH_CARDS,
  }
);

export const SAVE_CARDS = 'SAVE_CARDS';
export const saveCards = (cards) => (
  {
    type: SAVE_CARDS,
    cards,
  }
);

export const IS_LOADING = 'IS_LOADING';
export const isLoading = () => ({
  type: IS_LOADING,
});

export const CHANGE_NEW_CARD_FIELD = 'CHANGE_NEW_CARD_FIELD';
export const changeNewCardField = (value, fieldName) => (
  {
    type: CHANGE_NEW_CARD_FIELD,
    value,
    fieldName,
  }
);

export const CHANGE_NEW_CARD_CERTIFICATION = 'CHANGE_NEW_CARD_CERTIFICATION';
export const changeNewCardCertification = () => (
  {
    type: CHANGE_NEW_CARD_CERTIFICATION,
  }
);
