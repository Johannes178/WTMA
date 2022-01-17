console.log('Hello console!');

'use strict';

import LunchMenu from './assets/LunchMenu.json';
console.log('menu object', LunchMenu.courses);

const coursesEn = [];
const coursesFi = [];

for (let i in LunchMenu.courses) {
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
}

const menu = document.querySelector('.menu');
const lang = document.querySelector('.lang');
const sort = document.querySelector('.sort');
const rand = document.querySelector('.rand');

let finnish = true;

coursesEn.sort();
coursesFi.sort();

coursesFi.forEach(annos => {
  menu.innerHTML += '<li class="">' + annos +'</li>';
});

const changeLang = () => {
  menu.innerHTML = '';
  if (finnish) {
    coursesEn.forEach(course => {
      menu.innerHTML += '<li class="">' + course +'</li>';
    });
    finnish = false;
  } else {
    coursesFi.forEach(annos => {
      menu.innerHTML += '<li class="">' + annos +'</li>';
    });
    finnish = true;
  };
};

lang.addEventListener('click', changeLang);

const sortMenu = () => {
  menu.innerHTML = '';
  if (finnish) {
    coursesFi.reverse();
    coursesFi.forEach(annos => {
      menu.innerHTML += '<li class="">' + annos +'</li>';
    });
  } else {
    coursesEn.reverse();
    coursesEn.forEach(course => {
      menu.innerHTML += '<li class="">' + course +'</li>';
    });
  };
};

sort.addEventListener('click', sortMenu);

const randomCourse = () => {
  const rand = Math.floor(Math.random()*coursesFi.length);
  if (finnish) {
    alert(coursesFi[rand]);
  } else {
    alert(coursesEn[rand]);
  };
};

rand.addEventListener('click', randomCourse);



/*author Johannes Jokinen*/