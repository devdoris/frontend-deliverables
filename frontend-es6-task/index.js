const originalProducts = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

let products = [...originalProducts];

const productList = document.getElementById("productNames");
const expensiveList = document.getElementById("expensiveProducts");
const totalPriceEl = document.getElementById("totalPrice");
const spliceOutput = document.getElementById("spliceOutput");

function renderProductNames() {
  productList.innerHTML = "";
  products.map(product => product.name).forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    productList.appendChild(li);
  });
}

function renderExpensiveProducts() {
  expensiveList.innerHTML = "";
  products
    .filter(product => product.price > 400)
    .forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name} — $${product.price}`;
      expensiveList.appendChild(li);
    });
}

function renderTotalPrice() {
  const total = products.reduce(
    (sum, product) => sum + product.price,
    0
  );
  totalPriceEl.textContent = `$${total}`;
}

function renderSpliceList() {
  spliceOutput.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} — $${product.price}`;
    spliceOutput.appendChild(li);
  });
}

function removeProduct(index) {
  if (products[index]) {
    products.splice(index, 1);
    renderAll();
  }
}

function resetProducts() {
  products = [...originalProducts];
  renderAll();
}

function renderAll() {
  renderProductNames();
  renderExpensiveProducts();
  renderTotalPrice();
  renderSpliceList();
}

renderAll();
