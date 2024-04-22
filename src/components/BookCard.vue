<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ book.book_name }}
        </div>
        <div class="p-1">
            <strong>Giá:</strong>
            {{ book.book_price }}
        </div>
        <div class="p-1">
            <strong>Số lươngj:</strong>
            {{ book.book_quantity }}
        </div>
        <div class="p-1">
            <strong>Năm xuất bản:</strong>
            {{ book.book_publishing_year }}
        </div>
        <div class="p-1">
            <strong>Nhà xuất bản:</strong>
            {{ book.book_publishing_company }}
        </div>
        <div class="p-1">
            <strong>Tác giả:</strong>
            {{ book.book_author }}
        </div>
    </div>
</template>