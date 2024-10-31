function Tester(){
  alert('bien venue sur mon site');
}

function handleScroll() {
  const container = document.querySelector('.container');

  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    // Si on est proche du bas de la page
    if ((windowHeight + scrollPosition) >= (documentHeight - 10)) {
      container.classList.add('fixed-bottom');
      // Ajouter un padding au body pour éviter le saut
      document.body.style.paddingBottom = container.offsetHeight + 'px';
    } else {
      container.classList.remove('fixed-bottom');
      document.body.style.paddingBottom = '0';
    }
  });
}

function fixed_div() {
  // Get the textarea-wrapper div
  const textareaWrapper = document.querySelector('.textarea-wrapper');

// Add an event listener to the window's scroll event
  window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Get the height of the viewport
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Get the height of the document
    const documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    // Check if the bottom of the textarea-wrapper div is at the bottom of the page
    if (scrollPosition + viewportHeight >= documentHeight) {
      // Fix the textarea-wrapper div to the bottom of the page
      textareaWrapper.classList.add('input-container');
    } else {
      // Remove the fixed-bottom class
      textareaWrapper.classList.remove('input-container');
    }
  });

}
