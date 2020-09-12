// 插件
let FVue
class FVueRouter {
    constructor(options) {
        this.$options = options
        // 响应式的路由
        // 监听事件
        // this.current = '/'
        const initial = window.location.hash.slice(1) || '/'
        FVue.util.defineReactive(this, 'current', initial)
        // 监听事件
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange(this))

        
        // 缓存path和route映射关系
        // this.routeMap = {}
        // this.$options.routes.forEach(route => {
        //     this.routeMap[route.path] = route
        // })
    }

    onHashChange() {
        this.current = window.location.hash.slice(1) // #后面部分
    }
}
// 实现一个install方法 形参为vue构造函数
FVueRouter.install = function(_Vue) {
    // 保存构造函数
    FVue = _Vue
    // 挂载$router 全局混入 将来在组件实例化的时候才执行 此时router实例已经存在
    FVue.mixin({
        beforeCreate() {
            // 只有根实例使用 this 组件实例
            if (this.$options.router) {
                // 挂载
                FVue.prototype.$router = this.$options.router
            }
        }
    })

    // 实现两个全局组件
    FVue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        // h是createElement
        render(h) {
            return h('a', { attrs: { href: '#' + this.to }}, this.$slots.default)
        }
    })
    // router-view是一个容器
    FVue.component('router-view', {
        render(h) {
            // 获取路由器实例
            const routes = this.$router.$options.routes
            const current = this.$router.current
            const route = routes.find(route => route.path === current)
            const comp = route ? route.component : null
            // const { routeMap, current } = this.$router
            // const component = routeMap[current] ? routeMap[current].component : null;
            // 获取路由表
            return h(comp)
        }
    })

}


export default FVueRouter