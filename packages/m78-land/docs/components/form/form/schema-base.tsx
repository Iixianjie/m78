import React from "react";
import { createForm, required, string } from "m78/form";
import { Input } from "m78/input";
import { Dialog } from "m78/dialog";
import Divider from "../../base/layout/_demos/divider.js";

const form = createForm({
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
        validator: string({ max: 20 }),
        component: <Input placeholder="简要介绍一下自己" textArea />,
      },
    ],
  },
});

const SchemaBase = () => {
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

export default SchemaBase;