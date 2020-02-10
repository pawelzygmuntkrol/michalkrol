// POPUP IMG

// wasPopUpDisplayed = null which means last painting wasn't displayed earlier.
let wasPopUpDisplayed;

// Get SRC from last added IMG and asign it to POPUP IMG.
function showPopUpImg() {
    wasPopUpDisplayed = sessionStorage.getItem('wasPopUpDisplayed');

    let photoNumber = Object.keys(pl.artworks).length;
    let popUpImageSource = './images/0000/0000-1.jpg'.replace('0000', '000' + photoNumber).replace('0000', '000' + photoNumber);

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
        let str = `<div class='img-container' onclick='getPaintingNum("0000")'><a href='./artworkitem.html'><img src='./images/0000/0000-1.jpg'><p class='author'>authorStr</p><p class='title'>titleStr</p></a></div>`
        let newStr = str.replace('0000', id).replace('0000', id).replace('0000', id).replace('authorStr', pl.artworks[id].paintingDataAuthor).replace('titleStr', pl.artworks[id].paintingDataTitle);
        result = newStr.concat(result);
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

        document.getElementById('closeButton').innerHTML = pl.menu.closeButton;
        document.getElementById('exhibitionButton').innerHTML = pl.menu.exhibitionButton;
        document.getElementById('artworksButton').innerHTML = pl.menu.artworksButton;
        document.getElementById('biographyButton').innerHTML = pl.menu.biographyButton;
        document.getElementById('contactButton').innerHTML = pl.menu.contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            document.getElementById('paintingDataTitle').innerHTML = pl.artworks[paintingNum].paintingDataTitle;
            document.getElementById('paintingDataAuthor').innerHTML = pl.artworks[paintingNum].paintingDataAuthor;
            document.getElementById('paintingTitle').innerHTML = pl.artworks[paintingNum].paintingTitle;
            document.getElementById('paintingYearOfCreation').innerHTML = pl.artworks[paintingNum].paintingYearOfCreation;
            document.getElementById('paintingStatus').innerHTML = pl.artworks[paintingNum].paintingStatus;
            document.getElementById('paintingDescription').innerHTML = pl.artworks[paintingNum].paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);

        } else if(page === "exhibitions.html") {


        } else if(page === "biography.html") {
            document.getElementById('biographyHeader').innerHTML = pl.biography.biographyHeader;
            document.getElementById('biographyParagraph').innerHTML = pl.biography.biographyParagraph;

        } else if(page === "contact.html") {
            document.getElementById('contactHeader').innerHTML = pl.contact.contactHeader;
            document.getElementById('contactEmailButton').innerHTML = pl.contact.contactEmailButton;
        } 
};

function changeToEn() {
    language = 'en';
        document.getElementById('pl').style.color = 'rgba(128, 128, 128)';
        document.getElementById('en').style.color = 'rgba(255, 255, 255)';
        document.getElementById('de').style.color = 'rgba(128, 128, 128)';

        document.getElementById('closeButton').innerHTML = en.menu.closeButton;
        document.getElementById('exhibitionButton').innerHTML = en.menu.exhibitionButton;
        document.getElementById('artworksButton').innerHTML = en.menu.artworksButton;
        document.getElementById('biographyButton').innerHTML = en.menu.biographyButton;
        document.getElementById('contactButton').innerHTML = en.menu.contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            document.getElementById('paintingDataTitle').innerHTML = en.artworks[paintingNum].paintingDataTitle;
            document.getElementById('paintingDataAuthor').innerHTML = en.artworks[paintingNum].paintingDataAuthor;
            document.getElementById('paintingTitle').innerHTML = en.artworks[paintingNum].paintingTitle;
            document.getElementById('paintingYearOfCreation').innerHTML = en.artworks[paintingNum].paintingYearOfCreation;
            document.getElementById('paintingStatus').innerHTML = en.artworks[paintingNum].paintingStatus;
            document.getElementById('paintingDescription').innerHTML = en.artworks[paintingNum].paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);  

        } else if(page === "exhibitions.html") {


        } else if(page === "biography.html") {
            document.getElementById('biographyHeader').innerHTML = en.biography.biographyHeader;
            document.getElementById('biographyParagraph').innerHTML = en.biography.biographyParagraph;

        } else if(page === "contact.html") {
            document.getElementById('contactHeader').innerHTML = en.contact.contactHeader;
            document.getElementById('contactEmailButton').innerHTML = en.contact.contactEmailButton;
        } 
};

function changeToDe() {
    language = 'de';
        document.getElementById('pl').style.color = 'rgba(128, 128, 128)';
        document.getElementById('en').style.color = 'rgba(128, 128, 128)';
        document.getElementById('de').style.color = 'rgba(255, 255, 255)';

        document.getElementById('closeButton').innerHTML = de.menu.closeButton;
        document.getElementById('exhibitionButton').innerHTML = de.menu.exhibitionButton;
        document.getElementById('artworksButton').innerHTML = de.menu.artworksButton;
        document.getElementById('biographyButton').innerHTML = de.menu.biographyButton;
        document.getElementById('contactButton').innerHTML = de.menu.contactButton;

        let path = window.location.pathname;
        let page = path.split("/").pop();

        if(page === "artworkitem.html") {
            document.getElementById('paintingDataTitle').innerHTML = de.artworks[paintingNum].paintingDataTitle;
            document.getElementById('paintingDataAuthor').innerHTML = de.artworks[paintingNum].paintingDataAuthor;
            document.getElementById('paintingTitle').innerHTML = de.artworks[paintingNum].paintingTitle;
            document.getElementById('paintingYearOfCreation').innerHTML = de.artworks[paintingNum].paintingYearOfCreation;
            document.getElementById('paintingStatus').innerHTML = de.artworks[paintingNum].paintingStatus;
            document.getElementById('paintingDescription').innerHTML = de.artworks[paintingNum].paintingDescription;
            document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);

        } else if(page === "exhibitions.html") {


        } else if(page === "biography.html") {
            document.getElementById('biographyHeader').innerHTML = de.biography.biographyHeader;
            document.getElementById('biographyParagraph').innerHTML = de.biography.biographyParagraph;

        } else if(page === "contact.html") {
            document.getElementById('contactHeader').innerHTML = de.contact.contactHeader;
            document.getElementById('contactEmailButton').innerHTML = de.contact.contactEmailButton;
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
        let str = "<div class='img-item'><img src='./images/0000/0000-1.jpg'/></div>";
        let newStr = str.replace('0000', paintingNum).replace('0000', paintingNum).replace('-1', '-'+[i]);
        result += newStr;
    }   
    return result;
}


