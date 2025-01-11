/**
TODO:

*/



//newDiv.setAttribute("tabindex", "0"); // Make it keyboard-focusable
var scrollSpeed = 2;
var scrollSmoothness = 10;
var scrollSpeedMax = 10;
var focusedElementBeforePopup;

//--------------------------------------------------------------------------
window.onload = function setInitialData() {
    document.getElementById("siteFooter").innerHTML = footer;
    populateAboutMeSection();
    populateDesignSection();
    populateProgrammingSection();
    populateExperienceSection();
    document.getElementById("aboutMeList").scrollLeft = 0;
    document.getElementById("designItems").scrollLeft = 0;
    document.getElementById("programItems").scrollLeft = 0;
    document.getElementById("experienceList").scrollLeft = 0;

    document.getElementById("screenOverlay").style.visibility ="hidden";
    setUpInputListeners();
    setUpWindowSizeListener();
    setUpClickEventListeners();
    setUpScrollEventListeners();
    
}

function setUpInputListeners() {
    document.getElementById("horizontalScrollCheckBox").addEventListener("change", changeScrollBarVisibility);

    document.getElementById("horizontalScrollCheckBox").addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            document.getElementById("horizontalScrollCheckBox").checked = !document.getElementById("horizontalScrollCheckBox").checked;
            changeScrollBarVisibility();
        }
    });

    function changeScrollBarVisibility() {
        let checkedState = document.getElementById("horizontalScrollCheckBox").checked;
        showScrollBars(checkedState);
        hideOrDisplayClassArrayElements("scrollBtns", checkedState);
        hideOrDisplayClassArrayElements("mobileScrollHint", !checkedState);
    }
}


function setUpWindowSizeListener() {
    const hasMouse = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    
    window.addEventListener("resize", adjustScrollBars);

    //adjust scroll bars
    function adjustScrollBars() {
        if (window.innerWidth < 400 || !hasMouse) {
            showScrollBars(true);

            document.getElementById("scrollSpeedSection").style.display = "none";
            hideOrDisplayClassArrayElements("scrollBtns", true);
            hideOrDisplayClassArrayElements("mobileScrollHint", false);
        } else {
            showScrollBars(false);

            document.getElementById("scrollSpeedSection").style.display = "block";
            hideOrDisplayClassArrayElements("scrollBtns", false);
            hideOrDisplayClassArrayElements("mobileScrollHint", true);

        }
    }

    adjustScrollBars();
}

function hideOrDisplayClassArrayElements(className, hide) {
    if (hide) {
        Array.from(document.getElementsByClassName(className)).forEach(
            function(element, index, array) {
                element.style.display = "none";
            }
        );
    } else {
        Array.from(document.getElementsByClassName(className)).forEach(
            function(element, index, array) {
                element.style.display = "block";
            }
        );
    }
}

function showScrollBars(show) {
    if (show) {
        document.getElementById("aboutMeList").style.overflowX = "auto";
        document.getElementById("designItems").style.overflowX = "auto";
        document.getElementById("programItems").style.overflowX = "auto";
        document.getElementById("experienceList").style.overflowX = "auto";
        document.getElementById("horizontalScrollCheckBox").checked = true;
    } else {
        document.getElementById("aboutMeList").style.overflowX = "hidden";
        document.getElementById("designItems").style.overflowX = "hidden";
        document.getElementById("programItems").style.overflowX = "hidden";
        document.getElementById("experienceList").style.overflowX = "hidden";
        document.getElementById("horizontalScrollCheckBox").checked = false;
    }
}


