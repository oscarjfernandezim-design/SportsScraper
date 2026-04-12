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
  { id: 'o1', productId: 'p1', storeId: 's1', price: 124.99, currency: 'EUR', url: 'https://www.zalando.es/nike-zapatillas-running/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o2', productId: 'p1', storeId: 's2', price: 119.50, currency: 'EUR', url: 'https://www.asos.com/nike-running-shoes/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o3', productId: 'p1', storeId: 's4', price: 129.99, currency: 'EUR', url: 'https://www.nike.com/es/zapatillas-running-hombre/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o4', productId: 'p2', storeId: 's1', price: 185.00, currency: 'EUR', url: 'https://www.zalando.es/adidas-ultraboost/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o5', productId: 'p2', storeId: 's3', price: 190.00, currency: 'EUR', url: 'https://www.adidas.es/zapatillas-ultraboost/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o6', productId: 'p2', storeId: 's5', price: 179.99, currency: 'EUR', url: 'https://www.decathlon.es/adidas-zapatillas-running/', stock: false, lastUpdated: new Date().toISOString() },
  { id: 'o7', productId: 'p3', storeId: 's1', price: 105.00, currency: 'EUR', url: 'https://www.zalando.es/puma-zapatillas/', stock: true, lastUpdated: new Date().toISOString() },
  { id: 'o8', productId: 'p3', storeId: 's2', price: 110.00, currency: 'EUR', url: 'https://www.asos.com/puma-shoes/', stock: true, lastUpdated: new Date().toISOString() },
];

let currentSearch = '';

// ========================================
// INITIALIZATION
// ========================================
function init() {
  renderProducts(PRODUCTS);
  setupSearchListeners();
  updateStatistics();
  setupModalListeners();
  initializeAlerts();
  setupAlertListeners();
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
    card.addEventListener('click', () => {
      openPriceModal(product.id);
    });

    const bestOffer = OFFERS.filter(o => o.productId === product.id).sort((a, b) => a.price - b.price)[0];
    const priceDisplay = bestOffer ? `${bestOffer.price} ${bestOffer.currency}` : `${product.basePrice} EUR`;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" referrerPolicy="no-referrer">
      <div class="neon-badge">${product.brand}</div>
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <div class="brutal-card-footer">
        <span class="brutal-card-price">${priceDisplay}</span>
        <button class="brutal-card-btn" aria-label="Comparar precios">
          COMPARAR PRECIOS
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ========================================
// PRICE COMPARISON MODAL (CU2)
// ========================================
function openPriceModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Actualizar encabezado
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductImage').src = product.image;
  document.getElementById('modalProductDescription').textContent = product.description;

  // Badge de precio mínimo histórico
  const allOffers = OFFERS.filter(o => o.productId === productId);
  const lowestPrice = allOffers.length > 0
    ? Math.min(...allOffers.map(o => o.price))
    : product.basePrice;

  const badge = document.getElementById('modalLowestPrice');
  if (lowestPrice < 120) {
    badge.textContent = '¡PRECIO MÍNIMO HISTÓRICO!';
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }

  // Renderizar detalles del producto
  renderProductDetails(product);

  // Renderizar ofertas
  renderOffers(productId);

  // Renderizar histórico de precios
  renderPriceHistory(productId);

  // Renderizar alertas de precio (CU3)
  renderAlertForm(productId);
  renderActiveAlerts(productId);
  checkPriceAlerts(productId);

  // Abrir modal
  document.getElementById('priceModal').style.display = 'flex';
}

function renderProductDetails(product) {
  const detailsContainer = document.getElementById('productDetailsContent');
  detailsContainer.innerHTML = '';

  const details = [
    { label: 'MARCA', value: product.brand },
    { label: 'CATEGORÍA', value: product.category },
    { label: 'PRECIO BASE', value: `${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(product.basePrice)}` },
  ];

  details.forEach(detail => {
    const item = document.createElement('div');
    item.className = 'detail-item';
    item.innerHTML = `
      <span class="detail-label">${detail.label}</span>
      <span class="detail-value">${detail.value}</span>
    `;
    detailsContainer.appendChild(item);
  });
}

