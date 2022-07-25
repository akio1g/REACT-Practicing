import { useState } from 'react'

const ListRender = () => {
    const [users] = useState([
        {id: 1, name: "Gabriel", age: 21},
        {id: 2, name: "João", age: 21},
        {id: 3, name: "Marcos", age: 20}
])

  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>Nome: {user.name} Idade: {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender