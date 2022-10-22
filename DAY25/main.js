const ulEl = document.querySelector("ul");
const popButton = document.querySelector("#population-click");
const langButton = document.querySelector("#lang-click");
const languages = [
  { name: "English", percent: 91 },
  { name: "French", percent: 45 },
  { name: "Arabic", percent: 25 },
  { name: "Spanish", percent: 24 },
  { name: "Portugese", percent: 9 },
  { name: "Russian", percent: 9 },
  { name: "Dutch", percent: 8 },
  { name: "German", percent: 7 },
  { name: "Chinese", percent: 5 },
  { name: "Serbian", percent: 4 },
];
const countries = [
  { name: "World", percent: 100 },
  { name: "China", percent: 82 },
  { name: "India", percent: 64 },
  { name: "USA", percent: 44 },
  { name: "Indonasia", percent: 38 },
  { name: "Brazil", percent: 30 },
  { name: "Pakistan", percent: 25 },
  { name: "Nigeria", percent: 15 },
  { name: "Bangladesh", percent: 10 },
  { name: "Russia", percent: 8 },
  { name: "Japan", percent: 4 },
];

function displayData(data) {
  ulEl.innerHTML = "";
  data.map((l) => {
    ulEl.innerHTML =
      ulEl.innerHTML +
      `<div class="po">
    <li>${l.name}</li>
    <div class="bar"></div>
    <p class="num">${l.percent}%</p>
  </div>`;
  });

  const barEL = document.querySelectorAll(".bar");

  barEL.forEach((el, index) => {
    el.style.width = `${data[index].percent}%`;
  });
}
displayData(languages);

langButton.addEventListener("click", () => {
  displayData(languages);
});
popButton.addEventListener("click", () => {
  displayData(countries);
});
