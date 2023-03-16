import { useState } from 'react'

const Button =({handleClick,text})=> <button onClick={handleClick}>{text}</button>
const StatisticLine =({text,value})=>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics =({good,neutral,bad,all,average,positive})=>{
  if(all===0){
    return (
      <p>No feedback yet</p>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
      
    </>
  );
}
const App =()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0);
  const [average,setAverage]=useState(0);
  const [positive,setPositive]=useState(0)
  const handleGoodClick=()=>{
    const newGood =good+1;
    const newAll=all+1;
    setGood(good+1);
    setAll(all+1)
    setAverage((newGood-bad)/newAll)
    setPositive((newGood/newAll)*100)
  }
  const handleNeutralClick=()=>{
    const newAll=all+1;
    setNeutral(neutral+1);
    setAll(all+1)
    setAverage((good-bad)/newAll)
    setPositive((good/newAll)*100)
  }
  const handleBadClick=()=>{
    const newAll=all+1;
    const newBad =bad+1;
    setBad(bad+1);
    setAll(all+1)
    setAverage((good-newBad)/newAll)
    setPositive((good/newAll)*100)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  );
}

export default App;
