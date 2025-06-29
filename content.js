const myName = "Allison Bielaski";
const jobTitles = "UX/UI Designer & Front-End Developer";
const introParagraph = `At one time or another, we've all experienced outdated or frustrating user interfaces. Four years ago, I decided to stop just thinking about how I wanted 
to change screens that I have no control over, and start learning how to make them professionally – both as a designer and a programmer. My education has set me up with a solid 
foundation to address your requirements, from the beginning of the software development lifecycle to the end. I’d love to hear your ideas, and help create or enhance the front-end 
of your application for an optimal user experience that is aesthetic, accessible, and responsive.`;

const navItems = [
    {pageName: "Home", route: "index.html"},
    {pageName: "Design / Art", route: "designs.html"},
    {pageName: "Programming", route: "programs.html"},
];

const footerText = `&copy; Copyright ${new Date().getFullYear()} - Allison Bielaski`;
const linkedInLink = {url: "https://www.linkedin.com/in/allison-bielaski-programmer-designer", imgRoute: "images/icons/linkedInPink.png", altText: "LinkedIn Logo"};

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

const designTechSkills = [
    "Figma",
    "Adobe Photoshop & Illustrator",
    "Justinmind",
    "Visual Paradigm",
    "Lucidchart",
    "Blender",
];

const codingTechSkills = [
    "JavaScript/TypeScript",
    "React/React Native",
    "Node, Express",
    "EJS",
    "jQuery",
    "Jest Automation Testing",
    "HTML / CSS, Tailwind CSS",
    "Java/JSP/Servlets",
    "C# (.NET Framework)",
    "ASP.NET Core MVC",
    "Unity (Incl. Unit, Integration, & System Testing)",
    "MonoGame",
];

const dataTechSkills = [
    "MySQL",
    "Microsoft SQL Server",
    "Microsoft Access",
    "MongoDB",
    "Power BI",
    "Tableau",
];

//---------------------- FUNCTIONS --------------------------
function getDescriptionMetaData({isDesignItem, course, tools}) {
    const toolsHeader = isDesignItem ? "Tools Used:" : "Created Via:";

    return `<br><br>
            <span class="pinkText"> Course:         </span>    ${course}   <br> 
            <span class="pinkText"> ${toolsHeader}  </span>    ${tools}`;
}

function getSubHeader(title) {
    return `<u>${title}:</u> <br>`;
}
//------------------------------------------------------------



