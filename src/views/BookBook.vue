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
                <BookList v-if="filteredBooksCount > 0" :books="filteredBooks" v-model:activeIndex="activeIndex" />
                <p v-else>Không có liên hệ nào.</p>
                <!-- <div v-if="filteredBooksCount > 0" >
                    <CardBook :books="filteredBooks" v-model:activeIndex="activeIndex"/>
                </div> -->
                <div class="mt-3 row justify-content-around align-items-center">
                    <router-link :to="{ name: 'book.add' }" class="btn btn-sm btn-success">
                         Thêm mới
                    </router-link>
                    <button class="btn btn-sm btn-danger" @click="removeAllBooks">
                         Xóa tất cả
                    </button>
                </div>
            </div>
            <div class="mt-3 col-md-6">
                <div v-if="activeBook">
                    <h4>
                        Chi tiết Liên hệ
                        <i class="fas fa-address-card"></i>
                    </h4>
                    <BookCard :book="activeBook" />
                    <router-link :to="{ name: 'book.edit', params: { id: activeBook._id } }">
                        <span class="mt-2 badge badge-warning">
                            <i class="fas fa-edit"></i> Hiệu chỉnh
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import CardBook from "@/components/CardBook.vue";
import BookSearch from "@/components/BookSearch.vue";
import BookList from "@/components/BookList.vue";
import BookService from "@/services/book.service";



export default {
    components: {
        BookCard,
        BookSearch,
        BookList,
        CardBook,
    },
    data() {
        return {
            books: [],
            activeIndex: -1,
            searchText: "",
        };
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
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>
