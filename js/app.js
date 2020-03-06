// LANGUAGE

// Check users browser language.
let userBrowserLanguage = navigator.language.slice(0, 2);

// Based on browser language/user choice specifies to language to use.
let language;

if(localStorage.getItem('chosenLang') === null) {
    language = userBrowserLanguage;
} else {
    language = localStorage.getItem('chosenLang');
}

// Specified language call function that displays information in this language on page.
function changeLanguage(language) {
    if(language === 'pl') {
        changeToPl();
    } else if(language === 'de') {
        changeToDe();
    } else {
        changeToEn();
    }
}

// Disables automatic language choice if user click pl/en/de in side menu and remembers the choice.
function disableAutoLanguage(lang) {
    if(lang === 'pl') {
        language = lang;
    } else if(lang === 'en') {
        language = lang;
    } else if(lang === 'de') {
        language = lang;
    } 
    
    localStorage.setItem('chosenLang', language);
    return language;
}


// All events that take place when language is set.
function changeToPl(scrollPosition) {
    language = 'pl';
        document.getElementById('pl').style.color = 'rgba(255, 255, 255)';
        document.getElementById('en').style.color = 'rgba(128, 128, 128)';
        document.getElementById('de').style.color = 'rgba(128, 128, 128)';
           
        let {gdprParagraph, gdprLink, gdprButton} = pl.gdpr; 
            gdprShow();
            document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
            document.getElementById('gdprLink').innerHTML = gdprLink;
            document.getElementById('gdprButton').innerHTML = gdprButton;  

        let {closeButton, artworksButton, exhibitionButton, biographyButton, contactButton} = pl.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;     
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "index.html") {  
            let {displayAllButton, displayStructuralCollageButton, displayInteriorButton} = pl.menu;
                document.getElementById('artworksList').innerHTML = displayArtworksList(); 
                document.getElementById('artworksButton').style.color = 'rgba(255, 255, 255)';
                document.getElementById('displayAllButton').innerHTML = displayAllButton;
                document.getElementById('displayStructuralCollageButton').innerHTML = displayStructuralCollageButton;
                document.getElementById('displayInteriorButton').innerHTML = displayInteriorButton;

        } else if(page === "artworkitem.html") {
            document.getElementById('backToMainPage').innerHTML = pl.menu.backToMainPage;
            let {metaTitle, metaDescription, metaKeywords, paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription, paintingDimensionsWidth, paintingDimensionsHeight} = pl.artworks[paintingNum];
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

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            document.getElementById('exhibitionButton').style.color = 'rgba(255, 255, 255)';

            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = pl.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster; 

        } else if(page === "biography.html") {
            document.getElementById('biographyButton').style.color = 'rgba(255, 255, 255)';

            let {biographyHeader, biographyParagraph} = pl.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph;
                moveToBottom(); 

        } else if(page === "contact.html") {
            document.getElementById('contactButton').style.color = 'rgba(255, 255, 255)';

            let {contactHeader, contactEmailButton} = pl.contact;
                document.getElementById('contactHeader').innerHTML = contactHeader;
                document.getElementById('contactEmailButton').innerHTML = contactEmailButton;
        } 
};

function changeToEn() {
    language = 'en';
        document.getElementById('pl').style.color = 'rgba(128, 128, 128)';
        document.getElementById('en').style.color = 'rgba(255, 255, 255)';
        document.getElementById('de').style.color = 'rgba(128, 128, 128)';

        let {gdprParagraph, gdprLink, gdprButton} = en.gdpr; 
            gdprShow();
            document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
            document.getElementById('gdprLink').innerHTML = gdprLink;
            document.getElementById('gdprButton').innerHTML = gdprButton;  

        let {closeButton, artworksButton, exhibitionButton, biographyButton, contactButton} = en.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "index.html") {
            let {displayAllButton, displayStructuralCollageButton, displayInteriorButton} = en.menu;
                document.getElementById('artworksList').innerHTML = displayArtworksList(); 
                document.getElementById('artworksButton').style.color = 'rgba(255, 255, 255)';
                document.getElementById('displayAllButton').innerHTML = displayAllButton;
                document.getElementById('displayStructuralCollageButton').innerHTML = displayStructuralCollageButton;
                document.getElementById('displayInteriorButton').innerHTML = displayInteriorButton;

        } else if(page === "artworkitem.html") {
            document.getElementById('backToMainPage').innerHTML = en.menu.backToMainPage;
            let {metaTitle, metaDescription, metaKeywords, paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription, paintingDimensionsWidth, paintingDimensionsHeight} = en.artworks[paintingNum];
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

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            document.getElementById('exhibitionButton').style.color = 'rgba(255, 255, 255)';

            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = en.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;       

        } else if(page === "biography.html") {
            document.getElementById('biographyButton').style.color = 'rgba(255, 255, 255)';

            let {biographyHeader, biographyParagraph} = en.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph;
                moveToBottom(); 

        } else if(page === "contact.html") {
            document.getElementById('contactButton').style.color = 'rgba(255, 255, 255)';

            let {contactHeader, contactEmailButton} = en.contact;
                document.getElementById('contactHeader').innerHTML = contactHeader;
                document.getElementById('contactEmailButton').innerHTML = contactEmailButton;
        } 
};

