import { useState } from "react";
import SelectDate from "./SelectDate";
import SelectMonth from "./SelectMonth";

const RangeSelector = ({
  onSetSelectedDateRange,
  marks,
  selectedDateRange,
  onSelectedMonth,
}) => {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-4">
        <SelectMonth onSelectedMonth={onSelectedMonth} />
      </div>
      <div className="col-4">
        <SelectDate
          date={selectedDateRange}
          marks={marks}
          onSetSelectedDateRange={onSetSelectedDateRange}
        />
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default RangeSelector;
