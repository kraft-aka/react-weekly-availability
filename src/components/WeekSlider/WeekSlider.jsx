import React, { useState } from "react";
import "./WeekSlider.css";
import ReactSlider from "react-slider";

const WeekSlider = () => {
  const [toggleWeek, setToggleWeek] = useState(true);
  const [value, setValue] = useState([]);

  const handleToggleWeek = (e) => setToggleWeek(e.target.checked);
  return (
    <main className="week-container">
      <form>
        <input
          type="checkbox"
          checked={toggleWeek}
          onChange={handleToggleWeek}
        />
      </form>
      {toggleWeek && (
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 6]}
          ariaLabel={["Leftmost thumb", "Middle thumb", 'Rightmost thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          marks
          min={0}
          max={6}
          minDistance={1}
          onChange={(v) => setValue(v)}
        />
      )}
      <br />
      {value}
    </main>
  );
};

export default WeekSlider;
