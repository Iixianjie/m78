import React from 'react';

import { List } from 'm78/list';
import 'm78/list/style';

import { Button } from 'm78/button';
import { Input } from 'm78/input';
import 'm78/button/style';

import { useSetState } from '@lxjx/hooks';

const Demo = () => {
  const [state, setState] = useSetState({
    layout: 'vertical' as 'horizontal' | 'vertical',
    column: 1,
    disabled: false,
  });

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setState(prev => ({
              layout: prev.layout === 'vertical' ? 'horizontal' : 'vertical',
            }));
          }}
        >
          布局方式 | {state.layout}
        </Button>
        <Button
          onClick={() => {
            setState(prev => ({
              column: prev.column > 1 ? 1 : 3,
            }));
          }}
        >
          多列模式 | {state.column > 1 ? 'true' : 'false'}
        </Button>
        <Button
          onClick={() => {
            setState(prev => ({
              disabled: !prev.disabled,
            }));
          }}
        >
          禁用 | {state.disabled.toString()}
        </Button>
      </div>

      <List form {...state} className="mt-16">
        <List.Title title="个人信息填写" desc="填不填都行" />
        <List.Item
          title="姓名"
          extra="表单说明"
          footLeft="信息文本信息文本信息文本信息文本"
          status="error"
          required
        >
          <Input placeholder="点击输入" />
        </List.Item>
        <List.Item title="地址" footLeft="信息文本信息文本信息文本信息文本" status="loading">
          <Input placeholder="点击输入" />
        </List.Item>
        <List.Item title="出生年月" footLeft="不让你输入" status="warning" disabled required>
          <Input placeholder="点击输入" />
        </List.Item>
        <List.Item title="自述" footLeft="信息文本信息文本信息文本信息文本">
          <Input placeholder="点击输入" textArea />
        </List.Item>
        <List.Footer>
          <Button color="blue" size="large">
            提交
          </Button>
          <Button color="red">重置</Button>
        </List.Footer>
      </List>
    </div>
  );
};

export default Demo;
