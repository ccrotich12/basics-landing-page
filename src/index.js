function clickFor() {
  let name = prompt("What is your name?");
  let genre = prompt("Favorite genre of music?");
  genre = genre.toLowerCase().trim().split(" ").join("");

  if (genre === "hiphop") {
    alert("Me too, " + name + "! They definitely have a song for you!");
  } else {
    alert("Cool, " + name + "! They might have a song for you!");
  }
}
let contactButton = document.querySelector("button");

contactButton.addEventListener("click", clickFor);
