import React, { useState } from "react";
import "./WeekSlider.css";
import ReactSlider from "react-slider";

const WeekSlider = () => {
  const [toggleWeek, setToggleWeek] = useState(true);
  const [value, setValue] = useState([0,3]);
  const [valueSecond, setValueSecond] = useState([4,6]);

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
        <>

        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={value}
          ariaLabel={["Leftmost thumb", "Middle thumb", 'Rightmost thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          marks
          min={0}
          max={3}
          minDistance={1}
          onChange={(v) => setValue(v)}
          />
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={valueSecond}
          ariaLabel={["Leftmost thumb", "Middle thumb", 'Rightmost thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          marks
          min={4}
          max={6}
          minDistance={1}
          onChange={(v) => setValueSecond(v)}
          />
          </>
      )}
      <br />
      {value}
    </main>
  );
};

export default WeekSlider;
