import { Button, Card, Col, Input, List, Row, Skeleton, Space, Typography } from "antd";
import {
  GlobalOutlined,
  MoreOutlined,
  SaveOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import BasicLayout from "@/layouts/BasicLayout";
import useQuests from "@/queries/useQuests";

const Home: React.FC = () => {
  const { data, isLoading } = useQuests();

  return (
    <BasicLayout pageTitle="Quest Board" pageDescription="Find your next adventure" noPadding>
      <Row className="bg-primary-tint py-12" justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16}>
          <Row gutter={[16, 16]} justify="space-between">
            <Col span={10} xs={24} sm={24} md={10}>
              <Input
                size="large"
                placeholder="Search jobs, keywords, req ID..."
                suffix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
              />
            </Col>
            <Col span={10} xs={24} sm={24} md={10}>
              <Input
                size="large"
                placeholder="Search location"
                suffix={<GlobalOutlined style={{ color: "#bfbfbf" }} />}
              />
            </Col>
            <Col span={4} xs={24} sm={24} md={4}>
              <Button block size="large" type="primary">
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16} xs={22} sm={22} md={18} lg={16}>
          {isLoading ? (
            <List
              itemLayout="vertical"
              dataSource={[1, 2, 3, 4, 5, 6]}
              split={false}
              renderItem={(item) => <Skeleton active loading avatar key={item} />}
            />
          ) : (
            <List
              itemLayout="vertical"
              dataSource={data?.quests}
              split={false}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Link to={`/quests/${item.id}`} className="w-full">
                    <Card hoverable size="small">
                      <Row justify="space-between">
                        <Col>
                          <div>
                            <Typography.Text className="text-primary" strong>
                              {item.title}
                            </Typography.Text>
                          </div>
                          <div>
                            <Typography.Text type="secondary">{item.location}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.salary}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.type}</Typography.Text>
                          </div>
                        </Col>
                        <Col>
                          <Row>
                            <Col xs={4} md={0}>
                              <Button type="text" icon={<MoreOutlined />} />
                            </Col>
                            <Col span={24} xs={0} md={24}>
                              <Space>
                                <Button
                                  className="text-primary"
                                  type="text"
                                  icon={<ShareAltOutlined />}
                                >
                                  Share
                                </Button>
                                <Button
                                  className="text-primary"
                                  type="text"
                                  icon={<SaveOutlined />}
                                >
                                  Save
                                </Button>
                                <Button type="primary">Apply</Button>
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mt-6" align="bottom" gutter={24}>
                        <Col span={20} xs={0} md={16} lg={18}>
                          <Typography.Paragraph
                            className="mb-0"
                            type="secondary"
                            ellipsis={{ rows: 2 }}
                          >
                            {item.description} Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum officia mollitia cumque recusandae libero ea totam qui,
                            voluptates dolores error, ratione id et nam praesentium amet, impedit
                            tempora similique omnis.
                          </Typography.Paragraph>
                        </Col>
                        <Col span={4} xs={24} md={8} lg={6} className="text-right">
                          <Typography.Text type="secondary">Posted 5 days ago</Typography.Text>
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default Home;
