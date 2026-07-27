document.addEventListener('DOMContentLoaded', () => {
  const exploreButtons = document.querySelectorAll('.explore-btn');

  exploreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      const locationName = card.querySelector('h2').textContent;
      
      alert(`Exploring food options for: ${locationName}`);
    });
  });
});