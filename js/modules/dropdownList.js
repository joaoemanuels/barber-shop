export default function initDropdownList() {

  const inputLocal = document.getElementById("local");
  const dropdownList = document.querySelector(".dropdown-list");

  inputLocal.addEventListener("click", function () {
    dropdownList.style.display = "block";
  });

  dropdownList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      inputLocal.value = e.target.textContent;
      dropdownList.style.display = "none";
    }
  });
}