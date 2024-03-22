import { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Chiles2";
 export  const XyzContext = createContext('gold')
 export const ZzContext = createContext('');
 export const Child2Context =createContext ('')


const PropsContext = () => {
    const [chid2V,setChild2]=useState('')
 const demoFunc =(xx)=>{

  setChild2(xx)
 }

    return (
        <div className="  border-4 rounded-xl m-8 p-4 bg-gray-100  min-h-screen ">
            <h1 className="text-center text-3xl font-bold">Prent Container</h1>

 <XyzContext.Provider value={'silver'}>
            <div className=" text-3xl flex gap-3" >
             <ZzContext.Provider value={{key1:'dimond', key2 : demoFunc}} >
                <Child1></Child1>
            </ZzContext.Provider>

            <Child2Context.Provider value={chid2V} >
                <Child2></Child2>
                </Child2Context.Provider>
            </div>
            </XyzContext.Provider>     
        </div>
    );
};

export default PropsContext;