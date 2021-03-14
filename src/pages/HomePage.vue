<template>
  <div class="home flex-grow-1 align-items-center justify-content-center">
    <h1 class="text-light">Welcome to Hive Mind Blogger</h1>
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-primary btn-lg my-2"
          data-toggle="modal"
          data-target="#create-blog"
        >
          Make Blog
        </button>
      </div>
    </div>
    <div class="row">
      <Blog v-for="blog in state.blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.blog),
      user: computed(() => AppState.user)
    })
    onMounted(async () => {
      await blogsService.getAllBlogs()
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  user-select: none;
  > img {
    height: 200px;
    width: 200px;
  }
}
</style>
