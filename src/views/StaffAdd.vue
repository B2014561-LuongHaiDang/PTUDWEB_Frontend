<template>
    <div class="page ">
        <h4 class="text-center">Vui lòng nhập thông tin</h4>
        <StaffForm :staff="staff" @submit:staff="addStaff" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import StaffForm from "@/components/StaffForm.vue";
import StaffService from "@/services/staff.service";

export default {
    components: {
        StaffForm,
    },
    data() {
        return {
            staff: {
                hotennv: "",
                password: "",
                chucvu: "",
                diachi: "",
                sodienthoai: "",
                favorite: false,
            },
            message: "",
        };
    },
    methods: {
        async addStaff(staffData) {
            try {
                await StaffService.create(staffData);
                this.message = "Liên hệ đã được thêm thành công.";
                this.$router.push({ name: 'staff.login' });
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