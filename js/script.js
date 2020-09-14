const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const lockbody = document.querySelector("body");
const butt = document.querySelectorAll(".zayavka");

butt.forEach((box) => {
  box.onclick = function () {
    popup.classList.add("popup-active");
    popup.style.transition = "0.3s";
    lockbody.style.overflow = "hidden";
    popupClose.addEventListener("click", function () {
      popup.classList.remove("popup-active");
      lockbody.style.overflow = "visible";
    });
  };
});
/*butt.addEventListener("click", function () {
    popup.classList.add("popup-active");
    popup.style.transition = "0.3s";
    lockbody.style.overflow = "hidden";
    popupClose.addEventListener("click", function () {
     popup.classList.remove("popup-active");
    lockbody.style.overflow = "visible";
   });
   });

*/
