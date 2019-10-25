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
    let poemContent = collection.poems[keys[i]];
    let titlesDiv = document.body.querySelector('.titles');

    let titleNode = document.createElement('h1');
    titleNode.classList.add('poem-title');
    titleNode.id = `${i}`;
    titleNode.innerText = poemTitle;
    titleNode.style.textAlign = 'center';
    titlesDiv.appendChild(titleNode);

    titleNode.addEventListener('click', (e) => {
      let contentDiv = document.body.querySelector('.content');

      if(contentDiv.querySelector('*')){
        contentDiv.removeChild(contentDiv.querySelector('*'));
      }

      let contentNode = document.createElement('p');
      contentNode.classList.add('poem-content');
      contentNode.id = `poem${e.target.id}`;
      contentNode.innerText = collection.poems[keys[e.target.id]];
      document.body.querySelector('.content').appendChild(contentNode);
    });
  }
}

const formatTitle = (string) => {
  return string.split('.')[0]
               .replace(/_/g, ' ')
               .toUpperCase()
}

setPoems('./copy');
