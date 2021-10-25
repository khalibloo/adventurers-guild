import React from "react";
import { Form, Input, DatePicker } from "antd";

const QuestAcceptanceForm: React.FC = () => (
  <Form name="Quest Acceptance" layout="vertical" requiredMark={false} data-netlify>
    <Form.Item
      name="partyName"
      label="Party Name"
      rules={[
        {
          required: true,
          message: "Please enter your party's name",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="startDate"
      label="Start Date"
      rules={[
        {
          required: true,
          message: "Please enter your intended start date",
        },
      ]}
    >
      <DatePicker />
    </Form.Item>
  </Form>
);

export default QuestAcceptanceForm;
