import React from 'react';

import createRenderApi, { ReactRenderApiProps } from '@lxjx/react-render-api';
import Message, { MessageWrap } from './message';

import { MessageProps } from './type';

export type MessageOption = Omit<MessageProps, keyof ReactRenderApiProps>;

/* ##### 创建api实例 ##### */
const messageApi = createRenderApi<MessageOption>(Message, {
  wrap: MessageWrap,
  maxInstance: 7,
  namespace: 'MESSAGE',
});

export type TipsOption = Omit<MessageOption, 'loading' | 'hasCancel' | 'loadingDelay'>;

/** 文本提示 */
const tips = ({ ...options }: TipsOption) =>
  messageApi({
    ...options,
    hasCancel: false,
    loading: false,
  });

export type LoadingOption = Omit<MessageOption, 'type' | 'loading' | 'hasCancel'>;

/** 加载中提示 */
const loading = ({ ...options } = {} as LoadingOption) =>
  messageApi({
    hasCancel: false,
    duration: Infinity,
    ...options,
    loading: true,
  });

export interface NotifyOption extends Omit<MessageOption, 'loading' | 'loadingDelay'> {
  /** 标题 */
  title?: React.ReactNode;
  /** 详细内容 */
  desc?: React.ReactNode;
  /** 底部显示的内容 */
  foot?: React.ReactNode;
}

/** 轻通知，包含的配置项: content, duration, type, mask, singleton, singleton */
const notify = ({ title, desc, foot, content, ...options }: NotifyOption) =>
  messageApi({
    duration: 4000,
    hasCancel: true,
    content: content || (
      <div className="m78-message_notification">
        {title && <div className="m78-message_notification_title">{title}</div>}
        {desc && <div className="m78-message_notification_desc">{desc}</div>}
        {foot && <div className="m78-message_notification_foot">{foot}</div>}
      </div>
    ),
    ...options,
    loading: false,
  });

export { tips, loading, notify };
export default messageApi;
