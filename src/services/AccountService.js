import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api, sandboxApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getBlogsByAccount() {
    const res = await sandboxApi.get('account/blogs')
    AppState.userBlogs = res.data
    logger.log(res)
  }
}

export const accountService = new AccountService()
