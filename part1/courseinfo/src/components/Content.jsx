import PartInfo from "./PartInfo"
const Content=(props)=>{
  return (
    <>
    {
        props.parts.map((part)=>
            <PartInfo title={part.name} exercises={part.exercises} />
        )
    }
    </>   
  );
}
export default Content;