<template>
    <div class="login-page">
      <LoginForm @login-success="handleLoginSuccess" />
    </div>
  </template>
  
  <script>
  import LoginForm from "@/components/ContactForm_Login.vue";
  import ContactService from "@/services/contact.service"; // Assuming your login service
  
  export default {
    components: {
      LoginForm,
    },
    methods: {
      handleLoginSuccess() {
        // Handle successful login on parent component (e.g., redirect to home page)
        console.log("Login successful from parent component!");
        this.$router.push({ path: "/" }); // Assuming your home page route
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  </style>
  