import Child1Child from "./Child1Child";
import { useContext } from "react";
import { XyzContext } from "./PropsContext";

const Child1 = () => {
    const xx= useContext(XyzContext);
    console.log(xx);
    return (
        <div className="w-6/12 border-4 bg-yellow-50 rounded-xl p-5" >
            <h1 className="text-lg font-bold">Chile1</h1>
            <p>Name :{xx} </p>
            <Child1Child></Child1Child>
        </div>
    );
};

export default Child1;