const designSamples = [
    {
        id: "music",
        title: "Emersion: Music Mobile App Design", 
        displayImagePath: "images/designs/music/musicDisplayImage.png",
        imagePaths: ["images/designs/music/musicDisplayImage.png", "images/designs/music/music1.png", "images/designs/music/music2.png", "images/designs/music/music3.png", 
            "images/designs/music/WebHomeDesign.png", "images/designs/music/WebPlayerDesign.png", "images/designs/music/Wireframes.PNG",  
        ], 
        description: `For this assignment, we were given the music category and a few requirements for the pages, then tasked with creating a unique design for it. I chose a piano
        theme for the most part and applied black and white colours mainly, music notes for the navigation tabs, a music sheet for the song lyrics, and piano keys to align 
        the app title lettering. There were also accessibility considerations such as good contrast, additional indicators besides colour for selected items, and the ability to stop
        moving lyrics. 
        ${getDescriptionMetaData({isDesignItem: true, course: "The Emerging Interface", tools: "Figma"})}`,
    }, 
    {
        id: "dashboards",
        title: "Data Visualization Dashboards", 
        displayImagePath: "images/designs/dashboards/smartDashboard.png",
        imagePaths: ["images/designs/dashboards/dashboardDisplayImage.png", "images/designs/dashboards/smartDashboard.png", "images/designs/dashboards/smartDashboardLogo.png", 
            "images/designs/dashboards/realEstateDashboard.PNG", "images/designs/dashboards/healthDashboard.png"], 
        description: `
        ${getSubHeader("Smart Home Appliance Company Analytics")}
        The graphs for this prototype were created in Microsoft Excel and modified for aesthetic appeal, then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and depicts a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company. 
        ${getDescriptionMetaData({isDesignItem: true, course: "Graphic Techniques for Software Design", tools: "Adobe Photoshop, Microsoft Excel"})}
        <br><br>
        
        ${getSubHeader("Real Estate Agent Tool")}
        This dashboard was designed by me based on a data set to help real estate agents easily narrow down the top zip codes they should take their clients to within their price range, 
        to find the best and biggest listings. There are lots of filter options on the left side, as well as click-to-filter functionality which also adjusts the other graphs when one 
        data section is selected. 
        ${getDescriptionMetaData({isDesignItem: true, course: "Data Science and Visualization", tools: "Power BI"})}
        <br><br>

        ${getSubHeader("Health Tracker")}
        After learning dashboard design best practices, I put this design together with a few colours and ample whitespace to prevent the user from becoming overwhelmed. I decided
        on a green theme because healthiness is associated with green vegetables. Red was used as a warning/alert to identify when key performance indicators/goals are not being 
        met. There are settings icons which allow the user to adjust the time frames/intervals to their liking if they want to explore further as well. Overall, appropriate graph types
        were chosen and everything was labelled for clarity. 
        ${getDescriptionMetaData({isDesignItem: true, course: "Data Science and Visualization", tools: "Adobe Photoshop, Microsoft Excel"})}`, 
    }, 
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
        of other mythological creatures (that the player has in their card deck). These screen prototypes, designed by me, represent the user flows for purchasing 
        a card package and engaging in the single-player story mode. My inspiration behind this design was a blue water background for the seal, a gold border for ancient 
        mythology, and the land is an image of Ireland because it was ancient *Irish* mythology. 
        ${getDescriptionMetaData({isDesignItem: true, course: "User Experience", tools: "Justinmind Prototyper Application"})}`,
    },
    {
        id: "clothes",
        title: "Change-It-Up: Clothing Mobile App Design", 
        displayImagePath: "images/designs/clothes/clothesDisplay.png",
        imagePaths: ["images/designs/clothes/clothesDisplayImage.png", "images/designs/clothes/clothes1.png", "images/designs/clothes/clothes2.png",
            "images/designs/clothes/clothes3.png", "images/designs/clothes/clothes4.png", "images/designs/clothes/clothes5.png",
            "images/designs/clothes/clothes6.png",
        ], 
        description: `This is my design for an application in which users can upload pictures of their clothes and put outfits together. The app keeps track of when something 
        was worn last and will generate outfit suggestions that haven't been worn in a while (based on the weather) to remove the morning stress of trying to think of something 
        new to wear. 
        ${getDescriptionMetaData({isDesignItem: true, course: "User Experience", tools: "Justinmind Prototyper Application"})}`,
    }, 
    {
        id: "eco",
        title: "EcoVerse: Environmental Sustainability Website/Portal", 
        displayImagePath: "images/designs/eco/Proto.png",
        imagePaths: ["images/designs/eco/Proto.png", "images/designs/eco/WF.png", 
        ], 
        description: `For our marketing class, my group of three went through the design process and presented our ideas for an Environmental Sustainability Website/Portal project. 
        After empathizing, defining, ideating, and screening our initial thoughts during the brainstorming session, we began evaluating our target audience with personas, finalizing 
        features, and creating our brand identity. One of my teammates came up with the basic structure in the wireframe presented, and I designed the final aesthetics for the prototype, 
        focusing on clarity, consistency, and completeness. I added a tree banner to the top to immerse users in the topic at hand, and white backgrounds to keep the overall feel clean, crisp, 
        and modern. The off-white colour behind the panels helps to defuse brightness so it’s easier on the eyes, and a few different green colours were incorporated to maintain consistency and interest. 
        ${getDescriptionMetaData({isDesignItem: true, course: "Marketing for the IT Industry", tools: "Figma"})}`,
    },
    {
        id: "parent",
        title: "Converse to Thrive: Parenting Mobile App Design", 
        displayImagePath: "images/designs/parent/parentDisplayImage.png",
        imagePaths: ["images/designs/parent/parentDisplayImage.png", "images/designs/parent/parent1.png", "images/designs/parent/parent2.png",
            "images/designs/parent/parent3.png", "images/designs/parent/parent4.png", "images/designs/parent/parentLogo.png",
        ], 
        description: `Displayed is my design mockup for an innovative app where parents can receive AI suggestions to speak to their children based on expert recommendations that foster
        emotional regulation, critical thinking, intrinsic motivation, and proper communication. The logo conveys a brain growing like a plant (when you water it frequently), and
        a parent speaking to the child, making neural connections, inside the brain. I gave both the logo and the background a grainy texture which gives the app a unique feel to it. 
        ${getDescriptionMetaData({isDesignItem: true, course: "Entrepreneurship", tools: "Adobe Photoshop"})}`,
    }, 
    {
        id: "fish",
        title: "Graphic Illustrations for a Children's Book", 
        displayImagePath: "images/designs/fish/fishDisplay.png",
        imagePaths: ["images/designs/fish/fishDisplayImage.PNG", "images/designs/fish/fish1.png", "images/designs/fish/fish2.png", "images/designs/fish/fish3.png",
            "images/designs/fish/fish4.png", "images/designs/fish/fish5.png", "images/designs/fish/fish6.png"
        ], 
        description: `This children's book about a fish getting scared and seeking therapy was written and illustrated by me. The goal of the assignment was to create six original illustrations
        that are connected with a similar theme/style. I achieved this using the curvature pen tool, the brush tool, effects/filters, gradients, and more. The end result was a colourful, 2D story 
        that features a grainy texture and an ocean theme.
        ${getDescriptionMetaData({isDesignItem: true, course: "Graphic Techniques for Illustration", tools: "Adobe Illustrator"})}`,
    },
    {
        id: "bathroom",
        title: "3D Bathroom Environment Build", 
        displayImagePath: "images/designs/bathroom.PNG",
        imagePaths: ["images/designs/bathroom.PNG", "videos/bathroom.mp4", 
        ], 
        description: `For this project, I modelled the majority of this 3D bathroom environment and used the UV editor to align the textures. There are two animations; one uses 
        fluid inflow physics and domain baking for the bathtub water tap, and the other is the shower cord being pulled up demonstrating rigging with multiple bones/inverse kinematics.
        Camera movement and lighting were added to showcase everything in the end. (The only objects imported were the tree picture, the plant, and the window which was part of the 
        assignment). 
        ${getDescriptionMetaData({isDesignItem: true, course: "Digital Motion and Sound", tools: "Blender 4.2"})}`,
    },
    
    // {
    //     id: "",
    //     title: "", 
    //     displayImagePath: "images/designs//",
    //     imagePaths: ["images/designs//", 
    //     ], 
    //     description: `
    //     ${getDescriptionMetaData({isDesignItem: true, course: "", tools: ""})}`,
    // },
    
];






