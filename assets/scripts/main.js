const copyRight = document.getElementById('copyright'); // Auto Update Copyright
const videoBackground = document.getElementById('vid');
const currentYear = new Date().getFullYear();
copyRight.innerHTML = 'Copyright Sierra Podiatry ©' + currentYear;

window.addEventListener('load', (event) => {
  videoBackground.innerHTML = `<!-- The HTML5 video element that will create the background video on the header -->
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" poster="./assets/images/videofallback.jpg" id="videoBackground">
      <source src="./assets/videos/background1.webm" type="video/webm">
      <source src="./assets/videos/background1.ogx" type="video/ogv">
      <source src="./assets/videos/background1.mp4" type="video/mp4">
    </video>`;
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
