// LANGUAGE
// Check users browser language.
const userBrowserLanguage = navigator.language.slice(0, 2);

// Based on browser language/user choice specifies the language to use. If wasn't set manualy - does it for user, else uses user choice.
let language;

if (localStorage.getItem('chosenLang') === null) {
  language = userBrowserLanguage;
} else {
  language = localStorage.getItem('chosenLang');
}

// Specified language call function that displays information in this language on page.
function changeLanguage(language) {
  if (language === 'pl') {
    displayLanguage(pl);
  } else if (language === 'de') {
    displayLanguage(de);
  } else {
    displayLanguage(en);
  }
}

// Disables automatic language choice if user click pl/en/de in side menu and remembers the choice.
function disableAutoLanguage(param) {
  if (param === 'pl') {
    language = param;
  } else if (param === 'en') {
    language = param;
  } else if (param === 'de') {
    language = param;
  }

  localStorage.setItem('chosenLang', language);
  return language;
}

// All events that take place when language is set to polish.
function displayLanguage(param) {

  usedLanguage = param;

// Colors chosen language in side menu.
  if (usedLanguage === pl) {
      document.getElementById('pl').style.color = 'white';
      document.getElementById('en').style.color = 'dimgray';
      document.getElementById('de').style.color = 'dimgray';
  } else if (usedLanguage === de) {
      document.getElementById('pl').style.color = 'dimgray';
      document.getElementById('en').style.color = 'dimgray';
      document.getElementById('de').style.color = 'white';
  } else {
      document.getElementById('pl').style.color = 'dimgray';
      document.getElementById('en').style.color = 'white';
      document.getElementById('de').style.color = 'dimgray';
  }

// Shows Cookie banner.    
  const { gdprParagraph, gdprLink, gdprButton } = usedLanguage.gdpr;
  gdprShow();
    document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
    document.getElementById('gdprLink').innerHTML = gdprLink;
    document.getElementById('gdprButton').innerHTML = gdprButton;

// Loads side menu links.
  const { closeButton, artworksButton, exhibitionButton, biographyButton, contactButton } = usedLanguage.menu;
    document.getElementById('closeButton').innerHTML = closeButton;
    document.getElementById('artworksButton').innerHTML = artworksButton;
    document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
    document.getElementById('biographyButton').innerHTML = biographyButton;
    document.getElementById('contactButton').innerHTML = contactButton;

// Checks URL to display apropiate data.
  const path = window.location.pathname;
  
// If URL is 'index.html' -> displays main page with paintings grid, colors apropriate link in side menu and show 3 sort options in side menu.
  if (path.includes('index') === true) {
    const { displayAllButton, displayStructuralCollageButton, displayInteriorButton } = usedLanguage.menu;
      document.getElementById('artworksList').innerHTML = displayArtworksList();
      document.getElementById('artworksButton').style.color = 'white';
      document.getElementById('displayAllButton').innerHTML = displayAllButton;
      document.getElementById('displayStructuralCollageButton').innerHTML = displayStructuralCollageButton;
      document.getElementById('displayInteriorButton').innerHTML = displayInteriorButton;

// If URL is 'artworksitem.html' -> changes its URL to be unique, shows 'back' button, sets meta data, loads all information and images about chosen painting and sets background scroll effect.
  } else if (path.includes('artworksitem') === true) {
    document.getElementById('backToMainPage').innerHTML = usedLanguage.menu.backToMainPage;
    setURL();
    const { metaTitle, metaDescription, metaKeywords, paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription, paintingDimensionsWidth, paintingDimensionsHeight } = usedLanguage.artworks[paintingNum];
      document.title = metaTitle;
      document.getElementsByTagName('meta').namedItem('description').setAttribute('content', metaDescription);
      document.getElementsByTagName('meta').namedItem('keywords').setAttribute('content', metaKeywords);
      document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
      document.getElementById('paintingDataAuthor').innerHTML = paintingDataAuthor;
      document.getElementById('paintingDimensionsWidth').innerHTML = paintingDimensionsWidth;
      document.getElementById('paintingDimensionsHeight').innerHTML = paintingDimensionsHeight;
      document.getElementById('paintingTitle').innerHTML = paintingTitle;
      document.getElementById('paintingYearOfCreation').innerHTML = paintingYearOfCreation;
      document.getElementById('paintingStatus').innerHTML = paintingStatus;
      document.getElementById('paintingDescription').innerHTML = paintingDescription;
      document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);
    navigationScrollEffect();
    disableSmoothScroll();
    

// If URL is 'exhibitions.html' -> loads all information and images about exhibitions and colors apropriate link in side menu.
  } else if (path.includes('exhibitions') === true) {
    document.getElementById('exhibitionData').innerHTML = displayExhibition();
    document.getElementById('exhibitionButton').style.color = 'white';

    const { exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster } = usedLanguage.exhibitions[exhibitionNum];
      document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
      document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
      document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
      document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
      document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;

// If URL is 'biography.html' -> loads all information about biography, colors apropriate link in side menu and scroll to bottom after 1 second.
  } else if (path.includes('biography') === true) {
    document.getElementById('biographyButton').style.color = 'white';

    const { biographyHeader, biographyParagraph } = usedLanguage.biography;
      document.getElementById('biographyHeader').innerHTML = biographyHeader;
      document.getElementById('biographyParagraph').innerHTML = biographyParagraph;
      moveToBottom();

// If URL is 'contact.html' -> loads contact button (opens mail client on users computer) and colors apropriate link in side menu.      
  } else if (path.includes('contact') === true) {
    document.getElementById('contactButton').style.color = 'white';

    const { contactHeader, contactEmailButton } = usedLanguage.contact;
      document.getElementById('contactHeader').innerHTML = contactHeader;
      document.getElementById('contactEmailButton').innerHTML = contactEmailButton;

// If URL is different than ones listed before -> sets URL to 404 which redirects to main page.     
  } else {
    path = 'https://pawelzygmuntkrol.github.io/michalkrol/404.html';
  }
}


