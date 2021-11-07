import React, { useEffect } from 'react';
import { message } from 'm78/message';
import { Button } from 'm78/button';

const type = ['success', 'error', 'warning', undefined];

function messageTest() {
  setTimeout(() => {
    const [ref, id] = message.tips({
      content: '提示',
      duration: Math.floor(Math.random() * 5000) + 500,
      // @ts-ignore
      type: type[Math.floor(Math.random() * 4)],
    });

    console.log(111, ref, id);
  });
}

function loadingTest() {
  const [ref, id] = message.loading();

  setTimeout(() => {
    ref.close(id);
  }, 400);
}

function notifyTest() {
  message.notify({
    title: '标题标题',
    desc:
      '描述描述描述描述描述描述描述，描述描述描述描述描述描述描述描述描述描述描述，描述描述描述描述描述',
    // @ts-ignore
    type: type[Math.floor(Math.random() * 4)],
  });
}

const Demo = () => {
  useEffect(() => {
    // messageTest();
  }, []);

  return (
    <div>
      <Button onClick={messageTest}>message</Button>
      <Button onClick={loadingTest}>loading</Button>
      <Button onClick={notifyTest}>notify</Button>
    </div>
  );
};

export default Demo;
