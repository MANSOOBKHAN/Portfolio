document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section'); // Select all sections

  // Function to check if a section is in the viewport
  function isSectionInView(section) {
    const sectionRect = section.getBoundingClientRect();
    return (
      sectionRect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      sectionRect.bottom > 0
    );
  }

  // Add the 'hidden' class to all sections initially
  sections.forEach(section => section.classList.add('hidden'));

  // Event listener to check scroll and apply the fade-in effect
  window.addEventListener('scroll', function() {
    sections.forEach(section => {
      if (isSectionInView(section)) {
        section.classList.remove('hidden');
        section.classList.add('fade-in');
      }
    });
  });
});
