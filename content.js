const siteTitle = "Allison Bielaski's ePortfolio"
const footer = `&copy; Copyright ${new Date().getFullYear()} - Allison Bielaski`;

var navItems = [
    {linkTitle: "About Me", path: "index.html"}, 
    {linkTitle: "Experience Overview", path: "index.html"},
    {linkTitle: "Design Samples", path: "designs.html"},
    {linkTitle: "Programming Samples", path: "coding.html"},
];

var pointsAboutMe = [
    "Detail-oriented",
    "Passionate about quality",
    "Ready and interested to learn",
    "Growth-mindset",
    "Strong organizational skills",
    "Customer-focused",
    "Perseverant",
    "Typing speed – 60-70 WPM",
    "Excellent with grammar/editing",
    "Reliable",
];

var programmingSamples = [
    {title: "About Me", image: "images/", description: ""}, 

];

var designSamples = [
    {title: "About Me", image: "images/", description: "", course: "", techUsed: ""}, 

];




window.onload = function setInitialData() {
    //set website title/header & footer
    document.getElementById("siteTitle").innerHTML = siteTitle;
    document.getElementById("siteFooter").innerHTML = footer;

    setNavigationLinks();
    populateAboutMeSection()
    
}


//set nav
function setNavigationLinks() {
    let nav = document.getElementById("nav");
    navItems.forEach(item => {
        let elementToAdd = document.createElement("a");
        elementToAdd.innerHTML = item.linkTitle;
        elementToAdd.setAttribute("href", item.path)
        nav.appendChild(elementToAdd);
    });
}

//set about me
function populateAboutMeSection() {
    let aboutMeList = document.getElementById("aboutMeList");
    pointsAboutMe.forEach(item => {
        let elementToAdd = document.createElement("li");
        elementToAdd.innerHTML = item;
        aboutMeList.appendChild(elementToAdd);
    });
}







//-------------------------------------------------------------------
{/* 
// console.log();
// let innerText = document.createTextNode(item);
// elementToAdd.appendChild(innerText);
    
<a href = "index.html"> About Me </a> 
<a href = "designs.html"> Experience Overview</a> 
<a href = "designs.html"> Design Samples </a> 
<a href = "coding.html"> Programming Samples </a>  

<li> Detail-oriented </li>
<li> Passionate about quality </li>
<li> Ready and interested to learn </li>
<li> Growth-mindset </li>
<li> Strong organizational skills </li>
<li> Customer-focused </li>
<li> Perseverant </li>
<li> Typing speed – 60-70 WPM </li>
<li> Excellent with grammar/editing </li>
<li> Reliable </li>




*/}

        