function closePriceModal() {
  document.getElementById('priceModal').style.display = 'none';
  document.getElementById('offersContainer').innerHTML = '';
  if (priceModal) {
    priceModal.destroy();
    priceModal = null;
  }
}

let priceModal = null;

function renderOffers(productId) {
  const offers = OFFERS.filter(o => o.productId === productId)
    .sort((a, b) => a.price - b.price); // Ordenamiento CU2

  const container = document.getElementById('offersContainer');
  container.innerHTML = '';

  if (offers.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #999;">No hay ofertas disponibles para este producto</p>';
    return;
  }

  offers.forEach(offer => {
    const store = STORES.find(s => s.id === offer.storeId);
    const stockText = offer.stock ? 'En Stock' : 'Sin Stock';
    const updatedText = formatDate(offer.lastUpdated);

    const row = document.createElement('div');
    row.className = 'offer-row';
    row.innerHTML = `
      <img src="${store.logo}" alt="${store.name}" class="offer-logo" referrerPolicy="no-referrer">
      <div class="offer-info">
        <span class="offer-store">${store.name}</span>
        <span class="offer-price">${new Intl.NumberFormat('es-ES', { style: 'currency', currency: offer.currency }).format(offer.price)}</span>
        <span class="offer-stock">${stockText}</span>
        <span class="offer-updated">Actualizado: ${updatedText}</span>
      </div>
      <button class="compare-btn" data-url="${offer.url}">
        COMPARAR PRECIOS
      </button>
    `;

    row.querySelector('.compare-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const url = e.target.getAttribute('data-url');
      if (url && url !== '#') {
        window.open(url, '_blank');
      }
    });

    container.appendChild(row);
  });
}

function renderPriceHistory(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const historyContainer = document.getElementById('modalPriceHistory');

  if (!product || !product.priceHistory || product.priceHistory.length === 0) {
    historyContainer.style.display = 'none';
    return;
  }

  historyContainer.style.display = 'block';

  // Destruir gráfica anterior si existe
  if (priceModal) {
    priceModal.destroy();
  }

  const labels = product.priceHistory.map(h => h.date);
  const data = product.priceHistory.map(h => h.price);

  const ctx = document.getElementById('modalPriceChart').getContext('2d');
  priceModal = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `Precio (${OFFERS.find(o => o.productId === productId)?.currency || 'EUR'})`,
        data: data,
        borderColor: '#00FF00',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#000',
        pointBorderColor: '#00FF00',
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: '#ddd' }
        },
        x: {
          grid: { display: false }
        }
      },
      plugins: { legend: { display: true } }
    }
  });
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'ahora';
  if (diffMins < 60) return `hace ${diffMins} min`;
  if (diffHours < 24) return `hace ${diffHours} h`;
  if (diffDays < 30) return `hace ${diffDays} d`;

  return date.toLocaleDateString('es-ES');
}

function setupModalListeners() {
  // Cerrar modal por botón X
  document.getElementById('closeModal').addEventListener('click', closePriceModal);

  // Cerrar modal por tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('priceModal').style.display !== 'none') {
      closePriceModal();
    }
  });

  // Cerrar modal por click en overlay
  document.getElementById('priceModal').addEventListener('click', (e) => {
    if (e.target.id === 'priceModal') {
      closePriceModal();
    }
  });
}

