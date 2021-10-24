import React from "react";
import { Typography, Row, Col, Button } from "antd";

const Footer: React.FC = () => (
  <Row justify="center" className="pt-4 text-center">
    <Col span={24}>
      <div className="text-center">
        <Typography.Text>
          <Button type="link">Terms of Service</Button> |{" "}
          <Button type="link">Privacy Policy</Button>
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="text-center">Khali Lame ©2021 MIT License</Typography.Text>
      </div>
      <div>
        <Typography.Text className="text-center">
          Oh and thanks to Lisa Wischofsky for the avatars!
        </Typography.Text>
      </div>
    </Col>
  </Row>
);

export default Footer;
