const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// Code for the FAQ Accordions

    // select all accordion items
    const accItems = document.querySelectorAll(".accordion__item");

    // add a click event for all items
    accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));
    
    function toggleAcc() {
      // remove active class from all items exept the current item (this)
      accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
      );
    
      // toggle active class on current item
      if (this.classList != "accordion__item--active") {
        this.classList.toggle("accordion__item--active");
      }
    }
    
// Code for the FAQ Accordion ends here


// Code for Video player

function playvideo(){
  
  document.getElementById('videoPlayer').style.display="block";
  console.log('Done');



}


gsap.from(".vector-line", {
  duration: 5,
  opacity: 0,
  stagger: 0.2,
  ease: "elastic",
  yoyo: true,
  repeat: -1
});

gsap.from(".vector-line", {
  stagger: 0.2,
  duration: 5,
  rotate: 180,
  transformOrigin: "center",
  yoyo: true,
  repeat: -1
});


  