const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token // 将user模块下的token作为快捷方式放出来
}
export default getters
