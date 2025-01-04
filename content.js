const siteTitle = "Allison Bielaski"
const footer = `&copy; Copyright ${new Date().getFullYear()} - Allison Bielaski`;

var navItems = [
    {linkTitle: "About Me", path: "index.html"}, 
    {linkTitle: "Experience Overview", path: "index.html"},
    {linkTitle: "Design Samples", path: "designs.html"},
    {linkTitle: "Programming Samples", path: "coding.html"},
];

const pointsAboutMe = [
    {text: "Detail-oriented",                   iconPath: "newImages/icons/detailOriented.png"},
    {text: "Passionate about quality",          iconPath: "newImages/icons/quality.png"},
    {text: "Growth-mindset",                    iconPath: "newImages/icons/growthMindset.png"},
    {text: "Strong organizational skills",      iconPath: "newImages/icons/organized.png"},
    {text: "Customer-focused",                  iconPath: "newImages/icons/customerFocused.png"},
    {text: "Perseverant",                       iconPath: "newImages/icons/perseverant.png"},
    {text: "Excellent with grammar/editing",    iconPath: "newImages/icons/grammar.png"},
    {text: "Reliable",                          iconPath: "newImages/icons/reliable.png"},
    {text: "Typing speed – 60-70 WPM",          iconPath: "newImages/icons/typing.png"},
    {text: "Ready and interested to learn",     iconPath: "newImages/icons/learning.png"}
];

var programmingSamples = [
    {title: "About Me", image: "images/", description: ""}, 

];

var designSamples = [
    {
        id: "selkie",
        title: "Prototyped Mobile App Game Design - Selkie Quest", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/selkie1.png", "newImages/selkie2.png", "newImages/selkie3.png", "newImages/selkie4.png", "newImages/selkie5.png"], 
        description: `In this project, my group needed to create a game related to Selkies (an ancient Irish mythological creature that can shift from seal to 
        human by shedding their skin when they leave the sea). Because Selkie’s are charming and hardworking, the family who the Selkie was living with moved its 
        sealskin across town to keep the Selkie from going back to the sea. The Selkie must battle opponents along the way to get it back but can enlist the help 
        of other mythological creatures (that the player has in their card deck). The screen prototypes below were designed by me and are for the use cases: purchasing 
        a card package & playing the single player story mode. My inspiration behind this design was a blue water background for the seal, the gold border for ancient 
        mythology, and the land is an image of Ireland because it was ancient *Irish* mythology. <br>
        [Course: User Experience; Created Via: Justinmind Prototyper Application]`, 
        course: "User Experience", 
        techUsed: "Justinmind Prototyper Application"
    }, 
    {
        id: "smartApplianceDashboard",
        title: "Prototyped Data Visualization Dashboard for Smart Home Appliances", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/dashboard.png"], 
        description: `The graphs were created in Microsoft Excel and modified for aesthetic appeal then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and is a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company.`, 
        course: "Graphic Techniques for Software Design", 
        techUsed: " Adobe Photoshop, Microsoft Excel"
    }, 
    //TEMP
    {
        id: "temp1",
        title: "Prototyped Mobile App Game Design - Selkie Quest", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/selkie1.png", "newImages/selkie2.png", "newImages/selkie3.png", "newImages/selkie4.png", "newImages/selkie5.png"], 
        description: `In this project, my group needed to create a game related to Selkies (an ancient Irish mythological creature that can shift from seal to 
        human by shedding their skin when they leave the sea). Because Selkie’s are charming and hardworking, the family who the Selkie was living with moved its 
        sealskin across town to keep the Selkie from going back to the sea. The Selkie must battle opponents along the way to get it back but can enlist the help 
        of other mythological creatures (that the player has in their card deck). The screen prototypes below were designed by me and are for the use cases: purchasing 
        a card package & playing the single player story mode. My inspiration behind this design was a blue water background for the seal, the gold border for ancient 
        mythology, and the land is an image of Ireland because it was ancient *Irish* mythology.`, 
        course: "User Experience", 
        techUsed: "Justinmind Prototyper Application"
    }, 
    {
        id: "temp2",
        title: "Prototyped Data Visualization Dashboard for Smart Home Appliances", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/dashboard.png"], 
        description: `The graphs were created in Microsoft Excel and modified for aesthetic appeal then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and is a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company.`, 
        course: "Graphic Techniques for Software Design", 
        techUsed: " Adobe Photoshop, Microsoft Excel"
    }, 
    {
        id: "temp3",
        title: "Prototyped Mobile App Game Design - Selkie Quest", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/selkie1.png", "newImages/selkie2.png", "newImages/selkie3.png", "newImages/selkie4.png", "newImages/selkie5.png"], 
        description: `In this project, my group needed to create a game related to Selkies (an ancient Irish mythological creature that can shift from seal to 
        human by shedding their skin when they leave the sea). Because Selkie’s are charming and hardworking, the family who the Selkie was living with moved its 
        sealskin across town to keep the Selkie from going back to the sea. The Selkie must battle opponents along the way to get it back but can enlist the help 
        of other mythological creatures (that the player has in their card deck). The screen prototypes below were designed by me and are for the use cases: purchasing 
        a card package & playing the single player story mode. My inspiration behind this design was a blue water background for the seal, the gold border for ancient 
        mythology, and the land is an image of Ireland because it was ancient *Irish* mythology.`, 
        course: "User Experience", 
        techUsed: "Justinmind Prototyper Application"
    }, 
    {
        id: "temp4",
        title: "Prototyped Data Visualization Dashboard for Smart Home Appliances", 
        displayImagePath: "newImages/selkie1.png",
        imagePaths: ["newImages/dashboard.png"], 
        description: `The graphs were created in Microsoft Excel and modified for aesthetic appeal then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and is a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company.`, 
        course: "Graphic Techniques for Software Design", 
        techUsed: " Adobe Photoshop, Microsoft Excel"
    }, 
];

var programmingSamples = [

];

var experience = [
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "course",
        title: "Programming Dynamic Websites",
        dates: "Winter 2022 Term",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    //temp
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "course",
        title: "Programming Dynamic Websites",
        dates: "Winter 2022 Term",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
    {
        type: "job",
        title: "Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio", "C#", "Visual Studio Code", "React", "TypeScript"]
    },
]








//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================


// let button = document.getElementById("scrollDiv");

// button.onclick = () => {
//     // document.getElementById("aboutMeList").scrollLeft += 20;
//     alert("Hello, this is an inline function!");

//     // document.getElementsByTagName("h1").innerHTML = "hi";
//   };



// function customScroll() {
//     alert("Hello, this is an inline function!");

//     // document.getElementById("hi").innerHTML = "hi";
//     // aboutMeList.scrollLeft += 20;

// }




/**

 */




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


function populateAboutMeSection() {
    let aboutMeList = document.getElementById("aboutMeList");
    pointsAboutMe.forEach(item => {
        let elementToAdd = document.createElement("li");
        elementToAdd.innerHTML = item;
        aboutMeList.appendChild(elementToAdd);
    });
}


*/}





// //set nav
// function setNavigationLinks() {
//     let nav = document.getElementById("nav");
//     navItems.forEach(item => {
//         let elementToAdd = document.createElement("a");
//         elementToAdd.innerHTML = item.linkTitle;
//         elementToAdd.setAttribute("href", item.path)
//         nav.appendChild(elementToAdd);
//     });
// }