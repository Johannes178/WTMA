import SodexoData from '/modules/sodexodata';
import FazerData from '/modules/fazerdata';

let lang = 'fi';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
// - Lunch menu with real data

/**
 * Sorts an array alphabetically
 *
 * @param {Array} courses - Menu array
 * @param {Array} order - 'asc' or 'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  let sortedMenu = courses.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Renders html list items from menu data
 *
 * @param {string} restaurant - name of the selector/restaurant
 * @param {Array} menu - menu data
 */
const renderMenu = (restaurant, menu) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Picks a random course item from an array
 *
 * @param {Array} courses
 * @returns {string} course
 */
const pickRandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};
const displayRandomCourse = () => {
  alert('Sodexo: '+ pickRandomCourse(SodexoData.getDailyMenu(lang)) + '\n'+ 'Fazer: '+ pickRandomCourse(FazerData.getDailyMenu(lang)));
};

const switchLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
  } else {
    lang = 'fi';
  }
  renderMenu('sodexo', SodexoData.getDailyMenu(lang));
  renderMenu('fazer', FazerData.getDailyMenu(lang));
};

const renderSortedMenu = () => {
  renderMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang)));
  renderMenu('fazer', sortCourses(FazerData.getDailyMenu(lang)));
};

const init = () => {
  renderMenu('sodexo', SodexoData.getDailyMenu('fi'));
  renderMenu('fazer', FazerData.getDailyMenu('fi'));
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomCourse);
};

init();