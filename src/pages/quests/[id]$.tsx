import { Button, Col, Modal, Row, Space, Typography } from "antd";
import { useBoolean } from "ahooks";
import { Link, useParams } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";
import quests from "@/quests.json";
import NotFoundPage from "../404";
import QuestAcceptanceForm from "@/components/QuestAcceptanceForm";

const QuestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [acceptModalOpen, { setTrue: openAcceptModal, setFalse: closeAcceptModal }] = useBoolean();

  const quest = quests.quests.find((q) => q.id.toString() === id);

  if (!quest) {
    return <NotFoundPage />;
  }
  return (
    <BasicLayout pageTitle={quest.title} pageDescription={quest.description}>
      <Modal
        title="Accept Quest"
        visible={acceptModalOpen}
        onCancel={closeAcceptModal}
        okText="Accept Quest"
        okButtonProps={{ htmlType: "submit", form: "Quest Acceptance" }}
      >
        <QuestAcceptanceForm />
      </Modal>
      <Row justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16} className="text-center">
          <Typography.Title level={3}>{quest.title}</Typography.Title>
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
          <Row justify="center" className="mt-8">
            <Space>
              <Link to="/broken">
                <Button>View Rewards</Button>
              </Link>
              <Button
                type="primary"
                danger
                onClick={() => {
                  throw new Error("An adventurer failed a quest");
                }}
              >
                Fail Quest
              </Button>
              <Button type="primary" onClick={openAcceptModal}>
                Accept Quest
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default QuestDetailPage;
