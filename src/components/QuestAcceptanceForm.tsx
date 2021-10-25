import React from "react";
import { Form, Input, DatePicker, notification } from "antd";

import axios from "@/utils/request";

interface Props {
  onSubmit?: () => void;
}
const QuestAcceptanceForm: React.FC<Props> = ({ onSubmit }) => {
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  };
  const handleSubmit = (values) => {
    const formData = encode({ "form-name": "Quest Acceptance", ...values });
    axios
      .post("/", new URLSearchParams(formData as any).toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(() => {
        notification.success({ message: "Quest Accepted", description: "Your adventure beings" });
        onSubmit?.();
      })
      .catch((err) => {
        notification.error({
          message: "An Error Occurred",
          description: "Failed to accept the quest",
        });
        // let sentry catch it
        throw err;
      });
  };
  return (
    <Form name="Quest Acceptance" layout="vertical" onFinish={handleSubmit} requiredMark={false}>
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
};

export default QuestAcceptanceForm;
