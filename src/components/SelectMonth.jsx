import { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { labels } from "../../utils/labels";

function daysInMonth(month) {
  return new Date(2022, parseInt(month), 0).getDate();
}

const SelectMonth = ({ onSelectedMonth }) => {
  const [month, setMonth] = useState(4);

  const handleMonthSelection = (event) => {
    const numberOfDays = daysInMonth(event.target.value);

    onSelectedMonth(event.target.value, [1, numberOfDays]);

    setMonth(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={month}
        onChange={handleMonthSelection}
      >
        {labels.map((label) => {
          return <MenuItem value={label.id}>{label.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectMonth;