function setupAuthListeners() {
  // LOGIN FORM
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const result = loginUser(email, password);
      if (result.success) {
        updateUserMenu();
        router.go('/');
        alert('¡Bienvenido ' + result.user.name + '!');
      } else {
        alert('Error: ' + result.error);
      }
      loginForm.reset();
    });
  }

  // REGISTER FORM
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

      if (password !== passwordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const result = registerUser(email, password, name);
      if (result.success) {
        alert('¡Cuenta creada! Ahora puedes iniciar sesión');
        router.go('/login');
      } else {
        alert('Error: ' + result.error);
      }
      registerForm.reset();
    });
  }

  // LOGIN BUTTON IN HEADER
  const loginBtn = document.querySelector('.button-login');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      router.go('/login');
    });
  }
}

function updateUserMenu() {
  const userMenu = document.getElementById('userMenu');
  const user = getCurrentUser();

  userMenu.innerHTML = '';

  if (user && isLoggedIn()) {
    // Show user menu when logged in
    userMenu.innerHTML = `
      <img src="${user.avatar}" alt="avatar" class="user-avatar">
      <span class="user-username">${user.name}</span>
      <div class="user-dropdown">
        <button class="brutal-btn" style="padding: 0.5rem 1rem; font-size: 0.75rem;">CUENTA ▼</button>
        <div class="user-dropdown-menu">
          <a href="#/profile">MI PERFIL</a>
          <a href="#/alerts">MIS ALERTAS</a>
          <button id="logoutHeaderBtn">CERRAR SESIÓN</button>
        </div>
      </div>
    `;

    // Add event listeners
    const dropdownBtn = userMenu.querySelector('.brutal-btn');
    const dropdownMenu = userMenu.querySelector('.user-dropdown-menu');

    dropdownBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
      }
    });

    const logoutBtn = document.getElementById('logoutHeaderBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        logoutUser();
        updateUserMenu();
        router.go('/');
        alert('Sesión cerrada');
      });
    }
  } else {
    // Show login button when not logged in
    userMenu.innerHTML = `<button class="brutal-btn button-login">LOGIN</button>`;
    const newLoginBtn = userMenu.querySelector('.button-login');
    newLoginBtn.addEventListener('click', () => {
      router.go('/login');
    });
  }
}

function setupProfileListeners() {
  const profilePage = document.getElementById('profilePage');
  if (!profilePage) return;

  const user = getCurrentUser();
  if (!user) {
    router.go('/login');
    return;
  }

  // Display user info
  document.getElementById('profileAvatar').src = user.avatar;
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileMemberSince').textContent =
    'Miembro desde: ' + new Date(user.createdAt).toLocaleDateString('es-ES');

  // Display stats
  const alerts = getAlerts();
  const userAlerts = alerts.filter(a => a.productId); // Simplified count
  document.getElementById('alertsCount').textContent = userAlerts.length;

  const searchHistory = JSON.parse(localStorage.getItem('sportsscraper_search_history')) || [];
  document.getElementById('recentSearches').textContent = searchHistory.length;

  // Profile action buttons
  document.getElementById('editProfileBtn').addEventListener('click', () => {
    const newName = prompt('Nuevo nombre:', user.name);
    if (newName && newName.trim()) {
      updateUserProfile(newName, user.email);
      alert('Perfil actualizado');
      document.getElementById('profileName').textContent = newName;
    }
  });

  document.getElementById('changePasswordBtn').addEventListener('click', () => {
    const oldPassword = prompt('Contraseña actual:');
    if (!oldPassword) return;

    const newPassword = prompt('Nueva contraseña (mín. 6 caracteres):');
    if (!newPassword || newPassword.length < 6) {
      alert('Contraseña inválida');
      return;
    }

    const result = changePassword(oldPassword, newPassword);
    if (result.success) {
      alert('Contraseña cambiada exitosamente');
    } else {
      alert('Error: ' + result.error);
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    logoutUser();
    updateUserMenu();
    router.go('/');
    alert('Sesión cerrada');
  });
}

function setupAlertsPageListeners() {
  const alertsPage = document.getElementById('alertsPage');
  if (!alertsPage) return;

  const user = getCurrentUser();
  if (!user) {
    router.go('/login');
    return;
  }

  renderAlertsPage();

  const filterSelect = document.getElementById('alertFilter');
  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      renderAlertsPage();
    });
  }
}

