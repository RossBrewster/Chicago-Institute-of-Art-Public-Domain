// const $searchBar = document.querySelector('.search-bar');
const $searchButton = document.querySelector('.red-button');
const $homeForm = document.querySelector('.home-form');
const $homeRedContainer = document.querySelector('#home-red-container');
const $droopy = document.querySelector('#droopy');
// let $searchQuery = '';

$searchButton.addEventListener('click', getSearchValue);

function getSearchValue(event) {
  event.preventDefault();
  // $searchQuery = $searchBar.value;
  // console.log($searchQuery);
  $homeForm.reset();
  viewSwapResults();
}

function viewSwapResults() {
  $homeRedContainer.setAttribute('class', 'hidden');
  $droopy.setAttribute('class', 'hidden');
}
