import React from "react"
export const LayoutSearch = React.lazy(() => import("../layout/Layout"))


const DynamicImporting = (param: string) => {
  const Component = React.lazy(() => import(`../components/pages/${param.toLowerCase()}/${param}.tsx`))
  return Component;
}

export const Elements = [
  {
    id: 1,
    Element: DynamicImporting("Home"),
    route: "/"
  },
  {
    id: 2,
    Element: DynamicImporting("About"),
    route: "/about"
  },
  {
    id: 3,
    Element: DynamicImporting("Interface"),
    route: "/user-interface"
  },
  {
    id: 4,
    Element: DynamicImporting("Xperience"),
    route: "/user-experience"
  },
  {
    id: 5,
    Element: DynamicImporting("Performance"),
    route: "/performance"
  },
  {
    id: 6,
    Element: DynamicImporting("Basic"),
    route: "/basic-concepts"
  },
  {
    id: 6,
    Element: DynamicImporting("Dynamic"),
    route: "/basic-concepts/:selection"
  },
  {
    id: 6,
    Element: DynamicImporting("Dynamic"),
    route: "/user-interface/:selection"
  }
];