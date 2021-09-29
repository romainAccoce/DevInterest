export const randomArrayShuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue = 0;
  let randomIndex = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getDomainName = (url) => {
  const domain = (new URL(url));
  return domain.hostname.replace('www.', '');
};
