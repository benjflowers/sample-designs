const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}

const getPoems = async (url) => {
  let response = await fetch(url, options);
  let results = await response.json();

  return await results;
}


console.log(getPoems('/copy'));
