function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });

  let submitButton = document.querySelector("#submit-button");
  submitButton.removeAttribute("disabled");
}

function displaySheCodesPoem() {
  let poem = `
    SheCodes, a community strong and bright,<br />
    Women learning to code, taking flight.,<br />
    With determination and support in sight,,<br />
    Together we shine, in love for tech we unite.,<br />
    <strong>SheCodes AI</strong>
    `;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 1,
  });
}

function generate(event) {
  event.preventDefault();
  let apiKey = "t9da4f3734bad0o1c8e3e85957a389f8";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning. Do not include markdown around it";
  let instructionsInput = document.querySelector("#instructions");
  let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;
  let submitButton = document.querySelector("#submit-button");
  submitButton.setAttribute("disabled", "disabled");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="waiting">⏳ Generating a poem about ${instructionsInput.value}..</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generate);
displaySheCodesPoem();