const programmingSamples = [
    {
        id: "movie",
        title: "OMDB Mobile Movie Application", 
        displayImagePath: "images/programs/movie/movieDisplay.png",
        imagePaths: ["images/programs/movie/movieDisplay.png", "videos/movieAppDemo.mp4", "images/programs/movie/movie1.png", "images/programs/movie/movie2.png", "images/programs/movie/movie3.png", "images/programs/movie/movie4.png",
            "images/programs/movie/movie5.png", "images/programs/movie/movie6.png", "images/programs/movie/movie7.png", "images/programs/movie/movie8.png", "images/programs/movie/movie9.png",
            "images/programs/movie/movie10.png"
        ], 
        description: `In this mobile application, Firebase is used to authenticate users as they login or register new accounts, and store their favourite movies in a list. In the first navigation 
        tab, users can enter a search input which will retrieve applicable movies from the OMDB public API database and show the results in a RecyclerView. When the user clicks a movie in the 
        list, it will display further details in a new activity/page and allow them to add it to their favourites list. In the favourites navigation tab, they can do the same thing, but they 
        also have the option to update the movie description there, or delete it from their list. This project was cumulative in nature to reflect the learning of the MVVM (model-view-viewmodel) 
        architecture, LiveData, view binding, click listeners, fragments, custom xml UI layouts, clean folder organization, java code, and much more.
        ${getDescriptionMetaData({isDesignItem: false, course: "Programming: Mobile Applications II", tools: "Android Studio & Firebase"})}`, 
    },
    {
        id: "easter",
        title: "Easter Egg Catch: Computer Game", 
        displayImagePath: "images/programs/easter/easter2.png",
        imagePaths: ["images/programs/easter/easter2.png", "videos/easterGameDemo.mp4", "images/programs/easter/easter1.png", "images/programs/easter/easter3.png", "images/programs/easter/easter4.png",
            "images/programs/easter/easter5.png"
        ], 
        description: `This Easter Egg Catch computer game idea was developed by me and provides a challenge for the player to get through three levels without dropping any eggs outside of the basket or 
        letting the snake get to it. With each new level, the eggs drop quicker and the snake gets faster/bigger. The goal of this final MonoGame project was to demonstrate my knowledge of how to create 
        assets, sound effects, a dynamic background, keyboard controls, levels, animations, text, and scoring. Code quality was also a high priority with well-structured classes (constructor, initialize, 
        load, update, and draw methods) for various game aspects, thorough commenting, adherence to programming standards, and efficient performance in a frames-per-second environment.
        ${getDescriptionMetaData({isDesignItem: false, course: "Game & Data Structures", tools: "Visual Studio & MonoGame"})}`, 
    },
    {
        id: "shiloh",
        title: "Shiloh Boards Digital Application", 
        displayImagePath: "images/programs/shiloh/shilohdisplayImg.PNG",
        imagePaths: ["images/programs/shiloh/shilohdisplayImg.PNG", "images/programs/shiloh/shiloh1.PNG", "images/programs/shiloh/shiloh2.PNG", "images/programs/shiloh/shiloh3.PNG", "images/programs/shiloh/shiloh4.PNG", "images/programs/shiloh/shiloh5.PNG",
            "images/programs/shiloh/shiloh6.PNG", "images/programs/shiloh/shiloh7.PNG", "images/programs/shiloh/shiloh8.PNG", "images/programs/shiloh/shiloh9.PNG", "images/programs/shiloh/shiloh10.PNG", "images/programs/shiloh/shiloh10-5.PNG", 
            "images/programs/shiloh/shiloh11.PNG", "images/programs/shiloh/shiloh12.PNG", "images/programs/shiloh/shiloh13.PNG", "images/programs/shiloh/shiloh14.PNG", "images/programs/shiloh/shiloh15.PNG", 
        ], 
        description: `In our final capstone course, my team of three created a digital application for our Shiloh Boards client to supplement the learning value of their physical boards which teach young kids 
        the alphabet, phonetics, and counting up to the number 20. Level 1 was modelled off the boards directly with the doors, and level 2 and 3 were added for children who feel ready to advance to more difficult, randomized 
        questions. We designed the prototypes to match with their current branding, and followed guidelines to keep the colours muted to prevent overstimulation. For my contribution, I programmed all the pages 
        displayed above with React Native on the front-end and utilized EXPO cross-platform development to ensure that the application could be deployed on Android, Web, and iOS devices. As a result of our hard 
        work, we were awarded a “Runner Up” certificate for our program.
        ${getDescriptionMetaData({isDesignItem: false, course: "Design Project", tools: "Visual Studio Code, React Native, EXPO, & Figma"})}`, 
    },
    {
        id: "asp",
        title: "Medical Clinic Web Application", 
        displayImagePath: "images/programs/asp/asp_DisplayImg.PNG",
        imagePaths: ["images/programs/asp/asp_DisplayImg.PNG", "images/programs/asp/asp1.png", "images/programs/asp/asp2.PNG", "images/programs/asp/asp3.PNG", "images/programs/asp/asp4.PNG", "images/programs/asp/asp5.PNG", 
            "images/programs/asp/asp6.PNG", "images/programs/asp/asp7.PNG", "images/programs/asp/asp8.PNG", "images/programs/asp/asp9.PNG", "images/programs/asp/asp10.PNG", 
            "images/programs/asp/asp11.PNG", "images/programs/asp/asp12.PNG"
        ], 
        description: `In this term-long project, I built an ASP.NET Core MVC solution utilizing C#, Entity Framework, and Microsoft SQL Server to manage medical data for a clinic. I started with setting up 
        dependency injection, generating controllers with CRUD (Create, Read, Update, and Delete) support, and editing page headers in the views for clarity. Following this, I implemented persistence techniques 
        such as asp routing with parameters, cookies/sessions, and ViewBag/ViewData to pass information across different views. Advanced filtering was conducted to access information from other relational tables, 
        and then sorting methods were applied to order data ascendingly. Furthermore, a metadata class was added for the Patient model so annotations could be applied to change the table field display names and 
        update date formats. A self-validating model was also employed by creating a like-named partial class with the IValidatableObject interface. In the Validate method, several checks were performed using 
        string utility methods, regex checks, and custom static validation methods that I created in a separate class library. Any ModelState validation errors or try-catch base exceptions were then presented to 
        the user via TempData messages with their initial inputs to be corrected.
        ${getDescriptionMetaData({isDesignItem: false, course: "Programming: Microsoft Web Technologies", tools: "Visual Studio, ASP.NET Core MVC, C#, & Microsoft SQL Server"})}`, 
    },
    {
        id: "travel",
        title: "Group Travel Organizer Mobile App", 
        displayImagePath: "images/programs/travel/travelDisplay.png",
        imagePaths: ["images/programs/travel/travelDisplay.png", "images/programs/travel/travelFull.png", "images/programs/travel/travel1.png", "images/programs/travel/travel2.png", "images/programs/travel/travel3.png", "images/programs/travel/travel4.png", 
            "images/programs/travel/travel5.png", "images/programs/travel/travel6.png", "images/programs/travel/travel7.png", "images/programs/travel/travel8.png", "images/programs/travel/travel9.png", 
            "images/programs/travel/travel10.png", "images/programs/travel/travel11.png", "images/programs/travel/travel12.png", "images/programs/travel/travel13.png", "images/programs/travel/travel14.png" 
        ], 
        description: `Using Visual Studio Code, I created a mobile app for leaders to keep track of all members involved in a group trip, the excursions planned, and to do items. 
        As the app was related to travel, I chose to design the user interface with a tropical background and sandy colours for an aesthetic appeal. This project was executed 
        via HTML, CSS, JavaScript, jQuery, and Web SQL. The JavaScript files were sorted by event handlers (global.js), business logic (façade.js), form validation logic (util.js), 
        database CRUD actions (DAL.js), database/table creation/deletion (database.js), and object classes. It is a well-functioning app that can retrieve saved information each time it 
        is opened and completely reset for a new trip when needed.
        ${getDescriptionMetaData({isDesignItem: false, course: "Programming Mobile Applications I", tools: "Visual Studio Code, JavaScript, Web SQL, & jQuery"})}`, 
    },
    {
        id: "abasts",
        title: "Computer Programming Club Website For Book Loans", 
        displayImagePath: "images/programs/abasts/abasts12.png",
        imagePaths: ["images/programs/abasts/abasts12.png", "images/programs/abasts/abasts1.png", "images/programs/abasts/abasts2.png", "images/programs/abasts/abasts3.png", "images/programs/abasts/abasts4.png", "images/programs/abasts/abasts5.png", 
            "images/programs/abasts/abasts6.png", "images/programs/abasts/abasts7.png", "images/programs/abasts/abasts8.png", "images/programs/abasts/abasts9.png", "images/programs/abasts/abasts10.png", 
            "images/programs/abasts/abasts11.png", "images/programs/abasts/abasts12.png", "images/programs/abasts/abasts13.png", "images/programs/abasts/abasts14.png", "images/programs/abasts/abasts15.png", 
            "images/programs/abasts/abasts16.png", "images/programs/abasts/abasts17.png", "images/programs/abasts/abasts18.png", "images/programs/abasts/abasts19.png"
        ], 
        description: `Throughout the course semester, my team and I built a website for a computer programming club using Java Web Technologies with the NetBeans IDE. Users are able to register, view, edit, or 
        remove members, and any changes are reflected in the MySQL database. They can also reserve books on loan which then adds them to their eCart and updates the quantity on hand. By the end of the term, 
        we had demonstrated an understanding of HTTP request and response, ServletContext, doGet/doPost, Java Server Pages (JSP’s), Java Server Pages Standard Tag Library (JSTL), expression language (EL), 
        input validation, error handling, JavaBeans, Java Database Connectivity (JDBC), sessions, Junit testing, and the Model-View-Controller pattern (MVC).
        ${getDescriptionMetaData({isDesignItem: false, course: "Programming: JAVA Web Technologies", tools: "NetBeans, Java, & MySQL"})}`,
    },
    {
        id: "laundry",
        title: "The Home Hamper", 
        displayImagePath: "images/programs/laundry/2.jpg",
        imagePaths: ["images/programs/laundry/2.jpg", "videos/homeHamperDemo.mp4", "images/programs/laundry/1.jpg", "images/programs/laundry/2.jpg", "images/programs/laundry/laundry3.PNG", "images/programs/laundry/laundry4.PNG", "images/programs/laundry/laundry5.PNG",
            "images/programs/laundry/laundry6.PNG", "images/programs/laundry/laundry7.PNG", "images/programs/laundry/laundry8.PNG", "images/programs/laundry/laundry9.PNG"
        ], 
        description: `In my final term, I designed and programmed a 3D simulation game in Unity with two levels. The goal for young children is to complete laundry tasks (such as sorting clothes into coloured 
        bins or spraying stains) within a time limit in a home environment. For the assets I needed the player to interact with, I created them in Blender so I could animate them appropriately. The player has a 
        rigidbody attached to simulate physics and prevent walking through walls, and several scripts represent objects within the scene and control their functionality. There are also many panels for the heads-up 
        display and menu, which are switchable via a script manager. Finally, post-processing filters were applied to give it a cartoon-like feel.
        ${getDescriptionMetaData({isDesignItem: false, course: "Game and Simulation Design", tools: "Unity, C#, & Blender"})}`,
    },
    {
        id: "mongoEJSNode",
        title: "Online Store Web Application", 
        displayImagePath: "images/programs/mongo/clothing1.png",
        imagePaths: ["images/programs/mongo/clothing1.png", "videos/MongoEJSNodeDemo.mp4", "images/programs/mongo/clothing2.png", "images/programs/mongo/clothing3.png", "images/programs/mongo/clothing4.png"
        ], 
        description: `For this assignment, I developed a server-side web application for an online store using Node.js, Express, EJS, and MongoDB. The application presents a web form to collect customer and order 
        details, processes the form data server-side after validations pass to generate a receipt, and stores the information in a MongoDB database. All the purchase orders can then be retrieved and reviewed together 
        on a separate web page.
        ${getDescriptionMetaData({isDesignItem: false, course: "Programming Dynamic Websites", tools: "Visual Studio Code, Node.js, Express, EJS, & MongoDB"})}`,
    },
    // {
    //     id: "",
    //     title: "", 
    //     displayImagePath: "images/programs/.png",
    //     imagePaths: ["videos/.mp4", "images/programs/.png"
    //     ], 
    //     description: `__________
    //     ${getDescriptionMetaData({isDesignItem: false, course: "", tools: ""})}`,  
    // },
];

