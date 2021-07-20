const grid = document.querySelectorAll(".grid");
const colors = document.querySelectorAll("article");
console.log("🐶" + grid);

function showMsg(e) {
  e.target.textContent = "Clique pour copier!";
}

function hideMsg(e) {
  e.target.textContent = e.target.dataset.hex;
}

colors.forEach((color) => {
  color.addEventListener("mouseover", showMsg);
  color.addEventListener("mouseout", hideMsg);
});

async function copyToClipboard(e) {
  if (!navigator.clipboard) {
    e.target.textContent = "🤷 Copy to clipboard not supported";
    return;
  }
  const colorHex = e.target.dataset.hex;
  console.log("🔥" + colorHex);
  try {
    console.log("🤙");
    await navigator.clipboard.writeText(colorHex);
    console.log("🐼");
    e.target.textContent = "Réplique copiée";
    console.log("🍓");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", copyToClipboard);
}

//grid.addEventListener("click", copyToClipboard);
