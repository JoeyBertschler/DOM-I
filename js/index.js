const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//changes title
const titleSelection = document.querySelector("title");
//console.log(titleSelection);
titleSelection.textContent = "Great Idea!";


//removes script
const scriptSelection = document.querySelector("script");
//console.log(scriptSelection);
scriptSelection.remove();


//puts a texts (one by one; multiple per .map?)
const multipleASelections = document.querySelectorAll("a");
//console.log(multipleASelections);
multipleASelections[0].textContent = "Services";
multipleASelections[1].textContent = "Product";
multipleASelections[2].textContent = "Vision";
multipleASelections[3].textContent = "Features";
multipleASelections[4].textContent = "About";
multipleASelections[5].textContent = "Contact";


// Example: Update the img src for the logo; put code here 4 order
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//put in text, some bold
const hSelection = document.querySelector("h1");
//console.log(hSelection);
//hSelection.textContent = "DOM<br> Is<br> Awesome"; -> doesn't recognize the line breaks
hSelection.innerHTML = "DOM <br> Is<br> Awesome"; //works but should be avoided: "inner html hack vector/unsafe"


//put in text
const buttonSelection = document.querySelector("button");
//console.log(buttonSelection);
//hSelection.textContent = "DOM<br> Is<br> Awesome"; -> doesn't recognize the line breaks
buttonSelection.innerHTML = "Get Started"; //works but should be avoided: "inner html hack vector/unsafe"


//put in src
const imageSelection = document.querySelector("#cta-img");
// imageSelection.setAttribute('src', 'img/header-img.png');
imageSelection.src = 'img/header-img.png'


//put in text for all h4
const h4Selection = document.querySelectorAll('h4');
//console.log(h4Selection);
h4Selection[0].textContent = "Features";
h4Selection[1].textContent = "About";
h4Selection[2].textContent = "Services";
h4Selection[3].textContent = "Product";
h4Selection[4].textContent = "Vision";
h4Selection[5].textContent = "Contact ";


//put in text for all p
const pSelection = document.querySelectorAll('p');
console.log(pSelection);
pSelection[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pSelection[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pSelection[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pSelection[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pSelection[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// doesn't do linebreaks pSelection[5].textContent = "123 Way 456 Street <br> Somewhere, USA";
pSelection[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA"; 
pSelection[6].textContent = "1 (888) 888-8888";
pSelection[7].textContent = "sales@greatidea.io";
pSelection[8].textContent = "Copyright Great Idea! 2018";


//in 54 put in src / update the img src for the 2nd logo
let middleLogo = document.getElementById("middle-img");
middleLogo.src = 'img/mid-page-accent.jpg';


//Change the color of the navigation text to be green.
  // const navTextColor = document.querySelector('nav');
  //navTextColor.style.color = "green"; -> would work for background color, need to aim at a tags
const navTextColorSecondAttempt = document.querySelectorAll('nav a');
// console.log(navTextColorSecondAttempt)
function colorTextContent(element) {element.style.color = "green";}
navTextColorSecondAttempt.forEach(colorTextContent)


//.appendChild() .prepend() add two new items to nav system
const navPrependSelection = document.querySelector('nav');

const navPrepend = document.createElement('a');
  navPrepend.style.fontSize = "1.69rem";
  navPrepend.style.color = "pink";
navPrepend.setAttribute('href', '#');
navPrepend.textContent = "Start";
navPrependSelection.prepend(navPrepend);

const navAppend = document.createElement('a');
  navAppend.style.fontSize = "0.420rem";
  navAppend.style.color = "blue";
navAppend.setAttribute('href', '#');
navAppend.textContent = "End";
navPrependSelection.appendChild(navAppend);


//