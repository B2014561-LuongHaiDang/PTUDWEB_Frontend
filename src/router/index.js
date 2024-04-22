import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import BookBook from "@/views/BookBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/books",
        name: "bookbook",
        component: BookBook,
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/books/add",
        name: "book.add",
        component: () => import("@/views/BookAdd.vue"),
    },     
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;