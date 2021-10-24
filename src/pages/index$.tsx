import { Avatar, Button, Col, List, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";

const Home: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "Find My Cat",
      description:
        "My little kitty ventured outside. Please find her! She's probably so scared right now. What if the other cats bully her?",
    },
    {
      id: 2,
      title: "Gather Medicinal Herbs",
      description:
        "A rare flower that blooms once in a century and grows only in the crater of Mount Doom. Please risk your life and find it. There's a sick old man coughing in bed somewhere.",
    },
    {
      id: 3,
      title: "Escort Mission",
      description:
        "A young damsel eager to be in distress has requested for a hero, preferrably in a shining armor, to be at her side for the appointed hour.",
    },
    {
      id: 4,
      title: "Defeat Monsters",
      description:
        "It wouldn't be a fantasy world without monsters. You're an adventurer, so stop reading this and hurry up and go kill some monsters or something.",
    },
  ];
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
        <Col span={16}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Quest giver" />}
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
