/* eslint-disable react/prop-types */
import { Spin } from "antd";
import type { Theme } from "vite-plugin-react-pages";

import NotFoundPage from "./404";
import App from "@/App";

const CustomTheme: Theme = ({ loadedData, loadState }) => {
  // console.log("#Theme", staticData, loadedData, loadState);

  // You can generate side nav menu from staticData
  // const sideMenuData = useMemo(() => generateSideMenu(staticData), [staticData])

  let content;
  if (loadState.type === "404") {
    content = <NotFoundPage />;
  } else if (loadState.type === "load-error") {
    content = <p>Load error!</p>;
  } else if (loadState.type === "loading") {
    content = <Spin size="large" />;
  } else {
    // loadState.type === 'loaded'
    // Runtime page data for current page
    const pageData = loadedData[loadState.routePath];
    // the default export of the main module
    const Component = pageData.main.default;
    content = <Component />;
  }

  return <App>{content}</App>;
};

export default CustomTheme;
