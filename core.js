const target = document.querySelector("#app");

function createIframeDom(url) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", url);
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("frameborder", "0");
  return iframe;
}
/**
 *
 * @param {HTMLIFrameElement} iframe
 * @param {HTMLDivElement} target
 */
function appendToDom(iframe, target) {
  // empty the target
  target.innerHTML = "";
  target.appendChild(iframe);
}
async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
async function main(list = ["default"]) {
  const url = `https://www.youdao.com/result?word=abanden&lang=en`;
  const iframe = createIframeDom(url);
  appendToDom(iframe, target);
  while (true) {
    const word = list[0];
    const new_url = `https://www.youdao.com/result?word=${word}&lang=en`;
    iframe.setAttribute("src", new_url);
    const first = list.shift();
    list.push(first);
    window.document.title = word;
    await sleep(10000);
  }
}
function randomSort(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
export { main, randomSort };
