// (function() {
// })();
function addCode(code) {
  var script = document.createElement("script");
  script.text = code;
  document.head.appendChild(script);
}
addCode(`console.log('11111111111111111')`)

function loadJs(url) {
  let script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}

const scriptText = `
document.querySelector(".js_btn_down").addEventListener("click", handleClick);
function handleClick() {
  console.log(" hi hi hi");
  let timer = null;
  timer = setTimeout(function() {
    clearTimeout(timer);
    document.querySelector(".popup__subtit").innerText =
      "QQ Music Download Exercise";
    document.querySelector(
      ".popup__desc"
    ).innerHTML = "<a target='_blank' href=" +
    document
      .querySelector("#h5audio_media")
      .getAttribute("src") +
      ">直接下载</a>
  }, 100);
}`;

addCode(scriptText);
// document.querySelector(".list_menu__icon_down").addEventListener("click", handleClick);

// document.querySelector(".js_btn_down").addEventListener("click", handleClick);
// function handleClick() {
//   console.log(" hi hi hi");
//   let timer = null;
//   timer = setTimeout(function() {
//     clearTimeout(timer);
//     document.querySelector(".popup__subtit").innerText =
//       "QQ Music Download Exercise";
//     document.querySelector(
//       ".popup__desc"
//     ).innerHTML = `<a target='_blank' href="${document
//       .querySelector("#h5audio_media")
//       .getAttribute("src")}">直接下载</a>`;
//   }, 100);
// }
