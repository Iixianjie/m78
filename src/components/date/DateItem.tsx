import React, { useMemo } from 'react';
import cls from 'classnames';
import { useFn } from '@lxjx/hooks';
import { DATE_FORMAT_DATE, DATE_FORMAT_MONTH, DATE_FORMAT_YEAR, formatDate } from './utils';
import { DateItemProps, DateType } from './type';

const DateItem: React.FC<DateItemProps> = ({
  itemMoment,
  currentMoment: cm,
  nowMoment,
  disabledDate,
  onCheck,
  checkedMoment,
  onCurrentChange,
  type = DateType.DATE as NonNullable<DateItemProps['type']>,
}) => {
  /** 由于调用频率很高，一定要确保计算都被memo */

  const insideM = useMemo(() => itemMoment.clone(), [itemMoment]);

  const map1 = {
    [DateType.DATE]: 'days',
    [DateType.MONTH]: 'months',
    [DateType.YEAR]: 'years',
  } as const;

  const map2 = {
    [DateType.DATE]: 'dates',
    [DateType.MONTH]: 'months',
    [DateType.YEAR]: 'years',
  } as const;

  const map3 = {
    [DateType.DATE]: DATE_FORMAT_DATE,
    [DateType.MONTH]: DATE_FORMAT_MONTH,
    [DateType.YEAR]: DATE_FORMAT_YEAR,
  } as const;

  const prev = useMemo(() => insideM.clone().subtract(1, map1[type]), [insideM]);
  const last = useMemo(() => insideM.clone().add(1, map1[type]), [insideM]);

  /** 是否是当天/月/年 */
  const isSame = useMemo(() => insideM.isSame(nowMoment, map2[type]), [insideM]);

  /** 是否在当前月 (只在 type = DATE 时需要) */
  const isCurrentBetween = useMemo(() => {
    return type === DateType.DATE
      ? insideM.isBetween(cm.clone().startOf('month'), cm.clone().endOf('month'), 'dates', '[]')
      : false;
  }, [insideM, cm]);

  /** 是否选中 */
  const isChecked = useMemo(() => {
    return insideM.isSame(checkedMoment, map2[type]);
  }, [insideM, checkedMoment]);

  const isDisabled = useMemo(() => disabledDate?.(insideM, type), [insideM]);

  /** 前后一天/月/年是否被禁用 */
  const prevDisabled = useMemo(() => disabledDate?.(prev, type), [prev]);
  const lastDisabled = useMemo(() => disabledDate?.(last, type), [last]);

  const isRange = isDisabled && (prevDisabled || lastDisabled);

  const onClick = useFn(() => {
    if (isDisabled) return;

    if (onCheck) {
      onCheck(formatDate(itemMoment, map3[type]), itemMoment.clone());
    }

    if (onCurrentChange && type === DateType.DATE && !isCurrentBetween) {
      onCurrentChange(insideM.clone());
    }
  });

  function renderItemFormat() {
    if (type === DateType.DATE) {
      return insideM.date();
    }

    if (type === DateType.MONTH) {
      return `${insideM.month() + 1}月`;
    }

    if (type === DateType.YEAR) {
      return `${insideM.year()}年`;
    }

    return '-';
  }

  return (
    <div
      className={cls('fr-dates_date-item', {
        __active: isChecked,
        __gray: type === DateType.DATE ? !isCurrentBetween : false,
        __focus: isSame,
        __disabled: isDisabled,
        __disabledRange: isRange,
        __firstRange: isDisabled && !prevDisabled,
        __lastRange: isDisabled && !lastDisabled,
        __yearMonth: type === DateType.MONTH || type === DateType.YEAR,
      })}
      onClick={onClick}
    >
      <span className="fr-dates_date-item-inner">{renderItemFormat()}</span>
    </div>
  );
};

export default DateItem;