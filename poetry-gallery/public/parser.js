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
    let poemTitle = formatTitle(keys[i]);
    let poemContent = collection.poems[keys[i]];
    let poemCard = document.createElement('div');

    poemCard.classList.add('poem-card');
    poemCard.id = `poem${i}`;

    let titleNode = document.createElement('h1');
    titleNode.classList.add('poem-title');
    titleNode.id = `poemTitle${i}`;
    titleNode.innerText = poemTitle;

    let contentNode = document.createElement('p');
    contentNode.classList.add('poem-content');
    contentNode.id = `poem${i}`;
    contentNode.innerText = poemContent;

    poemCard.appendChild(titleNode);
    poemCard.appendChild(contentNode);

    document.body.appendChild(poemCard);
  }
}

const formatTitle = (string) => {
  return string.split('.')[0]
               .replace(/-/g, ' ')
               .toUpperCase()
}

setPoems('./copy');
