<template>
    <div class="">
        <div class="">
            <div class="row">
                <div class="mt-4 col-6">
                    <img :src="book.book_img" alt="Image" width="500" style="float: right;">
                </div>
                <div class="col-6 mt-5">
                    <h4>Thông tin sách</h4>
                    <p>{{ message }}</p>
                    <div>
                        <p class="card-text" style="font-weight: bold; font-size: 24px;">{{ book.book_name }}</p>
                        <p class="card-text" style=" font-size: 20px;">Giá: {{ book.book_price }}đ</p>
                        <p class="card-text" style=" font-size: 20px;">Năm xuất bản: {{ book.book_publishing_year }}</p>
                        <p class="card-text" style=" font-size: 20px;">Nhà xuất bản: {{ book.book_publishing_company }}đ</p>
                        <p class="card-text" style=" font-size: 20px;">Tác giả: {{ book.book_author }}đ</p>
                        <label for=""style=" font-size: 20px; margin-bottom: 10px;">Ngày trả:</label>
                        <input type="date" v-model="ngaytra">
                    </div>
                    <button @click="createBill">Mượn</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";
import BillService from "@/services/bill.service";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
    components: {
        BookForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            ngaytra: "",
            book: null,
            message: "",
        };
    },
    methods: {
        async createBill() {

            const bookId = this.book._id
            const userId = JSON.parse(window.localStorage.getItem('user'))._id
            try {
                const data = {
                    "madocgia": userId,
                    "masach": bookId,
                    "soluong": 1,
                    "ngaymuon": new Date().toLocaleString().split(' ')[1],
                    "ngaytra": this.ngaytra,
                    "trangthai": 0
                }

                const res = await BillService.create(data);
                if (res.billId) {

                    toast.success(res.message, {
                        timeout: 2000
                    });
                }
            } catch (error) {
                console.log(error);
                // this.$router.push({
                //     name: "notfound",
                //     params: {
                //         pathMatch: this.$route.path.split("/").slice(1)
                //     },
                //     query: this.$route.query,
                //     hash: this.$route.hash,
                // });
            }
        },
        async getBook(id) {
            try {
                this.book = await BookService.get(id);
            } catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    },
};
</script>
