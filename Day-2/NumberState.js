import  react,{ useState } from "react";

function NumberState(){
    // useState initialize the numner to 0
    let [number,setNumber]=useState(0);

    function increment(){
        number=number+1;
        setNumber(number);
    }
    function decrement(){
        if (number>0){
            number=number-1;
            setNumber(number);
        }
    }
    function reset(){
        setNumber(0);
    }

    return (
        <div>
            <h1> Number = {number}</h1>
            <button class="button button1" onClick={increment}> Increment</button>
            <button class="button button1" onClick={decrement}> Decrement</button>
            <button class="button button1" onClick={reset}> Reset</button>
        </div>
    );

}

export default NumberState;