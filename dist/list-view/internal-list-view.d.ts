import { ListViewItemProps, ListViewProps, ListViewTitleProps } from './types';
declare function InternalListView(props: ListViewProps): JSX.Element;
declare namespace InternalListView {
    var displayName: string;
}
declare function InternalListViewItem({ title, desc, leading, trailing, arrow, crossAlign, titleEllipsis, descEllipsis, disabled, ...ppp }: ListViewItemProps): JSX.Element;
declare namespace InternalListViewItem {
    var displayName: string;
}
declare function InternalListViewTitle({ subTile, children }: ListViewTitleProps): JSX.Element;
declare namespace InternalListViewTitle {
    var displayName: string;
}
export { InternalListViewItem, InternalListView, InternalListViewTitle };
