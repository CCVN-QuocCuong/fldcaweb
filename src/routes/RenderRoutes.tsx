import { lazy } from "react"
import { Route, Switch, useHistory } from "react-router-dom"

const Login = lazy(() => import('pages/Auth/Login'))
const Dashboard = lazy(() => import('pages/Dashboard'))

const NotFound = lazy(() => import('pages/Error/NotFound'))


type routeItem = {
    path: string,
    name: string,
    title: string,
    key: string,
    exact: boolean,
    component: Function,
    requiredAuth: boolean
}

type routes = routeItem & {
    routes?: routeItem[]
}


const ROUTES: routes[] = [
    {
        path: "/",
        name: "homepage",
        title: "Home page",
        key: "ROOT",
        exact: true,
        component: Dashboard,
        routes: [],
        requiredAuth: true
    },
    {
        path: "/login",
        name: "login",
        title: "Login",
        key: "ROOT",
        exact: true,
        component: Login,
        routes: [],
        requiredAuth: false
    },
    {
        path: "/dashboard",
        name: "dashboard",
        title: "Dashboard",
        key: "ROOT",
        exact: true,
        component: Dashboard,
        routes: [],
        requiredAuth: true
    }

]

export default ROUTES


export function RenderRoutes({ routes }: { routes: routes[] }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes {...route} />
            })}

            <Route component={() => <NotFound />} />
        </Switch>
    )
}

function RouteWithSubRoutes(route: routes) {
    const history = useHistory();
    document.title = route.title
    return (
        <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => {
                localStorage.setItem("currentRoute", route.name)
                if (!localStorage.getItem("token")) {
                    route.requiredAuth && history.push("/login")
                } else {
                    ['/login', '/forgot-password'].includes(route.path) && history.push("/dashboard")
                }
                return <route.component {...props} routes={route.routes} />
            }
            } />
    )
}