// URL
// Sets unique URL for certain painting based on its title (uses 'pl' because its the same data in each language).
function setURL() {
  const baseURL = 'https://pawelzygmuntkrol.github.io/michalkrol/artworksitem';
  let restURL = pl.artworks[paintingNum].paintingTitle;
  restURL = restURL.replace(' ', '').replace(' ', '').replace(' ', '');
  window.history.pushState('https://pawelzygmuntkrol.github.io/michalkrol', '', `${baseURL}/${restURL}`);
}


// GDPR
// Checks local storage and if user didn't click 'understood' button -> shows cookie banner.
let gdpr;
function gdprShow() {
  gdprStatus = localStorage.getItem('gdprStatus');
  gdprStatus === 'off' ? (document.getElementById('cookieBanner').style.visibility = 'hidden') : (document.getElementById('cookieBanner').style.visibility = 'visible');
}

// Hides cookie banner if user clicked 'understood' button and remembers users decision.
function gdprClose() {
  document.getElementById('cookieBanner').style.visibility = 'hidden';
  gdprStatus = 'off';
  localStorage.setItem('gdprStatus', gdprStatus);
}


// POPUP IMG
// Checks session storage to know if user have seen pop up image, loads first image of the last added painting and if pop up image hasn't been seen - displays it.
function showPopUpImg() {
  let wasPopUpDisplayed;
  wasPopUpDisplayed = sessionStorage.getItem('wasPopUpDisplayed');
  const photoNumber = Object.keys(pl.artworks).length;
  let popUpImageSource;

  if (photoNumber < 10) {
    popUpImageSource = `./images/000${photoNumber}/000${photoNumber}-1.jpg`;
  } else if (photoNumber >= 10) {
    popUpImageSource = `./images/00${photoNumber}/00${photoNumber}-1.jpg`;
  } else if (photoNumber >= 100) {
    popUpImageSource = `./images/0${photoNumber}/0${photoNumber}-1.jpg`;
  }

  if (wasPopUpDisplayed === null) {
    document.getElementById('popUpImg').src = popUpImageSource;
    wasPopUpDisplayed = 1;
    sessionStorage.setItem('wasPopUpDisplayed', wasPopUpDisplayed);
  } else {
    closePopUpImg();
  }
}

