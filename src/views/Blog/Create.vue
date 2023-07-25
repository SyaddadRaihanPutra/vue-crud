<template>
  <main class="container">
    <h1 class="text-center my-4">Buat Blog Baru</h1>
    <div class="card shadow-lg">
      <div class="card-body">
        <form @submit.prevent="saveBlogs">
          <div class="mb-3">
            <label for="form-label" class="form-label">Judul Blog</label>
            <input type="text" class="form-control" v-model="model.blogs.judul" name="judul"
              placeholder="Contoh: Postingan Pertama">
          </div>
          <div class="mb-3">
            <label for="slug" class="form-label">Slug</label>
            <input type="text" class="form-control" v-model="model.blogs.slug" name="slug"
              placeholder="Contoh: postingan-pertama">
          </div>
          <div class="mb-3">
            <label for="isi" class="form-label">Isi Blog</label>
            <textarea class="form-control" v-model="model.blogs.isi" placeholder="Leave a comment here"
              style="height: 100px" name="isi"></textarea>
          </div>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <button type="submit" class="btn btn-primary" style="border: none;">Submit</button>
            <RouterLink to="/blog" class="btn btn-secondary">Cancel</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'blogs',
  data() {
    return {
      model: {
        blogs: {
          judul: '',
          slug: '',
          isi: ''
        }
      }
    }
  },
  methods: {
    saveBlogs() {
      axios.post('https://syaddad.thats.im/api/blogs', this.model.blogs)
        .then(res => {
          alert(res.data.message);
          this.model.blogs.judul = '';
          this.model.blogs.slug = '';
          this.model.blogs.isi = '';
        })
        .catch(function (error) {
          if (error.response) {
            console.log("Error");
          }
        });
    }
  }
}
</script>
  
