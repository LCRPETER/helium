const mouses = document.querySelectorAll(".mousemove");

window.addEventListener("mousemove", function (e) {
  mouses.forEach((m) => {
    m.style.left = e.x + "px";
    m.style.top = e.y + "px";
  });
});
