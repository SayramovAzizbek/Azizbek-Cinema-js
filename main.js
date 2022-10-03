let cinemaList = document.querySelector(".cinema-list");

let cinemaFragment = new DocumentFragment();
let cinemaTemplate = document.querySelector(".cinema-template").content;

// console.log(kinolar.length);
// for (let i = 0; i <= kinolar.length; i++) {
//   let cloneCinemaTemplate = cinemaTemplate.cloneNode(true);

//   cloneCinemaTemplate.querySelector(".cinema-item");
//   cloneCinemaTemplate.querySelector(".cinema-title").textContent = kinolar.title;
//   cloneCinemaTemplate.querySelector(".cinema-year-text").textContent =
//    `${i.year}`;
//   cloneCinemaTemplate.querySelector(".cinema-genres").textContent = kinolar.genres;

//     for(let actor of cast){
//         console.log(actor);
//     }
//   cloneCinemaTemplate.querySelector(".cinema-actor-list").textContent =
//     kino.cast;

//   cinemaFragment.appendChild(cloneCinemaTemplate);
// }
// cinemaList.appendChild(cinemaFragment);

const kinolarHundred = kinolar.splice(0, 101);

let cinemaCounter = 0;
for (let kino of kinolarHundred) {
  let cloneCinemaTemplate = cinemaTemplate.cloneNode(true);
  cloneCinemaTemplate.querySelector(".cinema-item");
  cloneCinemaTemplate.querySelector(".cinema-counter").textContent =
    cinemaCounter++;
  cloneCinemaTemplate.querySelector(".cinema-title").textContent = kino.title;
  cloneCinemaTemplate.querySelector(".cinema-year-text").textContent =
    kino.year;
  cloneCinemaTemplate.querySelector(
    ".cinema-actor-names"
  ).textContent = `${kino.cast}`;
  cloneCinemaTemplate.querySelector(".cinema-genres").textContent = kino.genres;

  cinemaFragment.appendChild(cloneCinemaTemplate);
}

cinemaList.appendChild(cinemaFragment);
