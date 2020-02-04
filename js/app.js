// POPUP IMG

// Get SRC from last added IMG and asign it to POPUP IMG.
function showPopUpImg() {
    document.getElementById("popUpImg").src = document.getElementById("popUpImgPrototype").src;
}

function closePopUpImg() {
    document.getElementById('popUpImgContainer').style.transitionDuration = '0.8s'; 
    document.getElementById('popUpImgContainer').style.animationTimingFunction = 'ease-in'; 
    document.getElementById('popUpImgContainer').style.opacity = '0';
    document.getElementById('popUpImgContainer').style.visibility = 'hidden';
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

// Check users browser language and turns language.
let userBrowserLanguage = navigator.language.slice(0, 2);
let language = '';

if(userBrowserLanguage === 'pl') {
    language = 'pl';
} else if (userBrowserLanguage === 'de') {
    language = 'de';
} else {
    language = 'en';
}

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

        document.getElementById('paintingDataTitle').innerHTML = pl.artworks[paintingNum].paintingDataTitle;
        document.getElementById('paintingDataAuthor').innerHTML = pl.artworks[paintingNum].paintingDataAuthor;
        document.getElementById('paintingTitle').innerHTML = pl.artworks[paintingNum].paintingTitle;
        document.getElementById('paintingYearOfCreation').innerHTML = pl.artworks[paintingNum].paintingYearOfCreation;
        document.getElementById('paintingStatus').innerHTML = pl.artworks[paintingNum].paintingStatus;
        document.getElementById('paintingDescription').innerHTML = pl.artworks[paintingNum].paintingDescription;
        document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);
        
        document.getElementById('biographyHeader').innerHTML = pl.biography.biographyHeader;
        document.getElementById('biographyParagraph').innerHTML = pl.biography.biographyParagraph;
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

        document.getElementById('paintingDataTitle').innerHTML = en.artworks[paintingNum].paintingDataTitle;
        document.getElementById('paintingDataAuthor').innerHTML = en.artworks[paintingNum].paintingDataAuthor;
        document.getElementById('paintingTitle').innerHTML = en.artworks[paintingNum].paintingTitle;
        document.getElementById('paintingYearOfCreation').innerHTML = en.artworks[paintingNum].paintingYearOfCreation;
        document.getElementById('paintingStatus').innerHTML = en.artworks[paintingNum].paintingStatus;
        document.getElementById('paintingDescription').innerHTML = en.artworks[paintingNum].paintingDescription;
        document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);
        

        document.getElementById('biographyHeader').innerHTML = en.biography.biographyHeader;
        document.getElementById('biographyParagraph').innerHTML = en.biography.biographyParagraph;
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

        document.getElementById('paintingDataTitle').innerHTML = de.artworks[paintingNum].paintingDataTitle;
        document.getElementById('paintingDataAuthor').innerHTML = de.artworks[paintingNum].paintingDataAuthor;
        document.getElementById('paintingTitle').innerHTML = de.artworks[paintingNum].paintingTitle;
        document.getElementById('paintingYearOfCreation').innerHTML = de.artworks[paintingNum].paintingYearOfCreation;
        document.getElementById('paintingStatus').innerHTML = de.artworks[paintingNum].paintingStatus;
        document.getElementById('paintingDescription').innerHTML = de.artworks[paintingNum].paintingDescription;
        document.getElementById('paintingImages').innerHTML = displayPaintings(paintingNum);

        document.getElementById('biographyHeader').innerHTML = de.biography.biographyHeader;
        document.getElementById('biographyParagraph').innerHTML = de.biography.biographyParagraph;
};


// ARTWORKITEM BACKGROUND SCROLL EFFECT
/*
let imgContainerHeight = document.getElementById('img-container').offsetHeight;
imgContainerHeight -= '300';

function backgroundScrollEffect() {
    if(document.getElementById('img-container').scrollTop > '300')
    document.getElementById('img-container').style.backgroundColor = 'rgba(255, 255, 255)';
}
*/

// ARTWORKITEM DISPLAY IMAGES OF PAINTINGS

// Get id of painting while clicked and use it to display this paintings subpage.
let paintingNum = '0000';

function getPaintingNum(num) {
    paintingNum = num;
    localStorage.setItem('paintingId', paintingNum);
    paintingNum = localStorage.getItem('paintingId');
    return paintingNum;
}

// Take a length of list of paintings to display, loops thru them and display them.
// In this case PL is given but it does not matter, all objects (PL/EN/DE) have the same images of paintings.
function displayPaintings(paintingNum) {
    let result = '';
    for(let i = 1; i <= Object.keys(pl.artworks[paintingNum].paintingImages).length; i++) {
        let str = "<div class='img-item'><img src='./images/0000/0000-1.jpg'/></div>"
        let newStr = str.replace('0000', paintingNum).replace('0000', paintingNum).replace('-1', '-'+[i]);
        result += newStr;
    }   
    return result;
}