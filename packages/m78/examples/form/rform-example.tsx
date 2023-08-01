import React, { useMemo } from "react";
import {
  createForm,
  FormLayoutType,
  FormSchemaWithoutName,
} from "../../src/form/index.js";
import { Input } from "../../src/input/index.js";
import { Button } from "../../src/button/index.js";
import { required } from "@m78/verify";
import { Divider, Row } from "../../src/layout/index.js";
import { IconDeleteOutline } from "@m78/icons/icon-delete-outline.js";
import { IconArrowUpward } from "@m78/icons/icon-arrow-upward.js";
import { IconArrowDownward } from "@m78/icons/icon-arrow-downward.js";
import { Size } from "../../src/index.js";

const schemas: FormSchemaWithoutName = {
  schema: [
    {
      name: "name",
      validator: required(),
      label: "姓名",
      dynamic: (form) => ({
        hidden: form.getValue("desc") === "abc",
      }),
      deps: ["desc"],
      describe:
        "填入你的姓名, 填入你的姓名填入你的姓名填入你的姓名填入你的姓名填入你的姓名, 填入你的姓名.",
    },
    {
      name: "desc",
      label: "描述",
      validator: required(),
    },
    {
      name: "list",
      list: true,
      dynamic: (form) => ({
        valid: form.getValue("name") !== "123",
      }),
      deps: ["name"],
      validator: required(),
      eachSchema: {
        validator: required(),
        schema: [
          {
            name: "title",
            validator: required(),
          },
          {
            name: "desc",
            validator: required(),
          },
        ],
      },
    },
  ],
};

const schemas2: FormSchemaWithoutName = {
  schema: [
    {
      name: "name",
      validator: required(),
      label: "姓名",
      dynamic: (form) => ({
        hidden: form.getValue("desc") === "abc",
      }),
      deps: ["desc"],
      describe:
        "填入你的姓名, 填入你的姓名填入你的姓名填入你的姓名填入你的姓名填入你的姓名, 填入你的姓名.",
      component: <Input />,
    },
    {
      name: "desc",
      label: "描述",
      validator: required(),
      component: <Input textArea />,
    },
    {
      name: "obj",
      label: "对象",
      validator: required(),
      schema: [
        {
          name: "title",
          validator: required(),
          component: <Input placeholder="名称" />,
        },
        {
          name: "desc",
          validator: required(),
          component: <Input placeholder="描述" />,
        },
      ],
    },
    {
      name: "list",
      label: "列表",
      list: true,
      dynamic: (form) => ({
        valid: form.getValue("name") !== "123",
      }),
      deps: ["name"],
      validator: required(),
      eachSchema: {
        schema: [
          {
            name: "title",
            validator: required(),
            component: <Input placeholder="名称" />,
          },
          {
            name: "desc",
            validator: required(),
            component: <Input placeholder="描述" />,
          },
        ],
      },
    },
    {
      name: "list2",
      label: "列表3",
      list: true,
      listDefaultValue: "11",
      dynamic: (form) => ({
        valid: form.getValue("name") !== "123",
      }),
      deps: ["name"],
      validator: required(),
      eachSchema: {
        validator: required(),
        component: <Input />,
      },
    },
  ],
};

