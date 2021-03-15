<template>
  <div class="about container-fluid">
    <div class="row justify-content-center">
      <h1 class="text-white">Welcome to the Hive, {{ state.account.name }}</h1>
      <img class="rounded" :src="state.account.picture" alt="" />
      <p>{{ state.account.email }}</p>
    </div>
    <div class="row">
      <Blog v-for="blog in state.blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.userBlogs),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })
    onMounted(async () => {
      try {
        await accountService.getBlogsByAccount()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
