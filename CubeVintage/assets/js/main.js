/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

let slider = document.querySelector(".slider");
let wrapper = document.querySelector(".wrapper");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentPos = 0;
let scrollVal = 320;

let maxScroll = -slider.offsetWidth + wrapper.offsetWidth;

/* Featured products page */

var container = document.getElementById('container');
var slidle = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

// Add this at the bottom of your JS file, after everything else
(function() {
    // Wait for everything to load
    window.addEventListener('load', function() {
      // Simple debug function to help identify issues
      function debugMenu() {
        // Add necessary click/touch handlers directly
        var menuLinks = document.querySelectorAll('a[href="#menu"]');
        
        for (var i = 0; i < menuLinks.length; i++) {
          // Remove any existing handlers to avoid conflicts
          var clone = menuLinks[i].cloneNode(true);
          if (menuLinks[i].parentNode) {
            menuLinks[i].parentNode.replaceChild(clone, menuLinks[i]);
          }
          
          // Add our basic handler that just targets the panel directly
          clone.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the menu
            var menu = document.getElementById('menu');
            if (menu) {
              // Toggle the visible class directly
              if (menu.classList.contains('visible')) {
                menu.classList.remove('visible');
                document.body.classList.remove('is-menu-visible');
              } else {
                menu.classList.add('visible');
                document.body.classList.add('is-menu-visible');
              }
            }
          });
          
          // Ensure it works for touch too
          clone.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the menu
            var menu = document.getElementById('menu');
            if (menu) {
              // Toggle the visible class directly
              if (menu.classList.contains('visible')) {
                menu.classList.remove('visible');
                document.body.classList.remove('is-menu-visible');
              } else {
                menu.classList.add('visible');
                document.body.classList.add('is-menu-visible');
              }
            }
          });
        }
        
        // Ensure the close button exists
        var menu = document.getElementById('menu');
        var closeBtn = document.querySelector('#menu .close');
        
        if (!closeBtn && menu) {
          // Create the close button if it doesn't exist
          closeBtn = document.createElement('a');
          closeBtn.href = "#menu";
          closeBtn.className = "close";
          closeBtn.innerHTML = ""; // Leave empty as your CSS likely adds the X
          menu.insertBefore(closeBtn, menu.firstChild);
        }
        
        // Handle the close button clicks/touches
        if (closeBtn) {
          closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (menu) {
              menu.classList.remove('visible');
              document.body.classList.remove('is-menu-visible');
            }
          });
          
          closeBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (menu) {
              menu.classList.remove('visible');
              document.body.classList.remove('is-menu-visible');
            }
          });
        }
      }
      
      // Run the debug function
      setTimeout(debugMenu, 1000);
    });
  })();

// Insta Story Shit
nextBtn.addEventListener("click", () => {
	scrollSlider(-1);
  });
  
  prevBtn.addEventListener("click", () => {
	scrollSlider(1);
  });
  
  prevBtn.style.opacity = "0";
  
  let scrollSlider = (val) => {
	currentPos += val * scrollVal;
  
	if (currentPos >= 0) {
	  currentPos = 0;
	  prevBtn.style.opacity = "0";
	} else {
	  prevBtn.style.opacity = "1";
	}
  
	if (currentPos <= maxScroll) {
	  currentPos = maxScroll;
	  nextBtn.style.opacity = "0";
	} else {
	  nextBtn.style.opacity = "1";
	}
  
	slider.style.left = currentPos + "px";
  };

// Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
    const scrollWatcher = document.querySelector('.scroll-watcher');

    window.addEventListener('scroll', () => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (window.scrollY / maxScroll) * 100;
        scrollWatcher.style.transform = `scaleX(${scrollPercentage / 100})`;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo');
    const firstSection = document.getElementById('banner');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Show the full navbar in the first section
                    header.classList.remove('hidden');
                    logo.classList.remove('always-visible');
                } else {
                    // Hide the navbar and keep only the logo visible in other sections
                    header.classList.add('hidden');
                    logo.classList.add('always-visible');
                }
            });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(firstSection);
});

/* Dropdown menu */
function toggleDropdown(event) {
    event.preventDefault();
    
    // Toggle the dropdown
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("grow");
    
    // Calculate the dropdown height only when it's visible
    if (dropdown.classList.contains("grow")) {
        // Get the actual height of the dropdown
        var dropdownHeight = dropdown.offsetHeight;
        
        // Get the elements that need to be pushed down
        var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
        
        // Apply the calculated height to push them down
        for (var i = 0; i < followingItems.length; i++) {
            followingItems[i].style.transform = "translateY(" + dropdownHeight + "px)";
        }
    } else {
        // Reset the transform when dropdown is closed
        var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
        for (var i = 0; i < followingItems.length; i++) {
            followingItems[i].style.transform = "translateY(0)";
        }
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#poop') && !event.target.matches('.plus')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains('grow')) {
            dropdown.classList.remove('grow');
            
            // Reset the transform when dropdown is closed
            var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
            for (var i = 0; i < followingItems.length; i++) {
                followingItems[i].style.transform = "translateY(0)";
            }
        }
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    
    // Toggle the dropdown
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("grow");
    
    // Calculate the dropdown height only when it's visible
    if (dropdown.classList.contains("grow")) {
        // Get the actual height of the dropdown
        var dropdownHeight = dropdown.offsetHeight;
        
        // Get the elements that need to be pushed down
        var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
        
        // Apply the calculated height to push them down
        for (var i = 0; i < followingItems.length; i++) {
            followingItems[i].style.transform = "translateY(" + dropdownHeight + "px)";
        }
    } else {
        // Reset the transform when dropdown is closed
        var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
        for (var i = 0; i < followingItems.length; i++) {
            followingItems[i].style.transform = "translateY(0)";
        }
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#poop') && !event.target.matches('.plus')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains('grow')) {
            dropdown.classList.remove('grow');
            
            // Reset the transform when dropdown is closed
            var followingItems = document.querySelectorAll('.links > li:nth-child(4), .links > li:nth-child(5)');
            for (var i = 0; i < followingItems.length; i++) {
                followingItems[i].style.transform = "translateY(0)";
            }
        }
    }
}

// Fade in section Transition
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.55
    });

    // Use querySelectorAll to get a NodeList of all elements with class 'hidden'
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});


/* Featured products page */

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slidle.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slidle.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    }
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
}

function slideLeft() {
    if (currentPosition != slidesCount) {
        slidle.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    }
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
}