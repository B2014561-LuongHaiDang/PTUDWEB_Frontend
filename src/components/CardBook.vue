<template>
    <div v-for="(book, index) in books" :key="book._id"  class="card shadow-lg rounded mt-3" style="width: 100%; margin-left: 5px;  margin-right: 10px; padding: 0;"
        v-if="book && book.book_quantity > 0" :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ book.book_name }}>
        {{console.log(books)}}
        <div class="card-body" >
            <h5 class="card-title">
                <router-link  class="card-link">
                    <!-- <img :src="data?.hinhAnh[0]?.TENHA" class="card-img-top" :alt="data.TENSACH" style="object-fit: contain; height: 300px;" > -->
                    <h5 class="pt-1">
                        {{ book.book_name }}
                    </h5>
                </router-link>
            </h5>
            <p class="card-text">
                <span>Số lượng còn lại: </span>{{ book.book_quantity }}
            </p>
        </div>
    </div>
    <!-- :to={ name: 'book.edit', params: { id: activeBook._id } } -->
</template>

<script>
import BookService from '../services/book.service.js'

export default {
    props: {
        books: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<style lang="">
    
</style>