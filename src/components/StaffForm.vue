

<template>
    <Form @submit="submitStaff" :validation-schema="StaffFormSchema">
        <div class="form-group">
            <label for="hotennv">Họ tên</label>
            <Field name="hotennv" type="text" class="form-control" v-model="staffLocal.hotennv" />
            <ErrorMessage name="hotennv" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="staffLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="chucvu">Chức vụ</label>
            <Field name="chucvu" type="text" class="form-control" v-model="staffLocal.chucvu" />
            <ErrorMessage name="chucvu" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="diachi">Dịa chỉ</label>
            <Field name="diachi" type="text" class="form-control" v-model="staffLocal.diachi" />
            <ErrorMessage name="diachi" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="sodienthoai">Số điện thoại</label>
            <Field name="sodienthoai" type="text" class="form-control" v-model="staffLocal.sodienthoai" />
            <ErrorMessage name="sodienthoai" class="error-feedback" />
        </div>
        <div class="form-group" style="text-align: center;">
            <button class="btn btn-primary ">Đăng ký</button>
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
    emits: ["submit:staff"],
    props: {
        staff: { type: Object, required: true }
    },
    data() {
        const StaffFormSchema = yup.object().shape({
            hotennv: yup
                .string()
                .required("Vui lòng nhập họ tên")
                .min(1, "Tối thiểu 1 ký tự.")
                .max(50, "Tối đa 50 ký tự."),
            password: yup
                .string()
                .required("Vui lòng nhập mật khẩu")
                .min(8, "Tối đa 8 kí tự")
                .max(100, "Tối đa 100 kí tự"),
            chucvu: yup
                .string()
                .required("Vui lòng nhập chức vụ")
                .min(1, "Tối thiểu 1 ký tự")
                .max(50, "Tối đa 50 ký tự."),
            diachi: yup
                .string()
                .required("Vui lòng nhập địa chỉ")
                .min(1, "Tối thiểu 1 kí tự")
                .max(100, "Tối đa 100 kí tự"),
            sodienthoai: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // staffLocal để liên kết với các input trên form
            staffLocal: this.staff,
            StaffFormSchema,
        };
    },
    methods: {
        submitStaff() {
            this.$emit("submit:staff", this.staffLocal);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>