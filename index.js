
 

 ///                      ######################################            // // / 



  const arrowUpButton = document.querySelector('.arrowUpButton');

// Function to toggle the button's visibility based on scroll position
function toggleButtonVisibility() {
  if (window.scrollY > window.innerHeight) {
    arrowUpButton.style.display = 'block';
  } else {
    arrowUpButton.style.display = 'none';
  }
}

// Add a scroll event listener to toggle button visibility
window.addEventListener('scroll', toggleButtonVisibility);

// Scroll to the top of the page when the button is clicked
arrowUpButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// sasdsdssd 
 

