populateBannerSection();
populateAboutMeSection();
populateTechSkillsSection();
populateExperienceSection();

//--------------------------------------------------------------------------
function populateBannerSection() {
    document.querySelector("#myBanner h1").textContent = myName;
    document.querySelector("#myBanner h2").textContent = jobTitles;
    document.querySelector("#myBanner p").textContent = introParagraph;
}

//--------------------------------------------------------------------------
function populateAboutMeSection() {
    let aboutMeList = document.querySelector("#aboutMe ul");
    pointsAboutMe.forEach(item => {
        let itemBox = document.createElement("li"); //individual box outline

        let circleDiv = document.createElement("div"); //circle 

        let iconImg = document.createElement("img"); //icon in circle
        iconImg.src = item.iconPath;
        iconImg.alt = "#";

        let text = document.createElement("p"); //text/item
        text.setAttribute("class", "pinkText");
        text.innerHTML = item.text;

        circleDiv.appendChild(iconImg);
        itemBox.append(circleDiv, text);

        aboutMeList.appendChild(itemBox);
    });
}

//--------------------------------------------------------------------------
function populateTechSkillsSection() {
    let techSkillsBody = document.querySelector("#techSkills > div");

    //=============== DESIGN =================
    // box
    let designDiv = document.createElement("div");
    // header
    let designHeader = document.createElement("h4");
    designHeader.textContent = "Design & Modelling";
    designHeader.setAttribute("class", "pinkText");
    // list
    let designList = document.createElement("ul");
    designTechSkills.forEach(item => {
        let listItem = document.createElement("li");
        let itemText = document.createElement("span");
        itemText.textContent = item;
        listItem.appendChild(itemText);
        designList.appendChild(listItem);
    });
    //append
    designDiv.append(designHeader, designList)

    //================ PROGRAMMING ================
    // box
    let programmingDiv = document.createElement("div");
    // header
    let programmingHeader = document.createElement("h4");
    programmingHeader.textContent = "Programming";
    programmingHeader.setAttribute("class", "pinkText");
    // list
    let programmingList = document.createElement("ul");
    codingTechSkills.forEach(item => {
        let listItem = document.createElement("li");
        let itemText = document.createElement("span");
        itemText.textContent = item;
        listItem.appendChild(itemText);
        programmingList.appendChild(listItem);
    });
    //append
    programmingDiv.append(programmingHeader, programmingList)

    //================ DATA ================
    // box
    let dataDiv = document.createElement("div");
    // header
    let dataHeader = document.createElement("h4");
    dataHeader.textContent = "Data";
    dataHeader.setAttribute("class", "pinkText");
    // list
    let dataList = document.createElement("ul");
    dataTechSkills.forEach(item => {
        let listItem = document.createElement("li");
        let itemText = document.createElement("span");
        itemText.textContent = item;
        listItem.appendChild(itemText);
        dataList.appendChild(listItem);
    });
    //append
    dataDiv.append(dataHeader, dataList)

    //=============================
    techSkillsBody.append(designDiv, programmingDiv, dataDiv);

}

//--------------------------------------------------------------------------
function populateExperienceSection() {
    let credential = document.querySelector("#experience > div > h4");
    credential.innerHTML = "IT Innovation & Design Graduate, with High Distinction </br> Conestoga College";

    //list
    let experienceList = document.querySelector("#experience > ul");
    experience.forEach(item => {
        let itemDiv = document.createElement("li"); //item box

        let iconImg = document.createElement("img"); //icon
        iconImg.src = item.type === "job" ? "images/icons/job.png" : "images/icons/school.png";

        let title = document.createElement("h5"); //course/job title
        title.setAttribute("class", "pinkText");
        title.innerHTML = item.title;

        let dates = document.createElement("h6"); //dates
        dates.setAttribute("class", "pinkText");
        dates.innerHTML = "(" + item.dates + ")";

        let skillsList = document.createElement("ul"); //bullet points
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