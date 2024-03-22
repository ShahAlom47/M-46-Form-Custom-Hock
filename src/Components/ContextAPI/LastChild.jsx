import { useContext } from "react";
import { ZzContext } from "./PropsContext";

const LastChild = () => {
    const bb= useContext(ZzContext);
    const {key1, key2 }=bb
    console.log(key2);
    key2('amar sonar bangla ')
    return (
        <div className=" border-4 bg-yellow-50 rounded-xl p-7 w-full" >
            <h1 className="text-lg font-bold">last Child</h1>
            <p>Name : {key1}  </p>
        </div>
    );
};

export default LastChild;