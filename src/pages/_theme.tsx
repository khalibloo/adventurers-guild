/* eslint-disable react/prop-types */
import { Spin } from "antd";
import type { Theme } from "vite-plugin-react-pages";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { configResponsive } from "ahooks";

import App from "@/App";
import config from "@/utils/config";
import NotFoundPage from "./404";

if (config.sentryDSN) {
  Sentry.init({
    dsn: config.sentryDSN,
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

// Responsive
configResponsive({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
});

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
