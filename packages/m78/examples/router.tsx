import React from "react";
import {
  createHashRouter,
  NavLink,
  Outlet,
  RouteObject,
} from "react-router-dom";
import { SpinExample } from "./spin";
import { SeedExample } from "./seed";
import { I18NExample } from "./i18n";
import { ButtonExample } from "./button";
import IconExample from "./icon/icon-example";
import LayoutExample from "./layout";
import { Row } from "../src/layout";
import InputExample from "./input/input-example";
import OverlayExample from "./overlay/overlay-example.js";
import OverlayExample2 from "./overlay/overlay-example2.js";
import Play from "./play/play.js";
import BubbleExample from "./bubble/bubble-example.js";
import { m78Config } from "../src/config/index.js";
import { Button } from "../src/button/index.js";
import DialogExample from "./dialog/dialog-example.js";
import LayExample from "./lay/lay-example.js";
import MenuExample from "./menu/menu-example.js";
import DrawerExample from "./overlay/drawer-example.js";
import ResultExample from "./result/result-example.js";
import ForkExample from "./fork/fork-example.js";
import ScrollExample from "./scroll/scroll-example.js";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "play",
        index: true,
        element: <Play />,
      },
      {
        path: "spin",
        element: <SpinExample />,
      },
      {
        path: "button",
        element: <ButtonExample />,
      },
      {
        path: "icon",
        element: <IconExample />,
      },
      {
        path: "layout",
        element: <LayoutExample />,
      },
      {
        path: "i18n",
        element: <I18NExample />,
      },
      {
        path: "seed",
        element: <SeedExample />,
      },
      {
        path: "input",
        element: <InputExample />,
      },
      {
        path: "overlay",
        element: <OverlayExample />,
      },
      {
        path: "overlay2",
        element: <OverlayExample2 />,
      },
      {
        path: "bubble",
        element: <BubbleExample />,
      },
      {
        path: "menu",
        element: <MenuExample />,
      },
      {
        path: "dialog",
        element: <DialogExample />,
      },
      {
        path: "lay",
        element: <LayExample />,
      },
      {
        path: "drawer",
        element: <DrawerExample />,
      },
      {
        path: "result",
        element: <ResultExample />,
      },
      {
        path: "fork",
        element: <ForkExample />,
      },
      {
        path: "scroll",
        element: <ScrollExample />,
      },
    ],
  },
]);

function renderLinks(routes: RouteObject[], parentPath = ""): React.ReactNode {
  return routes.map((i) => {
    const basePath = parentPath === "/" ? "" : parentPath;
    const p = parentPath ? `${basePath}/${i.path}` : i.path;
    if (!p) return null;
    if (i.children) return renderLinks(i.children, p);
    return (
      <NavLink
        key={p}
        to={p}
        className={({ isActive }) => (isActive ? "mr-12 color-red" : "mr-12")}
      >
        {p}
      </NavLink>
    );
  });
}

async function fetchCN() {
  return import("../src/i18n/locales/zh-Hans.json");
}

async function fetchEN() {
  return import("../src/i18n/locales/en.json");
}

function Root() {
  function toggleMode() {
    const mode = document.documentElement.getAttribute("data-mode") || "light";
    document.documentElement.setAttribute(
      "data-mode",
      mode === "light" ? "dark" : "light"
    );
  }

  const toggleLang = async () => {
    const cur = m78Config.get().i18n?.lng;

    const next = cur === "zh-Hans" ? "en" : "zh-Hans";
    const method = next === "zh-Hans" ? fetchCN : fetchEN;

    const res = await method();

    m78Config.set({
      i18n: {
        lng: next,
        appendResource: {
          [next]: res,
        },
      },
    });
  };

  return (
    <div className="p-12">
      <Row mainAlign="between" className="border p-8 radius mb-16">
        <div>{renderLinks(router.routes)}</div>
        <div>
          <Button onClick={toggleLang}>更改语言</Button>
          <Button onClick={toggleMode}>dark</Button>
        </div>
      </Row>
      <div className="border p-8 radius" style={{ paddingBottom: 600 }}>
        <Outlet />
      </div>
    </div>
  );
}
