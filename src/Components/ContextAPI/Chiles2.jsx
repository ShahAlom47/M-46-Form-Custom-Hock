import { useContext } from "react";
import { Child2Context } from "./PropsContext";
const Child2 = () => {
    const value= useContext(Child2Context)
    return (
        <div className="w-6/12 border-4 bg-yellow-50 rounded-xl h-full" >
            <h1 className="text-lg font-bold m-4" >Chile2</h1>
            <p>Name : {value} </p>
        </div>
    );
};

export default Child2;