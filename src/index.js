const netPromise = fetch ('https://api.github.com/users/mattpe');

netPromise.then(data => data.json()).then((json) => {
  console.log(json);
  fetch(json.repos_url).then(data => data.json).then(data => {
    console.log(data);
  });
}).catch(error => {
  //do something with the error...
});

console.log('promise 1', netPromise);
console.log('moro');

//Async - await & error handling

const getGithubUserProfile = async username => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('problem: ' + response.statusText);
    }
    const userData = await response.json();
  } catch (error) {
    console.error(error);
    //In real case you should notify user
  }
  return userData;
};
getGithubUserProfile('mattpe').then(data => {
  console.log(data);
});

/*author Johannes Jokinen*/