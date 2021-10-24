import { Button, Col, Image, List, Row, Typography } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
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
        <Col span={16} xs={22} sm={22} md={18} lg={16}>
          <List
            itemLayout="vertical"
            dataSource={quests.quests}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <Button type="link">
                    <StarOutlined />
                  </Button>,
                  <Button type="link">
                    <LikeOutlined />
                  </Button>,
                  <Button type="link">
                    <MessageOutlined />
                  </Button>,
                ]}
              >
                <Link to={`/quests/${item.id}`} className="w-full">
                  <List.Item.Meta
                    avatar={
                      <Image
                        className="rounded-full"
                        src={`https://avatars.dicebear.com/api/adventurer/${item.id}.svg`}
                        alt="Quest giver"
                        width="56"
                        height="56"
                        style={{ width: 56, height: 56 }}
                        preview={false}
                      />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </Link>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default Home;
