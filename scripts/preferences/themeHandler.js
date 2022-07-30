const checkbox = document.getElementById("checkbox");
const CurrentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
window.onload = Startup();

function Startup() {
  if (CurrentTheme) {
    document.documentElement.setAttribute("data-theme", CurrentTheme);

    if (CurrentTheme === "dark") {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
}

function IfChecked() {
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

checkbox.addEventListener("change", () => {
  IfChecked();
});
