<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};
</script>
<template>
    <div class="container">
        <div class="">
            <div class="">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Thông tin cá nhân</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="holot">Họ lót:</label>
                            <input type="text" class="form-control" id="holot" v-model="contact.holot"
                                placeholder="Nhập họ lót">
                        </div>
                        <div class="form-group">
                            <label for="name">Tên:</label>
                            <input type="text" class="form-control" id="name" v-model="contact.name"
                                placeholder="Nhập tên">
                        </div>
                        <div class="form-group">
                            <label for="ngaysinh">Ngày sinh:</label>
                            <input type="text" class="form-control" id="ngaysinh" v-model="contact.ngaysinh">
                        </div>
                        <div class="form-group">    
                            <label for="phai">Giới tính:</label>
                            <input type="text" class="form-control" id="gioitinh" v-model="contact.phai">
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ:</label>
                            <textarea class="form-control" id="address" v-model="contact.address"
                                placeholder="Nhập địa chỉ"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="phone">Điện thoại:</label>
                            <input type="tel" class="form-control" id="phone" v-model="contact.phone"
                                placeholder="Nhập số điện thoại">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>