let searchButton = document.querySelector(".search");
// console.log(searchButton)

let Card = document.querySelector(".card");
// console.log(Card)

let dataArr;

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  let input1 = document.querySelector("#input1").value;
  // console.log(input1)

  checkData(input1);
});

async function importJSON() {
  try {
    const response = await fetch("./superHero.json");
    const data = await response.json();

    dataArr = data;

    //   console.log(dataArr);
  } catch (error) {
    console.error("Could not fetch or parse JSON:", error);
    return null;
  }
}

importJSON();

function checkData(name) {
  let flag = false;

  console.log(name);

  const superHero = dataArr.find((item) => {
    return item.name === name;
  });

  superHero ? showDatainUi(superHero) : alert("hero Not Defined");
}

function showDatainUi(superHero) {
  let innerHtml = ` <div class="img">
                <img src=${superHero.image} >
               </div>
              <div class="para">
               <p><span class="key">Name :</span>
                <span class="name">${superHero.name}</span>
                </p>
               <p><span class="key">Tagline :</span> <span class="tagline"> ${superHero.tagline}
               </span>
               </p>
               <p><span class="key">Description :</span> <span class="description"> ${superHero.description}</span></p></div>
            </div>`;

  Card.innerHTML = innerHtml;
}
