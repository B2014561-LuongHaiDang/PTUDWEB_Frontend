<template>
    <div class="login-form">
      <h2 class="text-center">Đăng nhập</h2>
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input type="text" id="username" name="username" class="form-control" v-model="loginData.username" required />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" id="password" name="password" class="form-control" v-model="loginData.password"
            required />
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
        <!-- <router-link :to="{ name: 'staff.add' }">
          <button type="" class="btn btn-primary" style="margin-left: 22px;">Đăng kí</button>
          </router-link> -->
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import staffService from '@/services/staff.service';
  import { useToast } from "vue-toastification";
  const toast = useToast();
  export default {
    data() {
      return {
        loginData: {
          username: "",
          password: "",
        },
        errorMessage: "",
        rememberMe: false,
      };
    },
    methods: {
      async submitLogin() {
        try {
          const res = await staffService.login(this.loginData.username, this.loginData.password);
          if (res?.user?._id) {
            toast.success(res.message, {
              timeout: 2000
            });
            window.localStorage.setItem('user', JSON.stringify(res?.user));
            this.$router.push({ name: 'staffbook' });
          }
  
  
        } catch (error) {
          toast.error(error.response?.data.message, {
            timeout: 2000
          });
  
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>