//================================================================================
//----------------------------------CLICKS----------------------------------------
//================================================================================
function setUpClickEventListeners() {
    var carouselImageArray = [];
    var carouselImageIndex = 0;

    //click image to open pop up
    Array.from(document.getElementsByClassName("clickable")).forEach(
        function(element, index, array) {
            element.addEventListener("click", function () {
                focusedElementBeforePopup = document.activeElement;

                designSamples.forEach(item => {
                    if (item.id === element.id) {
                        populatePopupWithImageDataClicked(item);
                    }
                });

                programmingSamples.forEach(item => {
                    if (item.id === element.id) {
                        populatePopupWithImageDataClicked(item);
                    }
                });

                document.getElementById("screenOverlay").style.visibility ="visible";
                document.getElementById("popupCarouselLeft").focus();
                disableBackgroundScrollbarWhenPopupOpen(true);
            });
        }
    );

    //close popup
    document.getElementById("closeBtn").addEventListener("click", function () {
        //TODO: change to popup.style.display = "none"; or "block" ??
        document.getElementById("screenOverlay").style.visibility ="hidden";
        document.getElementById("popupCarouselLeft").style.visibility ="hidden";
        document.getElementById("popupCarouselRight").style.visibility ="hidden";
        //TODO: stop video playing
        disableBackgroundScrollbarWhenPopupOpen(false);
        if (focusedElementBeforePopup) {
            focusedElementBeforePopup.focus();
        }
    });

    //click popup carousel btn
    document.getElementById("popupCarouselLeft").addEventListener("click", function () {rotateCarouselImages(false);}); //left
    document.getElementById("popupCarouselRight").addEventListener("click", function () {rotateCarouselImages(true);}); //right

    //click scroll speed buttons
    document.getElementById("scrollSpeedDown").addEventListener("click", function () {changeScrollSpeed(false);}); //left
    document.getElementById("scrollSpeedUp").addEventListener("click", function () {changeScrollSpeed(true);}); //right

    //------------------------------------------------------------------
    //-----------------------------------------------------------------
    function changeScrollSpeed(speedUp) {
        if (!speedUp && scrollSpeed > 1) {
            scrollSpeed--;
        } else if (speedUp && scrollSpeed < scrollSpeedMax) {
            scrollSpeed++;
        }

        document.getElementById("scrollSpeedText").innerHTML = scrollSpeed;
    }

    //-------------------------------------------------------------------
    //-----------------------------------------------------------------
    function populatePopupWithImageDataClicked(item) {                  
        
        document.getElementById("popupTitle").innerHTML = item.title;
        document.getElementById("popupContentDescription").innerHTML = item.description;
        
        carouselImageArray = item.imagePaths;
        carouselImageIndex = 0;
        loadDisplayImage(carouselImageArray, carouselImageIndex);

        if (carouselImageArray.length < 2) {
            document.getElementById("popupCarouselLeft").style.visibility ="hidden";
            document.getElementById("popupCarouselRight").style.visibility ="hidden";
        } else {
            document.getElementById("popupCarouselLeft").style.visibility ="visible";
            document.getElementById("popupCarouselRight").style.visibility ="visible";
        }
        
    }

    //------------------------------------------------------------------
    //-----------------------------------------------------------------
    function rotateCarouselImages(directionRight) {
        let i = carouselImageIndex;
        i = directionRight ? i + 1 : i - 1;

        if (i === carouselImageArray.length && directionRight) {
            i = 0;
        }
        if (i === -1 && !directionRight) {
            i = carouselImageArray.length - 1;
        }

        carouselImageIndex = i;
        loadDisplayImage(carouselImageArray, carouselImageIndex);
    }

    //------------------------------------------------------------------
    //-----------------------------------------------------------------
    function loadDisplayImage(imageArray, index) {
        let oldPicture = document.getElementById("pictureArea").firstChild;
        if (oldPicture !== null) {
            document.getElementById("pictureArea").removeChild(oldPicture);
        }

        let fileExtension = imageArray.at(index).split(".").pop();
        let attachment;

        if (fileExtension === "mp4") {
            //video
            attachment = document.createElement("video");
            attachment.setAttribute("controls", "controls");
            attachment.setAttribute("poster", "images/icons/video.png");

            let source = document.createElement("source");
            source.src = imageArray.at(index);
            source.type = "video/mp4";

            attachment.appendChild(source);
        } else {
            //image
            attachment = document.createElement("img");
            attachment.src = imageArray.at(index);
        }
        
        
        document.getElementById("pictureArea").appendChild(attachment);
    }

    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    function disableBackgroundScrollbarWhenPopupOpen(popupOpen) {
        if (popupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
}


//================================================================================
//---------------------------------SCROLL-----------------------------------------
//================================================================================
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

    //add mouse scroll option?

    //mouseover & mouseout events
    scrollList.forEach(btn => {
        let btnName = document.getElementById(btn.buttonId);
        btnName.addEventListener("mouseover", function(){ startScrolling(btn.scrollDiv, btn.direction, btn.sectionName); });
        btnName.addEventListener("mouseout", stopScrolling);
    });

    // //mobile touch events  ---------------mousedown & mouseup events -------TODO: fix bug when at end points
    // scrollList.forEach(btn => {
    //     let btnName = document.getElementById(btn.buttonId);
    //     btnName.addEventListener("touchstart", function(){ startScrolling(btn.scrollDiv, btn.direction, btn.sectionName); });
    //     btnName.addEventListener("touchend", stopScrolling);
    // });

    // //enter button
    // scrollList.forEach(btn => {
    //     let btnName = document.getElementById(btn.buttonId);
    //     btnName.addEventListener("keydown", function(event){ 
    //         if (event.key === "Enter") {
    //             startScrolling(btn.scrollDiv, btn.direction, btn.sectionName); 
    //         }
    //     });
    //     btnName.addEventListener("keyup", function(event){ 
    //         if (event.key === "Enter") {
    //             stopScrolling();
    //         }
    //     });
    // });
   
    //helper functions to remove code duplication
    function startScrolling(scrollDiv, direction, sectionName) {
        scrollInterval = setInterval(() => {
            if (direction === "left") {
                document.getElementById(scrollDiv).scrollLeft -= scrollSpeed; //speed
                hideScrollButtonIfAtEndPoints(scrollDiv, sectionName);
            } else if (direction === "right") {
                document.getElementById(scrollDiv).scrollLeft += scrollSpeed; //speed
                hideScrollButtonIfAtEndPoints(scrollDiv, sectionName);
            } 
        }, scrollSmoothness);
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


//================================================================================
//-------------------------------POPULATE CONTENT---------------------------------
//================================================================================

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
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("class", "imgBtn clickable");
        buttonElement.id = item.id;

        let imageElement = document.createElement("img");
        imageElement.src = item.displayImagePath;

        buttonElement.appendChild(imageElement);
        designItems.appendChild(buttonElement);
    });
}

function populateProgrammingSection() {
    let programItems = document.getElementById("programItems");
    programmingSamples.forEach(item => {
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("class", "imgBtn clickable");
        buttonElement.id = item.id;

        let imageElement = document.createElement("img");
        imageElement.src = item.displayImagePath;

        buttonElement.appendChild(imageElement);
        programItems.appendChild(buttonElement);
    });
}



//--------------------------------------------------------------------------
function populateExperienceSection() {
    let experienceList = document.getElementById("experienceList");
    experience.forEach(item => {
        let itemDiv = document.createElement("div");

        let iconImg = document.createElement("img");
        iconImg.src = item.type === "job" ? "images/icons/job.png" : "images/icons/school.png";

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


