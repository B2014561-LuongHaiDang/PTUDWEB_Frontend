<template>
    <div class="page justify-content-around align-items-center">
        <div class="">
            <BookSearch v-model="searchText" />
        </div>
        <div class="row">
            <div class="mt-3 col-md-12">
                <h4 class="text-center">
                    Danh sách sản phẩm
                    
                </h4>
                <div class="mt-3 row justify-content-around align-items-center">
                    <!-- Hiển thị nút "Thêm mới" chỉ khi người dùng có vai trò là admin -->
                    <router-link :to="{ name: 'book.add' }" class="btn btn-sm btn-success">
                        Thêm mới
                    </router-link>
        
                    <router-link :to="{ name: 'contactbook' }" class="btn btn-sm btn-warning">
                        Chỉnh sửa thông tin
                    </router-link>
        
                    <!-- Hiển thị nút "Xóa tất cả" chỉ khi người dùng có vai trò là admin -->
                    <button class="btn btn-sm btn-danger" @click="removeAllBooks">
                        Xóa tất cả
                    </button>
                </div>
                <BookListStaff v-if="filteredBooksCount > 0" :books="filteredBooks" v-model:activeIndex="activeIndex" />
                <p v-else>Không có liên hệ nào.</p>
                <!-- <div v-if="filteredBooksCount > 0" >
                    <CardBook :books="filteredBooks" v-model:activeIndex="activeIndex"/>
                </div> -->

            </div>

        </div>
    </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import CardBook from "@/components/CardBook.vue";
import BookSearch from "@/components/BookSearch.vue";
import BookListStaff from "@/components/BookList_Staff.vue";
import BookService from "@/services/book.service";



export default {
    components: {
        BookCard,
        BookSearch,
        BookListStaff,
        CardBook,
    },
    data() {
        return {
            books: [],
            activeIndex: -1,
            searchText: "",
            userRole: ""
        };
    },
    computed: {
        isAdmin() {
            return this.userRole === "admin";
        }
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        bookStrings() {
            return this.books.map((book) => {
                const { book_name, book_price, book_quantity, book_publishing_year, book_publishing_company, book_author, book_img } = book;
                return [book_name, book_price, book_quantity, book_publishing_year, book_publishing_company, book_author, book_img].join("");
            });
        },
        filteredBooks() {
            if (!this.searchText) return this.books;
            return this.books.filter((_book, index) =>
                this.bookStrings[index].includes(this.searchText)
            );
        },
        activeBook() {
            if (this.activeIndex < 0) return null;
            return this.filteredBooks[this.activeIndex];
        },
        filteredBooksCount() {
            return this.filteredBooks.length;
        },
    },
    methods: {
        async retrieveBooks() {
            try {
                this.books = await BookService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveBooks();
            this.activeIndex = -1;
        },
        async removeAllBooks() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await BookService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddBook() {
            this.$router.push({ name: "book.add" });
        },
    },
    mounted() {
        this.refreshList();
        // Lấy vai trò của người dùng từ localStorage
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (user) {
            this.userRole = user.chucvu;
        }
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>
