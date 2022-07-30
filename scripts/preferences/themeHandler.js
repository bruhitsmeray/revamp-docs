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
  } else {
    GetSystemColorScheme();
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

function GetSystemColorScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    checkbox.checked = true;
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    checkbox.checked = false;
  }
}

checkbox.addEventListener("change", () => {
  IfChecked();
});
