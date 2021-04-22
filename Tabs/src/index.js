const items = [
  {
    tab: "Morning",
    img: "../images/img1.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              quidem? Qui inventore quidem sit explicabo. Pariatur fugit
              corporis dolores repellendus earum a! Pariatur qui libero dolor
              illum impedit, labore maxime.`,
  },
  {
    tab: "Afternoon",
    img: "../images/img2.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              quidem? Qui inventore quidem sit explicabo. Pariatur fugit
              corporis dolores repellendus earum a! Pariatur qui libero dolor
              illum impedit, labore maxime.`,
  },
  {
    tab: "Evening",
    img: "../images/img3.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              quidem? Qui inventore quidem sit explicabo. Pariatur fugit
              corporis dolores repellendus earum a! Pariatur qui libero dolor
              illum impedit, labore maxime.`,
  },
];

const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", () => {
  createButtons();
});

function createButtons() {
  const tabs = items.reduce((values, item) => {
    if (!values.includes(item.tab)) {
      values.push(item.tab);
    }
    return values;
  }, []);

  const buttons = tabs
    .map((tab) => {
      return `<button id="${tab}" class="toggle-btn">${tab}</button>`;
    })
    .join("");

  let btnContainer = container.querySelector(".btn-bar");

  btnContainer.innerHTML = buttons;

  let toggleBtns = container.querySelectorAll(".toggle-btn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const tab = event.currentTarget.getAttribute("id");
      const tabItems = items.filter((item) => {
        if (item.tab === tab) {
          return item;
        }
      });
      displayItems(tabItems);
    });
  });
}

function displayItems(tabItems) {
  let displayItem = tabItems
    .map((tabItem) => {
      return `<p class="info-tab-${tabItem.tab}">
              ${tabItem.info}
            </p>`;
    })
    .join("");

  container.querySelector(".img-container img").src = tabItems[0].img;
  container.querySelector(".info").innerHTML = displayItem;
}
