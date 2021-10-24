import React, { useEffect } from "react";
import { Affix, Button, Col, Layout, Row, Space, Typography } from "antd";
import { useBoolean } from "ahooks";
import clsx from "clsx";
import lf from "localforage";
import { Link } from "react-router-dom";
import Head from "react-helmet";

import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  pageTitle: string;
  pageDescription?: string;
  noPadding?: boolean;
}
const BasicLayout: React.FC<Props> = ({ children, pageTitle, pageDescription, noPadding }) => {
  const [cookieDrawerOpen, { setTrue: openCookieDrawer, setFalse: closeCookieDrawer }] =
    useBoolean(false);
  useEffect(() => {
    lf.getItem("accepted_cookie_notice").then((accepted) => {
      if (!accepted) {
        openCookieDrawer();
      }
    });
  });

  const title = pageTitle ? `${pageTitle} | Adventurers Guild` : "Adventurers Guild";
  const description = pageDescription || "Find your next adventure";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Layout className="min-h-screen">
        <Layout.Header className={clsx("w-full p-0 fixed z-10 shadow-md")}>
          <NavBar />
        </Layout.Header>
        <Layout.Content className={clsx("mt-16 flex flex-col", { "py-12": !noPadding })}>
          {children}
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
      {cookieDrawerOpen && (
        <Affix offsetBottom={0} target={() => window}>
          <Row justify="space-around" align="middle" className="h-full bg-default p-6 shadow-md">
            <Col span={16} xs={22} sm={22} md={20} lg={16}>
              <Typography.Paragraph className="text-center text-lg">
                This website uses cookies. By continuing to use the website, you indicate that you
                are fine with this.
              </Typography.Paragraph>
              <Row justify="center">
                <Col>
                  <Space>
                    <Link to="/privacy">
                      <Button size="large">Privacy Policy</Button>
                    </Link>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => {
                        lf.setItem("accepted_cookie_notice", true).then((value) => {
                          if (value) {
                            closeCookieDrawer();
                          }
                        });
                      }}
                    >
                      Accept Cookies
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Affix>
      )}
    </>
  );
};

export default BasicLayout;
