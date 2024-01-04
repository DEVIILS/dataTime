let mode = "time";
const divContainer = document.getElementById("container");
const fullDateButton = document.getElementById("full");
const onlyDateButton = document.getElementById("date");
const onlyTimeButton = document.getElementById("time");
const labelOutput = document.getElementById("output");
const classButton = document.getElementsByClassName("btn");

update();
setInterval(update, 1000);

divContainer.addEventListener("click", (event) => {
  mode = event.target.id;
  update();
});

function update() {
  labelOutput.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return `${now.toLocaleTimeString()}`;
    case "date":
      return now.toLocaleDateString();
    case "full":
      return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    default:
      return now.toLocaleTimeString();
  }
}