function changeToDe() {
    language = 'de';
        document.getElementById('pl').style.color = 'rgba(128, 128, 128)';
        document.getElementById('en').style.color = 'rgba(128, 128, 128)';
        document.getElementById('de').style.color = 'rgba(255, 255, 255)';

        let {gdprParagraph, gdprLink, gdprButton} = de.gdpr; 
            gdprShow();
            document.getElementById('gdprParagraph').innerHTML = gdprParagraph;
            document.getElementById('gdprLink').innerHTML = gdprLink;
            document.getElementById('gdprButton').innerHTML = gdprButton;  

        let {closeButton, artworksButton, exhibitionButton, biographyButton, contactButton} = de.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "index.html") {
            let {displayAllButton, displayStructuralCollageButton, displayInteriorButton} = de.menu;
                document.getElementById('artworksList').innerHTML = displayArtworksList(); 
                document.getElementById('artworksButton').style.color = 'rgba(255, 255, 255)';
                document.getElementById('displayAllButton').innerHTML = displayAllButton;
                document.getElementById('displayStructuralCollageButton').innerHTML = displayStructuralCollageButton;
                document.getElementById('displayInteriorButton').innerHTML = displayInteriorButton;

        } else if(page === "artworkitem.html") {
            document.getElementById('backToMainPage').innerHTML = de.menu.backToMainPage;
            let {metaTitle, metaDescription, metaKeywords, paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription, paintingDimensionsWidth, paintingDimensionsHeight} = de.artworks[paintingNum];
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

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            document.getElementById('exhibitionButton').style.color = 'rgba(255, 255, 255)';

            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = de.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;          

        } else if(page === "biography.html") {
            document.getElementById('biographyButton').style.color = 'rgba(255, 255, 255)';

            let {biographyHeader, biographyParagraph} = de.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph; 
                moveToBottom();       

        } else if(page === "contact.html") {
            document.getElementById('contactButton').style.color = 'rgba(255, 255, 255)';

            let {contactHeader, contactEmailButton} = de.contact;
                document.getElementById('contactHeader').innerHTML = contactHeader;
                document.getElementById('contactEmailButton').innerHTML = contactEmailButton;
                displayEmail();
        } 
};

// GDPR
let gdpr;

// Shows cookie banner.
function gdprShow() {
    gdprStatus = localStorage.getItem('gdprStatus');
    gdprStatus === 'off' ? document.getElementById('cookieBanner').style.visibility = 'hidden' : document.getElementById('cookieBanner').style.visibility = 'visible';
}

// Hides cookie banner.
function gdprClose() {
    document.getElementById('cookieBanner').style.visibility = 'hidden';
    gdprStatus = 'off';
    localStorage.setItem('gdprStatus', gdprStatus);
}


// POPUP IMG

// wasPopUpDisplayed = null which means last painting wasn't displayed earlier.
// Get SRC from last added IMG and asign it to POPUP IMG.
function showPopUpImg() {
    let wasPopUpDisplayed;
    wasPopUpDisplayed = sessionStorage.getItem('wasPopUpDisplayed');

    let photoNumber = Object.keys(pl.artworks).length;
    let popUpImageSource;

    if(photoNumber < 10) {
        popUpImageSource = `./images/000${photoNumber}/000${photoNumber}-1.jpg`;
    } else if(photoNumber >= 10) {
        popUpImageSource = `./images/00${photoNumber}/00${photoNumber}-1.jpg`;
    } else if(photoNumber >= 100) {
        popUpImageSource = `./images/0${photoNumber}/0${photoNumber}-1.jpg`;
    }

    if(wasPopUpDisplayed === null) {
        document.getElementById("popUpImg").src = popUpImageSource;
        wasPopUpDisplayed = 1;
        sessionStorage.setItem('wasPopUpDisplayed', wasPopUpDisplayed);  
    }
    else {
        closePopUpImg();
    }
}

