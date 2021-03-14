import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { sandboxApi } from './AxiosService'

class BlogsService {
  async getAllBlogs() {
    try {
      const res = await sandboxApi.get('api/blogs')
      logger.log(res.data)
      AppState.blog = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getBlog(id) {
    try {
      const res = await sandboxApi.get('api/blogs/' + id)
      AppState.activeBlog = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getBlogComments(id) {
    try {
      const res = await sandboxApi.get('api/blogs/' + id + '/comments')
      AppState.activeBlogComments = res.data
      logger.log(AppState.activeBlogComments)
    } catch (error) {
      logger.log(error)
    }
  }

  async createBlog(blogData) {
    try {
      const res = await sandboxApi.post('api/blogs', blogData)
      AppState.blog.push(res.data)
    } catch (error) {
      logger.log(error)
    }
  }

  async delete(id) {
    try {
      await sandboxApi.delete('api/blogs/' + id)
      this.getAllBlogs()
    } catch (error) {
      logger.log(error)
    }
  }

  async editBlog(id) {
    try {
      await sandboxApi.put('api/blogs/' + id)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const blogsService = new BlogsService()
