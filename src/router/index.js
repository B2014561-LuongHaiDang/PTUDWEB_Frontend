import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import BookBook from "@/views/BookBook.vue";
import BookBook_Staff from "@/views/BookBook_Staff.vue";
const isAuthenticated = () => {
    // Thực hiện kiểm tra xem người dùng đã đăng nhập hay chưa
    // Trả về true nếu đã đăng nhập, ngược lại trả về false
    // Đây là ví dụ đơn giản, bạn cần thay đổi logic này để phản ánh kiểm tra thực tế
    const user = JSON.parse(window.localStorage.getItem('user'));
    return user !== null; // Kiểm tra xem có thông tin người dùng trong localStorage hay không
  };
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
        path: "/staffs/book",
        name: "staffbook",
        component: BookBook_Staff,
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next();
          } else {
            next({ name: "staffs.login" });
          }
        },
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
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
              next();
            } else {
              next({ name: "staffs.login" });
            }
          },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/login",
        name: "contact.login",
        component: () => import("@/views/ContactLogin.vue"),
    },
    {
        path: "/staffs/login",
        name: "staff.login",
        component: () => import("@/components/StaffForm_Login.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
              next();
            } else {
              next({ name: "staffs.login" });
            }
          },
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
              next();
            } else {
              next({ name: "staffs.login" });
            }
          },
    },
    {
        path: "/books/detail/:id",
        name: "book.detail",
        component: () => import("@/views/BookDetail.vue"),
        props: true
    },
    {
        path: '/contacts/profile',
        name: 'contact.profile',
        component: () => import("@/views/ContactProfile.vue"),
    },
    {
        path: '/staffs/add',
        name: 'staff.add',
        component: () => import("@/views/StaffAdd.vue"),
        props: true
      },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;