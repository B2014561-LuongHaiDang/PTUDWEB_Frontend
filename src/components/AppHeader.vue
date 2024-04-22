<template>
    <nav class="navbar navbar-expand navbar-dark bg-white border-bottom">
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    <h5 class="text-dark">
                        Trang chủ
                        <i class="fa-solid fa-house"></i>
                    </h5>
                    
                </router-link>
            </li>
        </div>
    </nav>
</template>