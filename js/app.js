// POPUP IMG

// wasPopUpDisplayed = null which means last painting wasn't displayed earlier.
let wasPopUpDisplayed;

// Get SRC from last added IMG and asign it to POPUP IMG.
function showPopUpImg() {
    wasPopUpDisplayed = sessionStorage.getItem('wasPopUpDisplayed');

    let photoNumber = Object.keys(pl.artworks).length;
    let popUpImageSource = `./images/000${photoNumber}/000${photoNumber}-1.jpg`;

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

// Take a length of list of paintings to display, loops thru them and display them (on main page -> index.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same images of paintings.
function displayArtworksList() {
    let result = '';
    let id = '0001';
    let lastNumofId = 1;
    for(let i = 0; i < Object.keys(pl.artworks).length; i++) { 
        let str = 
            `<div class='img-container' onclick='getPaintingNum("${id}")'>
                <a href='./artworkitem.html'>
                    <img src='./images/${id}/${id}-1.jpg'>
                    <p class='author'>${pl.artworks[id].paintingDataAuthor}</p>
                    <p class='title'>${pl.artworks[id].paintingDataTitle}</p>
                </a>
            </div>`
        result = str.concat(result);
        lastNumofId++;
        id = '000' + lastNumofId;
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
}

function closeSideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('menu-button').style.visibility = 'visible';
}


// LANGUAGE

// Check users browser language.
let userBrowserLanguage = navigator.language.slice(0, 2);

// Disables automatic language choice if user click pl/en/de in side menu and remembers the choice.
function disableAutoLanguage(lang) {
    if(lang === 'pl') {
        userBrowserLanguage = 'pl';
    } else if(lang === 'en') {
        userBrowserLanguage = 'en';
    } else if(lang === 'de') {
        userBrowserLanguage = 'de';
    }

    localStorage.setItem('chosenLang', userBrowserLanguage);
    return userBrowserLanguage;
}

userBrowserLanguage = localStorage.getItem('chosenLang');

// Based on user choice/browser language specifies to language to use.
let language = '';

if(userBrowserLanguage === 'pl') {
    language = 'pl';
} else if (userBrowserLanguage === 'de') {
    language = 'de';
} else {
    language = 'en';
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


// All events that take place when language is set.
function changeToPl() {
    language = 'pl';
        document.getElementById('pl').style.color = 'rgba(255, 255, 255)';
        document.getElementById('en').style.color = 'rgba(128, 128, 128)';
        document.getElementById('de').style.color = 'rgba(128, 128, 128)';

        let {closeButton, exhibitionButton, artworksButton, biographyButton, contactButton} = pl.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            let {paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription} = pl.artworks[paintingNum];
                document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
                document.getElementById('paintingDataAuthor').innerHTML = paintingDataAuthor;
                document.getElementById('paintingTitle').innerHTML = paintingTitle;
                document.getElementById('paintingYearOfCreation').innerHTML = paintingYearOfCreation;
                document.getElementById('paintingStatus').innerHTML = paintingStatus;
                document.getElementById('paintingDescription').innerHTML = paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = pl.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster; 

        } else if(page === "biography.html") {
            let {biographyHeader, biographyParagraph} = pl.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph;

        } else if(page === "contact.html") {
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

        let {closeButton, exhibitionButton, artworksButton, biographyButton, contactButton} = en.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            let {paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription} = en.artworks[paintingNum];
                document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
                document.getElementById('paintingDataAuthor').innerHTML = paintingDataAuthor;
                document.getElementById('paintingTitle').innerHTML = paintingTitle;
                document.getElementById('paintingYearOfCreation').innerHTML = paintingYearOfCreation;
                document.getElementById('paintingStatus').innerHTML = paintingStatus;
                document.getElementById('paintingDescription').innerHTML = paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);  

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = en.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;       

        } else if(page === "biography.html") {
            let {biographyHeader, biographyParagraph} = en.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph;

        } else if(page === "contact.html") {
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

        let {closeButton, exhibitionButton, artworksButton, biographyButton, contactButton} = de.menu; 
            document.getElementById('closeButton').innerHTML = closeButton;
            document.getElementById('exhibitionButton').innerHTML = exhibitionButton;
            document.getElementById('artworksButton').innerHTML = artworksButton;
            document.getElementById('biographyButton').innerHTML = biographyButton;
            document.getElementById('contactButton').innerHTML = contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            let {paintingDataTitle, paintingDataAuthor, paintingTitle, paintingYearOfCreation, paintingStatus, paintingDescription} = de.artworks[paintingNum];
                document.getElementById('paintingDataTitle').innerHTML = paintingDataTitle;
                document.getElementById('paintingDataAuthor').innerHTML = paintingDataAuthor;
                document.getElementById('paintingTitle').innerHTML = paintingTitle;
                document.getElementById('paintingYearOfCreation').innerHTML = paintingYearOfCreation;
                document.getElementById('paintingStatus').innerHTML = paintingStatus;
                document.getElementById('paintingDescription').innerHTML = paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);

        } else if(page === "exhibitions.html") {
            document.getElementById('exhibitionData').innerHTML = displayExhibition(); 
            let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = de.exhibitions[exhibitionNum];
                document.getElementById('exhibitionHeader').innerHTML = exhibitionHeader;
                document.getElementById('exhibitionDate').innerHTML = exhibitionDate;
                document.getElementById('exhibitionParagraph').innerHTML = exhibitionParagraph;
                document.getElementById('exhibitionLink').innerHTML = exhibitionLink;
                document.getElementById('exhibitionPoster').innerHTML = exhibitionPoster;          

        } else if(page === "biography.html") {
            let {biographyHeader, biographyParagraph} = de.biography;
                document.getElementById('biographyHeader').innerHTML = biographyHeader;
                document.getElementById('biographyParagraph').innerHTML = biographyParagraph;

        } else if(page === "contact.html") {
            let {contactHeader, contactEmailButton} = de.contact;
                document.getElementById('contactHeader').innerHTML = contactHeader;
                document.getElementById('contactEmailButton').innerHTML = contactEmailButton;
        } 
};


// ARTWORKITEM BACKGROUND SCROLL EFFECT
/*
function backgroundScrollEffect() {
    let scrollPosition = window.pageYOffset;

    //document.getElementById('img-container').style.backgroundColor = 'rgba(255, 255, 255)';
}
*/

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



// Take a length of list of exhibitions to display, loops thru them and display them (on exhibitions page -> exhibitions.html).
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same length.
function displayExhibition() {
    let result = '';
    let id = '0001';
    let lastNumofId = 1;
    for(let i = 0; i < Object.keys(pl.exhibitions).length; i++) { 
        let {exhibitionHeader, exhibitionDate, exhibitionParagraph, exhibitionLink, exhibitionPoster} = pl.exhibitions[id];
        let str =         
            `<div class='container'>
                <div class='text'>
                    <h1 id='exhibitionHeader'>${exhibitionHeader}</h1>
                    <p id='exhibitionDate'>${exhibitionDate}</p>
                    <p id='exhibitionParagraph'>${exhibitionParagraph}</p>
                    <a id="exhibitionLink" href="${exhibitionLink}">${exhibitionLink}</a>
                </div>
                <div class='poster'>
                    <img id="exhibitionPoster" src="${exhibitionPoster}" alt="">
                </div>
            </div>`
        result = str.concat(result);
        lastNumofId++;
        id = '000' + lastNumofId;     
    }
    return result;
};