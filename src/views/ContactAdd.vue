<template>
    <div class="page ">
      <h4 class="text-center">Vui lòng nhập thông tin</h4>
      <ContactForm :contact="contact" @submit:contact="addContact" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        contact: {
          holot: "",
          name: "",
          ngaysinh: "",
          address: "",
          phone: "",
          favorite: false,
        },
        message: "",
      };
    },
    methods: {
      async addContact(contactData) {
        try {
          await ContactService.create(contactData);
          this.message = "Liên hệ đã được thêm thành công.";
          this.$router.push({ name: 'contactbook' });
        } catch (error) {
          console.error(error);
          this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
  