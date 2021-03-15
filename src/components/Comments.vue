<template>
  <div class="Comments">
    <ul>
      <li class="card px-3">
        {{ comments.body }} <br />
        Author: {{ comments.creator.name }}
        {{ comments }}
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-danger"
      v-if="comments.creator.name == state.user.name"
      @click="deleteComment()"
    >
      X
    </button>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'

export default {
  name: 'Comments',
  props: {
    comments: { type: Object, required: true }
  },
  setup(props) {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      comment: computed(() => AppState.activeBlogComments),
      account: computed(() => AppState.account)
    })
    return {
      state,
      async deleteComment() {
        try {
          await commentService.deleteComment(props.comments._id)
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
