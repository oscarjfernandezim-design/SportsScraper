const STORES = [
  { id: 's1', name: 'Zalando', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Zalando_logo.svg/2560px-Zalando_logo.svg.png' },
  { id: 's2', name: 'ASOS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Asos_logo.svg/2560px-Asos_logo.svg.png' },
  { id: 's3', name: 'Adidas Official', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
  { id: 's4', name: 'Nike Store', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
  { id: 's5', name: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png' },
];

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Nike Air Zoom Pegasus 40',
    brand: 'Nike',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
    description: 'Zapatillas de running para asfalto - Hombre',
    basePrice: 129.99,
    priceHistory: [
      { date: '2024-01-01', price: 135.00 },
      { date: '2024-02-01', price: 132.00 },
      { date: '2024-03-01', price: 129.99 },
      { date: '2024-04-01', price: 124.99 },
      { date: '2024-05-01', price: 129.99 }
    ]
  },
  {
    id: 'p2',
    name: 'Adidas Ultraboost Light',
    brand: 'Adidas',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
    description: 'Siente una energía épica con las nuevas Ultraboost Light.',
    basePrice: 190.00,
    priceHistory: [
      { date: '2024-01-01', price: 200.00 },
      { date: '2024-02-01', price: 195.00 },
      { date: '2024-03-01', price: 190.00 },
      { date: '2024-04-01', price: 185.00 },
      { date: '2024-05-01', price: 190.00 }
    ]
  },
  {
    id: 'p3',
    name: 'Puma Velocity Nitro 2',
    brand: 'Puma',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    description: 'Zapatillas de running todoterreno con amortiguación NITRO.',
    basePrice: 110.00,
    priceHistory: [
      { date: '2024-01-01', price: 120.00 },
      { date: '2024-02-01', price: 115.00 },
      { date: '2024-03-01', price: 110.00 },
      { date: '2024-04-01', price: 105.00 },
      { date: '2024-05-01', price: 110.00 }
    ]
  },
  {
    id: 'p4',
    name: 'Nike Sportswear Tech Fleece',
    brand: 'Nike',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop',
    description: 'Sudadera con capucha y cremallera completa para hombre.',
    basePrice: 119.99
  },
  {
    id: 'p5',
    name: 'Adidas Tiro 23 League',
    brand: 'Adidas',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop',
    description: 'Pantalón de entrenamiento clásico para fútbol.',
    basePrice: 45.00
  },
  {
    id: 'p6',
    name: 'Asics Novablast 3',
    brand: 'Asics',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    description: 'Amortiguación reactiva para tus entrenamientos diarios.',
    basePrice: 150.00
  },
  {
    id: 'p7',
    name: 'New Balance Fresh Foam 1080',
    brand: 'New Balance',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
    description: 'Máximo confort y suavidad en cada zancada.',
    basePrice: 180.00
  },
  {
    id: 'p8',
    name: 'Reebok Nano X3',
    brand: 'Reebok',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1512374382149-433a72b75d9b?q=80&w=1000&auto=format&fit=crop',
    description: 'La zapatilla de entrenamiento más versátil.',
    basePrice: 140.00
  },
  {
    id: 'p9',
    name: 'Under Armour Curry 10',
    brand: 'Under Armour',
    category: 'Basketball',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop',
    description: 'Tracción y estabilidad superior en la cancha.',
    basePrice: 160.00
  },
  {
    id: 'p10',
    name: 'Nike Metcon 8',
    brand: 'Nike',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop',
    description: 'Estabilidad y durabilidad para tus WODs más intensos.',
    basePrice: 130.00
  },
  {
    id: 'p11',
    name: 'Adidas Adizero Adios Pro 3',
    brand: 'Adidas',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1000&auto=format&fit=crop',
    description: 'Zapatilla de competición para batir tus récords.',
    basePrice: 250.00
  },
  {
    id: 'p12',
    name: 'Brooks Ghost 15',
    brand: 'Brooks',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop',
    description: 'Equilibrio perfecto entre suavidad y respuesta.',
    basePrice: 140.00
  }
];
// Simulado de ofertas de tiendas para cada producto (en un caso real, esto vendría de una API o base de datos)
const OFFERS = [
  { id: 'o1', productId: 'p1', storeId: 's1', price: 124.99, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o2', productId: 'p1', storeId: 's2', price: 119.50, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o3', productId: 'p1', storeId: 's4', price: 129.99, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o4', productId: 'p2', storeId: 's1', price: 185.00, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o5', productId: 'p2', storeId: 's3', price: 190.00, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o6', productId: 'p2', storeId: 's5', price: 179.99, currency: 'EUR', url: '#', stock: false, lastUpdated: new Date().toISOString() },
  { id: 'o7', productId: 'p3', storeId: 's1', price: 105.00, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o8', productId: 'p3', storeId: 's2', price: 110.00, currency: 'EUR', url: '#', stock: true, lastUpdated: new Date().toISOString() },
];

let currentSearch = '';

// ========================================
// INITIALIZATION
// ========================================
function init() {
  renderProducts(PRODUCTS);
  setupSearchListeners();
  updateStatistics();
}

// ========================================
// STATISTICS UPDATE
// ========================================
function updateStatistics() {
  const totalProducts = PRODUCTS.length;
  const totalStores = STORES.length;
  const totalOffers = OFFERS.length;

  document.getElementById('stat-products').textContent = new Intl.NumberFormat('es-ES').format(totalProducts);
  document.getElementById('stat-stores').textContent = new Intl.NumberFormat('es-ES').format(totalStores);
  document.getElementById('stat-offers').textContent = new Intl.NumberFormat('es-ES').format(totalOffers);
}

// ========================================
// SEARCH FUNCTIONALITY (CU1)
// ========================================
function setupSearchListeners() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');

  // Search on input (with debounce)
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    clearTimeout(searchTimeout);

    // Show suggestions while typing
    if (query.length > 0) {
      showSuggestions(query);
      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 300);
    } else {
      hideSuggestions();
      performSearch('');
    }
  });

  // Search on button click
  searchBtn.addEventListener('click', () => {
    hideSuggestions();
    performSearch(searchInput.value);
  });

  // Search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      hideSuggestions();
      performSearch(searchInput.value);
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar-wrapper')) {
      hideSuggestions();
    }
  });
}

