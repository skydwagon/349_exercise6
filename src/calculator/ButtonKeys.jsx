import React from "react";

export default function Keys() {
    let mltp = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
    let div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/; 
    let add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/; 
    let sub = /(\d+(?:\.\d+)?) ?\- ?(\d+(?:\.\d+)?)/;  

    function calculator( calculate ) {
        const operators = ['*', '/', '+', '-'];
        let num = calculate.split(/[*/+-]/).map(Number);
        const equation = calculate.split('').filter(char => operators.includes(char));

        for(let i = 0; i < operators.length; i++){
            while(equation.includes(operators[i])){
                const index = equation.indexOf(operators[i]);
                const symbol = operators[i];
                const num1 = num[index];
                const num2 = num[index + 1]; 

                let solved;

                //Addition
                if(symbol === '+')
                {   solved = num1 + num2;   }
                //Subtraction 
                else if(symbol === '-')
                {   solved = num1 - num2;   }
                //Multiplication
                else if(symbol === '*')
                {   solved = num1 * num2;   }
                //Division
                else if(symbol === '/'){
                    if(num2 !== 0)
                    {   solved = num1 / num2;   }
                    else
                    {   throw new Error("Error");   }
                }

                num.splice(index, 2, solved);
                equation.splice(index, 1);
            }
        }
        return num[0]; 
    }

    function clickHandle( value ) {
        let calc_display = document.getElementById('displayBox');
        
        if(value === '=')
        {   calc_display.value = calculator(calc_display.value);  }
        else if(value === 'C')
        {   calc_display.value = "";   }
        else
        {   calc_display.value += value;    }

        return calc_display.value; 
    }

    return (
        <div className="buttons">
            <div className="button-row">
                <button className="num_button" onClick={() => clickHandle('7')}>7</button>
                <button className="num_button" onClick={() => clickHandle('8')}>8</button>
                <button className="num_button" onClick={() => clickHandle('9')}>9</button>
                <button className="sym_button" onClick={() => clickHandle('+')}>+</button>
            </div>
            <div className="button-row">
                <button className="num_button" onClick={() => clickHandle('4')}>4</button>
                <button className="num_button" onClick={() => clickHandle('5')}>5</button>
                <button className="num_button" onClick={() => clickHandle('6')}>6</button>
                <button className="sym_button" onClick={() => clickHandle('-')}>-</button>
            </div>
            <div className="button-row">
                <button className="num_button" onClick={() => clickHandle('1')}>1</button>
                <button className="num_button" onClick={() => clickHandle('2')}>2</button>
                <button className="num_button" onClick={() => clickHandle('3')}>3</button>
                <button className="sym_button" onClick={() => clickHandle('*')}>*</button>
            </div>
            <div className="button-row">
                <button className="clear_button" onClick={() => clickHandle('C')}>C</button>
                <button className="num_button" onClick={() => clickHandle('0')}>0</button>
                <button className="sym_button" onClick={() => clickHandle('=')}>=</button>
                <button className="sym_button" onClick={() => clickHandle('/')}>/</button>
            </div>
        </div>
    )
}