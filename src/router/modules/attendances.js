
import Layout from '@/layout'

export default {
  path: '/attendances',
  component: Layout,
  name: 'attendances',
  children: [
    {
      path: '',
      component: () => import('@/views/attendances'),
      name: 'attendances',
      meta: {
        title: '考勤',
        icon: 'excel' }
    }]
}
