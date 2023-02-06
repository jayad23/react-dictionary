import React, {Suspense} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const LayoutSearch = React.lazy(() => import("./layout/Layout"))

const DynamicImporting = (param: string) => {
  const Component = React.lazy(() => import(`./components/pages/${param.toLowerCase()}/${param}.tsx`))
  return Component;
}

const Home = DynamicImporting("Home");
const About = DynamicImporting("About");

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutSearch />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
