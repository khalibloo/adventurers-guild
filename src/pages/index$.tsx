import { Button, Col, Image, List, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";
import quests from "@/quests.json";

const Home: React.FC = () => {
  return (
    <BasicLayout pageTitle="Quest Board" pageDescription="Find your next adventure">
      <Typography.Title level={3} className="text-center">
        Quest Board
      </Typography.Title>
      <Row justify="center">
        <Space>
          <Button
            onClick={() => {
              throw new Error("An adventurer failed a quest");
            }}
          >
            Click
          </Button>
          <Button type="primary">Click</Button>
        </Space>
      </Row>
      <Row justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16}>
          <List
            itemLayout="horizontal"
            dataSource={quests.quests}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Image
                      className="rounded-full"
                      src="https://joeschmoe.io/api/v1/random"
                      alt="Quest giver"
                      width="32"
                      height="32"
                      style={{ width: 32, height: 32 }}
                      preview={false}
                    />
                  }
                  title={<Link to={`/quests/${item.id}`}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default Home;
