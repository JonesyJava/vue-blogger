<template>
  <div class="Blog col-4 justify-content-center" v-if="blog.creator">
    <div class="card">
      <img
        class="card-img-top"
        :src="blog.creator.picture"
        alt="creator-picture"
      />
      <div class="card-body">
        <h4
          class="card-title"
          :contenteditable="state.editBlog"
          @blur="editBlog"
        >
          {{ blog.title }}
        </h4>
        <h5 class="card-title">Author: {{ blog.creator.name }}</h5>
        <router-link :to="{ name: 'BlogDetails', params: { id: blog.id } }">
          <h4>View Blog</h4>
        </router-link>
        <p class="card-text" :contenteditable="state.editBlog" @blur="editBlog">
          {{ blog.body }}
          <!-- {{ blog }} -->
        </p>
      </div>
    </div>
    <div class="card-footer">
      <div
        class="text-center p-2 z-2"
        v-if="blog.creator.name == state.user.name"
      >
        <button class="btn btn-danger" @click="deleteBlog">DELETE</button>
        <!-- <i class="fa fa-pencil" @click="editBlog"></i>
        <button type="button" class="btn btn-primary" @click="editBlog">
          ...
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'Blog',
  props: {
    blog: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      editPost: false
    })
    return {
      state,
      deleteBlog() {
        blogsService.delete(props.blog.id)
      },
      editBlog(event) {
        blogsService.editBlog(props.blog.id, event.target.innerText)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
