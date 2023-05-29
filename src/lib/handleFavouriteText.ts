import handleDescriptionText from "./handleDescriptionText";

const handleFavouriteText = (favourite: string[], toAndFrom: string[][]) => {
  const describedFrom = handleDescriptionText(toAndFrom[0], true, true);
  const describedTo = handleDescriptionText(toAndFrom[1], true, true);

  let andMore = "";

  if (favourite.length > 3) {
    favourite = favourite.slice(0, 3);
    andMore = " ...and more";
  }

  const longDescription =
    describedFrom.length > 15 || describedTo.length > 15 ? false : true;

  const result = handleDescriptionText(favourite, longDescription, false);

  return result + andMore;
};

export default handleFavouriteText;
