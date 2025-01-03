//--------------------------------------------------------------------------
window.onload = function setInitialData() {
    document.getElementById("siteFooter").innerHTML = footer;
    populateAboutMeSection();
    populateDesignSection();
    populateExperienceSection();
    document.getElementById("aboutMeList").scrollLeft = 0;
    document.getElementById("designItems").scrollLeft = 0;
    document.getElementById("programItems").scrollLeft = 0;
    document.getElementById("experienceList").scrollLeft = 0;

    document.getElementById("screenOverlay").style.visibility ="hidden";
    setUpClickEventListeners();
    setUpScrollEventListeners();
}

//----------------------------------CLICKS----------------------------------------
function setUpClickEventListeners() {
    Array.from(document.getElementsByClassName("clickable")).forEach(
        function(element, index, array) {
            element.addEventListener("click", function () {
                designSamples.forEach(item => {
                    if (item.id === element.id) {
                        populatePopupWithImageDataClicked(item);
                    }
                });

                document.getElementById("screenOverlay").style.visibility ="visible";
            });
        }
    );

    document.getElementById("closeBtn").addEventListener("click", function () {
        document.getElementById("screenOverlay").style.visibility ="hidden";
    });

    //populate pop up --------------------------------------
    function populatePopupWithImageDataClicked(item) {
        let oldPicture = document.getElementById("pictureArea").firstChild;
        if (oldPicture !== null) {
            document.getElementById("pictureArea").removeChild(oldPicture);
        }
        

        document.getElementById("popupTitle").innerHTML = item.title;
        document.getElementById("popupContentDescription").innerHTML = item.description;

        let displayImage = document.createElement("img");
        displayImage.src = item.imagePaths.at(0);
        document.getElementById("pictureArea").appendChild(displayImage);
    }
}

