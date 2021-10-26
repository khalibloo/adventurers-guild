import { Button, Col, Modal, Row, Skeleton, Typography } from "antd";
import { useBoolean } from "ahooks";
import { Link, useParams } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";
import NotFoundPage from "../404";
import QuestAcceptanceForm from "@/components/QuestAcceptanceForm";
import useQuest from "@/queries/useQuest";

const QuestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [acceptModalOpen, { setTrue: openAcceptModal, setFalse: closeAcceptModal }] = useBoolean();
  const { data: quest, isLoading, error } = useQuest(parseInt(id, 10));

  if (error?.response?.status === 404) {
    return <NotFoundPage />;
  }
  return (
    <BasicLayout pageTitle={quest?.title || "Quest Details"} pageDescription={quest?.description}>
      <Modal
        title="Accept Quest"
        visible={acceptModalOpen}
        onCancel={closeAcceptModal}
        okText="Accept Quest"
        okButtonProps={{ htmlType: "submit", form: "Quest Acceptance" }}
      >
        <QuestAcceptanceForm onSubmit={closeAcceptModal} />
      </Modal>
      <Row justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16} className="text-center">
          <Skeleton
            active
            className="centered"
            loading={isLoading}
            title={{ width: 300, className: "justify-self-center" }}
            paragraph={false}
          >
            <Typography.Title level={3}>{quest?.title}</Typography.Title>
          </Skeleton>
          <Skeleton
            active
            loading={isLoading}
            paragraph={{ rows: 2, className: "mt-4" }}
            title={false}
          >
            <Typography.Paragraph>{quest?.description}</Typography.Paragraph>
          </Skeleton>
          <Skeleton
            active
            loading={isLoading}
            paragraph={{ rows: 2, className: "mt-4" }}
            title={false}
          >
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia mollitia cumque
              recusandae libero ea totam qui, voluptates dolores error, ratione id et nam
              praesentium amet, impedit tempora similique omnis.
            </Typography.Paragraph>
          </Skeleton>
          <Skeleton
            active
            loading={isLoading}
            paragraph={{ rows: 2, className: "mt-4" }}
            title={false}
          >
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia mollitia cumque
              recusandae libero ea totam qui, voluptates dolores error, ratione id et nam
              praesentium amet, impedit tempora similique omnis.
            </Typography.Paragraph>
          </Skeleton>
          <Row justify="center" className="mt-8" gutter={[24, 24]}>
            {isLoading ? (
              <>
                <Skeleton.Button active style={{ width: 160 }} />
                <Skeleton.Button active style={{ width: 160 }} />
                <Skeleton.Button active style={{ width: 160 }} />
              </>
            ) : (
              <>
                <Col>
                  <Link to="/broken">
                    <Button>View Rewards</Button>
                  </Link>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      throw new Error("An adventurer failed a quest");
                    }}
                  >
                    Fail Quest
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" onClick={openAcceptModal}>
                    Accept Quest
                  </Button>
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default QuestDetailPage;
