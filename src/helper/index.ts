export {};
export const scoreCalculation = (score: number) => {
  let rating = "";

  if (score > 90) rating += "⭐⭐⭐⭐⭐";
  if (score > 80 && score < 91) rating += "⭐⭐⭐⭐";
  if (score > 70 && score < 81) rating += "⭐⭐⭐";
  if (score > 60 && score < 71) rating += "⭐⭐";
  if (score < 61) rating += "⭐";

  return rating;
};

export const genreList = (genres: string[]) => {
  let str: string = "";

  genres.forEach((val, idx) => {
    str += `${val}`;
    if (idx !== genres.length - 1) str += `, `;
  });

  return str;
};

export const getCharacter = (arr: any[]) => {
  arr.forEach((value) => {
    console.log(value);
  });

  return true;
};
