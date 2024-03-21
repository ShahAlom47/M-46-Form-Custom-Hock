import { useState } from "react";

const useInputHock =(defaultV ='')=>{
const [value,setValue]=useState(defaultV);


const handelCng =(e)=>{
    setValue(e.target.value)
}
return [value,handelCng];
}
export default useInputHock;