//millionaire game?








const experience = [
    //W25 ------------------------------------------------------
    {
        type: "course",
        title: "Design Project",
        dates: "Winter 2025 Term",
        skills: ["Project Management", "Iteration Planning & Backlogs", "React Native", "EXPO Cross-Platform Development", "Figma", "Design Diagrams", "User & Unit Test Plans"]
    },
    {
        type: "course",
        title: "Security for Software Design",
        dates: "Winter 2025 Term",
        skills: ["Core Security Principles (CIA Triad, etc.)", "STRIDE Threat Modelling & DREAD Risk Rating", "OWASP Top 10", "SQL Injection, Cross-Site Scripting (XSS), & XML External Entity (XXE) Attacks", "Hashing & Encryption"] //Misuse diagrams, SDLC Security Integration
    },
    {
        type: "course",
        title: "Marketing for the IT Industry",
        dates: "Winter 2025 Term",
        skills: ["Branding & Competitive Advantages", "Design Thinking Process", "Product Life Cycle", "Search Engine Optimization", "Market Segmentation & Target Audiences", "Social Media & Online Etiquette"] //Contextual & affiliate advertising, Gartner Hyper Cycle, reputation, brand resonance, email marketing, marketing plans, 
    },
    {
        type: "course",
        title: "Game and Simulation Design",
        dates: "Winter 2025 Term",
        skills: ["Unity/ C# Scripts", "Heads Up Displays & Menu Interface Designs", "Animations", "Terrain & Environment Building", "Physics and Interactions", "Player Controllers"] //, "Post-Processing Filters", , Creative Aspects (genre, perspective, market research, revenue streams, ), , "Cursor Events"
    },
    {
        type: "course",
        title: "Architecture for Emerging Technologies",
        dates: "Winter 2025 Term",
        skills: ["Blockchain", "Cloud Computing", "Virtualization", "Internet of Things (IoT)", "Other Disruptive/ Emerging Technologies (AI, VR/AR, etc.)", "Privacy, Legal, & Ethical Challenges"]
    },
    //F24 ------------------------------------------------------
    {
        type: "course",
        title: "Programming: Mobile Applications II",
        dates: "Fall 2024 Term",
        skills: ["Android Studio", "Firebase", "Java", "MVVM Architecture"]
    },
    {
        type: "course",
        title: "Digital Motion and Sound",
        dates: "Fall 2024 Term",
        skills: ["Blender", "3D Modelling", "Animations"]
    },
    {
        type: "course",
        title: "Data Science and Visualization",
        dates: "Fall 2024 Term",
        skills: ["Power BI", "Tableau", "Dashboard Design", "Data Cleaning", "Kafka", "Big Data"]
    },
    {
        type: "course",
        title: "The Emerging Interface",
        dates: "Fall 2024 Term",
        skills: ["Figma", "Accessibility", "Web & Mobile Designs", "Persona Research", "Gestalt Design Principles"]
    },
    {
        type: "course",
        title: "IT Entrepreneurship",
        dates: "Fall 2024 Term",
        skills: ["Pitch Delivery", "Business Plan Development", "Target Market Research", "Problem-Solving"]
    },
    //VARLab ---------------------------------------------------
    {
        type: "job",
        title: "Software Developer <br> (Co-op) <br> Virtual and Augmented Reality Lab @ Conestoga",
        dates: "Sept. 2023 - Aug. 2024",
        skills: ["Unity", "Visual Studio 2022 & <br> Visual Studio Code", "C#", "Integration Testing", "React", "TypeScript"]
    },
    //W23 ------------------------------------------------------
    {
        type: "course",
        title: "Software Quality and Usability",
        dates: "Winter 2023 Term",
        skills: ["Katalon", "Jest", "Agile Workflow", "Code Quality", "Usability Test Plans"]
    },
    {
        type: "course",
        title: "Database: SQL",
        dates: "Winter 2023 Term",
        skills: ["MySQL", "SQL Queries & Subqueries"]
    },
    {
        type: "course",
        title: "Programming: JAVA Web Technologies",
        dates: "Winter 2023 Term",
        skills: ["JavaServer Pages", "Servlets", "MySQL", "JUnit Testing", "Session Management", "Java"]
    },
    {
        type: "course",
        title: "Graphic Techniques for Software Design",
        dates: "Winter 2023 Term",
        skills: ["Adobe Photoshop", "Web Design", "Data Visualization", "Logo Illustration", "Wireframe Sketching", "Technical Standard <br> Documentation"]
    },
    {
        type: "course",
        title: "Programming Mobile Applications I",
        dates: "Winter 2023 Term",
        skills: ["Visual Studio Code", "JavaScript", "jQuery", "HTML/CSS", "Web SQL"]
    },
    {
        type: "course",
        title: "Psychology for Software Design",
        dates: "Winter 2023 Term",
        skills: ["Problem Analysis", "Constructing User Stories, <br> User Flows & Personas", "Design Principle Application"]
    },
    //F22 ------------------------------------------------------
    {
        type: "course",
        title: "Systems Analysis and Design",
        dates: "Fall 2022 Term",
        skills: ["Visual Paradigm 16.3", "Software Development Life Cycle", "Agile", "Gathering Requirements", "Diagram Building (domain class, state machine, system sequence)"]
    },
    {
        type: "course",
        title: "Game Programming with Data Structures",
        dates: "Fall 2022 Term",
        skills: ["Visual Studio 2022", "C#", "MonoGame"]
    },
    {
        type: "course",
        title: "Programming: Microsoft Web Technologies",
        dates: "Fall 2022 Term",
        skills: ["Visual Studio 2022", "Microsoft SQL Server", "ASP.Net Core MVC", "C#"]
    },
    {
        type: "course",
        title: "Graphic Techniques for Illustration",
        dates: "Fall 2022 Term",
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Perspective Line & Contour <br> Drawing", "Brush Techniques", "Texture, Effects, & Image <br> Manipulation", "Style Development"]
    },
    {
        type: "course",
        title: "Co-op and Career Preparation",
        dates: "Fall 2022 Term",
        skills: ["Resume & Cover Letter Writing", "Personal Branding", "Workplace Safety & Etiquette Knowledge", "Professionalism"]
    },
    //W22 ------------------------------------------------------
    {
        type: "course",
        title: "Introduction to Data Modelling",
        dates: "Winter 2022 Term",
        skills: ["Microsoft Access (Queries & Forms)", "VBA", "Relational Database Creation", "Data Normalization"]
    },
    {
        type: "course",
        title: "Programming Concepts II",
        dates: "Winter 2022 Term",
        skills: ["C#", "Visual Studio 2022"]
    },
    {
        type: "course",
        title: "Programming Dynamic Websites",
        dates: "Winter 2022 Term",
        skills: ["Visual Studio Code", "MongoDB", "EJS", "Node", "Express", "JavaScript"]
    },
    {
        type: "course",
        title: "Mathematics for Information Technology II",
        dates: "Winter 2022 Term",
        skills: ["Sequences and Series", "Trigonometry", "Exponents and Logarithms", "Inequalities", "Statistics", "Probability", "Complex Numbers"]
    },
    {
        type: "course",
        title: "Technology Infrastructure: Networking",
        dates: "Winter 2022 Term",
        skills: ["Cisco Packet Tracer", "Github"]
    },
    //F21 ------------------------------------------------------
    {
        type: "course",
        title: "User Experience",
        dates: "Fall 2021 Term",
        skills: ["Justinmind (Prototyper)", "Use Case Diagrams & <br> Descriptions", "Entity Breakdowns", "Content Plans", "Revenue Stream Knowledge"]
    },
    {
        type: "course",
        title: "Programming: Web Foundations",
        dates: "Fall 2021 Term",
        skills: ["Visual Studio Code", "HTML", "CSS"]
    },
    {
        type: "course",
        title: "Programming Concepts I",
        dates: "Fall 2021 Term",
        skills: ["C#", "Visual Studio 2019"]
    },
    {
        type: "course",
        title: "Mathematics for Information Technology I",
        dates: "Fall 2021 Term",
        skills: ["Sets", "Logic", "Boolean Algebra", "Linear Equations", "Data Structures", "Binary and Other Number <br> Systems", "Trees, Graphs, Paths, and <br> Circuits"]
    },
    {
        type: "course",
        title: "College Reading & Writing Skills",
        dates: "Fall 2021 Term",
        skills: ["APA Citations", "Academic Research", "Essay Creation", "Sentence Writing"]
    },
    
    
]








//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================

