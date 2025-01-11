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
            "images/designs/dashboards/realEstateDashboard.PNG", "images/designs/dashboards/healthDashboard.png"], 
        description: `<u>Smart Home Appliance Company Analytics:</u> <br>
        First, the graphs were created in Microsoft Excel and modified for aesthetic appeal then transferred over to Photoshop where I put it all together into a 
        dashboard design. The logo was also created by me and is a surveillance camera with a bubble/network graph inside in the shape of a drone. It was meant to signify 
        the monitoring of data for a smart home appliance company. <br>
        [Course: Graphic Techniques for Software Design; Tools Used: Adobe Photoshop, Microsoft Excel] <br><br>
        
        <u>Real Estate Agent Tool:</u> <br>
        This dashboard was designed by me based on a data set to help real estate agents easily narrow down the top zip codes they should take their clients to within their price range, 
        to find the best and biggest listings. There are lots of filter options on the left side, as well as click-to-filter functionality which also adjusts the other graphs when one 
        data section is selected.
        <br> [Course: Data Science and Visualization; Tools Used: Power BI]<br><br>

        <u>Health Tracker:</u> <br>
        After learning dashboard design best practices, I put this design together with a few colours and ample whitespace to prevent the user from becoming overwhelmed. I decided
        on a green theme because healthiness is associated with green vegetables. Red was used as a warning/alert to identify when key performance indicators/goals are not being 
        met. There are settings icons which allow the user to adjust the time frames/intervals to their liking if they want to explore further as well. Otherwise, appropriate graph types
        were chosen and everything was labelled for clarity.
        <br> [Course: Data Science and Visualization; Tools Used: Adobe Photoshop, Microsoft Excel]`, 
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
        new to wear.
        <br> [Course: User Experience; Tools Used: Justinmind Prototyper Application]`, 
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
        displayImagePath: "images/designs/fish/fishDisplay.png",
        imagePaths: ["images/designs/fish/fishDisplayImage.PNG", "images/designs/fish/fish1.png", "images/designs/fish/fish2.png", "images/designs/fish/fish3.png",
            "images/designs/fish/fish4.png", "images/designs/fish/fish5.png", "images/designs/fish/fish6.png"
        ], 
        description: `This children's book about a fish getting scared and seeking therapy was written and illustrated by me. The images were created using the curvature pen tool, 
        the brush tool, effects/filters, gradients, etc. 
        <br> [Course: Graphic Techniques for Illustration; Tools Used: Adobe Illustrator]`, 
    },
    {
        id: "bathroom",
        title: "3D Bathroom Environment Build", 
        displayImagePath: "images/designs/bathroom.PNG",
        imagePaths: ["videos/bathroom.mp4", "images/designs/bathroom.PNG"
        ], 
        description: `For this project, I modelled the majority of this 3D bathroom environment and used the UV editor to align the textures. There are two animations; one uses 
        fluid inflow physics and domain baking for the bathtub water tap, and the other is the shower cord being pulled up demonstrating rigging with multiple bones/inverse kinematics.
        Camera movement and lighting were added to showcase everything in the end. (The only objects imported were the tree picture, the plant, and the window which was part of the 
        assignment).
        <br> [Course: Digital Motion and Sound; Tools Used: Blender 4.2]`, 
    },
    // {
    //     id: "",
    //     title: "", 
    //     displayImagePath: "images/designs//",
    //     imagePaths: ["images/designs//", 
    //     ], 
    //     description: `
    //     <br> [Course: ; Tools Used: ]`, 
    // },
    // {
    //     id: "",
    //     title: "", 
    //     displayImagePath: "images/designs//",
    //     imagePaths: ["images/designs//", 
    //     ], 
    //     description: `
    //     <br> [Course: ; Tools Used: ]`, 
    // },
    
];

//blender??

//mobile II final project //
//mobile 1 final project //
//game final project //

//asp.net final
//js mongo final //
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
    {
        id: "abasts",
        title: "Computer Programming Club Website For Book Loans", 
        displayImagePath: "images/programs/abasts/abasts12.png",
        imagePaths: ["images/programs/abasts/abasts1.png", "images/programs/abasts/abasts2.png", "images/programs/abasts/abasts3.png", "images/programs/abasts/abasts4.png", "images/programs/abasts/abasts5.png", 
            "images/programs/abasts/abasts6.png", "images/programs/abasts/abasts7.png", "images/programs/abasts/abasts8.png", "images/programs/abasts/abasts9.png", "images/programs/abasts/abasts10.png", 
            "images/programs/abasts/abasts11.png", "images/programs/abasts/abasts12.png", "images/programs/abasts/abasts13.png", "images/programs/abasts/abasts14.png", "images/programs/abasts/abasts15.png", 
            "images/programs/abasts/abasts16.png", "images/programs/abasts/abasts17.png", "images/programs/abasts/abasts18.png", "images/programs/abasts/abasts19.png"
        ], 
        description: `In this term-long project, my team and I built a website for a computer programming club using Java Web Technologies with the NetBeans IDE. Users are able to register, view, edit, or 
        remove members, and any changes are reflected in the MySQL database. They can also reserve books on loan which then adds them to their eCart and updates the quantity on hand. By the end of the term, 
        we had demonstrated an understanding of HTTP request and response, ServletContext, doGet/doPost, Java Server Pages (JSP’s), Java Server Pages Standard Tag Library (JSTL), expression language (EL), 
        input validation, error handling, JavaBeans, Java Database Connectivity (JDBC), sessions, Junit testing, and the Model-View-Controller pattern (MVC).
        <br> [Course: Programming: JAVA Web Technologies; Created Via: NetBeans]`, 
    },
    {
        id: "mongoEJSNode",
        title: "Online Store Web Application", 
        displayImagePath: "images/programs/mongo/clothing1.png",
        imagePaths: ["videos/MongoEJSNodeDemo.mp4", "images/programs/mongo/clothing1.png", "images/programs/mongo/clothing2.png", "images/programs/mongo/clothing3.png", "images/programs/mongo/clothing4.png"
        ], 
        description: `For this assignment, I developed a server-side web application for an online store using Node.js, Express, EJS, and MongoDB. The application includes a web form to collect customer and order 
        details, processes the form data server-side after validations pass to generate a receipt, and stores the information in a MongoDB database. All the purchase orders can then be retrieved and reviewed together 
        on a separate web page.
        <br> [Course: Programming Dynamic Websites; Created Via: Visual Studio Code]`, 
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
        skills: ["Power BI", "Tableau", "Dashboard Design", "Data Cleaning", "Kafka"]
    },
    {
        type: "course",
        title: "The Emerging Interface",
        dates: "Fall 2024 Term",
        skills: ["Figma", "Accessibility", "Web & Mobile Designs", "Persona Research"]
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
        skills: ["Katalon", "Jest", "Agile Workflow", "Code Quality"]
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
        title: "Graphic Techniques for Software Design", //--================
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

