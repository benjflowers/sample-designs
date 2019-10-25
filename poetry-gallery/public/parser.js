let mainDiv = document.body.querySelector('.main')
mainDiv.style.height = window.innerHeight - 100;

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
    let titlesDiv = selectElement('.titles');

    let h1node = createElement('h1',
                               i,
                               'poem-title',
                               poemTitle);

    h1node.style.textAlign = 'center';
    titlesDiv.appendChild(h1node);

    h1node.addEventListener('click', (e) => {
      let contentDiv = selectElement('.content');

      if(contentDiv.querySelector('*')){
        contentDiv.removeChild(contentDiv.querySelector('*'));
      }

      let pNode = createElement('p',
                                `poem${e.target.id}`,
                                'poem-content',
                                collection.poems[keys[e.target.id]]);

      selectElement('.content').appendChild(pNode);
    });
  }
}

const createElement = (type, id, className, innerText) => {
  let node = document.createElement(type);
  node.classList.add(className)
  node.id = id
  node.innerText = innerText;

  return node;
}

const formatTitle = (string) => {
  return string.split('.')[0]
               .replace(/_/g, ' ')
               .toUpperCase()
}

const selectElement = (elementClass) => {
  return document.body.querySelector(elementClass);
}

setPoems('./copy');
