const footer = `&copy; Copyright ${new Date().getFullYear()} - Allison Bielaski`;

const pointsAboutMe = [
    {text: "Detail-oriented",                   iconPath: "images/icons/detailOriented.png"},
    {text: "Passionate about quality",          iconPath: "images/icons/quality.png"},
    {text: "Growth-mindset",                    iconPath: "images/icons/growthMindset.png"},
    {text: "Strong organizational skills",      iconPath: "images/icons/organized.png"},
    {text: "Customer-focused",                  iconPath: "images/icons/customerFocused.png"},
    {text: "Perseverant",                       iconPath: "images/icons/perseverant.png"},
    {text: "Excellent with grammar/editing",    iconPath: "images/icons/grammar.png"},
    {text: "Reliable",                          iconPath: "images/icons/reliable.png"},
    {text: "Typing speed <br> 60-70 WPM",       iconPath: "images/icons/typing.png"},
    {text: "Ready and interested to learn",     iconPath: "images/icons/learning.png"}
];

const designSamples = [
    {
        id: "selkie",
        title: "Selkie Quest: Mobile App Game Design", 
        displayImagePath: "images/designs/selkie/selkie7.png",
        imagePaths: ["images/designs/selkie/selkieDisplayImage.png", "images/designs/selkie/selkie1.png", "images/designs/selkie/selkie2.png", "images/designs/selkie/selkie3.png", 
            "images/designs/selkie/selkie4.png", "images/designs/selkie/selkie5.png", "images/designs/selkie/selkie6.png", "images/designs/selkie/selkie7.png", 
            "images/designs/selkie/selkie8.png", "images/designs/selkie/selkie9.png", "images/designs/selkie/selkie10.png", "images/designs/selkie/selkie11.png", 
            "images/designs/selkie/selkie12.png", "images/designs/selkie/selkie13.png", "images/designs/selkie/selkie14.png"], 
        description: `In this project, my group needed to create a game related to Selkies (an ancient Irish mythological creature that can shift from seal to 
        human by shedding their skin when they leave the sea). Because Selkie’s are charming and hardworking, the family who the Selkie was living with moved its 
        sealskin across town to keep the Selkie from going back to the sea. The Selkie must battle opponents along the way to get it back but can enlist the help 
        of other mythological creatures (that the player has in their card deck). The screen prototypes below were designed by me and are for the use cases: purchasing 
        a card package & playing the single player story mode. My inspiration behind this design was a blue water background for the seal, the gold border for ancient 
        mythology, and the land is an image of Ireland because it was ancient *Irish* mythology. <br>
        [Course: User Experience; Tools Used: Justinmind Prototyper Application]`, 
        
    }, 
    {
        id: "dashboards",
        title: "Data Visualization Dashboards", 
        displayImagePath: "images/designs/dashboards/smartDashboard.png",
        imagePaths: ["images/designs/dashboards/dashboardDisplayImage.png", "images/designs/dashboards/smartDashboard.png", "images/designs/dashboards/smartDashboardLogo.png", 
            "images/designs/dashboards/healthDashboard.png", "images/designs/dashboards/realEstateDashboard.PNG"], 
        description: `<u>Smart Home Appliance Company Analytics:</u> <br>
        First, the graphs were created in Microsoft Excel and modified for aesthetic appeal then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and is a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company. <br>
        [Course: Graphic Techniques for Software Design; Tools Used: Adobe Photoshop, Microsoft Excel] <br><br>
        
        <u>Health Tracker:</u> <br>
        After learning dashboard design best practices, I put this design together with a few colours and ample whitespace to prevent the user from becoming overwhelmed. I decided
        on a green theme because healthiness is associated with green vegetables. Red was used as a warning/alert to identify when key performance indicators/goals are not being 
        met. There are settings icons which allow the user to adjust the time frames/intervals to their liking if they want to explore further as well. Otherwise, appropriate graph types
        were chosen and everything was labelled for clarity.
        <br> [Course: Data Science and Visualization; Tools Used: Adobe Photoshop, Microsoft Excel] <br><br>
        
        <u>Real Estate Agent Tool:</u> <br>
        This dashboard was designed by me based on a data set to help real estate agents easily narrow down the top zip codes they should take their clients to within their price range, 
        to find the best and biggest listings. There are lots of filter options on the left side, as well as click-to-filter functionality which also adjusts the other graphs when one 
        data section is selected.
        <br> [Course: Data Science and Visualization; Tools Used: Power BI]`, 
    }, 
    {
        id: "music",
        title: "Emersion: Music Mobile App Design", 
        displayImagePath: "images/designs/music/musicDisplayImage.png",
        imagePaths: ["images/designs/music/musicDisplayImage.png", "images/designs/music/music1.png", "images/designs/music/music2.png", "images/designs/music/music3.png", ], 
        description: `For this assignment, we were given the music category and a few requirements for the pages, then tasked with creating a unique design for it. I chose a piano
        theme for the most part and went with black and white colours mainly, used music notes for the navigation tabs, a music sheet for the song lyrics, and piano keys to align 
        the app title lettering. There were also accessibility considerations such as good contrast, additional indicators besides colour for selected items, and the ability to stop
        moving lyrics.        
        <br> [Course: The Emerging Interface; Tools Used: Figma]`, 
    }, 
    {
        id: "clothes",
        title: "Change-It-Up: Clothing Mobile App Design", 
        displayImagePath: "images/designs/clothes/clothesDisplay.png",
        imagePaths: ["images/designs/clothes/clothesDisplayImage.png", "images/designs/clothes/clothes1.png", "images/designs/clothes/clothes2.png",
            "images/designs/clothes/clothes3.png", "images/designs/clothes/clothes4.png", "images/designs/clothes/clothes5.png",
            "images/designs/clothes/clothes6.png",
        ], 
        description: `Above is my design for an application in which users can upload pictures of their clothes and put outfits together. The app keeps track of when something 
        was worn last and will generate outfit suggestions that haven't been worn in a while (based on the weather) to remove the morning stress of trying to think of something 
        new to wear. <br>
        [Course: User Experience; Tools Used: Justinmind Prototyper Application]`, 
    }, 
    {
        id: "parent",
        title: "Converse to Thrive: Parenting Mobile App Design", 
        displayImagePath: "images/designs/parent/parentDisplayImage.png",
        imagePaths: ["images/designs/parent/parentDisplayImage.png", "images/designs/parent/parent1.png", "images/designs/parent/parent2.png",
            "images/designs/parent/parent3.png", "images/designs/parent/parent4.png", "images/designs/parent/parentLogo.png",
        ], 
        description: `This is my design mockup for an innovative app where parents can receive AI suggestions to speak to their children based on expert recommendations that foster
        emotional regulation, critical thinking, intrinsic motivation, and proper communication. The logo displays a brain growing like a plant (when you water it frequently), and
        a parent speaking to the child, making neural connections, inside the brain. I gave both the logo and the background a grainy texture which gives the app a unique feel to it.
        <br> [Course: Entrepreneurship; Tools Used: Adobe Photoshop]`, 
    }, 
    {
        id: "fish",
        title: "Graphic Illustrations for a Children's Book", 
        displayImagePath: "images/designs/fish/fishDisplay.PNG",
        imagePaths: ["images/designs/fish/fishDisplayImage.PNG", "images/designs/fish/fish1.png", "images/designs/fish/fish2.png", "images/designs/fish/fish3.png",
            "images/designs/fish/fish4.png", "images/designs/fish/fish5.png", "images/designs/fish/fish6.png"
        ], 
        description: `This children's book about a fish getting scared and seeking therapy was written and illustrated by me. The images were created using the curvature pen tool, 
        the brush tool, effects/filters, gradients, etc. <br>
        [Course: Graphic Techniques for Illustration; Tools Used: Adobe Illustrator]`, 
    },
    
];

