<template>
  <div class="page ">
    <h4 class="text-center">Vui lòng nhập thông tin</h4>
    <ContactForm :contact="contact" @submit:contact="addContact" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
import { useToast } from "vue-toastification";
const toast = useToast();
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
        password: "",
        favorite: false,
      },
    };
  },
  methods: {
    async addContact(contactData) {
      try {
        const res = await ContactService.create(contactData);

        if(res?.userId) {
        
          toast.success(res.message, {
            timeout: 2000
          });
          this.$router.push({ name: 'contact.login' });
        }

      } catch (error) {
        toast.error(error.response.data.message, {
          timeout: 2000
        });
      }
    },
  },
};
</script>

<style scoped>
/* Your scoped styles here */
</style>