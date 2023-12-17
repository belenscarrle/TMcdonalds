
const categoriesData = {
  'Hamburguesas': [
    { name: 'Big Mac', price: '$4.990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Big%20Mac.png?alt=media&token=36c3df26-2d92-4298-9fc0-a2242a1695bf' },
    { name: 'Cuarto de Libra', price: '$5.990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Cuarto%20de%20Libra%20Con%20Queso.png?alt=media&token=b9fffeb6-f314-42dc-80bd-6ade5175faff' },
    { name: 'McNífica', price: '$5.450', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/McN%C3%ADfica.png?alt=media&token=690d961a-c727-43f0-b121-de29d2b33db2'},
    { name: 'Doble Cuarto de Libra Con Queso', price: '$3.290', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Doble%20Cuarto%20de%20Libra%20con%20Queso.png?alt=media&token=252be9b1-7821-4436-8930-86a5c8f4f658' },
    { name: 'Hamburguesa con queso', price: '$5.200', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Hamburguesa%20con%20queso.png?alt=media&token=af141185-e602-4b49-9252-72a472efff63' },
    { name: 'Hamburguesa Triple Queso', price: '$5.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Hamburguesa%20Triple%20Queso.png?alt=media&token=798c407b-744c-427d-9f99-14e32c98fbb9' },
    { name: 'McBacon', price: '$4.890', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/McBacon.png?alt=media&token=e2bda7f9-c5bb-4cfd-956e-b7af905df9b4' },
    { name: 'McFiesta', price: '$3.990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/McFiesta.png?alt=media&token=4fe51180-9879-43c7-aef5-d20e947271d8' }, 
  ],
  'Hamburguesas Línea Signature': [
    { name: 'Grand Tasty Turbo Bacon 2 carnes', price: '$3.900', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FGrand%20Tasty%20Turbo%20Bacon%202%20carnes.png?alt=media&token=44bd548b-1afb-4865-83d3-31c94d0ace6c' },
    { name: 'Grand Tasty Turbo Bacon 1 carne', price: '$3.100', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FGrand%20Tasty%20Turbo%20Bacon%201%20carne.png?alt=media&token=6d5a1226-9944-4b15-9bf9-2ba2fa5e2388' },
    { name: 'Grand Tasty Turbo Bacon Chicken', price: '$3.220', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FGrand%20Tasty%20Turbo%20Bacon%20Chicken.png?alt=media&token=0a0cec68-10e1-45d6-a89b-f93cc30778d0' },
    { name: 'Papas Tasty Bacon', price: '$2.090', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FPapas%20Tasty%20Bacon.png?alt=media&token=599a78eb-44da-4f92-add7-920c9ed1d3a1' },
    { name: 'Club House 2 Carnes', price: '$3.3400', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FClub%20House%202%20Carnes.png?alt=media&token=ab927f63-dea0-4f8b-8a2c-e0b911fbdb90' },
    { name: 'Smoke House 2 carnes', price: '$3.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/HS%2FSmoke%20House%202%20carnes.png?alt=media&token=4f2dd960-6417-4c71-b6b8-1ae238655ba4' },
  ],
  
  'Sandwiches de Pollo': [
    { name: 'McPollo Italiano', price: '$2.790', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Sandwich%2FMcPollo%20Italiano.png?alt=media&token=e901e941-8548-4315-a706-de9306e4cb10' },
    { name: 'McNuggets', price: '$2.290', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Sandwich%2FMcNuggets.png?alt=media&token=2fe97c8c-b0a5-4178-b5f3-a5838fa0dee7' },
    { name: 'McPollo', price: '$1.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Sandwich%2FMcPollo.png?alt=media&token=ed1b9f8b-7585-46f4-b361-147550e5319b' },
  ],

  'Papas y Complementos': [
    { name: 'Papas Grandes', price: '$3.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FPapas%20Grandes.png?alt=media&token=6c7fcaa5-1c74-402e-899d-b64457bbdb7a' },
    { name: 'Papas Medianas', price: '$2.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FPapas%20Medianas.png?alt=media&token=f0bab7cd-8a16-4e69-9a89-432c0091c572' },
    { name: 'Papas Pequeñas', price: '$1.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FPapas%20Peque%C3%B1as.png?alt=media&token=272f55ac-c64a-41fd-b5e0-66ec0f47edf4' },
    { name: 'Empanadas', price: '$1.200', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FEmpanadas.png?alt=media&token=8ab00c2e-d36e-4947-92e2-610983f212b7' },
    { name: 'McNuggets', price: '$1.500', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FMcNuggets.png?alt=media&token=5b8c3416-fdab-422c-94d4-6cd8576ef2d2' },
    { name: 'Papas Duquesas X 6 UN', price: '$1.800', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FPapas%20Duquesas%20X%206%20UN.png?alt=media&token=1e20795a-6326-426c-9315-7d515722f214' },
    { name: 'Chicken Kids X 4 UN', price: '$880', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Papas%20y%20complementos%2FChicken%20Kids%20X%204%20UN.png?alt=media&token=0ca4690d-fa4c-491f-820e-9827d080536b' },
  ],

  'Bebidas': [
    { name: 'Coca-Cola 16oz', price: '$2.800', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FCoca-Cola%2016oz.png?alt=media&token=bb71af2b-adf6-48f1-9993-3ed240d2e82b' },
    { name: 'Coca-Cola 21oz', price: '$2.600', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FCoca-Cola%2021oz.png?alt=media&token=c08f908e-4ee9-42a3-8fde-9254c66a1fde' },
    { name: 'Coca-Cola Light 16oz', price: '$2.800', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FCoca-Cola%20Light%2016oz.png?alt=media&token=ddcb5308-9d03-4c8f-8d19-c6c0cf8b023a' },
    { name: 'Coca-Cola Light 21oz', price: '$2.600', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FCoca-Cola%20Light%2021oz.png?alt=media&token=457fb32f-0fef-4069-bddb-ff619e7180de' },
    { name: 'Fanta Zero 16oz', price: '$2.800', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FFanta%20Zero%2016oz.png?alt=media&token=d14dafdf-64ef-4903-9112-fd93ab459866' },
    { name: 'Fanta Zero 21oz', price: '$2.600', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FFanta%20Zero%2016oz.png?alt=media&token=d14dafdf-64ef-4903-9112-fd93ab459866' },
    { name: 'Agua sin gas', price: '$1.800', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Bebidas%2FAgua%20sin%20gas.png?alt=media&token=4a95c397-052e-41bc-8443-e9aa729ec579' },
  ],

  'Postres': [
    { name: 'McFlurry Oreo', price: '$3.000', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FMcFlurry%20Oreo.png?alt=media&token=b4c1536f-c5d1-407f-9ef8-0ea00b63f3e0' },
    { name: 'McFlurry M&M', price: '$2.990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FMcFlurry%20M%26M.png?alt=media&token=bb8bd6c6-8d19-492d-8699-f55e0c8a103f' },
    { name: 'McFlurry Sahne-Nuss', price: '$3.700', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FMcFlurry%20Sahne-Nuss.png?alt=media&token=aab992b6-15ef-44ed-ba8b-bc9a3aedf727' },
    { name: 'Sundae Chocolate', price: '$3.210', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FSundae%20Chocolate.png?alt=media&token=d6510081-4c6f-40d2-91e3-74cedb753b2a' },
    { name: 'Sundae Frutilla', price: '$2.100', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FSundae%20Frutilla.png?alt=media&token=5e584c58-c929-4c2d-863e-d70d656754ee' },
    { name: 'Sundae Manjar', price: '$2.120', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FSundae%20Manjar.png?alt=media&token=0fd7331d-90be-466a-9f38-0e0cd81e20ed' },
    { name: 'Cono Mixto', price: '$1.020', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FCono%20Mixto.png?alt=media&token=4ac81df8-0c0b-4af6-bf22-390521be6669' },
    { name: 'Cono Vainilla', price: '$1.020', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FCono%20Vainilla.png?alt=media&token=e4b25fe4-9600-49a0-80de-b949a9f2fefd' },
    { name: 'Cono Chocolate', price: '$1.020', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/Postres%2FCono%20Chocolate.png?alt=media&token=54edbeae-1454-4cf3-860e-5a2bed4123ad' },
  ],

  'Desayunos': [
    { name: 'Café', price: '$900', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/desayunos%2Fcafe.png?alt=media&token=8c236a08-fa9f-40b2-9c15-e83f82b136f8' },
    { name: 'Latte', price: '$990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/desayunos%2Flatte.png?alt=media&token=49c38a9e-88ba-4777-8e53-8c33a529e97c' },
    { name: 'Cappuccino', price: '$1.090', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/desayunos%2Fcapuccino.png?alt=media&token=87b75b8d-69e7-4b08-b07a-15cb2b99637d' },
    { name: 'Café más Hamburguesa Queso', price: '$3.990', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/desayunos%2Fcafe%20mas%20hamburgues.png?alt=media&token=2510380a-05f7-4a8d-9438-cad6ef60e434' },
    { name: 'Café más 2 Medialuna', price: '$3.790', image: 'https://firebasestorage.googleapis.com/v0/b/tmcdonald-s.appspot.com/o/desayunos%2Fcafe%202%20medialunas.png?alt=media&token=592c7a75-5732-4cfe-b54e-a69b7fd3a2b3'},
  ],
};

function showCategories() {
  const detailsContainer = document.getElementById('detailsContainer');
  detailsContainer.innerHTML = `
    <h2>PRODUCTOS</h2>
    <div class="category-list">
      ${Object.keys(categoriesData).map(category => `
        <div class="category" onclick="showProducts('${category}')">
          <p>${category}</p>
        </div>`).join('')}
    </div>
  `;
}

function showProducts(category) {
  const products = categoriesData[category];

  if (products) {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = `
      <h2>${category}</h2>
      <div class="product-list">
        ${products.map(product => `
          <div class="product" onclick="showProductDetails('${product.name}', '${product.price}', '${product.image}')">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>`).join('')}
      </div>
      <button class="back-btn" onclick="showCategories()">Atrás</button>`;
    }
}

function showProductDetails(productName, price, imageUrl) {
  const detailsContainer = document.getElementById('detailsContainer');
  detailsContainer.innerHTML = `
    <div class="centered-content">
      <img src="${imageUrl}" alt="${productName}">
      <h2>${productName}</h2>
      <p>${price}</p>
      <button class="add-to-cart-button" onclick="addToCart('${productName}', '${imageUrl}')">PEDIR</button>
      <button class="salir-to-cart-button" onclick="showProducts()">salir</button>

    </div>`;
}

function showProductDetails(productName, price, imageUrl) {
  const detailsContainer = document.getElementById('detailsContainer');
  detailsContainer.innerHTML = `
    <div class="centered-content">
      <img src="${imageUrl}" alt="${productName}">
      <h2>${productName}</h2>
      <p>${price}</p>
      <button class="add-to-cart-button" onclick="addToCart('${productName}', '${imageUrl}')">PEDIR</button>
      <button class="salir-to-cart-button" onclick="goBack()">SALIR</button>
    </div>`;
}


// ... (otras funciones)

function addToCart(productName, imageUrl) {
  const cartItemContainer = document.getElementById('cartItemContainer');
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
    <img src="${imageUrl}" alt="${productName}">
    <p>${productName}</p>
  `;
  cartItemContainer.appendChild(cartItem);
}

// Nueva función para volver atrás
function goBack() {
  showCategories();
}

// Llamada inicial para mostrar las categorías
showCategories();


function addToCart(productName, imageUrl) {
  const cartItemContainer = document.getElementById('cartItemContainer');
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
    <img src="${imageUrl}" alt="${productName}">
    <p>${productName}</p>
  `;
  cartItemContainer.appendChild(cartItem);

  // Guardar el producto en la base de datos local
  guardarProductoEnCarrito(productName, imageUrl);
}

async function guardarProductoEnCarrito(productName, imageUrl) {
  try {
    const carritoRef = db.collection('carrito');
    await carritoRef.add({
      productName,
      imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Producto agregado al carrito en la base de datos local.');
  } catch (error) {
    console.error('Error al guardar el producto en el carrito:', error);
  }
}

async function mostrarProductosEnCarrito() {
  try {
    const carritoRef = db.collection('carrito');
    const snapshot = await carritoRef.get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.productName}">
        <p>${data.productName}</p>
      `;
      cartItemContainer.appendChild(cartItem);
    });

    console.log('Productos en el carrito cargados desde la base de datos local.');
  } catch (error) {
    console.error('Error al cargar productos del carrito:', error);
  }
  
}
db.enablePersistence({ synchronizeTabs: true });


// Llama a esta función al cargar la página para mostrar los productos en el carrito
mostrarProductosEnCarrito();



showCategories();
