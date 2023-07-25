<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="container">
        <h1 class="my-4 text-center">Halaman Blog</h1>
        <RouterLink class="btn btn-primary" to="/blog/create">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
                viewBox="0 0 16 16">
                <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg> New Blog
        </RouterLink>
        <div class="mt-4">
            <div class="row" v-if="blogs.length > 0">
                <div v-for="(blog, index) in blogs" :key="index" class="card mb-4 col-md-3 col-5 shadow-sm mb-2 m-2">
                    <div class="card-body">
                        <h5 class="card-title">{{ blog.judul }}</h5>
                        <p class="card-text">{{ blog.isi }}</p>
                        <div class="d-flex gap-2">
                            <router-link :to="{ path: '/blog/' + blog.id_blog + '/edit' }" class="btn btn-primary btn-sm">
                                Edit
                            </router-link>
                            <button type="button" @click="deleteBlog(blog.id_blog)" class="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="mt-4">😢 Tidak ada postingan ...</p>
            </div>
        </div>

    </main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'blogs',
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.getBlogs();
    },
    methods: {
        getBlogs() {
            axios.get('http://syaddad.thats.im/api/blogs').then(res => {
                this.blogs = res.data
            });
        },

        deleteBlog(blogId) {
            if (confirm('Are you sure you want to delete this blog?')) {
                axios.delete(`http://syaddad.thats.im/api/blogs/${blogId}`).then(res => {
                    this.blogs = this.blogs.filter(blog => blog.id_blog !== blogId);
                }).catch(err => {
                    console.error('Error deleting blog:', err);
                });
            }
        }
    }
}
</script>
