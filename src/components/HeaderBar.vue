<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
    <div class="container">
      <!-- Brand/Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img 
          src="../assets/candlesticks.png" 
          alt="Forex Calculator Logo" 
          height="40" 
          class="me-2"
        >
        <span class="brand-text fw-bold">Forex Calculator</span>
      </router-link>

      <!-- Mobile menu toggle button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link 
              to="/" 
              class="nav-link" 
              active-class="active"
              exact-active-class="active"
            >
              <i class="fas fa-home me-1"></i>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/pip-calc" 
              class="nav-link"
              active-class="active"
            >
              <i class="fas fa-calculator me-1"></i>
              Pip Value Calculator
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/position-calc" 
              class="nav-link"
              active-class="active"
            >
              <i class="fas fa-chart-line me-1"></i>
              Position Size Calculator
            </router-link>
          </li>
        </ul>

        <!-- Right side items -->
        <div class="navbar-nav">
          <div class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              id="navbarDropdown" 
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <i class="fas fa-cog me-1"></i>
              Settings
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-palette me-1"></i>
                  Theme
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-globe me-1"></i>
                  Language
                </a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-info-circle me-1"></i>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'HeaderBar',
  setup() {
    // Initialize Bootstrap JavaScript components when component mounts
    onMounted(() => {
      // Import Bootstrap JS dynamically if needed
      if (typeof window !== 'undefined' && window.bootstrap) {
        // Bootstrap is already available globally
      }
    })

    return {}
  }
}
</script>

<style scoped>
/* Custom navbar styling */
.navbar {
  min-height: 70px;
  transition: all 0.3s ease;
}

.navbar-brand {
  text-decoration: none !important;
  color: inherit !important;
}

.brand-text {
  font-family: "Special Gothic Expanded One", sans-serif;
  font-size: 1.5rem;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.navbar-brand:hover .brand-text {
  color: #3498db;
}

/* Navigation links styling */
.nav-link {
  font-weight: 500;
  padding: 0.75rem 1rem !important;
  border-radius: 0.375rem;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #3498db !important;
  transform: translateY(-1px);
}

.nav-link.active {
  background-color: #3498db !important;
  color: white !important;
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background-color: #2980b9;
  border-radius: 1px;
}

/* Dropdown styling */
.dropdown-menu {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.dropdown-item {
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: #3498db;
  color: white;
  transform: translateX(2px);
}

/* Mobile responsive adjustments */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: white;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 1rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  
  .nav-link {
    margin: 0.25rem 0;
  }
  
  .navbar-nav {
    text-align: center;
  }
}

/* Logo hover effect */
.navbar-brand img {
  transition: transform 0.3s ease;
}

.navbar-brand:hover img {
  transform: rotate(10deg) scale(1.1);
}

/* Add subtle shadow when scrolled */
.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Icon spacing */
.fas {
  width: 16px;
  text-align: center;
}
</style>
