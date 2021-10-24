import { Col, Row, Typography } from "antd";
import { useParams } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";
import quests from "@/quests.json";
import NotFoundPage from "../404";

const QuestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const quest = quests.quests.find((q) => q.id.toString() === id);

  if (!quest) {
    return <NotFoundPage />;
  }
  return (
    <BasicLayout pageTitle={quest.title} pageDescription={quest.description}>
      <Row justify="center">
        <Col md={16} className="text-center">
          <Typography.Title level={1}>{quest.title}</Typography.Title>
          <Typography.Paragraph>{quest.description}</Typography.Paragraph>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia mollitia cumque
            recusandae libero ea totam qui, voluptates dolores error, ratione id et nam praesentium
            amet, impedit tempora similique omnis.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia mollitia cumque
            recusandae libero ea totam qui, voluptates dolores error, ratione id et nam praesentium
            amet, impedit tempora similique omnis.
          </Typography.Paragraph>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default QuestDetailPage;
