import React, { useState } from "react";
import styles from "./WeekSlider.module.css";

const WeekSlider = () => {
  const [toggleWeek, setToggleWeek] = useState(true);

  const handleToggleWeek = (e) => setToggleWeek(e.target.checked);
  return (
    <main>
      <form>
        <input
          type="checkbox"
          checked={toggleWeek}
          onChange={handleToggleWeek}
        />
      </form>
    </main>
  );
};

export default WeekSlider;
