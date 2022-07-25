
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        Nome: {nome} - Idade: {idade} - {profissao} - Habilitação: {idade>=18? ("Liberado") : ("Não Pode")}
    </div>
  )
}

export default UserDetails