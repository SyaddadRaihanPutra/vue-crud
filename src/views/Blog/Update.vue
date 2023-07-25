<template>
    <main class="container">
        <h1 class="text-center my-4">Edit Blog</h1>
        <div class="card shadow-lg">
            <div class="card-body">
                <form @submit.prevent="updateBlog">
                    <div class="mb-3">
                        <label for="text-center my-4" class="form-label">Judul Blog</label>
                        <input type="text" class="form-control" v-model="model.judul" name="judul"
                            placeholder="Contoh: Postingan Pertama" required>
                    </div>
                    <div class="mb-3">
                        <label for="slug" class="form-label">Slug</label>
                        <input type="text" class="form-control" v-model="model.slug" name="slug"
                            placeholder="Contoh: postingan-pertama" required>
                    </div>
                    <div class="mb-3">
                        <label for="isi" class="form-label">Isi Blog</label>
                        <textarea class="form-control" v-model="model.isi" placeholder="Leave a comment here"
                            style="height: 100px" name="isi" required></textarea>
                    </div>
                    <div class="d-flex justify-content-center align-items-center gap-2">
                        <button type="submit" class="btn btn-primary" style="border: none;">Save Changes</button>
                        <RouterLink to="/blog" class="btn btn-danger">Cancel</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from 'axios';

const API_BASE_URL = 'http://syaddad.thats.im/api/blogs';

export default {
    name: 'blogs',
    data() {
        return {
            model: {
                judul: '',
                slug: '',
                isi: ''
            }
        };
    },
    methods: {
        updateBlog() {
            // Add validation to check if the required fields are not empty
            if (!this.model.judul || !this.model.slug || !this.model.isi) {
                alert('Please fill in all required fields.');
                return;
            }

            const blogsId = this.$route.params.id;
            axios.put(`${API_BASE_URL}/${blogsId}`, this.model)
                .then(res => {
                    alert(res.data.message);
                })
                .catch(error => {
                    if (error.response) {
                        alert('Error updating blog: ' + error.response.data.message);
                    } else {
                        alert('Error updating blog: ' + error.message);
                    }
                });
        },
        getBlogsData(blogsId) {
            axios.get(`${API_BASE_URL}/${blogsId}`)
                .then(res => {
                    this.model.judul = res.data.data.judul;
                    this.model.slug = res.data.data.slug;
                    this.model.isi = res.data.data.isi;
                })
                .catch(error => {
                    console.error('Error getting blog data: ' + error.message);
                });
        }
    },
    mounted() {
        this.getBlogsData(this.$route.params.id);
    },
};
</script>
  
