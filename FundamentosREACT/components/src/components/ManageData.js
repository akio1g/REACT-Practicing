import { useState } from "react";

const ManageData = () => {

    const [number, setNumber] = useState();

  return (
    <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Utilizar o setNumber</button>
        </div>
    </div>
  )
}

export default ManageData