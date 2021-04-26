import { constantRoutes } from '/@/router'
import { getRouters } from '/@/api/menu'
import Layout from '/@/layout/index.vue'
import ParentView from '/@/components/ParentView/index.vue'
import { Commit } from '_vuex@4.0.0@vuex'

interface IState {
  routes: Array<any>
  addRoutes: Array<any>
  defaultRoutes: Array<any>
  topbarRouters: Array<any>
  sidebarRouters: Array<any>
}

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state: IState, routes: Array<any>) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state: IState, routes: Array<any>) => {
      state.defaultRoutes = constantRoutes.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state: IState, routes: Array<any>) => {
      // 顶部导航菜单默认添加统计报表栏指向首页
      const index = [
        {
          path: 'index',
          meta: { title: '统计报表', icon: 'dashboard' }
        }
      ]
      state.topbarRouters = routes.concat(index)
    },
    SET_SIDEBAR_ROUTERS: (state: IState, routes: Array<any>) => {
      state.sidebarRouters = routes
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes(context: { commit: Commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        getRouters().then((res: any) => {
          const sdata = JSON.parse(JSON.stringify(res.data))
          const rdata = JSON.parse(JSON.stringify(res.data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata, false, true)
          rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
          context.commit('SET_ROUTES', rewriteRoutes)
          context.commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
          context.commit('SET_DEFAULT_ROUTES', sidebarRoutes)
          context.commit('SET_TOPBAR_ROUTES', sidebarRoutes)
          resolve(rewriteRoutes)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap: any, lastRouter = false, type = false) {
  return asyncRouterMap.filter((route: any) => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else if (route.component === 'ParentView') {
        route.component = ParentView
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    } else {
      delete route['children']
      delete route['redirect']
    }
    return true
  })
}

function filterChildren(childrenMap: any, lastRouter: any = false) {
  var children: Array<any> = []
  childrenMap.forEach((el: any, index: Number) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView') {
        el.children.forEach((c: any) => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + '/' + el.path
    }
    children = children.concat(el)
  })
  return children
}

export const loadView = (view: any) => {
  // 路由懒加载
  return (resolve: Function) => require([`@/views/${view}`], resolve)
}

export default permission
