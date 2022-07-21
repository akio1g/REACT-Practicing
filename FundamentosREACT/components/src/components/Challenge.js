const Challenge = () => {

    const num1 = 10;
    const num2 = 29;

    return (
        <div>
            <h2>Número 1 = {num1} e Número 2 = {num2}</h2>
            <button onClick={() => {console.log(num1 + num2)}}>Somar!!</button>
        </div>
    );
};

export default Challenge;