// Helper function to the one before. Closes pop up image and display main list of paintings.
function closePopUpImg() {
  document.getElementById('artworksList').innerHTML = displayArtworksList();
  document.getElementById('popUpImgContainer').style.transitionDuration = '0.8s';
  document.getElementById('popUpImgContainer').style.animationTimingFunction ='ease-in';
  document.getElementById('popUpImgContainer').style.opacity = '0';
  document.getElementById('popUpImgContainer').style.visibility = 'hidden';
}


// MAIN PAINTINGS
// Sets value to side menu sort options used in main page to color displayAllButton.
let displayAllValue = 1;
let displayStructuralCollageValue = 0;
let displayInteriorValue = 0;

function displayAll() {
  displayAllValue = 1;
  displayStructuralCollageValue = 0;
  displayInteriorValue = 0;
  document.getElementById('displayAllButton').style.color = 'white';
  document.getElementById('displayStructuralCollageButton').style.color = 'dimgray';
  document.getElementById('displayInteriorButton').style.color = 'dimgray';
  return [displayAllValue, displayStructuralCollageValue, displayInteriorValue];
}

// Sets value to side menu sort options used in main page to color displayStructuralCollageButton.
function displayStructuralCollage() {
  displayAllValue = 0;
  displayStructuralCollageValue = 1;
  displayInteriorValue = 0;
  document.getElementById('displayAllButton').style.color = 'dimgray';
  document.getElementById('displayStructuralCollageButton').style.color = 'white';
  document.getElementById('displayInteriorButton').style.color = 'dimgray';
  return [displayAllValue, displayStructuralCollageValue, displayInteriorValue];
}

// Sets value to side menu sort options used in main page to color displayInteriorButton.
function displayInterior() {
  displayAllValue = 0;
  displayStructuralCollageValue = 0;
  displayInteriorValue = 1;
  document.getElementById('displayAllButton').style.color = 'dimgray';
  document.getElementById('displayStructuralCollageButton').style.color = 'dimgray';
  document.getElementById('displayInteriorButton').style.color = 'white';
  return [displayAllValue, displayStructuralCollageValue, displayInteriorValue];
}

// Take a length of list of paintings to display, loops thru them and display them (on main page -> index.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same images of paintings.
// Paintings are displayed based on functions displayAll, displayStructuralCollage and displayInterior.
function displayArtworksList() {
  let result = '';
  let id = '0001';
  let lastNumofId = 1;
  let str = '';
  for (let i = 0; i < Object.keys(pl.artworks).length; i++) {
    if (displayStructuralCollageValue === 1) {
      if (pl.artworks[id].paintingDataAuthor === 'Structural Collage') {
        str = `<div class='img-container' onclick='getPaintingNum("${id}")'>
                    <a href='./artworksitem.html'>
                        <img src='./images/${id}/${id}-1.jpg'>
                        <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                        <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                    </a>
                </div>`;
      } else {
        str = '';
      }
    } else if (displayInteriorValue === 1) {
      if (pl.artworks[id].paintingDataAuthor === 'Interior') {
        str = `<div class='img-container' onclick='getPaintingNum("${id}")'>
                    <a href='./artworksitem.html'>
                        <img src='./images/${id}/${id}-1.jpg'>
                        <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                        <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                    </a>
                </div>`;
      } else {
        str = '';
      }
    } else if (displayAllValue === 1) {
      str = `<div class='img-container' onclick='getPaintingNum("${id}")'>
                <a href='./artworksitem.html'>
                    <img src='./images/${id}/${id}-1.jpg'>
                    <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                    <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                </a>
            </div>`;
    }
    result = str.concat(result);
    lastNumofId++;
    id = `0000${lastNumofId}`;
    id = id.substr(-4);
  }
  return result;
}


