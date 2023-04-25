import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Root from "./routes/root"
import Portfolio from "./routes/home"
import Blog from "./routes/blog"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
        </Route>
    )
)

export default router
