import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "react-helmet";

import ReloadPrompt from "./ReloadPrompt";
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
          <meta name="twitter:url" content={origin} />
          <meta name="twitter:image" content={`${origin}/icons/android-chrome-192x192.png`} />

          <meta property="og:url" content={origin} />
          <meta property="og:image" content={`${origin}/icons/apple-touch-icon.png`} />

          {/* <link rel="preconnect" href={config.apiUri} /> */}
        </Head>
        {children}
        <ReloadPrompt />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
