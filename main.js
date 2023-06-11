// =====================  NAVBAR =====================
// for desktop
let allLinks = Array.from(
  document.querySelectorAll("#mainNav .container #menu a")
);
let allLinksPhone = Array.from(document.querySelectorAll("#navPhone #menu a"));
resetBtns = (id) => {
  allLinks.forEach((e) => {
    e.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  if (id == "link1") {
    window.scrollTo(0, 0);
  }
  if (id == "link2") {
    window.scrollTo(0, 662);
  }
  if (id == "link3") {
    window.scrollTo(0, 1473);
  }
  if (id == "link4") {
    window.scrollTo(0, 2705);
  }
  if (id == "cntct") {
    window.scrollTo(0, 6620);
  }
};
// for phone

function closeNavMenu() {
  menuIcon.style.transform = "scale(1)";
  document.querySelector("#menuIcon .up").style.transform = "rotate(0deg)";
  document.querySelector("#menuIcon .up").style.width = "40px";
  document.querySelector("#menuIcon .middle").style.opacity = "1";
  document.querySelector("#menuIcon .bottom").style.transform = "rotate(0deg)";
  document.querySelector("#menuIcon .bottom").style.width = "40px";
}

function openNavMenu() {
  menuIcon.style.transform = "scale(1.1)";
  document.querySelector("#menuIcon .up").style.transform = "rotate(45deg)";
  document.querySelector("#menuIcon .up").style.width = "32px";
  document.querySelector("#menuIcon .middle").style.opacity = "0";
  document.querySelector("#menuIcon .bottom").style.transform =
    "rotate(-45deg)";
  document.querySelector("#menuIcon .bottom").style.width = "32px";
}
// open navBar
let menuIcon = document.getElementById("menuIcon");
let navOpened = false;
menuIcon.onclick = () => {
  if (navOpened == false) {
    //icon
    openNavMenu();
    // nav
    navPhone.style.opacity = "1";
    navPhone.style.pointerEvents = "auto";
    navOpened = true;
  } else {
    //icon
    closeNavMenu();
    // nav
    navPhone.style.opacity = "0";
    navPhone.style.pointerEvents = "none";
    navOpened = false;
  }
};
// hide navBar
let navPhone = document.getElementById("navPhone");
phoneLinks = (id) => {
  navPhone.style.opacity = "0";
  navPhone.style.pointerEvents = "none";
  closeNavMenu();
  navOpened = false;
  // go
  if (id == "link1Phone") {
    window.scrollTo(0, 0);
  }
  if (id == "link2Phone") {
    window.scrollTo(0, 965);
  }
  if (id == "link3Phone") {
    window.scrollTo(0, 2088);
  }
  if (id == "link4Phone") {
    window.scrollTo(0, 3892);
  }
};

// =====================  PORTFLIO  =====================
let allBtn = document.getElementById("all");
let booksBtn = document.getElementById("books");
let graphicBtn = document.getElementById("graphic");
let adsBtn = document.getElementById("ads");
let allBtns = Array.from(document.querySelectorAll(".btns .right a"));

let graphicSec = document.getElementById("DesSec");
let adsSec = document.getElementById("AdsSec");
let bookSec = document.getElementById("BookSec");
let allSec = bookSec.innerHTML + graphicSec.innerHTML + adsSec.innerHTML;

// all function
allBtn.addEventListener("click", (btn) => {
  //remove bg from all btns
  booksBtn.classList.remove("active");
  graphicBtn.classList.remove("active");
  adsBtn.classList.remove("active");
  // add a bg to selected btn
  btn.target.classList.add("active");
  // show imgs
  graphicSec.style.display = "block";
  bookSec.style.display = "block";
  adsSec.style.display = "block";
});
// vector function
adsBtn.addEventListener("click", (btn) => {
  //remove bg from all btns
  allBtn.classList.remove("active");
  booksBtn.classList.remove("active");
  graphicBtn.classList.remove("active");
  // add a bg to selected btn
  btn.target.classList.add("active");
  // show imgs
  graphicSec.style.display = "none";
  bookSec.style.display = "none";
  adsSec.style.display = "block";
});
// graphic function
graphicBtn.addEventListener("click", (btn) => {
  //remove bg from all btns
  allBtn.classList.remove("active");
  booksBtn.classList.remove("active");
  adsBtn.classList.remove("active");
  // add a bg to selected btn
  btn.target.classList.add("active");
  // show imgs
  graphicSec.style.display = "block";
  bookSec.style.display = "none";
  adsSec.style.display = "none";
});
// web function
booksBtn.addEventListener("click", (btn) => {
  //remove bg from all btns
  allBtn.classList.remove("active");
  graphicBtn.classList.remove("active");
  adsBtn.classList.remove("active");
  // add a bg to selected btn
  btn.target.classList.add("active");
  // show imgs
  graphicSec.style.display = "none";
  bookSecSec.style.display = "block";
  adsSec.style.display = "none";
});

window.onscroll = () => {
  if (this.scrollY < 350) {
    allLinks.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link1").classList.add("active");
    // shadow
    document.getElementById("mainNav").style.boxShadow =
      "0px 0px 0px 0px #0007";
  }
  // for about section
  if (this.scrollY > 300) {
    allLinks.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link2").classList.add("active");
    // shadow
    document.getElementById("mainNav").style.boxShadow =
      "0px 0px 20px 0px #0009";
  }
  // for services section
  if (this.scrollY > 1100) {
    allLinks.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link3").classList.add("active");
  }
  // for portflio section
  if (this.scrollY > 2600) {
    allLinks.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link4").classList.add("active");
  }
  // else
  if (this.scrollY > 3850) {
    allLinks.forEach((e) => {
      e.classList.remove("active");
    });
  }
  // [Phone] //
  if (this.scrollY < 460) {
    allLinksPhone.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link1Phone").classList.add("active");
    // shadow
    document.getElementById("mainNav").style.boxShadow =
      "0px 0px 20px 0px #0002";
  }
  // for about section
  if (this.scrollY > 385) {
    allLinksPhone.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link2Phone").classList.add("active");
    // shadow
    document.getElementById("mainNav").style.boxShadow =
      "0px 0px 20px 0px #0009";
  }
  // for services section
  if (this.scrollY > 1785) {
    allLinksPhone.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link3Phone").classList.add("active");
  }
  // for portflio section
  if (this.scrollY > 3585) {
    allLinksPhone.forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById("link4Phone").classList.add("active");
  }
  // else
  if (this.scrollY > 5385) {
    allLinksPhone.forEach((e) => {
      e.classList.remove("active");
    });
  }
  // arow
  if (this.scrollY >= 900) {
    document.querySelector("#arrowHome i").style.right = "10px";
  } else {
    document.querySelector("#arrowHome i").style.right = "-40px";
  }
};

let bgLoading = document.getElementById("bgLoading");
let bgLoadingCont = document.querySelector("#bgLoading .loader");
window.onload = () => {
  setTimeout(function () {
    bgLoadingCont.style.opacity = "0";
    bgLoading.style.pointerEvents = "none";
    bgLoading.style.backdropFilter = "blur(0px)";
    setTimeout(function () {
      bgLoadingCont.style.display = "none";
      bgLoading.style.display = "none";
    }, 2500);
  }, 2500);
};

