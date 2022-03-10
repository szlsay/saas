import Cookies from 'js-cookie'

const TokenKey = 'hr-saas-token-key'

const TimeKey = 'hr-sass-time-key'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTimeStamp() {
  // 设置当前最新的时间戳
  // Date.now()  new Date.getTime()
  Cookies.set(TimeKey, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(TimeKey)
}