//---------------------------------SCROLL-----------------------------------------mousedown mouseup  
function setUpScrollEventListeners() {
    const scrollList = [
        {buttonId: "aboutMeScrollRight", scrollDiv: "aboutMeList", direction: "right", sectionName: "aboutMe"},
        {buttonId: "aboutMeScrollLeft", scrollDiv: "aboutMeList", direction: "left", sectionName: "aboutMe"},

        {buttonId: "designsScrollRight", scrollDiv: "designItems", direction: "right", sectionName: "designs"},
        {buttonId: "designsScrollLeft", scrollDiv: "designItems", direction: "left", sectionName: "designs"},

        {buttonId: "programsScrollRight", scrollDiv: "programItems", direction: "right", sectionName: "programs"},
        {buttonId: "programsScrollLeft", scrollDiv: "programItems", direction: "left", sectionName: "programs"},

        {buttonId: "experienceScrollRight", scrollDiv: "experienceList", direction: "right", sectionName: "experience"},
        {buttonId: "experienceScrollLeft", scrollDiv: "experienceList", direction: "left", sectionName: "experience"}
    ];

    let scrollInterval;

    //mouseover & mouseout events
    scrollList.forEach(btn => {
        let btnName = document.getElementById(btn.buttonId);
        btnName.addEventListener("mouseover", function(){ startScrolling(btn.scrollDiv, btn.direction, btn.sectionName); });
        btnName.addEventListener("mouseout", stopScrolling);
    });
   
    //helper functions to remove code duplication
    function startScrolling(scrollDiv, direction, sectionName) {
        scrollInterval = setInterval(() => {
            if (direction === "left") {
                document.getElementById(scrollDiv).scrollLeft -= 2; //speed
                hideScrollButtonIfAtEndPoints(scrollDiv, sectionName);
            } else if (direction === "right") {
                document.getElementById(scrollDiv).scrollLeft += 2; //speed
                hideScrollButtonIfAtEndPoints(scrollDiv, sectionName);
            } 
        }, 5); //smoothness
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    function hideScrollButtonIfAtEndPoints(scrollDiv, sectionName) {
        let scrollSection = document.getElementById(scrollDiv);
        let leftButton = document.getElementById(sectionName + "ScrollLeft");
        let rightButton = document.getElementById(sectionName + "ScrollRight");

        // Hide the left button if we're at the start of the scroll
        if (scrollSection.scrollLeft === 0) {
            leftButton.style.visibility = "hidden";
        } else {
            leftButton.style.visibility = "visible";
        }

        // Hide the right button if we're at the end of the scroll
        if (scrollSection.scrollLeft + scrollSection.clientWidth >= scrollSection.scrollWidth - 1) {
            rightButton.style.visibility = "hidden";
        } else {
            rightButton.style.visibility = "visible";
        }
    }
}



//--------------------------------------------------------------------------
function populateAboutMeSection() {
    let aboutMeList = document.getElementById("aboutMeList");
    pointsAboutMe.forEach(item => {
        let itemDiv = document.createElement("div");

        let circleDiv = document.createElement("div");
        circleDiv.setAttribute("class", "circles");

        let iconImg = document.createElement("img");
        iconImg.src = item.iconPath;

        let text = document.createElement("p");
        text.setAttribute("class", "pinkText");
        text.innerHTML = item.text;

        itemDiv.appendChild(circleDiv);
        circleDiv.appendChild(iconImg);
        itemDiv.appendChild(text);

        aboutMeList.appendChild(itemDiv);
    });
}

//--------------------------------------------------------------------------
function populateDesignSection() {
    let designItems = document.getElementById("designItems");
    designSamples.forEach(item => {
        let imageElement = document.createElement("img");
        imageElement.src = item.imagePaths.at(0);
        imageElement.setAttribute("class", "clickable");
        imageElement.id = item.id;

        designItems.appendChild(imageElement);
    });
}

//--------------------------------------------------------------------------
function populateExperienceSection() {
    let experienceList = document.getElementById("experienceList");
    experience.forEach(item => {
        let itemDiv = document.createElement("div");

        let iconImg = document.createElement("img");
        iconImg.src = item.type === "job" ? "newImages/icons/job.png" : "newImages/icons/school.png";

        let title = document.createElement("h5");
        title.setAttribute("class", "pinkText");
        title.innerHTML = item.title;

        let dates = document.createElement("h6");
        dates.setAttribute("class", "pinkText");
        dates.innerHTML = "(" + item.dates + ")";

        let skillsList = document.createElement("ul");
        item.skills.forEach(skillItem => { 
            let bullet = document.createElement("li");
            bullet.innerHTML = skillItem;
            skillsList.appendChild(bullet);
        });

        itemDiv.appendChild(iconImg);
        itemDiv.appendChild(title);
        itemDiv.appendChild(dates);
        itemDiv.appendChild(skillsList);

        experienceList.appendChild(itemDiv);
    });
}





//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
//====================================================================================================================


                // if (document.getElementById(rowId).scrollLeft === 0) {
                //     document.getElementById("aboutMeScrollLeft").visibility = "hidden";
                //     console.log("true");
                //     //document.getElementById("aboutMeScrollLeft").classList.add("hidden");
                // }

                //let oldPos = document.getElementById("aboutMeScrollRight").offsetLeft;

                //let newPos = document.getElementById("aboutMeScrollRight").offsetLeft;

                //const rect = document.getElementById("aboutMeList").getBoundingClientRect();
                //console.log(`X: ${rect.left}, Y: ${rect.top}`);

                //console.log(document.getElementById("aboutMeList").offsetLeft);

                // if (oldPos === newPos) {
                //     document.getElementById("aboutMeScrollRight").visibility = "hidden";
                //     console.log("true");
                // }


    // document.getElementsByClassName("clickable").
    // document.getElementById("testImg").addEventListener("click", function () {
    //     document.getElementById("screenOverlay").style.visibility ="visible";
    // });



    // document.getElementById("scrollDiv").addEventListener("mousemove", function() {
    //     // alert("Hello, this is an event listener!");
    //     document.getElementById("aboutMeList").scrollLeft += 20;
    // });



        //set website title/header & footer
    //document.getElementById("siteTitle").innerHTML = siteTitle;
    //setNavigationLinks();




    // //about me scroll section
    // document.getElementById("aboutMeScrollRight").addEventListener("mouseover", function(){ startScrolling("aboutMeList", "right"); });
    // document.getElementById("aboutMeScrollRight").addEventListener("mouseout", stopScrolling);
    // document.getElementById("aboutMeScrollLeft").addEventListener("mouseover", function(){ startScrolling("aboutMeList", "left"); });
    // document.getElementById("aboutMeScrollLeft").addEventListener("mouseout", stopScrolling);

    // //designs scroll section
    // document.getElementById("designsScrollRight").addEventListener("mouseover", function(){ startScrolling("designItems", "right"); });
    // document.getElementById("designsScrollRight").addEventListener("mouseout", stopScrolling);
    // document.getElementById("designsScrollLeft").addEventListener("mouseover", function(){ startScrolling("designItems", "left"); });
    // document.getElementById("designsScrollLeft").addEventListener("mouseout", stopScrolling);