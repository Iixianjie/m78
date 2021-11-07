---
title: Mask - 遮罩
group:
  title: 工具包
  path: /utils
  order: 5000
---

# Mask 遮罩

<h2 class="color-red">deprecated!!!</h2>

不建议继续使用，请移步 [Modal](/docs/feedback/modal)

请使用 Modal 组件

与 RenderApi 配合使用, 为弹层类组件提供 mask 并且支持代理 RenderApi 的部分操作

- mask 层和内容是分开渲染的，否则 mask 的 fade 动画会影响到内容
- mask 不会处理内容的动画、显示隐藏等，需要自行实现
- 透传组件的 ReactRenderApiProps 到 mask，使其能够在合适时机处理 api 内部方法的调用

## 示例

下例创建一个 modal 组件来演示 Mask 的基本用法

<code src="./demo.tsx" />

## Props

```tsx | pure
interface MaskProps extends ComponentBaseProps, ReactRenderApiProps {
  /** 是否显示mask */
  mask?: boolean;
  /** 是否允许点击mask进行关闭 */
  maskClosable?: boolean;
  /** 800 | 当传入onRemove时，会对其进行代理，当show为false在指定延迟内调用onRemove */
  onRemoveDelay?: number;
  /** 360 | 默认会在mask出现时锁定body的滚动条防止页面抖动，此延迟用于恢复滚动条的延迟时间(应该根据动画时间给出一个合理的时间) */
  unlockDelay?: number;
  /** true | 是否以portal模式挂载到body下指定元素下 */
  portal?: boolean;
  /** 黑色主题 */
  dark?: boolean;
}
```

**相关接口**

```tsx | pure
interface ComponentBaseProps {
  /** 包裹元素的类名 */
  className?: string;
  /** 包裹元素样式 */
  style?: React.CSSProperties;
}

interface ReactRenderApiProps {
  /** 实例组件是否显示 */
  show?: boolean;
  /** 从实例列表移除指定实例, 如果组件带关闭动画，请先使用onClose，然后在show = false时执行关闭动画并在合适的时机执行此方法来移除实例 */
  onRemove?: () => void;
  /** 将该项的show设置为false */
  onClose?: () => void;
  /** 此参数透传至createRenderApi(options)中的option.namespace，用于帮助组件渲染到自定义命名的节点下
   *  用于某些可能会存在组件形式与api形式一起使用的组件(如modal)，同节点下渲染两种组件会造成react渲染冲突。
   * */
  namespace?: string;
}
```
