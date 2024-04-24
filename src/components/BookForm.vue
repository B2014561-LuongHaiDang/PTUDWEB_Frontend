

<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema">
        <div class="form-group">
            <label for="book_name">Tên sách</label>
            <Field name="book_name" type="text" class="form-control" v-model="bookLocal.book_name" />
            <ErrorMessage name="book_name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_price">Giá</label>
            <Field name="book_price" type="text" class="form-control" v-model="bookLocal.book_price" />
            <ErrorMessage name="book_price" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_quantity">Số lượng</label>
            <Field name="book_quantity" type="text" class="form-control" v-model="bookLocal.book_quantity" />
            <ErrorMessage name="book_quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_publishing_year">Năm xuất bản</label>
            <Field name="book_publishing_year" type="text" class="form-control" v-model="bookLocal.book_publishing_year" />
            <ErrorMessage name="book_publishing_year" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_publishing_company">Nhà xuất bản</label>
            <Field name="book_publishing_company" type="text" class="form-control" v-model="bookLocal.book_publishing_company" />
            <ErrorMessage name="book_publishing_company" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_author">Tác giả</label>
            <Field name="book_author" type="text" class="form-control" v-model="bookLocal.book_author" />
            <ErrorMessage name="book_author" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="book_author">Hình ảnh</label>
            <Field name="book_img" type="text" class="form-control" v-model="bookLocal.book_img" />
            <ErrorMessage name="book_img" class="error-feedback" />
        </div>
        <div class="form-group" style="text-align: center;">
            <button class="btn btn-primary ">Đăng ký</button>
            <button v-if="bookLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
                Xóa
            </button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        const bookFormSchema = yup.object().shape({
            book_name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(1, "Tên phải ít nhất 1 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            book_price: yup
                .number()
                .required("Giá phải có giá trị.")
                .min(1, "Giá phải ít nhất 1 ký tự."),
                
            book_quantity: yup
                .number()
                .required("Số lượng phải có giá trị.")
                .min(1, "Số lượng phải ít nhất 1 ký tự.")
                .max(1000, "Số lượng có nhiều nhất 50 ký tự."),
            book_publishing_year: yup
                .number()
                .required("Năm xuất bản phải có giá trị.")
                .min(1, "Năm xuất bản phải ít nhất 1 ký tự.")
                .max(2024, "Năm xuất bản có nhiều nhất 50 ký tự."),
            book_publishing_company: yup
                .string()
                .required("Nhà xuất bản phải có giá trị.")
                .min(1, "Nhà xuất bản phải ít nhất 1 ký tự.")
                .max(50, "Nhà xuất bản có nhiều nhất 50 ký tự."),
            book_author: yup
                .string()
                .required("Tác giả phải có giá trị.")
                .min(1, "Tác giả phải ít nhất 1 ký tự.")
                .max(50, "Tác giả có nhiều nhất 50 ký tự."),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // bookLocal để liên kết với các input trên form
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>