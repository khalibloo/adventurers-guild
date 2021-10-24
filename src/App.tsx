import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "react-helmet";

import "@/styles/global.less";
import "@/styles/global.css";

const queryClient = new QueryClient();

const App: React.FC = ({ children }) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    ConfigProvider.config({ theme: { primaryColor: "#cc1" } } as any);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <Head>
          <meta name="application-name" content="Adventurers Guild" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Adventurers Guild" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#444" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#444" />

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={origin} />
          <meta name="twitter:image" content={`${origin}/icons/android-chrome-192x192.png`} />
          <meta name="twitter:creator" content="@khalibloo" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Adventurers Guild" />
          <meta property="og:url" content={origin} />
          <meta property="og:image" content={`${origin}/icons/apple-touch-icon.png`} />

          {/* <link rel="preconnect" href={config.apiUri} /> */}
        </Head>
        {children}
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
