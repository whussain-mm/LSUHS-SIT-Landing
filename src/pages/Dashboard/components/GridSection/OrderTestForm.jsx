import React from 'react';
import { Form, Input, DatePicker, Select, Checkbox, Button } from 'antd';

const { Option } = Select;

const OrderTestForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Please select a date!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: 'Please select a type!' }]}
      >
        <Select placeholder="Select type">
          <Option value="PCR">PCR</Option>
          <Option value="Antigen">Antigen</Option>
        </Select>
      </Form.Item>

      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone number!' }]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        label="Tags"
        name="tags"
      >
        <Select mode="tags" style={{ width: '100%' }} placeholder="Add tags" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderTestForm; 