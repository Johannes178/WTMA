const createSecretCode = code => {
  const keyPresses = [];
  document.addEventListener('keypress', event => {
    keyPresses.push(event.key);
    if (keyPresses.length > code.length) {
    }
    if (keyPresses.join('') === code){
      alert('cheats on');
    }
  });
};

createSecretCode('idkfa')

const displayClickCoords = () => {
  const outputP = document.querySelector('#output');
  document.addEventListener('dblclick', event => {
    outputP.textContent = `Doubleclick coords :${event.clientX}, ${event.clientY}`;
  });
};
displayClickCoords();

const reactToTouches = () => {
  document.querySelector('p').addEventListener('touchstart', event => {
    console.log('event');
  });
};


/*author Johannes Jokinen*/