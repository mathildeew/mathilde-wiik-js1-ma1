const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question  1
const cat = {
  complain: () => {
    console.log("Meow!");
  },
};

cat.complain();

// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// question 7
function catsName(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catsName(cats);

// question 8
function createCats(animal) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let unknownAge = "Unknown age";

    if (cats[i].age) {
      unknownAge = cats[i].age;
    }
    html += `<div>
              <h5>${cats[i].name}</h5>
              <p>${unknownAge}
            </div>`;
  }

  return html;
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;
