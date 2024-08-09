const background = document.getElementById('background');
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');
const title = document.getElementById('name');
const sec = document.getElementById('sec');

let ticking = false;

document.addEventListener('DOMContentLoaded', () => {

  // Reload page once on load up to get rid of bug
  if (!sessionStorage.getItem('reloaded')) {
    // Set a flag in sessionStorage indicating that the page has been reloaded
    sessionStorage.setItem('reloaded', 'true');
    
    // Reload the page
    window.location.reload();
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        let value = window.scrollY;
        value = Math.min(3800, Math.max(0, value));
        background.style.top = value * 0.85 + 'px';
        layer1.style.top = 300 + value * 0 + 'px';
        layer2.style.top = 300 + value * 0.3 + 'px';
        layer3.style.top = 300 + value * 0.45 + 'px';
        layer4.style.top = 300 + value * 0.65 + 'px';
        
        // Clamp the movement of the title element
        const clampValue = 1000; // Adjust this value as needed
        if (value <= clampValue) {
          title.style.top = value * 1.1 + 'px';
        } else {
          title.style.top = clampValue * 1.1 + 'px'; // Clamp at a certain value
        }
        
        ticking = false;
      });
      ticking = true;
    }
  });

  function updateSecPosition() {
    const layer1Bottom = layer1.offsetTop + layer1.offsetHeight;
    sec.style.top = layer1Bottom + 'px';
  }

  window.addEventListener('resize', function () {
    updateSecPosition();
  });

  updateSecPosition();
});



// Tilt effect (if necessary, otherwise leave as is)
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const bgPositionY = Math.floor(500 * Math.random()) / Math.random();
    const bgPositionX = Math.floor(50 * Math.random());
    card.style.setProperty('--bg-position', `${bgPositionX}% ${bgPositionY}%`);
  });

  VanillaTilt.init(cards, {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.15
  });

  cards.forEach(card => {
    card.addEventListener('tiltChange', (event) => {
      const { percentageX, percentageY } = event.detail;
      const bgPositionX = 50 + (percentageX - 50) / 1;
      const bgPositionY = 50 + (percentageY - 50) / 5;
      card.style.setProperty('--bg-position', `${bgPositionX}% ${bgPositionY}%`);
    });
  });
});

// Language Switch// Global variable to track current language
let currentLanguage = 'fr'; // Default to French

// Function to toggle between languages
function toggleLanguage(language) {
  const frBtn = document.getElementById('fr-btn');
  const enBtn = document.getElementById('en-btn');

  // Toggle active state
  if (language === 'fr') {
    frBtn.classList.add('active');
    enBtn.classList.remove('active');
  } else if (language === 'en') {
    enBtn.classList.add('active');
    frBtn.classList.remove('active');
  }

  // Update current language
  currentLanguage = language;

  // Fade out the subtitle content
  const subtitles = document.querySelectorAll('.subtitle');
  subtitles.forEach(subtitle => {
    subtitle.style.opacity = '0';
    setTimeout(() => {
      // Update text content based on language after fade out
      subtitle.innerHTML = subtitle.dataset[currentLanguage];
      // Fade in the new content
      setTimeout(() => {
        subtitle.style.opacity = '1';
      }, 50); // Small delay before fading in to ensure smooth transition
    }, 300); // Fade out duration
  });

  // Update other text content as needed (titles, card content, etc.)
}

// Initial call to set default language
toggleLanguage(currentLanguage);

// Function to check if device is touch-enabled (used to show toast on touch devices)
document.addEventListener('DOMContentLoaded', function () {
  const toastLiveExample = document.getElementById('liveToast');

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
console.log("log" + isTouchDevice());
  if (isTouchDevice()) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
  }
});