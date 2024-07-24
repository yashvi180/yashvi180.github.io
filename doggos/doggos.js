//const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
//function addDoggo() {
//  console.log("inside add doggo");
//  fetch(BREEDS_URL)
//    .then(function (response) {
//      return response.json();
//    })
//    .then(function (data) {
//    const img = document.createElement("img");
//  img.src = data.message;
//  img.alt = "cute doggo";
//   document.querySelector(".doggos").appendChild(img);
// });
//}
//document.querySelector(".add-Doggo").addEventListener("click", addDoggo);

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");
fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    breedsArray.push("havanese");

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });
select.addEventListener("change", function (event) {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getNewDoggo(url);
});
const img = document.querySelector(".dog-img");
const spinner =document.querySelector(".spinner");
function getNewDoggo(url) {
  spinner.classList.add("show");
  img.classList.remove("show");
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      img.src = data.message;
      //spinner.classList.remove("show")
     // img.classList.add("show");
    });
}
img.addEventListener("load",function(){
  spinner.classList.remove("show")
  img.classList.add("show");

})