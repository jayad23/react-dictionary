import React, {Suspense} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoadingComponent, ErrorComponent } from '../components/common/loading-component/LoadingComponent';
import { LayoutSearch, Elements } from "./elements";

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutSearch />}>
            {
              Elements.map((props: any) => (
                <Route key={props.id} path={props.route} element={<props.Element />}/>
              ))
            }
          </Route>
          <Route path="*" element={<ErrorComponent />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
