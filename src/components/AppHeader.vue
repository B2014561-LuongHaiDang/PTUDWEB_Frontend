<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white border-bottom">
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'bookbook' }" class="nav-link">
          <h5 class="text-dark" style="margin-top: 10px;">
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
        <router-link :to="{ name: 'contact.profile' }">
          <li><a href="#" class="nav-link px-2 link-secondary text-dark">Thông tin cá nhân</a></li>
        </router-link>
        <template v-if="user">
          
            <li class="nav-link px-2 link-secondary text-dark" @click="logout" style="margin-top: 2px;">
                Tên người dùng:
            </li>
            <li><router-link :to="{ name: 'contact.login' }" class="nav-link px-2 link-secondary text-dark" @click="logout"
                style="margin-top: 2px; font-weight: bold;">
                {{ user.name }}{{ user.hotennv }}
              </router-link>
            </li>
          
        </template>
        <template v-if="!user">
          <router-link :to="{ name: 'contact.login' }">
            <li><a href="#" class="nav-link px-2 link-body-emphasis text-dark" style="margin-top: 2px;">Đăng nhập</a>
            </li>
          </router-link>
        </template>

      </ul>

    </div>
  </nav>
</template>

<script>
import router from '@/router';

export default {
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push({ name: 'contact.login' }).then(() => {
        window.location.reload();
      });
    }
  },
  data() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    return {
      user
    };
  },
};
</script>
