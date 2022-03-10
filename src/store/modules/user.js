import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() // 设置token为共享
}
const mutations = {
  // 设置token的mutations
  setToken(state, token) {
    state.token = token // 只是设置了vuex中的数据
    // 需要将vuex中的数据同步到缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 设置vuex中的token为null
    removeToken() // 同步删除缓存中的token
  }
}
const actions = {
  // 封装一个登录的action
  // data认为是 { mobile,password }
  // 只要用async标记了函数 那么这个函数本身就是promise对象
  async login(context, data) {
    // 调用登录接口
    // login(data).then(result => {

    // })
    // await下方永远都是 reslove成功执行的逻辑
    const result = await login(data)
    context.commit('setToken', result)
    console.log(result)
    // setTimeStamp() // 设置时间戳
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
