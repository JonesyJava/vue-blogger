<template>
  <div class="blog-details container">
    <div class="row justify-content-center" v-if="state.blog.creator">
      <div class="col-8">
        <div class="card">
          <img
            class="card-img-top"
            :src="state.blog.creator.picture"
            alt="creator-picture"
          />
          <div class="card-body">
            <h2 class="card-title text-center">
              {{ state.blog.title }}
            </h2>
            <h3 class="card-title text-center">
              {{ state.blog.creator.name }}
            </h3>
            <h4 class="card-text text-center">
              {{ state.blog.body }}
            </h4>
            <Comments
              v-for="comments in state.comments"
              :key="comments.id"
              :comments="comments"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'

export default {
  name: 'BlogDetails',
  setup() {
    const route = useRoute()
    // const router = useRouter()
    const state = reactive({
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.activeBlogComments)
    })
    onMounted(async () => {
      await blogsService.getBlog(route.params.id)
      await blogsService.getBlogComments(route.params.id)
    })
    return {
      route,
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
