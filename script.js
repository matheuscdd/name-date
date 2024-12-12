const putZero = (str) => (str.length === 1 ? `0${str}` : str);

const monitor = document.createElement("span");
const btn = document.createElement("button");
const transferArea = document.createElement("input");

btn.innerText = "Copy";
[monitor, btn, transferArea].forEach((el) => document.body.append(el));

const name = new URLSearchParams(window.location.search).get("name");
const time = new Date().toLocaleString("en-CA", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
const dateMonitor = time.replace(/-/g, "/");
const dateCopy = `${time.replace(/-/g, " ")} ${name} [backup]`;
monitor.innerHTML += dateMonitor;
transferArea.value = dateCopy;

const toggleClass = () => monitor.classList.toggle("bg");

btn.onclick = () => {
  transferArea.select();
  document.execCommand("copy");
  toggleClass();
  navigator.clipboard.writeText(dateCopy);
  setTimeout(toggleClass, 100);
};