function showSuggestions(query) {
  const lowerQuery = query.toLowerCase();

  // Filter products by name, brand, or category
  const matches = PRODUCTS.filter(product => {
    const name = product.name.toLowerCase();
    const brand = product.brand.toLowerCase();
    const category = product.category.toLowerCase();

    return name.includes(lowerQuery) ||
           brand.includes(lowerQuery) ||
           category.includes(lowerQuery);
  }).slice(0, 8); // Show max 8 suggestions

  const suggestionsEl = document.getElementById('search-suggestions');
  const suggestionsContent = suggestionsEl.querySelector('.suggestions-content');

  if (matches.length > 0) {
    suggestionsContent.innerHTML = matches.map(product => `
      <div class="suggestion-item" data-product-id="${product.id}">
        <div style="font-weight: bold;">${product.name}</div>
        <div style="color: #666; font-size: 0.75rem;">${product.brand} • ${product.category}</div>
      </div>
    `).join('');

    // Add click handlers
    suggestionsContent.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = item.dataset.productId;
        const product = PRODUCTS.find(p => p.id === productId);
        document.getElementById('searchInput').value = product.name;
        hideSuggestions();
        performSearch(product.name);
      });
    });

    suggestionsEl.classList.add('active');
  } else {
    suggestionsContent.innerHTML = `
      <div class="suggestion-count">
        No se encontraron coincidencias para "${query}"
      </div>
    `;
    suggestionsEl.classList.add('active');
  }
}

function hideSuggestions() {
  const suggestionsEl = document.getElementById('search-suggestions');
  suggestionsEl.classList.remove('active');
}

function performSearch(query) {
  currentSearch = query.trim().toLowerCase();

  if (!currentSearch) {
    // Show all products if search is empty
    renderProducts(PRODUCTS);
    hideSearchStatus();
    hideEmptyState();
    return;
  }

  // Filter products by name, brand, or category
  const filtered = PRODUCTS.filter(product => {
    const name = product.name.toLowerCase();
    const brand = product.brand.toLowerCase();
    const category = product.category.toLowerCase();

    return name.includes(currentSearch) ||
           brand.includes(currentSearch) ||
           category.includes(currentSearch);
  });

  // Display results
  if (filtered.length > 0) {
    showSearchStatus(`${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} para "${currentSearch}"`);
    renderProducts(filtered);
    hideEmptyState();
  } else {
    hideSearchStatus();
    showEmptyState();
  }
}

function showSearchStatus(text) {
  const statusEl = document.getElementById('search-status');
  const statusText = document.getElementById('search-status-text');
  statusText.textContent = text;
  statusEl.style.display = 'block';
}

function hideSearchStatus() {
  const statusEl = document.getElementById('search-status');
  statusEl.style.display = 'none';
}

function showEmptyState() {
  const emptyState = document.getElementById('empty-state');
  const productGrid = document.getElementById('product-grid');
  productGrid.style.display = 'none';
  emptyState.style.display = 'flex';
}

function hideEmptyState() {
  const emptyState = document.getElementById('empty-state');
  const productGrid = document.getElementById('product-grid');
  emptyState.style.display = 'none';
  productGrid.style.display = 'grid';
}

// ========================================
// PRODUCT RENDERING
// ========================================
function renderProducts(productsToRender) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  productsToRender.forEach(product => {
    const card = document.createElement('div');
    card.className = 'brutal-card';

    const bestOffer = OFFERS.filter(o => o.productId === product.id).sort((a, b) => a.price - b.price)[0];
    const priceDisplay = bestOffer ? `${bestOffer.price} ${bestOffer.currency}` : `${product.basePrice} EUR`;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" referrerPolicy="no-referrer">
      <div class="neon-badge">${product.brand}</div>
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <div class="brutal-card-footer">
        <span class="brutal-card-price">${priceDisplay}</span>
        <button class="brutal-card-btn" aria-label="Ver detalles">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', init);
