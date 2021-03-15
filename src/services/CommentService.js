// import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { sandboxApi } from './AxiosService'
// import { blogsService } from './BlogsService'

class CommentService {
  async createComment(data) {
    try {
      const res = await sandboxApi.post('api/comments', data)
      logger.log(res)
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteComment(_id) {
    try {
      const res = await sandboxApi.deleteComment('api/comments/' + _id)
      logger.log(res)
      // await blogsService.getBlogComments
    } catch (error) {
      logger.log(error)
    }
  }
}

export const commentService = new CommentService()
