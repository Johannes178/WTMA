console.log("Hello console!");

("use strict");

const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries",
];

const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "Vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
];

const menu = document.querySelector(".menu");
const langBtn = document.querySelector(".lang");
const sortBtn = document.querySelector(".sort");
const rndBtn = document.querySelector(".random");

let finnish = true;

coursesEn.sort();
coursesFi.sort();

coursesFi.forEach((annos) => {
  menu.innerHTML += '<li class="">' + annos + "</li>";
});

const changeLang = () => {
  menu.innerHTML = "";
  if (finnish) {
    coursesEn.forEach((course) => {
      menu.innerHTML += '<li class="">' + course + "</li>";
    });
    finnish = false;
  } else {
    coursesFi.forEach((annos) => {
      menu.innerHTML += '<li class="">' + annos + "</li>";
    });
    finnish = true;
  }
};

langBtn.addEventListener("click", changeLang);

const sortMenu = () => {
  menu.innerHTML = "";
  if (finnish) {
    coursesFi.reverse();
    coursesFi.forEach((annos) => {
      menu.innerHTML += '<li class="">' + annos + "</li>";
    });
  } else {
    coursesEn.reverse();
    coursesEn.forEach((course) => {
      menu.innerHTML += '<li class="">' + course + "</li>";
    });
  }
};

sortBtn.addEventListener("click", sortMenu);

const randomCourse = () => {
  const rand = Math.floor(Math.random() * coursesFi.length);
  if (finnish) {
    alert(coursesFi[rand]);
  } else {
    alert(coursesEn[rand]);
  }
};

rndBtn.addEventListener("click", randomCourse);
