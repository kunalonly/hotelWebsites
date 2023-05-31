const navigation = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-icon");
const closebtn = document.querySelector(".close-btn");

menuIcon.addEventListener("click", () => {
  navigation.classList.add("show");
  closebtn.classList.add("show");
  menuIcon.classList.add("hide");
});

closebtn.addEventListener("click", () => {
  closebtn.classList.remove("show");
  navigation.classList.remove("show");
  menuIcon.classList.remove("hide");
});
