import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'

const state = {
  token: getToken(), // 设置token为共享
  userInfo: {}
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
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
    // state.userInfo = { ...userInfo } // 浅拷贝 如果要去改属性里面的某一个值 可以用浅拷贝的方式
  },
  removeUserInfo(state) {
    state.userInfo = {} // 重置为空对象
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
  },
  // 获取用户资料
  async getUserInfo(context) {
    const result = await getUserInfo()
    // 此时result里面已经有userId
    const baseInfo = await getUserDetailById(result.userId) // 用户的基本信息
    context.commit('setUserInfo', { ...result, ...baseInfo }) // 修改state中的用户资料
    return result // 这里这句话 是伏笔 当下是用不上的 但是后期会用上 敬请期待
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
