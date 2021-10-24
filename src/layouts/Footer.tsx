import React from "react";
import { Typography, Row, Col, Button } from "antd";

const Footer: React.FC = () => (
  <Row justify="center" className="pt-4">
    <Col>
      <div className="text-center">
        <Typography.Text>
          <Button type="link">Terms of Service</Button> |{" "}
          <Button type="link">Privacy Policy</Button>
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="text-center">
          Khali Lame ©2021 All Rights Reserved
        </Typography.Text>
      </div>
    </Col>
  </Row>
);

export default Footer;