// SIDE MENU
// Show side menu, calculate width and show close button.
function openSideMenu() {
  if (window.screen.width < 426) {
    document.getElementById('menu').style.width = '100%';
  } else {
    document.getElementById('menu').style.width = '23.5rem';
  }
  document.getElementById('menu-button').style.visibility = 'hidden';
  document.getElementById('backToMainPage').style.visibility = 'hidden';
}

// Hide side menu and show menu and back button.
function closeSideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('menu-button').style.visibility = 'visible';
  document.getElementById('backToMainPage').style.visibility = 'visible';
}

// Redirects to main page form subpage describing certain painting.
function backToMainPage() {
  //window.location.href = 'https://pawelzygmuntkrol.github.io/michalkrol/index.html';
  window.history.go(-2);
  setScrollPosition(scrollPosition);
}


// ARTWORKSITEM DISPLAY IMAGES OF PAINTINGS
// Get id of painting while clicked and use it to display this paintings subpage.
let paintingNum = '0000';
function getPaintingNum(num) {
  paintingNum = num;
  localStorage.setItem('paintingId', paintingNum);
  // paintingNum = localStorage.getItem('paintingId'); jeśli wszystko OK to usunąć
  return paintingNum;
}

// Take a length of list of paintings to display, loops thru them and display them (on sub page -> artworksitem.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same images of paintings.
function displayPaintings(paintingNum) {
  let result = '';
  for (let i = 1; i <= Object.keys(pl.artworks[paintingNum].paintingImages).length; i++) {
    const str = `
            <div class='img-item'>
                <img src='https://pawelzygmuntkrol.github.io/michalkrol/images/${paintingNum}/${paintingNum}-${i}.jpg'/>
            </div>`;
    result += str;
  }
  return result;
}


// ARTWORKSITEM NAVIGATIONSCROLLEFFECT
// Take the position of scroll and changes navigation and painting description details font color as well as background collor.
function navigationScrollEffect() {
  if (window.pageYOffset > document.getElementById('paintingImages').offsetHeight - 150) {
    document.getElementById('menu-button').style.color = 'black';
    document.getElementById('backToMainPage').style.color = 'black';
    document.getElementById('name').style.color = 'black';
    document.getElementById('pseudonym').style.color = 'black';
    document.getElementById('paintingDataTitle').style.color = 'black';
    document.getElementById('paintingDataAuthor').style.color = 'black';
    document.getElementById('paintingDimensionsWidth').style.color = 'black';
    document.getElementById('paintingDimensionsHeight').style.color = 'black';
} else if (window.pageYOffset > document.getElementById('paintingImages').offsetHeight - 250) {
    document.getElementById('img-description').style.backgroundColor = 'white';
    document.getElementById('img-description').style.transitionDuration ='1.5s';
    document.getElementById('img-description').style.animationTimingFunction = 'ease-in';
} else {
    document.getElementById('menu-button').style.color = 'dimgray';
    document.getElementById('backToMainPage').style.color = 'dimgray';
    document.getElementById('name').style.color = 'dimgray';
    document.getElementById('pseudonym').style.color = 'dimgray';
    document.getElementById('paintingDataTitle').style.color = 'dimgray';
    document.getElementById('paintingDataAuthor').style.color = 'dimgray';
    document.getElementById('paintingDimensionsWidth').style.color = 'dimgray';
    document.getElementById('paintingDimensionsHeight').style.color = 'dimgray';
  }
}

function disableSmoothScroll() {
  if (document.getElementById('paintingImages').scrollTop + document.getElementById('paintingImages').offsetHeight > document.getElementById('paintingImages').scrollHeight - 250) {
    document.getElementById('paintingImages').scrollIntoView;
  } /*else if (document.getElementById('paintingImages').scrollTop + document.getElementById('paintingImages').offsetHeight < document.getElementById('paintingImages').scrollHeight - 250) {
    document.getElementById('paintingImages').style.height = '100vh';
  }*/
}


