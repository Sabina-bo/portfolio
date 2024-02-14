//Hamburger button//
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
}
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    mainNav.classList.remove("active");
}

//Rotating circle//
/*
const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 80;
  const diameter = radius * 2;
  
  const circle = document.querySelector(".circle");
  const gototop = document.querySelector(".gototop");

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  
  const text = circle.dataset.text;
  const characters = text.split("");
  
  const deltaAngle = 360 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -90;
  
  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.innerText = character;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
  
    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
    span.style.transform = `${transform} ${rotate}`;
  
    currentAngle += deltaAngle;
    circle.appendChild(span);
  });
*/
// Function to generate rotating effect
const createRotatingEffect = (element) => {
  const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };

  const updateCircleSize = () => {
    const windowWidth = window.innerWidth;
    const diameter = windowWidth > 600 ? 180 : 100; // Adjust the size based on your needs
    radius = diameter / 2;
    element.style.width = `${diameter}px`;
    element.style.height = `${diameter}px`;
  };
 // Call the function initially to set the size
 updateCircleSize();

 // Listen for window resize events and update the circle size accordingly
 window.addEventListener('resize', updateCircleSize);

  const text = element.dataset.text;
  const characters = text.split("");

  const deltaAngle = 360 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -90;

  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.innerText = character;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
    span.style.transform = `${transform} ${rotate}`;

    currentAngle += deltaAngle;
    element.appendChild(span);
  });
};

// Apply the rotating effect to elements with the classes "circle" and "gototop"
const circle = document.querySelector(".circle");
const gototop = document.querySelector(".gototop");

createRotatingEffect(circle);
createRotatingEffect(gototop);

//Let's create together//
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');


const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

//Entrance animation
/*const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('revealText-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.revealText');
  viewbox.forEach(revealText => {
    observer.observe(revealText);
  });*/

  //fade-in-bottom
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

 // get-in-touch
 function handleAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated'); // Add a class to trigger the animation
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}
 // Create an Intersection Observer
 const observer = new IntersectionObserver(handleAnimation, { threshold: 0.5 });

 // Target the element you want to animate
 const animatedElement = document.querySelectorAll('.big-title, .t-s-t');

 // Start observing the element
 animatedElement.forEach(element => {
  observer.observe(element);
});
