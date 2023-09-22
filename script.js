document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("button.learn-more");
  const searchInput = document.querySelector("input.custom-input");
  const text = document.querySelector("#city-data");

  searchButton.addEventListener("click", checkData);

  function checkData() {
    let inputValue = searchInput.value;

    if (inputValue.length < 2) {
      alert("Please enter a valid city");
    } else {
      targetName(inputValue).then((data) => {
        elementVJSON(data);
      });
    }
  }

  async function targetName(name) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d18e304704a44a208db102705232908&q=${name}&aqi=n`
    );
    const data = await response.json();
    return data;
  }

  const elementVJSON = (data) => {
    text.innerHTML = source(data);
  };

  const source = (data) => {
    return `
        <h3 class="text-center text-uppercase">${data.location.name}</h3>
        <p class="text-center text-secondary">Lorem</p>
        <div class="text-center">
            <img src="${data.current.condition.icon}" style="width: 60px;">
        </div>
        <h1 class="text-center">${data.current.temp_c}</h1>
        <div class="row row-cols-2">
            <div class="border-end border-black d-flex flex-column justify-content-end text-end">
                <span>min</span>
                <span>17.14</span>
            </div>
            <div class="border-end border-white d-flex flex-column">
                <span>max</span>
                <span>19.14</span>
            </div>
        </div>
    `;
  };
});
