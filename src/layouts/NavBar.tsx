import React from "react";
import { Typography, Row, Col, Menu, Dropdown } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./NavBar.module.css";

interface Props {}
const NavBar: React.FC<Props> = () => {
  const mainMenu = (
    <Menu onClick={() => {}}>
      <Menu.Item key="signin">Sign In</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="search">Search Jobs</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="custom1">Custom Link 1</Menu.Item>
      <Menu.Item key="custom2">Custom Link 2</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="lang">Language</Menu.Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      <Menu.Item key="theme">Theme Settings</Menu.Item>
      <Menu.Item key="sync">Sync Settings</Menu.Item>
      <Menu.Item key="account">Account Settings</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row justify="space-between" align="middle" className="h-full">
        <Col className="h-full">
          <Menu
            mode="horizontal"
            className="bg-transparent border-none h-full"
            selectable={false}
            disabledOverflow
          >
            <Menu.Item key="burger" className={clsx("m-0 h-full", styles.menuItem)}>
              <Dropdown overlay={mainMenu} trigger={["click"]}>
                <MenuOutlined className="text-2xl" />
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="1" className={clsx("h-full", styles.menuItem)}>
              <Link className="h-full" to="/">
                <Row align="middle" className="h-full">
                  <Col>
                    <Typography.Title level={3} className="m-0">
                      Adventurers Guild
                    </Typography.Title>
                  </Col>
                </Row>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className="h-full">
          <Menu
            mode="horizontal"
            className="bg-transparent border-none h-full"
            selectable={false}
            disabledOverflow
          >
            <Menu.Item key="settings" className={clsx("m-0 h-full", styles.menuItem)}>
              <Dropdown overlay={settingsMenu} trigger={["click"]}>
                <UserOutlined className="text-2xl" />
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
