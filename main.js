document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileSidebar = document.getElementById('mobileSidebar');

  // Toggle the sidebar when the hamburger menu is clicked
  menuToggle.addEventListener('click', (event) => {
    // Prevent the click from immediately propagating to the document
    event.stopPropagation(); 
    mobileSidebar.classList.toggle('active');
  });

  // Close the sidebar if the user clicks anywhere outside of it
  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = mobileSidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggle && mobileSidebar.classList.contains('active')) {
      mobileSidebar.classList.remove('active');
    }
  });

  // Optional: Close sidebar when a link inside it is clicked
  const sidebarLinks = mobileSidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileSidebar.classList.remove('active');
    });
  });
});