// Close PopUpImg and display main list of paintings.
function closePopUpImg() {
    document.getElementById('artworksList').innerHTML = displayArtworksList();
    document.getElementById('popUpImgContainer').style.transitionDuration = '0.8s'; 
    document.getElementById('popUpImgContainer').style.animationTimingFunction = 'ease-in'; 
    document.getElementById('popUpImgContainer').style.opacity = '0';
    document.getElementById('popUpImgContainer').style.visibility = 'hidden';
}


// MAIN PAINTINGS

// Defaultvalue is displayAllValue which shows all painting but user clicking on side menu buttons can change that to show only Stryctural Collage or Interior.
let displayAllValue = 1;
let displayStructuralCollageValue = 0;
let displayInteriorValue = 0;

function displayAll() {
    displayAllValue = 1;
    displayStructuralCollageValue = 0;
    displayInteriorValue = 0; 
    document.getElementById('displayAllButton').style.color = 'rgba(255, 255, 255)';
    document.getElementById('displayStructuralCollageButton').style.color = 'rgba(128, 128, 128)';
    document.getElementById('displayInteriorButton').style.color = 'rgba(128, 128, 128)';
    return [displayAllValue, displayStructuralCollageValue, displayInteriorValue];
}

function displayStructuralCollage() {
    displayAllValue = 0;
    displayStructuralCollageValue = 1;
    displayInteriorValue = 0; 
    document.getElementById('displayAllButton').style.color = 'rgba(128, 128, 128)';
    document.getElementById('displayStructuralCollageButton').style.color = 'rgba(255, 255, 255)';
    document.getElementById('displayInteriorButton').style.color = 'rgba(128, 128, 128)';
    return [displayAllValue, displayStructuralCollageValue, displayInteriorValue];
}

function displayInterior() {
    displayAllValue = 0;
    displayStructuralCollageValue = 0;
    displayInteriorValue = 1; 
    document.getElementById('displayAllButton').style.color = 'rgba(128, 128, 128)';
    document.getElementById('displayStructuralCollageButton').style.color = 'rgba(128, 128, 128)';
    document.getElementById('displayInteriorButton').style.color = 'rgba(255, 255, 255)';
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
    for(let i = 0; i < Object.keys(pl.artworks).length; i++) { 
        
        if(displayStructuralCollageValue === 1) {
            if(pl.artworks[id].paintingDataAuthor === 'Structural Collage') {
                str = 
                `<div class='img-container' onclick='getPaintingNum("${id}")'>
                    <a href='./artworkitem.html'>
                        <img src='./images/${id}/${id}-1.jpg'>
                        <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                        <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                    </a>
                </div>`
            } else {
                str = '';
            }
        } else if (displayInteriorValue === 1) {
            if(pl.artworks[id].paintingDataAuthor === 'Interior') {
                str = 
                `<div class='img-container' onclick='getPaintingNum("${id}")'>
                    <a href='./artworkitem.html'>
                        <img src='./images/${id}/${id}-1.jpg'>
                        <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                        <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                    </a>
                </div>`
            } else {
                str = '';
            }
        } else if (displayAllValue === 1){
            str = 
            `<div class='img-container' onclick='getPaintingNum("${id}")'>
                <a href='./artworkitem.html'>
                    <img src='./images/${id}/${id}-1.jpg'>
                    <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                    <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                </a>
            </div>`
        }
        result = str.concat(result);
        lastNumofId++;
        id = '0000' + lastNumofId;
        id = id.substr(-4)
    }
    return result;
}

// SIDE MENU

// Show/hide Side Menu, calculate width and hide Menu/Close button.
function openSideMenu() { 
    if(window.screen.width < 426){
        document.getElementById('menu').style.width = '100%';
    } else {
        document.getElementById('menu').style.width = '23.5rem';
    }
    document.getElementById('menu-button').style.visibility = 'hidden';
    document.getElementById('backToMainPage').style.visibility = 'hidden';
}

function closeSideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('menu-button').style.visibility = 'visible';
    document.getElementById('backToMainPage').style.visibility = 'visible';
}


// ARTWORKITEM DISPLAY IMAGES OF PAINTINGS

// Get id of painting while clicked and use it to display this paintings subpage.
let paintingNum = '0000';

function getPaintingNum(num) {
    paintingNum = num;
    localStorage.setItem('paintingId', paintingNum);
    //paintingNum = localStorage.getItem('paintingId'); jeśli wszystko OK to usunąć
    return paintingNum;
}

// Take a length of list of paintings to display, loops thru them and display them (on sub page -> artworkitem.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same images of paintings.
function displayPaintings(paintingNum) {
    let result = '';
    for(let i = 1; i <= Object.keys(pl.artworks[paintingNum].paintingImages).length; i++) {
        let str = `
            <div class='img-item'>
                <img src='./images/${paintingNum}/${paintingNum}-${i}.jpg'/>
            </div>`;
        result += str;
    }   
    return result;
}


// ARTWORKITEM NAVIGATIONSCROLLEFFECT

// Take the position of scroll and changes navigation font color.
function navigationScrollEffect() { 
    if (window.pageYOffset > document.getElementById('paintingImages').offsetHeight - 100) {
        document.getElementById('menu-button').style.color = 'rgba(0, 0, 0)';
        document.getElementById('backToMainPage').style.color = 'rgba(0, 0, 0)';
        document.getElementById('name').style.color = 'rgba(0, 0, 0)';
        document.getElementById('pseudonym').style.color = 'rgba(0, 0, 0)';
    } else if (window.pageYOffset > document.getElementById('paintingImages').offsetHeight - 200){
        document.getElementById('img-description').style.backgroundColor = 'rgba(255, 255, 255)';
        document.getElementById('img-description').style.transitionDuration = '1.5s'; 
        document.getElementById('img-description').style.animationTimingFunction = 'ease-in'; 
    } else {
        document.getElementById('menu-button').style.color = 'rgba(128, 128, 128)';
        document.getElementById('backToMainPage').style.color = 'rgba(128, 128, 128)';
        document.getElementById('name').style.color = 'rgba(128, 128, 128)';
        document.getElementById('pseudonym').style.color = 'rgba(128, 128, 128)';
    }
     
};


// Take a length of list of exhibitions to display, loops thru them and display them (on exhibitions page -> exhibitions.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same length.
function displayExhibition() {
    let result = '';
    let id = '0001';
    let lastNumofId = 1;
    for(let i = 0; i < Object.keys(pl.exhibitions).length; i++) { 
        let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink1, exhibitionLink2, exhibitionLink3, exhibitionPoster} = pl.exhibitions[id];
        let str =         
            `<div class='container'>
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
            </div>`
        result = str.concat(result);
        lastNumofId++;
        id = '000' + lastNumofId;   
        id = id.substr(-4)
    }
    return result;
};


// MOVE TO BOTTOM

// Waits 3 seconds and move the page to the bottom of the page where bio text is placed.
function moveToBottom() {
    
    setTimeout( function() { 
        document.getElementById('biographyParagraph').scrollIntoView({ behavior: 'smooth', block: 'end' });   
     }, 1000);

  }


// DISPLAY EMAIL

// On click shows e-mail address in case client couldn't handle redirection.

function displayEmail(language) {
    document.getElementById('contactEmailButton').innerHTML = 'kontakt@michalkrol.eu';
    document.getElementById('contactEmailButton').style.width = '10rem';
}


// SCROLL POSITION

// Gets the scroll position to use it after 'back' button is clicked in artworkitem
let scrollPosition = sessionStorage.getItem('scrollPosition') || 0;

/*
function returnScrollPosition(scrollPosition) {
    sessionStorage.getItem('scrollPosition')
    window.scrollTo(0, scrollPosition);  
    return scrollPosition;
}
*/


function positionSite(scrollPosition) {
        window.scrollTo(0, scrollPosition); 

}

function getScrollPosition() {
    scrollPosition = window.pageYOffset;
    sessionStorage.setItem('scrollPosition', scrollPosition);  
    return scrollPosition;
}