// EXHIBITIONS
// Take a length of list of exhibitions to display, loops thru them and display them (on exhibitions page -> exhibitions.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same length.
function displayExhibition() {
  let result = '';
  let id = '0001';
  let lastNumofId = 1;
  for (let i = 0; i < Object.keys(pl.exhibitions).length; i++) {
    const { exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink1, exhibitionLink2, exhibitionLink3, exhibitionPoster } = pl.exhibitions[id];
    const str =  `<div class='container'>
                    <div class='text'>
                      <h1 id='exhibitionHeader'>${exhibitionHeader}</h1>
                      <p id='exhibitionDate'>${exhibitionDate}</p>
                      <p id='exhibitionParagraph'>${exhibitionParagraph}</p>
                      <a id="exhibitionLink1" href="${exhibitionLink1}">${exhibitionLink1}</a><br>
                      <a id="exhibitionLink2" href="${exhibitionLink2}">${exhibitionLink2}</a><br>
                      <a id="exhibitionLink3" href="${exhibitionLink3}">${exhibitionLink3}</a><br>
                    </div>
                    <div class='poster'>
                      <img id="exhibitionPoster" src="${exhibitionPoster}" alt="">
                    </div>
                  </div>`;
    result = str.concat(result);
    lastNumofId++;
    id = `000${lastNumofId}`;
    id = id.substr(-4);
  }
  return result;
}


