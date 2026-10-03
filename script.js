//your code here!
const list = document.getElementById("infi-list");

let itemCount = 0;

// Add items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;

    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;

    list.appendChild(li);
  }
}

// Initially add 10 items
addItems(10);

// Detect when user reaches the bottom
list.addEventListener("scroll", function () {
  const reachedBottom =
    list.scrollTop + list.clientHeight >= list.scrollHeight - 5;

  if (reachedBottom) {
    addItems(2);
  }
});
