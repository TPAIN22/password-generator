import { useState } from "react";
import Good from './Good';
import Button from "./Botton";
import Result from "./Result";
import Strong from './Strong'
import Week from './Week'
import Strenght from "./Strength";

function Form() {
    const [pass , setPass] = useState('Ux1$03ffSL')
    const [rangeValue, setRangeValue] = useState('10');
    const [values, setValues] = useState({
        capital: true,
        small: true,
        numbers: true,
        symbols: false
    });

    const handleChange = (e) => {
        setRangeValue(e.target.value);
    };

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: checked
        }));
    };

     const handleSubmit = () => {
        const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const smalls =   'abcdefghijklmnopqrstuvwxyz'
        const numberss = '1234567890'
        const symbolss = '!@#$%&+_~'

        let passowrd = '' 
        let selected = ''
        selected += values.capital ? capitals : ''
        selected += values.small ? smalls : ''
        selected += values.numbers ? numberss : ''
        selected += values.symbols ? symbolss : ''
        if(selected === '' )
            alert('please select one or more option')
        else{

        for (let i = 0; i < rangeValue; i++) {
            const randomIndex = Math.floor(Math.random() * selected.length);
            passowrd += selected[randomIndex];
        }
    }
        removeh()
        setPass(passowrd)
        return(passowrd)
        
    }   

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pass).then(() => {
            document.getElementById('ff').classList.remove('hidden')

        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const removeh = () =>{
        document.getElementById('ff').classList.add('hidden')
    }

    function setStrength() {
        if (rangeValue >= 10 &&
             values.capital &&
              values.small &&
              values.numbers &&
              values.symbols)
               {
                return(<Strong/>)
              }
              else if (rangeValue  >= 10 &&
                values.capital && (
                 values.small &&
                 values.numbers || values.symbols ))
                 return (<Good/>)

                 else if (rangeValue  >= 10 && (
                values.capital ||
                 values.small || values.numbers || values.symbols )
                 )
                 return (<Week/>)

                 else 
                 return (<Strenght/>)
    }

 
    return (
        <div className="bg-[var(--bga)] grid gap-4 jetbrains-mono">
            <h1 className="text-center mb-3 text-lg font-bold text-[var(--tx)]">Password Genetator</h1>
            <div className="relative"  onClick={copyToClipboard}>
                <p id="ff" className="absolute text-[var(--green)] text-lg right-16 pr-2 top-7 hidden">COPIED</p>
             <Result pass={pass}/> 
             </div>           
            <div className="wid grid gap-4 p-8 bg-[var(--bgb)] text-[var(--tx)]">
                <div className="flex justify-between items-center w-full text-base font-medium">
                    <p>Character length</p>
                    <p className="text-xl font-bold text-[var(--green)]">{rangeValue}</p>
                </div>
                <div className="mb-4">
                    <input type="range" name="pass-length" id="range"
                        min={0} max={20}
                        value={rangeValue}
                        onChange={handleChange}
                        className="w-full" />
                </div>
                <div className="grid gap-3 text-base font-medium mb-4">
                    <label className="flex gap-5 items-center">
                        <input className="h-5 w-5" type="checkbox"
                            name="capital"
                            checked={values.capital}
                            onChange={handleCheck} />
                        <span>Include Uppercase Letters</span>
                    </label>
                    <label className="flex gap-5 items-center">
                        <input className="h-5 w-5" type="checkbox"
                            name="small"
                            checked={values.small}
                            onChange={handleCheck} />
                        <span>Include Lowercase Letters</span>
                    </label>
                    <label className="flex gap-5 items-center">
                        <input className="h-5 w-5" type="checkbox"
                            name="numbers"
                            checked={values.numbers}
                            onChange={handleCheck} />
                        <span>Include Numbers</span>
                    </label>
                    <label className="flex gap-5 items-center">
                        <input className="h-5 w-5" type="checkbox"
                            name="symbols"
                            checked={values.symbols}
                            onChange={handleCheck} />
                        <span>Include Symbols</span>
                    </label>
                </div>
                <div >
                    {setStrength()}
                </div>
                <div  onClick={handleSubmit} className="hover:cursor-pointer">
                    <Button/>
                </div>
            </div>
        </div>
    );
}

export default Form;
