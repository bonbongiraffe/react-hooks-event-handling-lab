// Code Keypad Component Here

function Keypad (){
    function password(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={password} type="password"/>
        </div>
    )
}

export default Keypad;