<template>
    <div class="page">
      <h4>Thêm Liên hệ</h4>
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
          name: "",
          email: "",
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
  