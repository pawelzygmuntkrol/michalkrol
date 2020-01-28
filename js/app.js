// POPUP IMG

//Get SRC from last added IMG and asign it to POPUP IMG
function showPopUpImg() {
    document.getElementById("popUpImg").src = document.getElementById("popUpImgPrototype").src;
}

function closePopUpImg() {
    document.getElementById('popUpImgContainer').style.transitionDuration = '0.8s'; 
    document.getElementById('popUpImgContainer').style.animationTimingFunction = 'ease-in'; 
    document.getElementById('popUpImgContainer').style.opacity = '0';
    document.getElementById('popUpImgContainer').style.visibility = 'hidden';
}


//SIDE MENU

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


//LANGUAGE

function defaultLanguage() {
    let language = 'pl';
}


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

        document.getElementById('biographyHeader').innerHTML = de.biography.biographyHeader;
        document.getElementById('biographyParagraph').innerHTML = de.biography.biographyParagraph;
};




