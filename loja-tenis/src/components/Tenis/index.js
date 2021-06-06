import "./styles.css"

const Tenis = ({ nome, preco, id, img}) => {
  return (
    <div className="box-tenis-container">
      <div className="box-tenis-content" >

        <div className="modelo">
          <h2>{id}</h2>
          <h2>{nome}</h2>
        </div>

        <div className="preco">
          <h2>{`R$ ${preco}`}</h2>
        </div>

        <div className="imgContainer">
          <img src={img} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Tenis