var cover = document.getElementById("cover");
cover.addEventListener("mouseover",changePic, false);
cover.addEventListener("mouseout", function() {
  cover.src = "images/easys-1.jpg";
});
function changePic() {
  cover.src = "images/easys-2.jpg";
}