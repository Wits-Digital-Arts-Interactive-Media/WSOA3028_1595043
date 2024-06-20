// Function to handle scroll events
const scrollFunction = () => {
   
    console.log('Scrolled!');
};

// Add event listener for scroll events
window.addEventListener('scroll', scrollFunction);

// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
});