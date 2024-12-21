
function Keypad({handleClick,handleClear,calculate})
{
    return (
    
    <div className="keypad">
        <div className="Row">
            <button onClick={
                ()=>{
                    handleClick("9")
                }} className="digit"> 9</button>
            <button  onClick={
                ()=>{
                    handleClick("8")
                }
                } className="digit"> 8</button>
            <button className="digit" onClick={
                ()=>{
                        handleClick("7")
                    }
               }>7</button>
            <button className="operator" onClick={
                ()=>{
                        handleClick("/")
                    }
                }> / </button>
        </div>
        <div className="Row">
            <button className="digit" onClick={
                ()=>{
                        handleClick("6") 
                    }
                }> 6</button>
            <button className="digit" onClick={
                ()=>{
                        handleClick("5")
                    }
                }> 5</button>
            <button className="digit" onClick={
                ()=>{
                        handleClick("4")
                    }
                }> 4</button>
            <button className="operator" onClick={
                ()=>
                    {
                        handleClick("*")
                    }
                }>*</button>
        </div>
        <div className="Row">
            <button className="digit " onClick={
                ()=>
                    {
                        handleClick("3")
                    }
                 }> 3</button>
            <button className="digit" onClick={
                ()=>{
                        handleClick("2")
                    }
                 }> 2</button>
            <button className="digit" onClick={
                ()=>
                    {
                        handleClick("1")
                    }
                 }> 1</button>
            <button className="operator" onClick={
                ()=>
                    {
                        handleClick("-") 
                    }
                }> -</button>
        </div>
        <div className="Row">
            <button className="digit" onClick={
                ()=>
                    {
                        handleClick("0")
                    }
                }> 0</button>
            <button className="fun-key"   onClick={
                ()=>
                    {
                        calculate()
                    }
                }> =</button>
            <button className="fun-key"  onClick={
                ()=>
                    {
                        handleClear()
                    }
                } > C</button>
            <button className="operator" onClick={
                ()=>
                    {
                        handleClick("+")
                    }
                }> +</button>
        </div>
    </div>
    )
}

export default Keypad