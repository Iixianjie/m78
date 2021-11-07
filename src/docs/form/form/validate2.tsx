import React from 'react';
import { Form, FormProps } from 'm78/form';
import { Input } from 'm78/input';
import { Button } from 'm78/button';

const rules: FormProps['rules'] = {
  name: {
    required: true,
    type: 'string',
    len: 10,
  },
  phone: {
    required: true,
    type: 'string',
    max: 10,
    min: 2,
  },
  age: [
    { required: true },
    {
      validator(rule, value) {
        return new Promise((res, rej) => {
          if (!value) {
            rej('该项必填');
          }
          if (value.length > 10 || value.length < 2) {
            rej('长度为2-10之间');
          }
          res();
        });
      },
    },
  ],
  other: [
    { required: true },
    form => ({
      validator(rule, value) {
        /* 获取form实例 */
        console.log(form);
        return new Promise((res, rej) => {
          if (!value) {
            rej('该项必填');
          }
          if (value.length > 10 || value.length < 2) {
            rej('长度为2-10之间');
          }
          res();
        });
      },
    }),
  ],
};

const Validate = () => (
  <Form
    rules={rules}
    onFinish={e => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(e, null, 4));
    }}
  >
    <Form.Item label="姓名" name="name">
      <Input placeholder="随便输入点什么" />
    </Form.Item>
    <Form.Item label="手机号" name="phone">
      <Input placeholder="随便输入点什么" />
    </Form.Item>
    <Form.Item label="年龄" name="age">
      <Input placeholder="随便输入点什么" />
    </Form.Item>
    <Form.Item label="其他" name="other">
      <Input placeholder="随便输入点什么" />
    </Form.Item>
    <Form.Actions>
      <Button type="submit" color="blue">
        提交
      </Button>
    </Form.Actions>
  </Form>
);

export default Validate;
