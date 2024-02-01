function generateVows(event) {
  event.preventDefault();

  new Typewriter("#vows", {
    strings: "Show vows here",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

let formElement = document.querySelector("#vows-generator-form");
formElement.addEventListener("submit", generateVows);
