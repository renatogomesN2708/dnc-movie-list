
const Header = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <div className="Header">
      <h1>DNC Filmes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquisar Filmes" />
      </form>
    </div>
  )
}

export default Header