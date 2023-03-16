import PartInfo from "./PartInfo"
const Content=(props)=>{
  return (
    <>
    {
        props.parts.map((part,i)=>
            <PartInfo key={i} title={part.name} exercises={part.exercises} />
        )
    }
    </>   
  );
}
export default Content;