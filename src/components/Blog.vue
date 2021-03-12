<template>
  <div class="Blog col-4 justify-content-center" v-if="blog.creator">
    <router-link :to="{ name: 'BlogDetails', params: { id: blog.id } }">
      <div class="card">
        <img
          class="card-img-top"
          :src="blog.creator.picture"
          alt="creator-picture"
        />
        <div class="card-body">
          <h4 class="card-title">
            {{ blog.title }}
          </h4>
          <h5 class="card-title">Author: {{ blog.creator.name }}</h5>
          <p class="card-text">
            {{ blog.body }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    blog: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
