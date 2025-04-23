import { useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SelectDate = ({ date, marks, onSetSelectedDateRange }) => {
  const handleDateRange = (e, newRange) => {
    onSetSelectedDateRange(newRange);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        marks={marks}
        value={date}
        min={marks[0].value}
        max={marks[1].value}
        onChange={handleDateRange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default SelectDate;
