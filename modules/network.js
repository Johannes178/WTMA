  const proxYUrl = 'https://api.allorigins.win/get?url=';




  const fetchData = async (url, useProxy = false) => {
    if (useProxy) {
      url = `https://api.allorigins.win/get?url${encodeURIComponent(url)}`;
    }
    let jsonData;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
    } catch (error) {
      console.error('fetchData() error', error);
      jsonData = {};
    }
    return jsonData;
  };

export {fetchData};