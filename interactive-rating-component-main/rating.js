// console.log("code working");
// const ratingButtons = document.querySelectorAll('.rating-button');
  const submitButton = document.querySelector('.submit-button');
// const ratingDisplay = document.getElementById('rating-display');
// const thankYouState = document.getElementById('thank-you-state'); 


 let selectedRating = null;
// console.log("selected rating",selectedRating);
// ratingButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     selectedRating = button.textContent;
//     ratingButtons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');
//   });
// });

// submitButton.addEventListener('click', () => {
//   if (selectedRating) {
//     console.log("inside if statement",ratingDisplay);
//     ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
//     thankYouState.style.display = 'block'; 
//   }
// });

const ratingButtonsContainer = document.querySelector('.rating-buttons');

ratingButtonsContainer.addEventListener('click', (event) => {
  //event.target.innerText
  selectedRating=event.target.innerText;
  console.log(selectedRating)
  console.log("submit button",submitButton.disabled)
  submitButton.disabled=false;
 const ratingButtonsList =document.querySelectorAll(".rating-button");
 console.log("rating buttons list is",ratingButtonsList);
 ratingButtonsList.forEach((element) => {
  element.classList.remove("selected-button");
 });
  event.target.classList.add("selected-button");
  

});
submitButton.addEventListener('click', (event) => {
  const ratingValueElement = document.querySelector('#rating-value');
  console.log('the rating value element is',ratingValueElement);
  ratingValueElement.textContent=selectedRating;
  //spinner.classList.add("show");
  //img.classList.remove("show");
  const ratingContainer =document.querySelector(".rating-container");
  const thankyoucontainer =document.querySelector(".thank-you-container");
  //console.log(ratingContainer);
  //console.log(thankyoucontainer);
  //console.log("inside submit button")
  thankyoucontainer.classList.remove("hide");
  ratingContainer.classList.add("hide");

});

// const thankYouContainer = document.querySelector('.thank-you-container');
// const thankYouMessage = thankYouContainer.querySelector('p');

// ratingmessage.textContent = `You selected ${selectedRating} out of 5`;

// thankyoucontainer.classList.remove("hide");
// ratingContainer.classList.add("hide");