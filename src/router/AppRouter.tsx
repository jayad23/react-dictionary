import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LayoutSearch, Elements } from "./elements";
import {ErrorComponent} from '../components/common/loading-component';

export const AppRouter = () => (
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
)