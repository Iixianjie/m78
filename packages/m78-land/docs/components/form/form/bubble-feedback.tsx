import React, { useEffect } from "react";
import { createForm, FormLayoutType, required, string } from "m78/form";
import { Input, InputType } from "m78/input";
import { Dialog } from "m78/dialog";
import { Button, ButtonColor } from "m78/button";
import { Size } from "m78/common";

const form = createForm({
  bubbleFeedback: true,
  schemas: {
    schema: [
      {
        label: "姓名",
        name: "name",
        validator: [required(), string({ min: 2, max: 5 })],
        component: <Input placeholder="请输入姓名" />,
      },
      {
        label: "简介",
        name: "describe",
        validator: [required(), string({ max: 20 })],
        component: <Input placeholder="简要介绍一下自己" textArea />,
      },
    ],
  },
});

const BubbleFeedback = () => {
  form.events.submit.useEvent(() => {
    Dialog.render({
      title: "表单数据",
      content: <pre>{JSON.stringify(form.getValues(), null, 2)}</pre>,
    });
  });

  return (
    <div className="ptb-32">
      <form.SchemaRender />
    </div>
  );
};

export default BubbleFeedback;