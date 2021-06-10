const dropdown = document.querySelector(".link-list");
const toggleBtn = document.querySelector(".toggle-navbar");
const tabs = document.querySelector(".tabs");
tabs.addEventListener("click", (e) => {
  const button = e.target;
  const buttonType = button.id;
  button.classList.add("active");
  const children = button.parentNode.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i].id !== buttonType) {
      children[i].classList.remove("active");
    }
  }
});

toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    dropdown.classList.remove("show");
  }
});
