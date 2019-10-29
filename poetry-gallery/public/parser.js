let mainDiv = document.body.querySelector(".main");
mainDiv.style.height = window.innerHeight - 100;

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const getPoems = async url => {
  let response = await fetch(url, options);
  let collection = await response.json();

  return collection;
};

const setPoems = async url => {
  let collection = await getPoems(url);
  let keys = Object.keys(collection.poems);

  for (let i = 0; i < keys.length; i++) {
    let poemTitle = formatTitle(keys[i]);
    let titlesDiv = selectElement(".titles");

    let h1Div = createElement("div", `div${i}`, "poem-div");
    let h1node = createElement("h1", `h1-${i}`, "poem-title", poemTitle);

    titlesDiv.appendChild(h1Div);
    h1Div.appendChild(h1node);

    setDivSpacing(h1Div, keys.length);

    h1node.addEventListener("click", e => {
      let contentDiv = selectElement(".content");

      if (contentDiv.querySelector("*")) {
        contentDiv.removeChild(contentDiv.querySelector("*"));
      }

      let pNode = createElement(
        "p",
        `poem${e.target.id.split("-")[1]}`,
        "poem-content",
        collection.poems[keys[e.target.id.split("-")[1]]]
      );

      selectElement(".content").appendChild(pNode);
    });
  }
};

const setDivSpacing = (div, n) => {
  let totalDivs = n;

  let currentTotalDivs = document.querySelectorAll("h1");
  let currentDivId = currentTotalDivs.length;

  let previousDivs = totalDivs - (totalDivs - currentDivId);

  setDivSpace(previousDivs);
};

const setDivSpace = divs => {
  let currentDivs = identifyDivs(divs);
  let permittedSpace = mainDiv.clientHeight - calculateSpace(currentDivs);

  for (let i = 0; i < currentDivs.length; i++) {
    currentDivs[i].style.marginTop = permittedSpace / currentDivs.length;
  }
};

const identifyDivs = divs => {
  let totalDivs = [];

  for (let i = 0; i < divs; i++) {
    totalDivs.push(selectElement(`#h1-${i}`));
  }

  return totalDivs;
};

const calculateSpace = divs => {
  let totalSpace = 0;

  for (let i = 0; i < divs.length; i++) {
    totalSpace += divs[i].clientHeight;
  }

  return totalSpace;
};

const createElement = (type, id, className, innerText) => {
  let node = document.createElement(type);
  node.classList.add(className);
  node.id = id;
  if (innerText) {
    node.innerText = innerText;
  }

  return node;
};

const formatTitle = string => {
  return string
    .split(".")[0]
    .replace(/_/g, " ")
    .toUpperCase();
};

const selectElement = elementClass => {
  return document.body.querySelector(elementClass);
};

setPoems("./copy");
