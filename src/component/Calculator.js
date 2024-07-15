import React, {useState} from 'react'


export default function Calculator() {

    let [value,setValue] = useState('')

    function handle(e) {
        setValue(value + e.target.innerHTML)
    }

    function equal (){
        try {
            setValue(eval(value).toString());
          } catch (error) {
            setValue('Error');
          }
    }

    function clear (){
        setValue('')
    }
    
    function del (){
        setValue(value.slice(0,-1))
    }

    function percentage(){
        try {
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue)) {
              setValue((numericValue / 100).toString());
            }
          } catch (error) {
            setValue('Error');
          }
    }

  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" value ={value} />
        <div className="buttons-row">
          <button onClick={clear} >AC</button>
          <button onClick={del} >DEL</button>
          <button onClick={percentage} >%</button>
          <button onClick={handle} >/</button>
        </div>

        <div className="buttons-row">
          <button onClick={handle} >7</button>
          <button onClick={handle}>8</button>
          <button onClick={handle}>9</button>
          <button onClick={handle}>*</button>
        </div>

        <div className="buttons-row">
          <button onClick={handle}>4</button>
          <button onClick={handle}>5</button>
          <button onClick={handle}>6</button>
          <button onClick={handle}>-</button>
        </div>

        <div className="buttons-row">
          <button onClick={handle}>1</button>
          <button onClick={handle}>2</button>
          <button onClick={handle}>3</button>
          <button onClick={handle}>+</button>
        </div>

        <div className="buttons-row">
          <button onClick={handle}>00</button>
          <button onClick={handle}>0</button>
          <button onClick={handle}>.</button>
          <button id='equal' onClick={equal} >=</button>
        </div>


      </div>
    </>
  );
}
