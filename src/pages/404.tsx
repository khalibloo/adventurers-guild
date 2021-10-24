import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";

const NotFoundPage: React.FC = () => (
  <BasicLayout
    pageTitle="Page Not Found"
    pageDescription="The page you're looking for could not be found"
  >
    <Row justify="center">
      <Col md={16} className="text-center">
        <Typography.Title level={1}>Uh-oh, Page not found!</Typography.Title>
        <Typography.Paragraph>
          Sorry, we could not find the page you're looking for. It may have been moved or you
          visited an invalid link.
        </Typography.Paragraph>
        <Row justify="space-around" align="middle" style={{ marginTop: "50px" }}>
          <Link to="/">
            <Button type="primary">Go Back To Home</Button>
          </Link>
        </Row>
      </Col>
    </Row>
  </BasicLayout>
);

export default NotFoundPage;
