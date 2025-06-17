//--------------------------------------------------------------------------
function populateSampleWorkList({isDesignPage}) {
    let listUL = document.getElementById("sampleWorkList");
    let itemArray = isDesignPage ? designSamples : programmingSamples;

    itemArray.forEach(item => {
        //list item/project
        let listItem = document.createElement("li");
        listItem.id = item.id;

        //title of project
        let title = document.createElement("h3");
        title.textContent = item.title;
        title.setAttribute("class", "pinkText");

        //BLACK DIV ==============
        let blackFullDiv = document.createElement("div");
        blackFullDiv.setAttribute("class", "pinkGlowBorderOnBlack blackSection");

        //LEFT DIV ==========================================
        let leftDivForImages = document.createElement("div");
        leftDivForImages.setAttribute("class", "leftSideDiv");

        //for tracking array item in carousel
        let currentImgIndex = 0;
        let autoPlayInterval = null;
        let isAutoPlaying = false;

        //create img or video, depending on extension type
        const createMediaElement = (path) => {
            const ext = path.split(".").pop().toLowerCase();

            if (ext === "mp4") {
                const video = document.createElement("video");
                video.setAttribute("controls", "controls");
                video.setAttribute("poster", "images/icons/video.png");

                const source = document.createElement("source");
                source.src = path;
                source.type = "video/mp4";

                video.appendChild(source);
                return video;
            } else {
                const img = document.createElement("img");
                img.src = path;
                img.alt = "#";
                return img;
            }
        };

        //create initial img or video
        let mediaElement = createMediaElement(item.imagePaths[currentImgIndex]);
        mediaElement.classList.add("fadeInOnce");
        leftDivForImages.appendChild(mediaElement);

        //___________________________________________________________________________________________________________
        //btn div
        const btnDiv = document.createElement("div");
        btnDiv.setAttribute("class", "btnDiv");

        // ---- (▶) autoplay btn ----
        const autoPlayBtn = document.createElement("button");
        const autoPlayImg = document.createElement("img");
        autoPlayImg.src = "images/icons/autoplay.png";
        autoPlayImg.alt = "autoplay icon";
        autoPlayBtn.title = "Autoplay through images every 2.5 seconds"
        autoPlayBtn.appendChild(autoPlayImg);

        // ---- < left btn ----
        const leftBtn = document.createElement("button");
        leftBtn.title = "Go to previous image";
        leftBtn.textContent = "<";

        // ---- #/# text btn ----
        const imgNumberText = document.createElement("span");
        imgNumberText.textContent = `1/${item.imagePaths.length}`;

        // ---- > right btn ----
        const rightBtn = document.createElement("button");
        rightBtn.title = "Go to next image";
        rightBtn.textContent = ">";

        // ---- ⛶ expand btn ----
        const expandBtn = document.createElement("button");
        const expandOrShrinkBtnImg = document.createElement("img");
        expandOrShrinkBtnImg.src = "images/icons/expandGrey.png";
        expandOrShrinkBtnImg.alt = "expand view icon";
        expandBtn.title = "Expand image";
        expandBtn.appendChild(expandOrShrinkBtnImg);

        //append all btns to btn div on left side
        btnDiv.append(autoPlayBtn, leftBtn, imgNumberText, rightBtn, expandBtn);
        leftDivForImages.appendChild(btnDiv);

        //function ================
        const updateMedia = () => {
            const newPath = item.imagePaths[currentImgIndex];
            const newMedia = createMediaElement(newPath);
            leftDivForImages.replaceChild(newMedia, mediaElement);
            mediaElement = newMedia;
            leftDivForImages.insertBefore(mediaElement, btnDiv);
            imgNumberText.textContent = `${currentImgIndex + 1}/${item.imagePaths.length}`;
        };

        //event handlers for carousel btns ===========================================
        // (▶)
        autoPlayBtn.addEventListener("click", () => {
            if (!isAutoPlaying) {
                autoPlayInterval = setInterval(() => {
                    currentImgIndex = (currentImgIndex + 1) % item.imagePaths.length;
                    updateMedia();
                }, 2500); // 3 seconds ish
                // ---- ■ stop btn ----
                autoPlayImg.src = "images/icons/stop.png";
                autoPlayImg.alt = "stop icon";
                autoPlayBtn.title = "Stop autoplaying through images"
            } else {
                clearInterval(autoPlayInterval);
                // ---- (▶) autoplay btn ----
                autoPlayImg.src = "images/icons/autoplay.png";
                autoPlayImg.alt = "autoplay icon";
                autoPlayBtn.title = "Autoplay through images every 2.5 seconds"
            }
            isAutoPlaying = !isAutoPlaying;
        });

        // >
        rightBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex + 1) % item.imagePaths.length;
            updateMedia();
        });

        // <
        leftBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex - 1 + item.imagePaths.length) % item.imagePaths.length;
            updateMedia();
        });

        // ⛶
        expandBtn.addEventListener("click", () => {
            const isExpanded = leftDivForImages.classList.toggle("expanded");
            toggleScrollBtn(); 
            // ---- ⛶ expand or shrink (-) btn ----
            expandOrShrinkBtnImg.src = isExpanded ? "images/icons/shrinkGrey.png" : "images/icons/expandGrey.png";
            expandOrShrinkBtnImg.alt = isExpanded ? "shrink view icon" : "expand view icon";
            expandBtn.title = isExpanded ? "Shrink image to normal size" : "Expand image";
            const allItems = document.querySelectorAll("#sampleWorkList li");

            allItems.forEach(li => {
                if (!li.contains(leftDivForImages)) {
                    li.style.visibility = isExpanded ? "hidden" : "visible";
                    li.style.pointerEvents = isExpanded ? "none" : "";
                }
            });

            document.body.style.overflow = isExpanded ? "hidden" : "";
        });
        //___________________________________________________________________________________________________________

        //RIGHT DIV ==============
        let itemDescription = document.createElement("p");
        itemDescription.innerHTML = item.description;

        //FINAL APPENDS ==============
        blackFullDiv.append(leftDivForImages, itemDescription);
        listItem.append(title, blackFullDiv);
        listUL.appendChild(listItem);
    });
}


// const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//         obs.unobserve(entry.target); // Optional: only trigger once
//       }
//     });
//   }, {
//     threshold: 0.1
//   });
  
//   // Observe all images and videos inside .leftSideDiv
//   document.querySelectorAll('.leftSideDiv img, .leftSideDiv video').forEach(el => {
//     observer.observe(el);
//   });