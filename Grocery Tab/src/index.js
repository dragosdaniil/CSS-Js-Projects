const form = document.querySelector(".grocery-form");
const clearBtn = document.querySelector(".clear-btn");
const list = document.querySelector(".grocery-list");
const grocery = document.getElementById("grocery");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const editForm = document.querySelector(".edit-form-btn");
const danger = "danger";
const success = "success";
let editElement;
let editCounter = false;

window.addEventListener("DOMContentLoaded", setupItems);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = grocery.value;
  if (value !== "" && !editCounter) {
    const id = new Date().getTime().toString();
    addItem(id, value);
    addToLocalStorage(id, value);
  } else if (value !== "" && editCounter) {
    editElement.querySelector("h4").innerHTML = value;
    editLocalStorage(editElement.getAttribute("id"), value);
    setToDefault();
  } else {
    displayAlert("Please insert the name of an item!", danger);
  }
});

function deleteItem(e) {
  const parent = e.currentTarget.parentElement.parentElement;
  parent.parentElement.removeChild(parent);
  displayAlert("Item removed!", danger);
  //   console.log(parent);
}

clearBtn.addEventListener("click", () => {
  const children = document.querySelectorAll(".item");
  if (children.length > 0) {
    children.forEach((item) => {
      list.removeChild(item);
    });
  }
  submitBtn.removeAttribute("style");
  editForm.removeAttribute("style");
  displayAlert("List cleared!", success);
});

// const item = document.querySelector(".edit-btn");
// console.log(item.parentElement.parentElement);

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function editItem(e) {
  submitBtn.style.display = "none";
  editForm.style.display = "block";

  const element = e.currentTarget.parentElement.parentElement;
  console.log(element);
  const item = element.querySelector("h4");
  grocery.value = item.textContent;
  editElement = element;
  editCounter = true;
}

function addItem(id, value) {
  const newArticle = document.createElement("article");
  newArticle.setAttribute("id", id);
  newArticle.setAttribute("class", "item");
  const newItem = `<h4>${value}</h4>
            <div class="item-btns">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>`;
  newArticle.innerHTML = newItem;
  list.prepend(newArticle);
  const deleteBtn = newArticle.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);

  const editBtn = newArticle.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  grocery.value = "";
  displayAlert("Item was added successfully!", success);
}

function setToDefault() {
  grocery.value = "";
  editCounter = false;
  submitBtn.style.display = "block";
  editForm.style.display = "none";
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      addItem(item.id, item.value);
    });
  }
}
