const handleFavouriteText = (favourite: string[]) => {
  if (favourite.length === 1) {
    return favourite;
  }
  if (favourite.length === 2) {
    return `${favourite[0]} and ${favourite[1]}`;
  }
  if (favourite.length === 3) {
    return `${favourite[0]}, ${favourite[1]} and ${favourite[2]}`;
  }

  if (favourite.length > 3) {
    return `${favourite[0]}, ${favourite[1]}, ${favourite[1]} and more...`;
  }
};

export default handleFavouriteText;
