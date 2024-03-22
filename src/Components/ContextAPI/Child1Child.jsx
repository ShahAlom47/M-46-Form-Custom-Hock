import LastChild from "./LastChild";
import { useContext } from "react";
import { XyzContext } from "./PropsContext";

const Child1Child = () => {
    const yy= useContext(XyzContext)
    return (
        <div className=" border-4 bg-yellow-50 p-6 w-full rounded-xl" >
            <h1 className="text-lg font-bold">Chile 1 CHild</h1>
            <p>Name : {yy} </p>
            <LastChild></LastChild>
        </div>
    );
};

export default Child1Child;