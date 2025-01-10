const formContainer = document.getElementById('form-container');
const listContainer = document.getElementById('list-container');
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const newProductBtn = document.getElementById('new-product-btn');
const products = [];

productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('product-name').value;
  const description = document.getElementById('product-description').value;
  const value = parseFloat(document.getElementById('product-value').value);
  const available = document.getElementById('product-available').value;

  products.push({ name, description, value, available });
  products.sort((a, b) => a.value - b.value);

  renderProducts();
  formContainer.style.display = 'none';
  listContainer.style.display = 'block';
});

newProductBtn.addEventListener('click', () => {
  formContainer.style.display = 'block';
  listContainer.style.display = 'none';
  productForm.reset();
});

function renderProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.value.toFixed(2)}</td>
    `;
    productList.appendChild(row);
  });
}
''