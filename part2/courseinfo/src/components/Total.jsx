const Total=({exercises})=>{
    const sum=exercises.reduce((a,b)=>a+b);
    return (
        <p><strong>Total of {sum} exercises</strong> </p>
    );
}
export default Total;