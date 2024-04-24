<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white border-bottom">
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'bookbook' }" class="nav-link">
          <h5 class="text-dark">
            Trang chủ
          </h5>
        </router-link>
      </li>
    </div>
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Inventory</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Customers</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Products</a></li>
      </ul>

      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown link
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
