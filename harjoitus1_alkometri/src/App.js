import './App.css';
import { useState } from "react";
import Options from './components/Options';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [level, setLevel] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let alcoholLevel = 0;
    let litre = bottle * 0.33;
    let grams = litre * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    if (gender === "male") {
      alcoholLevel = gramsLeft / (weight * 0.7);
    } else {
      alcoholLevel = gramsLeft / (weight * 0.6);
    }
    setLevel(alcoholLevel);
    if (alcoholLevel <= 0) {
      setLevel(0);
    }
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" name="weight" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles (Beer, 0,33 l)</label>
          <select name="bottles" value={bottle} onChange={e => setBottle(e.target.value)} >
            <Options min={0} max={20} />
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <Options min={0} max={24} />
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /> <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> <label>Female</label>
        </div>
        <div>
          <label>Alcohol level:</label>
        </div>
        <div>
          <output>{level.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default App;