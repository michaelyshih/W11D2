import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from "react";

function Thermometer() {
  const {temperature, setTemperature} = useClimate();
  const [desiredTemparture, setDesiredTemperature] = useState(temperature);

  useEffect(()=>{
    let id;
      if (temperature < desiredTemparture){
        id = setTimeout(()=>setTemperature(temperature + 1),1000)
      } else if (temperature > desiredTemparture){
        id = setTimeout(()=>setTemperature(temperature - 1),1000)
      } else {
        clearTimeout(id);
      }
  }, [temperature, desiredTemparture]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemparture}
        onAfterChange={(val) => setDesiredTemperature(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
