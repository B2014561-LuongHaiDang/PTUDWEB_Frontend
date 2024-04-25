<template>
    <div class="page ">
      <h4 class="text-center">Vui lòng nhập thông tin sách</h4>
      <BookForm :book="book" @submit:book="addBook" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import BookForm from "@/components/BookForm.vue";
  import BookService from "@/services/book.service";
  
  export default {
    components: {
      BookForm,
    },
    data() {
      return {
        book: {
          book_name: "",
          book_price: "",
          book_quantity: "",
          book_publishing_year: "",
          book_publishing_company: "",
          book_author: "",
          book_img: "",
          book_borrow: 1,
          favorite: false,
        },
        message: "",
      };
    },
    methods: {
      async addBook(bookData) {
        try {
          await BookService.create(bookData);
          this.message = "Liên hệ đã được thêm thành công.";
          this.$router.push({ name: 'bookbook' });
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
  