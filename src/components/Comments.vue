<template>
  <div class="Comments">
    <ul>
      <li class="card px-3">
        {{ comments.body }} <br />
        Author: {{ comments.creator.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
