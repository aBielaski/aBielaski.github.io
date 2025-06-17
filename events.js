


function SetUpArrowClickEvents() {
    Array.from(document.getElementsByClassName("rotateRight")).forEach(
        function(element, index, array) {
            element.addEventListener("click", function () {
                rotateCarouselImages(true, element.closest("li").id);
            });
        }
    );
}

//-----------------------------------------------------------------
function rotateCarouselImages(directionRight, carouselImageArray) {
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