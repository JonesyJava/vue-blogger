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
            <form class="text-center">
              <div>
                <input
                  type="text"
                  v-model="state.newComment.body"
                  placeholder="Add Your Comment Here"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="createComment"
                >
                  New Comment
                </button>
              </div>
            </form>
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
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'BlogDetails',
  setup() {
    const route = useRoute()
    const state = reactive({
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.activeBlogComments),
      newComment: { blog: route.params.id }
    })
    onMounted(async () => {
      await blogsService.getBlog(route.params.id)
      await blogsService.getBlogComments(route.params.id)
    })
    return {
      route,
      state,
      async createComment() {
        try {
          await commentService.createComment(state.newComment)
          await blogsService.getBlogComments(route.params.id)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
