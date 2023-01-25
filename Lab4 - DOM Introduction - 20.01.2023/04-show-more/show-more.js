//04. Show More
//Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.

function showText() {
  const text = document.getElementById("text");
  text.style.display = 'inline';

  const readMore = document.getElementById("more");
  readMore.style.display = "none";
}
