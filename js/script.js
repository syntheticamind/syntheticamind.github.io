document.addEventListener('DOMContentLoaded', () => {
  // Current Year for Footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Responsive Navigation Bar Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active'); // For hamburger animation
    });

    // Close nav when a link is clicked (for single-page feel or after navigating)
    navList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Copy Prompt to Clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-prompt');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const promptText = button.previousElementSibling.querySelector('strong').nextSibling.textContent.trim(); // Gets the text after <strong>
      navigator.clipboard.writeText(promptText)
        .then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy Prompt';
          }, 2000); // Reset button text after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          alert('Failed to copy prompt. Please copy manually.');
        });
    });
  });
});
