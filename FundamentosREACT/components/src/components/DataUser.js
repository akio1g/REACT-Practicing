import React from 'react'

const DataUser = ({name, telefone}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Telefone: {telefone}</li>
        </ul>
    </div>
  )
}

export default DataUser