const $searchBar = document.querySelector('.search-bar');
const $searchButton = document.querySelector('.red-button');
const $homeForm = document.querySelector('.home-form');
let $searchQuery = '';
const $allResults = document.querySelector('.all-results');
const $containerOne = document.querySelector('.container-1');
const $containerTwo = document.querySelector('.container-2');
let results = [{}, {}, {}, {}];
const $searchBarTwo = document.querySelector('#results-view-search-bar');
const $searchButtonTwo = document.querySelector('.red-button.small');
let resultPage = 1;
const $leftArrow = document.querySelector('.fa-arrow-left');
const $rightArrow = document.querySelector('.fa-arrow-right');

$searchButtonTwo.addEventListener('click', getSearchValue2);
$searchButton.addEventListener('click', getSearchValue);
$rightArrow.addEventListener('click', getNext4Results);
$leftArrow.addEventListener('click', getLast4Results);

function getSearchValue2(event) {
  resultPage = 1;
  deleteResultDOMElements();
  results = [{}, {}, {}, {}];
  event.preventDefault();
  $searchQuery = $searchBarTwo.value;
  $homeForm.reset();
  $containerOne.setAttribute('class', 'container-1 hidden');
  $containerTwo.setAttribute('class', 'container-2');
  get4Results($searchQuery, resultPage);
}

function getSearchValue(event) {
  resultPage = 1;
  results = [{}, {}, {}, {}];
  event.preventDefault();
  $searchQuery = $searchBar.value;
  $homeForm.reset();
  $containerOne.setAttribute('class', 'container-1 hidden');
  $containerTwo.setAttribute('class', 'container-2');
  get4Results($searchQuery, resultPage);
}

function get4Results(query, page) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://api.artic.edu/api/v1/artworks/search?page=' + page + '&limit=4&q=' + query + '&query[term][is_public_domain]=true');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    results[0].link = xhr.response.data[0].api_link;
    results[1].link = xhr.response.data[1].api_link;
    results[2].link = xhr.response.data[2].api_link;
    results[3].link = xhr.response.data[3].api_link;
    load4ResultsInfo();
  });
  xhr.send();
}

function load4ResultsInfo() {
  for (let i = 0; i < results.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', results[i].link);
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      results[i].imageId = xhr.response.data.image_id;
      results[i].description = xhr.response.data.description;
      results[i].artist = xhr.response.data.artist_title;
      results[i].title = xhr.response.data.title;
      results[i].altText = xhr.response.data.thumbnail.alt_text;
      if (results[3].imageId && results[2].imageId && results[1].imageId && results[0].imageId) {
        renderResults();
      }
    });
    xhr.send();
  }
}

function renderResults() {
  $allResults.innerHTML = '';
  const $resultOne = document.createElement('div');
  $resultOne.setAttribute('class', 'result-1');
  $allResults.appendChild($resultOne);
  const $imageDivOne = document.createElement('div');
  $imageDivOne.setAttribute('class', 'image-1');
  $resultOne.appendChild($imageDivOne);
  const $imageOne = document.createElement('img');
  $imageOne.setAttribute('id', 'img-1');
  $imageOne.setAttribute('src', 'https://www.artic.edu/iiif/2/' + results[0].imageId + '/full/843,/0/default.jpg');
  $imageOne.setAttribute('alt', results[0].altText);
  $imageDivOne.appendChild($imageOne);
  const $titleDivOne = document.createElement('div');
  $titleDivOne.setAttribute('class', 'title-1');
  $resultOne.appendChild($titleDivOne);
  const $titleOne = document.createElement('p');
  $titleOne.textContent = results[0].title;
  $titleOne.setAttribute('class', 'title');
  $titleDivOne.appendChild($titleOne);

  const $resultTwo = document.createElement('div');
  $resultTwo.setAttribute('class', 'result-2');
  $allResults.appendChild($resultTwo);
  const $imageDivTwo = document.createElement('div');
  $imageDivTwo.setAttribute('class', 'image-2');
  $resultTwo.appendChild($imageDivTwo);
  const $imageTwo = document.createElement('img');
  $imageTwo.setAttribute('id', 'img-2');
  $imageTwo.setAttribute('src', 'https://www.artic.edu/iiif/2/' + results[1].imageId + '/full/843,/0/default.jpg');
  $imageTwo.setAttribute('alt', results[1].altText);
  $imageDivTwo.appendChild($imageTwo);
  const $titleDivTwo = document.createElement('div');
  $titleDivTwo.setAttribute('class', 'title-2');
  $resultTwo.appendChild($titleDivTwo);
  const $titleTwo = document.createElement('p');
  $titleTwo.textContent = results[1].title;
  $titleTwo.setAttribute('class', 'title');
  $titleDivTwo.appendChild($titleTwo);

  const $resultThree = document.createElement('div');
  $resultThree.setAttribute('class', 'result-3');
  $allResults.appendChild($resultThree);
  const $imageDivThree = document.createElement('div');
  $imageDivThree.setAttribute('class', 'image-3');
  $resultThree.appendChild($imageDivThree);
  const $imageThree = document.createElement('img');
  $imageThree.setAttribute('id', 'img-3');
  $imageThree.setAttribute('src', 'https://www.artic.edu/iiif/2/' + results[2].imageId + '/full/843,/0/default.jpg');
  $imageThree.setAttribute('alt', results[2].altText);
  $imageDivThree.appendChild($imageThree);
  const $titleDivThree = document.createElement('div');
  $titleDivThree.setAttribute('class', 'title-3');
  $resultThree.appendChild($titleDivThree);
  const $titleThree = document.createElement('p');
  $titleThree.textContent = results[2].title;
  $titleThree.setAttribute('class', 'title');
  $titleDivThree.appendChild($titleThree);

  const $resultFour = document.createElement('div');
  $resultFour.setAttribute('class', 'result-4');
  $allResults.appendChild($resultFour);
  const $imageDivFour = document.createElement('div');
  $imageDivFour.setAttribute('class', 'image-4');
  $resultFour.appendChild($imageDivFour);
  const $imageFour = document.createElement('img');
  $imageFour.setAttribute('id', 'img-4');
  $imageFour.setAttribute('src', 'https://www.artic.edu/iiif/2/' + results[3].imageId + '/full/843,/0/default.jpg');
  $imageFour.setAttribute('alt', results[3].altText);
  $imageDivFour.appendChild($imageFour);
  const $titleDivFour = document.createElement('div');
  $titleDivFour.setAttribute('class', 'title-4');
  $resultFour.appendChild($titleDivFour);
  const $titleFour = document.createElement('p');
  $titleFour.textContent = results[3].title;
  $titleFour.setAttribute('class', 'title');
  $titleDivFour.appendChild($titleFour);
}

function deleteResultDOMElements() {
  const $resultOne = document.querySelector('.result-1');
  $resultOne.remove();
  const $resultTwo = document.querySelector('.result-2');
  $resultTwo.remove();
  const $resultThree = document.querySelector('.result-3');
  $resultThree.remove();
  const $resultFour = document.querySelector('.result-4');
  $resultFour.remove();
}

function getNext4Results() {
  resultPage++;
  get4Results($searchQuery, resultPage);
}

function getLast4Results() {
  if (resultPage !== 1) {
    resultPage--;
    get4Results($searchQuery, resultPage);
  }
}
