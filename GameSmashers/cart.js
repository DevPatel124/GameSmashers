var body = document.querySelector(".right-content");
var items = document.querySelector("#items");
var addToCardBtn = document.querySelector("#add_to_cart");
var resetBtn = document.querySelector("#reset");
var checkout = document.querySelector("#checkout");
var totalDiv = document.querySelector("#total");
var tshsSpan = document.querySelector("#tshs");
var display_text = document.querySelector("#user_selected_text");
var display_value = document.querySelector("#user_selected_value");
var notification = document.querySelector("#notification");
var total = 0;
var total_item = 0;

// initialize class to Button for styling
addToCardBtn.classList.add("hidden");
resetBtn.classList.add("hidden");

// list of all foods
var item_list = [
  { name: "FIFA 23", price: 3500.0 },
  { name: "God of War Ragnarök", price: 3300.0 },
  { name: "Hogwarts Legacy", price: 3000.0 },
  { name: "Assassin's Creed Valhalla", price: 3000.0 },
  { name: "Razer Viper", price: 900.0 },
];

// Populate select tag with list of foods for user to select
for (var i = 0; i < item_list.length; i++) {
  var newOption = document.createElement("option");
  newOption.value = item_list[i].price;
  newOption.innerHTML =
    item_list[i].name + ": ₹ " + Number(item_list[i].price).toFixed(2);
  items.appendChild(newOption);
}

// create object variable
user_selection = { value: null, text: null };

// Listen select tag change event when user select item
items.addEventListener("change", function () {
  var selected_item = document.querySelector("#items option:checked");
  user_selection.value = selected_item.value;
  user_selection.text = selected_item.text;

  // if conditiona check if user select an item
  if (Number(user_selection.value) > 0) {
    notification.innerHTML = "You have selected: ";
    display_text.innerHTML = user_selection.text;
    addToCardBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    addToCardBtn.classList.add("btnStyle");
    resetBtn.classList.add("btnStyle");
  } else {
    notification.innerHTML = "No item selected";
    display_text.innerHTML = null;
    display_value.innerHTML = null;
    addToCardBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
  }
});

// Listen button event click
addToCardBtn.addEventListener("click", () => {
  // if condition allow 5 items only to be added to Cart
  if (total_item < 5) {
    var checkoutItem = document.createElement("p");
    checkoutItem.innerHTML = user_selection.text;
    checkout.appendChild(checkoutItem);
    total_item++;
    total += parseFloat(user_selection.value);
    totalDiv.innerHTML = total.toFixed(2);
  } else {
    alert(
      "We apologize, you can't add more item because you already exceeded the maximum order"
    );
  }
});

// Listen button event click
resetBtn.addEventListener("click", () => {
  var total = 0;
  var total_item = 0;
  items.selectedIndex = "";
  checkout.innerHTML = "";
  notification.innerHTML = "No dish selected";
  display_value.innerHTML = "";
  display_text.innerHTML = "";
  totalDiv.innerHTML = "0.00";
  tshsSpan.innerHTML = "Tshs";
  addToCardBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
});
