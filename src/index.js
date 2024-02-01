function displayVows(response) {
  //let vows = document.querySelector("#vows");
  //vows.innerHTML = response.data.answer;
  let hideMessage = document.querySelector("#generating");
  hideMessage.style.display = "none";
  new Typewriter("#vows", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generateVows(event) {
  event.preventDefault();

  let context =
    "Please provide a short paragrah for wedding vows, focusing on love and romanticism. The paragraph must be 5 lines maximum and every new sentence must start a new line";
  let prompt = "Generate wedding vows";
  let apiKey = "d2fcf0to3278b4e6ab12b4d9a002d5f2";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatingElement = document.querySelector("#generating");
  generatingElement.innerHTML = "Generating vows for you...";

  axios.get(apiUrl).then(displayVows);
}

let formElement = document.querySelector("#vows-generator-form");
formElement.addEventListener("submit", generateVows);
