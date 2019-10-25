const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}

const getPoems = async (url) => {
  let response = await fetch(url, options);
  let collection = await response.json();

  return collection;
}

const setPoems = async (url) => {
  let collection = await getPoems(url);
  let keys = Object.keys(collection.poems);

  for(let i = 0; i < keys.length; i++){
    let title = keys[i];
    let content = collection.poems[keys[i]];

    let titleNode = document.createElement('h1');
    titleNode.classList.add('poem-title');
    titleNode.innerText = title;

    let contentNode = document.createElement('p');
    contentNode.classList.add('poem-content');
    contentNode.innerText = content;

    document.body.appendChild(titleNode);
    document.body.appendChild(contentNode);
  }
}

setPoems('/copy');
