<template>
    <div class="user-info-container">
  <h4 class="user-name">Họ và tên: {{ user.holot }} {{ user.name }}</h4>
  <!-- Hiển thị thông tin cá nhân của người dùng -->
  <div class="user-details">
    <p><span class="detail-label">Ngày sinh:</span> {{ user.ngaysinh }}</p>
    <p><span class="detail-label">Giới tính:</span> {{ user.phai }}</p>
    <p><span class="detail-label">Địa chỉ:</span> {{ user.address }}</p>
    <p><span class="detail-label">Số điện thoại:</span> {{ user.phone }}</p>
  </div>

  <!-- Bảng hiển thị thông tin mượn sách -->
  <!-- <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên sách</th>
        <th scope="col">Ngày mượn</th>
        <th scope="col">Ngày trả</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(borrowing, index) in user.borrowings" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ borrowing.book_name }}</td>
        <td>{{ borrowing.ngaymuon }}</td>
        <td>{{ borrowing.ngaytra }}</td>
      </tr>
    </tbody>
  </table> -->
</div>

  </template>
  
  <style scoped>
  /* CSS styles */
  </style>
  
  <script>
  export default {
    data() {
      const user = JSON.parse(window.localStorage.getItem('user'));
      return {
        user
      };
    }
  };
  </script>
  