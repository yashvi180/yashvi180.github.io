const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');
const ratingDisplay = document.getElementById('rating-display');
const thankYouState = document.getElementById('thank-you-state'); 

let selectedRating = null;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRating = button.textContent;
    ratingButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating) {
    ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
    thankYouState.style.display = 'block'; 
  }
});