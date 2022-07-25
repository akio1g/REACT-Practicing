import { useState } from 'react';

const ConditionalRender = () => {

    const [name, setName] = useState("Gabriel")

  return (
    <div>
        {name === "Gabriel" ? (
            <div>
                A variavel nome é Gabriel!
            </div>
        ) : (
            <div>A variavel nome não é Gabriel</div>
        )}
        <button onClick={() => setName("José")}> Mudar o nome para José </button>
    </div>
  )
}

export default ConditionalRender