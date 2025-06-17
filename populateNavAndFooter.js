populateNavMenu();
populateFooter();
window.addEventListener("scroll", toggleScrollBtn);
window.addEventListener("DOMContentLoaded", toggleScrollBtn);
window.addEventListener("load", toggleScrollBtn);

//--------------------------------------------------------------------------
function populateNavMenu() {
    let navMenu = document.querySelector("nav ul");
    const currentPath = window.location.pathname.split("/").pop(); //get filename

    navItems.forEach(item => {
        let navListItem = document.createElement("li");

        let navItemLink = document.createElement("a");
        navItemLink.textContent = item.pageName;
        navItemLink.href = item.route;

        //underline the current page
        if (item.route === currentPath) {
            navItemLink.classList.add("active");
        }

        navListItem.appendChild(navItemLink);
        navMenu.appendChild(navListItem);
    });
}

//--------------------------------------------------------------------------
function populateFooter() {
    let footer = document.querySelector("footer");
    footer.replaceChildren();
    
    let text = document.createElement("p");
    text.innerHTML = footerText;
    
    let linkedInImgLink = document.createElement("a");
    linkedInImgLink.setAttribute("href", linkedInLink.url);

    let linkedInLogo = document.createElement("img");
    linkedInLogo.src = linkedInLink.imgRoute;
    linkedInLogo.alt = linkedInLink.altText;

    linkedInImgLink.appendChild(linkedInLogo);

    footer.append(text, linkedInImgLink);
}

//--------------------------------------------------------------------------
const scrollBtn = document.getElementById("scrollBtn");

function toggleScrollBtn() {
    const anyExpanded = document.querySelector('.leftSideDiv.expanded') !== null;
  
    if (anyExpanded) {
      scrollBtn.style.display = "none"; //hide scroll up btn if images in full view
    } else {
      //show or hide based on scroll position only if not in full view
      if (window.scrollY > window.innerHeight) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }
  }

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
});