// MOVE TO BOTTOM
// Waits 3 seconds and move the page to the bottom of the page where biography text is placed.
function moveToBottom() {
  setTimeout(() => { document.getElementById('biographyParagraph').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 1000);
}


// DISPLAY EMAIL
// On click shows e-mail address in case client couldn't handle redirection.

function displayEmail() {
  document.getElementById('contactEmailButton').innerHTML = 'kontakt@michalkrol.eu';
  document.getElementById('contactEmailButton').style.width = '10rem';
}


// SCROLL POSITION
// Gets the scroll position to use it after 'back' button is clicked in artworksitem
let scrollPosition = sessionStorage.getItem('scrollPosition');

function setScrollPosition(scrollPosition) {
  if(scrollPosition !== null) {
    window.scrollTo(0, scrollPosition);
  } else {
    scrollPosition = 0;
    window.scrollTo(0, scrollPosition);
  }
}

function getScrollPosition() {
  scrollPosition = window.pageYOffset;
  sessionStorage.setItem('scrollPosition', scrollPosition);
  return scrollPosition;
}


/*
function returnScrollPosition(scrollPosition) {
    sessionStorage.getItem('scrollPosition')
    window.scrollTo(0, scrollPosition);
    return scrollPosition;
}


function positionSite(scrollPosition) {
  window.scrollTo(0, scrollPosition);
}

function getScrollPosition() {
  scrollPosition = window.pageYOffset;
  sessionStorage.setItem('scrollPosition', scrollPosition);
  return scrollPosition;
}
*/










/*
function changeToEn() {
  language = 'en';
  document.getElementById('pl').style.color = 'dimgray';
  document.getElementById('en').style.color = 'white';
  document.getElementById('de').style.color = 'dimgray';

  const { gdprParagraph, gdprLink, gdprButton } = en.gdpr;
  gdprShow();
  document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
  document.getElementById('gdprLink').innerHTML = gdprLink;
  document.getElementById('gdprButton').innerHTML = gdprButton;

  const {
    closeButton,
    artworksButton,
    exhibitionButton,
    biographyButton,
    contactButton,
  } = en.menu;
  document.getElementById('closeButton').innerHTML = closeButton;
  document.getElementById('artworksButton').innerHTML = artworksButton;
  document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
  document.getElementById('biographyButton').innerHTML = biographyButton;
  document.getElementById('contactButton').innerHTML = contactButton;

  const path = window.location.pathname;
  const page = path.split('/').pop();

  if (page === '' || page === '/' || page === '#' ) {
    window.location.href = 'https://pawelzygmuntkrol.github.io/michalkrol/index.html';
  } else if (page === 'index.html') {
    const {
      displayAllButton,
      displayStructuralCollageButton,
      displayInteriorButton,
    } = en.menu;
    document.getElementById('artworksList').innerHTML = displayArtworksList();
    document.getElementById('artworksButton').style.color = 'white';
    document.getElementById('displayAllButton').innerHTML = displayAllButton;
    document.getElementById(
      'displayStructuralCollageButton',
    ).innerHTML = displayStructuralCollageButton;
    document.getElementById(
      'displayInteriorButton',
    ).innerHTML = displayInteriorButton;
  } else if (page === 'artworksitem.html') {
    setURL();
    document.getElementById('backToMainPage').innerHTML =
      en.menu.backToMainPage;
    const {
      metaTitle,
      metaDescription,
      metaKeywords,
      paintingDataTitle,
      paintingDataAuthor,
      paintingTitle,
      paintingYearOfCreation,
      paintingStatus,
      paintingDescription,
      paintingDimensionsWidth,
      paintingDimensionsHeight,
    } = en.artworks[paintingNum];
    document.title = metaTitle;
    document
      .getElementsByTagName('meta')
      .namedItem('description')
      .setAttribute('content', metaDescription);
    document
      .getElementsByTagName('meta')
      .namedItem('keywords')
      .setAttribute('content', metaKeywords);
    document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
    document.getElementById(
      'paintingDataAuthor',
    ).innerHTML = paintingDataAuthor;
    document.getElementById(
      'paintingDimensionsWidth',
    ).innerHTML = paintingDimensionsWidth;
    document.getElementById(
      'paintingDimensionsHeight',
    ).innerHTML = paintingDimensionsHeight;
    document.getElementById('paintingTitle').innerHTML = paintingTitle;
    document.getElementById(
      'paintingYearOfCreation',
    ).innerHTML = paintingYearOfCreation;
    document.getElementById('paintingStatus').innerHTML = paintingStatus;
    document.getElementById(
      'paintingDescription',
    ).innerHTML = paintingDescription;
    document.getElementById('paintingImages').innerHTML = displayPaintings(
      paintingNum,
    );
    navigationScrollEffect();
  } else if (page === 'exhibitions.html') {
    document.getElementById('exhibitionData').innerHTML = displayExhibition();
    document.getElementById('exhibitionButton').style.color = 'white';

    const {
      exhibitionHeader,
      exhibitionDate,
      exhibitionParagraph,
      exhibitionLink,
      exhibitionPoster,
    } = en.exhibitions[exhibitionNum];
    document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
    document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
    document.getElementById(
      'exhibitionParagraph',
    ).innerHTML = exhibitionParagraph;
    document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
    document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;
  } else if (page === 'biography.html') {
    document.getElementById('biographyButton').style.color = 'white';

    const { biographyHeader, biographyParagraph } = en.biography;
    document.getElementById('biographyHeader').innerHTML = biographyHeader;
    document.getElementById(
      'biographyParagraph',
    ).innerHTML = biographyParagraph;
    moveToBottom();
  } else if (page === 'contact.html') {
    document.getElementById('contactButton').style.color = 'white';

    const { contactHeader, contactEmailButton } = en.contact;
    document.getElementById('contactHeader').innerHTML = contactHeader;
    document.getElementById(
      'contactEmailButton',
    ).innerHTML = contactEmailButton;
  }
}

function changeToDe() {
  language = 'de';
  document.getElementById('pl').style.color = 'dimgray';
  document.getElementById('en').style.color = 'dimgray';
  document.getElementById('de').style.color = 'white';

  const { gdprParagraph, gdprLink, gdprButton } = de.gdpr;
  gdprShow();
  document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
  document.getElementById('gdprLink').innerHTML = gdprLink;
  document.getElementById('gdprButton').innerHTML = gdprButton;

  const {
    closeButton,
    artworksButton,
    exhibitionButton,
    biographyButton,
    contactButton,
  } = de.menu;
  document.getElementById('closeButton').innerHTML = closeButton;
  document.getElementById('artworksButton').innerHTML = artworksButton;
  document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
  document.getElementById('biographyButton').innerHTML = biographyButton;
  document.getElementById('contactButton').innerHTML = contactButton;

  const path = window.location.pathname;
  const page = path.split('/').pop();

  if (page === '' || page === '/' || page === '#' ) {
    window.location.href = 'https://pawelzygmuntkrol.github.io/michalkrol/index.html';
  } else if (page === 'index.html') {
    const {
      displayAllButton,
      displayStructuralCollageButton,
      displayInteriorButton,
    } = de.menu;
    document.getElementById('artworksList').innerHTML = displayArtworksList();
    document.getElementById('artworksButton').style.color = 'white';
    document.getElementById('displayAllButton').innerHTML = displayAllButton;
    document.getElementById(
      'displayStructuralCollageButton',
    ).innerHTML = displayStructuralCollageButton;
    document.getElementById(
      'displayInteriorButton',
    ).innerHTML = displayInteriorButton;
  } else if (page === 'artworksitem.html') {
    setURL();
    document.getElementById('backToMainPage').innerHTML =
      de.menu.backToMainPage;
    const {
      metaTitle,
      metaDescription,
      metaKeywords,
      paintingDataTitle,
      paintingDataAuthor,
      paintingTitle,
      paintingYearOfCreation,
      paintingStatus,
      paintingDescription,
      paintingDimensionsWidth,
      paintingDimensionsHeight,
    } = de.artworks[paintingNum];
    document.title = metaTitle;
    document
      .getElementsByTagName('meta')
      .namedItem('description')
      .setAttribute('content', metaDescription);
    document
      .getElementsByTagName('meta')
      .namedItem('keywords')
      .setAttribute('content', metaKeywords);
    document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
    document.getElementById(
      'paintingDataAuthor',
    ).innerHTML = paintingDataAuthor;
    document.getElementById(
      'paintingDimensionsWidth',
    ).innerHTML = paintingDimensionsWidth;
    document.getElementById(
      'paintingDimensionsHeight',
    ).innerHTML = paintingDimensionsHeight;
    document.getElementById('paintingTitle').innerHTML = paintingTitle;
    document.getElementById(
      'paintingYearOfCreation',
    ).innerHTML = paintingYearOfCreation;
    document.getElementById('paintingStatus').innerHTML = paintingStatus;
    document.getElementById(
      'paintingDescription',
    ).innerHTML = paintingDescription;
    document.getElementById('paintingImages').innerHTML = displayPaintings(
      paintingNum,
    );
    navigationScrollEffect();
  } else if (page === 'exhibitions.html') {
    document.getElementById('exhibitionData').innerHTML = displayExhibition();
    document.getElementById('exhibitionButton').style.color = 'white';

    const {
      exhibitionHeader,
      exhibitionDate,
      exhibitionParagraph,
      exhibitionLink,
      exhibitionPoster,
    } = de.exhibitions[exhibitionNum];
    document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
    document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
    document.getElementById(
      'exhibitionParagraph',
    ).innerHTML = exhibitionParagraph;
    document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
    document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;
  } else if (page === 'biography.html') {
    document.getElementById('biographyButton').style.color = 'white';

    const { biographyHeader, biographyParagraph } = de.biography;
    document.getElementById('biographyHeader').innerHTML = biographyHeader;
    document.getElementById(
      'biographyParagraph',
    ).innerHTML = biographyParagraph;
    moveToBottom();
  } else if (page === 'contact.html') {
    document.getElementById('contactButton').style.color = 'white';

    const { contactHeader, contactEmailButton } = de.contact;
    document.getElementById('contactHeader').innerHTML = contactHeader;
    document.getElementById(
      'contactEmailButton',
    ).innerHTML = contactEmailButton;
  }
}
*/
