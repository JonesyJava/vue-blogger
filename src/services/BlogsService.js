import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogsService {
  async getAllBlogs() {
    try {
      const res = await api.get('blogs')
      logger.log(res.data)
      AppState.blog = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getBlog(id) {
    try {
      const res = await api.get('blogs/' + id)
      AppState.activeBlog = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getBlogComments(id) {
    try {
      const res = await api.get('blogs/' + id + '/comments')
      AppState.activeBlogComments = res.data
      logger.log(AppState.activeBlogComments)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const blogsService = new BlogsService()