//blender??

//mobile II final project //
//mobile 1 final project //
//game final project //

//asp.net final
//js mongo final
//millionaire game?

const programmingSamples = [
    {
        id: "movie",
        title: "OMDB Mobile Movie Application", 
        displayImagePath: "images/programs/movie/movieDisplay.png",
        imagePaths: ["videos/movieAppDemo.mp4", "images/programs/movie/movie1.png", "images/programs/movie/movie2.png", "images/programs/movie/movie3.png", "images/programs/movie/movie4.png",
            "images/programs/movie/movie5.png", "images/programs/movie/movie6.png", "images/programs/movie/movie7.png", "images/programs/movie/movie8.png", "images/programs/movie/movie9.png",
            "images/programs/movie/movie10.png"
        ], 
        description: `In this mobile application, Firebase is used to authenticate users as they login or register new accounts, and store their favourite movies list. In the first navigation 
        tab, users can enter a search input which will retrieve applicable movies from the OMDB public API database and show the results in a RecyclerView.  When the user clicks a movie in the 
        list, it will display further details in a new activity/page and allow them to add it to their favourites list.  In the favourites navigation tab, they can do the same thing, but they 
        also have the option to update the movie description there, or delete it from their list.  This project was cumulative in nature to reflect the learning of the MVVM (model-view-viewmodel) 
        architecture, LiveData, view binding, click listeners, fragments, custom xml UI layouts, clean folder organization, java code, and much more.
        <br> [Course: Programming: Mobile Applications II; Created Via: Android Studio & Firebase]`, 
    },
    {
        id: "easter",
        title: "Easter Egg Catch: Computer Game", 
        displayImagePath: "images/programs/easter/easter2.png",
        imagePaths: ["videos/easterGameDemo.mp4", "images/programs/easter/easter1.png", "images/programs/easter/easter2.png", "images/programs/easter/easter3.png", "images/programs/easter/easter4.png",
            "images/programs/easter/easter5.png"
        ], 
        description: `This Easter Egg Catch computer game idea was developed by me and provides a challenge for the player to get through three levels without dropping any eggs outside of the basket or 
        letting the snake get to it. With each new level, the eggs drop quicker and the snake gets faster/bigger. The goal of this final MonoGame project was to demonstrate my knowledge of how to create 
        assets, sound effects, a dynamic background, keyboard controls, levels, animations, text, and scoring. Code quality was also a high priority with well-structured classes (constructor, initialize, 
        load, update, and draw methods) for various game aspects, thorough commenting, adherence to programming standards, and efficient performance in a frames-per-second environment.
        <br> [Course: Game & Data Structures; Created Via: Visual Studio & MonoGame]`, 
    },
    {
        id: "travel",
        title: "Group Travel Organizer Mobile App", 
        displayImagePath: "images/programs/travel/travelDisplay.png",
        imagePaths: ["images/programs/travel/travelFull.png", "images/programs/travel/travel1.png", "images/programs/travel/travel2.png", "images/programs/travel/travel3.png", "images/programs/travel/travel4.png", 
            "images/programs/travel/travel5.png", "images/programs/travel/travel6.png", "images/programs/travel/travel7.png", "images/programs/travel/travel8.png", "images/programs/travel/travel9.png", 
            "images/programs/travel/travel10.png", "images/programs/travel/travel11.png", "images/programs/travel/travel12.png", "images/programs/travel/travel13.png", "images/programs/travel/travel14.png" 
        ], 
        description: `Using Visual Studio Code, I created a mobile app for leaders to keep track of all members involved in a group trip, the excursions planned, and to do items. 
        As the app was related to travel, I chose to design the user interface with a tropical background and sandy back colours for an aesthetic appeal. This project was executed 
        via HTML, CSS, JavaScript, jQuery, and Web SQL. The JavaScript files were sorted by event handlers (global.js), business logic (façade.js), form validation logic (util.js), 
        database CRUD actions (DAL.js), database/table creation/deletion (database.js), and object classes. It is a well-functioning app that can retrieve saved information each time it 
        is opened and completely reset for a new trip when needed.
        <br> [Course: Programming Mobile Applications I; Created Via: Visual Studio Code & jQuery]`, 
    },
    // {
    //     id: "",
    //     title: "", 
    //     displayImagePath: "images/programs/.png",
    //     imagePaths: ["videos/.mp4", "images/programs/.png"
    //     ], 
    //     description: `__________
    //     <br> [Course: ; Created Via: ]`, 
    // },
];

const experience = [
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

//const siteTitle = "Allison Bielaski"

// course: "", 
// techUsed: ""

// var navItems = [
//     {linkTitle: "About Me", path: "index.html"}, 
//     {linkTitle: "Experience Overview", path: "index.html"},
//     {linkTitle: "Design Samples", path: "designs.html"},
//     {linkTitle: "Programming Samples", path: "coding.html"},
// ];


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