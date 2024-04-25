<script>
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
<template>
    <div class="row">
        <div class="col-3 p-1" style="height: 300px;" v-for="(book, index) in books" :key="book._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            <div class="card pt-3 d-flex justify-content-center align-items-center" style="height: 100%;">
                <router-link :to="{ name: 'book.edit', params: { id: book._id } }">
                    <img :src="book.book_img" class="card-img-top" alt="..."
                        style="height: 150px; width: 120px; object-fit: cover;">
                </router-link>
                <div class="card-body" style="flex-grow: 1;">
                    <p class="card-text" style="margin: 1px;font-weight: bold;">{{ book.book_name }}</p>
                    <!-- <p class="card-text">Số lượng: {{ book.book_quantity }}</p> -->
                 
                </div>
            </div>
        </div>
    </div>
</template>