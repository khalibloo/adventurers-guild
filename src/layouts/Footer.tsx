import React from "react";
import { Typography, Row, Col } from "antd";

const Footer: React.FC = () => (
  <Row justify="center" className="pt-4 text-center">
    <Col span={24}>
      <div>
        <Typography.Text>Khali Lame ©2021 MIT License</Typography.Text>
      </div>
      <div>
        <Typography.Text>
          Oh and <a href="https://creativecommons.org/licenses/by/4.0/">thanks</a> to Lisa
          Wischofsky for the avatars!
        </Typography.Text>
      </div>
    </Col>
  </Row>
);

export default Footer;