const RformExample = () => {
  const Form = useMemo(() => {
    return createForm({
      defaultValue: {
        name: "m78",
        desc: "",
        abc: "1",
        list: [
          {
            title: "默认项",
            desc: "abcd",
          },
        ],
      },
      schemas,
      // size: Size.small,
      layoutType: FormLayoutType.vertical,
      bubbleFeedback: true,
      components: {
        input: {
          component: <Input />,
        },
        abc: {
          component: <Input />,
        },
      },
    });
  }, []);

  const Form2 = useMemo(() => {
    return createForm({
      defaultValue: {
        name: "m78",
        desc: "",
        abc: "1",
      },
      schemas,
      layoutType: FormLayoutType.vertical,
    });
  }, []);

  const Form4 = useMemo(() => {
    return createForm({
      defaultValue: {
        name: "m78",
        desc: "",
      },
      schemas: schemas2,
      layoutType: FormLayoutType.horizontal,
      modifyMarker: true,
      // requireMarker: true,
    });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <div>
        <Form4.SchemaRender />

        <Button
          onClick={() => {
            Form4.updateProps({
              layoutType: FormLayoutType.vertical,
            });
          }}
        >
          updateStyle vertical
        </Button>
        <Button
          onClick={() => {
            Form4.updateProps({
              layoutType: FormLayoutType.horizontal,
            });
          }}
        >
          updateStyle horizontal
        </Button>
        <Button
          onClick={() => {
            Form4.updateProps({
              maxWidth: 600,
            });
          }}
        >
          updateStyle maxWidth 600
        </Button>
        <Button
          onClick={() => {
            Form4.updateProps({
              disabled: true,
            });
          }}
        >
          updateStyle disabled
        </Button>
        <Button
          onClick={() => {
            Form4.setValues({
              name: "12356",
              list: [{}, { title: "455" }, { desc: "978" }],
            });
          }}
        >
          updateStyle setValue
        </Button>

        <Button
          onClick={() => {
            console.log(Form4.getChangedValues());
          }}
        >
          getChanged
        </Button>
      </div>

      <div>
        <Form.Field name="name" component="input" />
        <Form.Field name="topic" label="标签">
          <Input />
        </Form.Field>
        <Form.Field name="desc">
          <Input textArea />
        </Form.Field>

        <Form.List name="list" label="物品">
          {(args) => {
            return (
              <div>
                {args.render(({ getName, index, length }) => {
                  const max = length - 1;
                  const min = 0;
                  const prev = index - 1 < min ? max - 1 : index - 1;
                  const next = index + 1 > max ? min : index + 1;

                  return (
                    <Row>
                      <Form.Field
                        name={getName("title")}
                        layoutType={FormLayoutType.vertical}
                      >
                        <Input placeholder="名称" />
                      </Form.Field>
                      <Form.Field
                        style={{ marginLeft: 8 }}
                        name={getName("desc")}
                        layoutType={FormLayoutType.vertical}
                      >
                        <Input placeholder="描述" />
                      </Form.Field>
                      <Form.Field
                        style={{ marginLeft: 8 }}
                        name={getName("bbb")}
                        layoutType={FormLayoutType.vertical}
                      >
                        <Input placeholder="bbb" />
                      </Form.Field>

                      <Button
                        style={{ marginLeft: 8 }}
                        onClick={() => args.move(index, prev)}
                        icon
                        size={Size.small}
                      >
                        <IconArrowUpward />
                      </Button>
                      <Button
                        style={{ marginLeft: 8 }}
                        onClick={() => args.move(index, next)}
                        icon
                        size={Size.small}
                      >
                        <IconArrowDownward />
                      </Button>
                      <Button
                        style={{ marginLeft: 8 }}
                        onClick={() => args.remove(index)}
                        icon
                        size={Size.small}
                      >
                        <IconDeleteOutline />
                      </Button>
                    </Row>
                  );
                })}

                <Button onClick={() => args.add({ title: "", desc: "abc" })}>
                  新增项
                </Button>
              </div>
            );
          }}
        </Form.List>
      </div>

      <div className="mt-32">
        <Button onClick={Form.reset}>reset</Button>
        <Button
          onClick={async () => {
            try {
              await Form.submit();
              console.log(Form.getValues());
            } catch (e) {
              console.log(22, e);
              console.log(22, (e as any).rejects);
            }
          }}
        >
          submit
        </Button>
      </div>

      <Divider />

      <div>
        <Form2.Field name="name">
          <Input />
        </Form2.Field>
        <Row style={{ width: 348 }}>
          <Form2.Field name="name">
            <Input />
          </Form2.Field>
          <Form2.Field name="desc" style={{ marginLeft: 12 }}>
            <Input />
          </Form2.Field>
        </Row>
        <Form2.Field name="topic" label="topic">
          <Input />
        </Form2.Field>
        <Form2.Field name="desc">
          <Input textArea />
        </Form2.Field>
      </div>
    </div>
  );
};

export default RformExample;
