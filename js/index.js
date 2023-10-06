import calculate from "./calculate.js";
import copytoclipboard from "./copytoclipboard.js";
import {
  handleButtonPress,
  handleClearButton,
  handleTyping,
} from "./keysHandlres.js";
import themeSwitch from "./themeSwitch.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);
document.getElementById("input").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copytoclipboard);

//mudar o tema
document.getElementById("themeSwitcher").addEventListener("click", themeSwitch);