function renderAlertsPage() {
  const alerts = getAlerts();
  const filterValue = document.getElementById('alertFilter')?.value || '';

  let filtered = alerts;
  if (filterValue === 'active') {
    filtered = alerts.filter(a => a.enabled);
  } else if (filterValue === 'inactive') {
    filtered = alerts.filter(a => !a.enabled);
  }

  const alertsList = document.getElementById('alertsList');
  const emptyState = document.getElementById('emptyAlertsState');

  if (filtered.length === 0) {
    alertsList.style.display = 'none';
    emptyState.style.display = 'flex';
    return;
  }

  alertsList.style.display = 'flex';
  emptyState.style.display = 'none';

  alertsList.innerHTML = filtered.map(alert => {
    const product = PRODUCTS.find(p => p.id === alert.productId);
    if (!product) return '';

    return `
      <div class="alert-card">
        <div class="alert-product">
          <img src="${product.image}" alt="${product.name}">
          <div class="alert-info">
            <h3>${product.name}</h3>
            <p>Objetivo: €${alert.targetPrice} | Estado: ${alert.enabled ? 'ACTIVA' : 'INACTIVA'}</p>
          </div>
        </div>
        <div class="alert-actions">
          <button class="alert-btn" data-alert-id="${alert.id}" data-action="toggle">
            ${alert.enabled ? 'DESACTIVAR' : 'ACTIVAR'}
          </button>
          <button class="alert-btn delete" data-alert-id="${alert.id}" data-action="delete">ELIMINAR</button>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners for delete/toggle buttons
  alertsList.querySelectorAll('.alert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const alertId = btn.dataset.alertId;
      const action = btn.dataset.action;

      if (action === 'delete') {
        if (confirm('¿Eliminar esta alerta?')) {
          deleteAlert(alertId);
          renderAlertsPage();
        }
      } else if (action === 'toggle') {
        toggleAlert(alertId);
        renderAlertsPage();
      }
    });
  });
}

function getAlerts() {
  return JSON.parse(localStorage.getItem('sportsscraper_alerts')) || [];
}

function deleteAlert(alertId) {
  let alerts = getAlerts();
  alerts = alerts.filter(a => a.id !== alertId);
  localStorage.setItem('sportsscraper_alerts', JSON.stringify(alerts));
}

function toggleAlert(alertId) {
  let alerts = getAlerts();
  const alert = alerts.find(a => a.id === alertId);
  if ( alert) {
    alert.enabled = !alert.enabled;
    localStorage.setItem('sportsscraper_alerts', JSON.stringify(alerts));
  }
}

// ========================================
// INITIALIZE ROUTING AND AUTH
// ========================================

// Setup routers
document.addEventListener('DOMContentLoaded', () => {
  init();
  setupAuthListeners();
  updateUserMenu();

  // Setup page-specific listeners when router navigates
  const observer = new MutationObserver(() => {
    const visiblePage = document.querySelector('[data-page]:not([style*="display: none"])');
    if (visiblePage) {
      const pageId = visiblePage.id;
      if (pageId === 'profilePage') {
        setupProfileListeners();
      } else if (pageId === 'alertsPage') {
        setupAlertsPageListeners();
      }
    }
  });

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
  });

  // Initial navigation
  router.navigate();
});
=======
// PRICE ALERTS (CU3)
// ========================================
let currentProductId = null;
let editingAlertId = null;

function initializeAlerts() {
  // Cargar alertas al iniciar
  const alerts = getAlerts();
  if (alerts.length > 0) {
    document.getElementById('bellButton')?.classList.add('active');
  }
}

function getAlerts() {
  try {
    const stored = localStorage.getItem('sportsscraper_alerts');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

function saveAlertsToStorage(alerts) {
  try {
    localStorage.setItem('sportsscraper_alerts', JSON.stringify(alerts));
  } catch (e) {
    console.error('Error guardando alertas:', e);
  }
}

function getProductAlerts(productId) {
  const alerts = getAlerts();
  return alerts.filter(a => a.productId === productId && a.enabled);
}

function saveAlert(productId, targetPrice,stores, alertIdToEdit = null) {
  if (!productId || !targetPrice || targetPrice <= 0) {
    alert('Por favor ingresa un precio válido');
    return false;
  }

  const alerts = getAlerts();
  const timestamp = new Date().toISOString();

  if (alertIdToEdit) {
    // Editar alerta existente
    const index = alerts.findIndex(a => a.id === alertIdToEdit);
    if (index !== -1) {
      alerts[index] = {
        ...alerts[index],
        targetPrice: parseFloat(targetPrice),
        stores: stores,
        updatedAt: timestamp
      };
    }
  } else {
    // Crear nueva alerta
    alerts.push({
      id: 'pa_' + Date.now(),
      productId: productId,
      targetPrice: parseFloat(targetPrice),
      stores: stores,
      enabled: true,
      createdAt: timestamp,
      triggered: false
    });
  }

  saveAlertsToStorage(alerts);
  showPriceNotification('¡Alerta guardada exitosamente!', 'success');
  return true;
}

function deleteAlert(alertId) {
  if (!confirm('¿Estás seguro de que deseas eliminar esta alerta?')) return;

  const alerts = getAlerts().filter(a => a.id !== alertId);
  saveAlertsToStorage(alerts);
  renderActiveAlerts(currentProductId);
  updateBellIcon();
  showPriceNotification('Alerta eliminada', 'success');
}

function toggleAlertActive(alertId) {
  const alerts = getAlerts();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.enabled = !alert.enabled;
    saveAlertsToStorage(alerts);
    renderActiveAlerts(currentProductId);
    updateBellIcon();
  }
}

function editAlert(alertId) {
  const alerts = getAlerts();
  const alert = alerts.find(a => a.id === alertId);
  if (!alert) return;

  editingAlertId = alertId;
  document.getElementById('targetPrice').value = alert.targetPrice;

  // Des-seleccionar todos los checkboxes
  document.querySelectorAll('.store-checkbox input').forEach(cb => cb.checked = false);

  // Seleccionar los checkboxes del alerta
  if (alert.stores.length > 0) {
    alert.stores.forEach(storeId => {
      const checkbox = document.querySelector(`input[value="${storeId}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  document.getElementById('toggleAlertForm').click();
  document.getElementById('targetPrice').focus();
}

function renderAlertForm(productId) {
  currentProductId = productId;
  const form = document.getElementById('alertForm');
  const toggleBtn = document.getElementById('toggleAlertForm');

  // Renderizar checkboxes de tiendas
  const storesContainer = document.getElementById('storeCheckboxes');
  storesContainer.innerHTML = '';
  STORES.forEach(store => {
    const label = document.createElement('label');
    label.className = 'store-checkbox';
    label.innerHTML = `
      <input type="checkbox" value="${store.id}">
      <span>${store.name}</span>
    `;
    storesContainer.appendChild(label);
  });

  // Event listeners
  toggleBtn.addEventListener('click', () => {
    const isVisible = form.style.display !== 'none';
    form.style.display = isVisible ? 'none' : 'flex';
    toggleBtn.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
  });

  document.getElementById('cancelAlert').addEventListener('click', () => {
    form.style.display = 'none';
    editingAlertId = null;
    document.getElementById('targetPrice').value = '';
    document.querySelectorAll('.store-checkbox input').forEach(cb => cb.checked = false);
    toggleBtn.style.transform = 'rotate(0deg)';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetPrice = document.getElementById('targetPrice').value;
    const selectedStores = Array.from(document.querySelectorAll('.store-checkbox input:checked'))
      .map(cb => cb.value);

    if (saveAlert(productId, targetPrice, selectedStores, editingAlertId)) {
      form.reset();
      form.style.display = 'none';
      toggleBtn.style.transform = 'rotate(0deg)';
      editingAlertId = null;
      renderActiveAlerts(productId);
      updateBellIcon();
    }
  });
}

function renderActiveAlerts(productId) {
  const alerts = getProductAlerts(productId);
  const container = document.getElementById('activeAlerts');
  const list = document.getElementById('alertsList');

  if (alerts.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  list.innerHTML = '';

  alerts.forEach(alert => {
    const storeNames = alert.stores.length > 0
      ? STORES.filter(s => alert.stores.includes(s.id)).map(s => s.name).join(', ')
      : 'Todas las tiendas';

    const item = document.createElement('div');
    item.className = 'alert-item';
    item.innerHTML = `
      <div class="alert-item-info">
        <strong>Precio objetivo:</strong> €${alert.targetPrice.toFixed(2)}<br>
        <strong>Tiendas:</strong> ${storeNames}
      </div>
      <div class="alert-item-actions">
        <button class="alert-btn" onclick="editAlert('${alert.id}')">EDITAR</button>
        <button class="alert-btn" onclick="toggleAlertActive('${alert.id}')">${alert.enabled ? 'DESACTIVAR' : 'ACTIVAR'}</button>
        <button class="alert-btn delete" onclick="deleteAlert('${alert.id}')">ELIMINAR</button>
      </div>
    `;
    list.appendChild(item);
  });
}

function updateBellIcon() {
  const allAlerts = getAlerts();
  const activeAlerts = allAlerts.filter(a => a.enabled);
  const bellIcon = document.getElementById('bellButton');

  if (activeAlerts.length > 0) {
    bellIcon.classList.add('active');
    bellIcon.setAttribute('data-count', activeAlerts.length);
  } else {
    bellIcon.classList.remove('active');
    bellIcon.setAttribute('data-count', '');
  }
}

function checkPriceAlerts(productId) {
  const alerts = getProductAlerts(productId);
  const offers = OFFERS.filter(o => o.productId === productId);

  if (offers.length === 0) return;

  const lowestPrice = Math.min(...offers.map(o => o.price));

  alerts.forEach(alert => {
    if (lowestPrice <= alert.targetPrice && !alert.triggered) {
      const storeName = alert.stores.length > 0
        ? STORES.filter(s => alert.stores.includes(s.id)).map(s => s.name).join(', ')
        : 'algunas tiendas';

      showPriceNotification(
        `¡Alerta! El precio bajó a €${lowestPrice.toFixed(2)} en ${storeName}`,
        'alert'
      );

      // Marcar alerta como disparada
      const allAlerts = getAlerts();
      const idx = allAlerts.findIndex(a => a.id === alert.id);
      if (idx !== -1) {
        allAlerts[idx].triggered = true;
        saveAlertsToStorage(allAlerts);
      }
    }
  });
}

function showPriceNotification(message, type = 'success') {
  const notification = document.getElementById('priceAlertNotification');
  const messageEl = document.getElementById('notificationMessage');
  const closeBtn = document.getElementById('closeNotification');

  messageEl.textContent = message;
  notification.className = 'price-alert-notification';
  if (type === 'alert') {
    notification.classList.add('warning');
  }

  notification.style.display = 'flex';

  closeBtn.addEventListener('click', () => {
    notification.style.display = 'none';
  }, { once: true });

  setTimeout(() => {
    if (notification.style.display !== 'none') {
      notification.style.display = 'none';
    }
  }, 5000);
}

function setupAlertListeners() {
  const bellButton = document.getElementById('bellButton');

  bellButton.addEventListener('click', () => {
    const form = document.getElementById('alertForm');
    const isVisible = form.style.display !== 'none';
    form.style.display = isVisible ? 'none' : 'flex';
    document.getElementById('toggleAlertForm').style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
  });
}

document.addEventListener('DOMContentLoaded', init);
