import React from 'react'
import Header from "./Header.jsx"
import Content from './Content.jsx'
import Total from './Total.jsx'
const Course=({course})=>{
  const {name,parts}=course;
  const exercises =parts.map((a)=>a.exercises);
  return (
    <div>
      <Header course={name}/>
      <Content parts={parts}/>
      <Total exercises={exercises} />
    </div>
  )
}
export default Course;