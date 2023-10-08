/* exported data */
let data = [];
const previouslyFavorited = localStorage.getItem('favorites');

if (previouslyFavorited !== null) data = JSON.parse(previouslyFavorited);

window.addEventListener('beforeunload', handleBeforeUnload);

function handleBeforeUnload(event) {
  const favorites = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].isFavorited === true) {
      favorites.push(data[i]);
    }
  }
  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites', favoritesJSON);
}
