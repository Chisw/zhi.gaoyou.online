import { UserOptions } from '@/types'
import { GYZ_USER_OPTIONS_KEY } from './constant.util'

export const UserOptionsStorage = {
  get: () => {
    const options = localStorage.getItem(GYZ_USER_OPTIONS_KEY)
    return new UserOptions(options ? JSON.parse(options) : undefined)
  },
  set: (options: UserOptions) => {
    localStorage.setItem(GYZ_USER_OPTIONS_KEY, JSON.stringify(options))
  },
}
