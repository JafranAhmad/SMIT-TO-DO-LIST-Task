let btn = document.querySelector("#addBtn");
let u_l = document.querySelector("#u-l");
let remaining = document.querySelector(".pending");

// Initialize the empty array
let getValue = [];

btn.addEventListener("click", function additem() {
  let inp = document.querySelector("#inp");
  let inpValue = inp.value.trim();

  if (inp.value === "") {
    alert("You most write something Thanks!");
  } else if (inpValue !== "") {
    // Add the values an array from the input field
    getValue.push(inpValue);
    inp.value = "";

    // Clear existing list content
    u_l.innerHTML = "";

    // Re-add items to the list
    for (let i = 0; i < getValue.length; i++) {
      let list_item = document.createElement("li");
      list_item.title = "Click to delete this Task!";
      let res = document.createTextNode(getValue[i]);
      list_item.appendChild(res);
      u_l.appendChild(list_item);
      
      list_item.onclick = function () {
        this.parentNode.removeChild(this);
        remaining.textContent = getValue.length -= 1;
      };
    }
  }

  // Show remaining task
  remaining.textContent = getValue.length;
});

// Function for clearing the Entire list item
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", function clear() {
  // Clear the Entire list item in the unordered list
  u_l.innerHTML = "";

  remaining.textContent = 0;
});
