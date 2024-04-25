<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="holot">Họ lót</label>
                <Field name="holot" type="text" class="form-control" v-model="contactLocal.holot" />
                <ErrorMessage name="holot" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="name">Tên</label>
                <Field name="name" type="text" class="form-control" v-model="contactLocal.name" />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="password">Mật khẩu</label>
                <Field name="password" type="password" class="form-control" v-model="contactLocal.password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="phai">Giới tính</label>
                <Field name="phai" type="text" class="form-control" v-model="contactLocal.phai" />
                <ErrorMessage name="phai" class="error-feedback" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="ngaysinh">Ngày sinh</label>
                <Field name="ngaysinh" type="text" class="form-control" v-model="contactLocal.ngaysinh" />
                <ErrorMessage name="ngaysinh" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="address">Địa chỉ</label>
                <Field name="address" type="text" class="form-control" v-model="contactLocal.address" />
                <ErrorMessage name="address" class="error-feedback" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="phone">Điện thoại</label>
                <Field name="phone" type="tel" class="form-control" v-model="contactLocal.phone" />
                <ErrorMessage name="phone" class="error-feedback" />
            </div>
            <div class="form-group col-md-6 text-center" style="padding-top:42px ;"> <button
                    class="btn btn-primary">Chỉnh sửa</button>
                <button v-if="contactLocal._id" type="button" class="btn btn-danger ml-2"
                    @click="deleteContact">Xóa</button>
            </div>
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
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            holot: yup
                .string()
                .required("Vui lòng nhập họ lót của bạn")
                .min(1, "Tên phải ít nhất 1 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            name: yup
                .string()
                .required("Vui lòng nhập tên của bạn")
                .min(1, "Tên phải ít nhất 1 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            password: yup
                .string()
                .required("Vui lòng nhập mật khẩu")
                .min(8, "Tối đa 8 kí tự")
                .max(100, "Tối đa 100 kí tự"),
            ngaysinh: yup
                .string()
                .required("Vui lòng nhập ngày sinh")
                .matches(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/, "Vui lòng nhập theo định dạng dd/mm/yyyy"),
            phai: yup
                .string()
                .required("Vui lòng nhập giới tính")
                .oneOf(['Nam', 'Nữ'], "Chỉ chấp nhận 'Nam' hoặc 'Nữ'"),
            address: yup
                .string()
                .required("Vui lòng nhập địa chỉ")
                .max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .required("Vui lòng nhập số điện thoại")
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>