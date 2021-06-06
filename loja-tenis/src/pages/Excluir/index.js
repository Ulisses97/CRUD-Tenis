import axios from 'axios';
import { useState } from 'react'
import Tenis from '../../components/Tenis';

import TitleBox from '../../components/TitleBox'
import './styles.css'

const Excluir = () => {

  const [validar, setValidar] = useState(false);
  const [value, setValues] = useState();
  const [tenis, setTenis] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues(value)
  }

  const renderUnicProduto = async () => {
    const res = await axios.get(`http://localhost:5050/produtos/${value}`)
      .then(response => response.data)

    if (res == '') {
      return alert('Digite um ID valido')
    } else {
      setValidar(true)
      setTenis(res)

    }

  }

  const excluirProduto = async () =>{
    console.log(`ID:${value}`)
    const res = await axios.delete(`http://localhost:5050/deletar/${value}`)
      .then( response => response.status==200 ? 
        alert('Excluido com sucesso') : alert('Algo deu errado, tente novamente') )

        window.location.reload();
  }


  return (
    <div className="box-pages">
      <TitleBox frase="Excluir um Tênis" cor="red" />

      <div className="pesquisa">
        <input onChange={handleChange} type="text" placeholder="Pesquise pelo ID" />
        <button className="red" onClick={() => renderUnicProduto()} >Procurar</button>
      </div>

      <div id="no-scroll" className="resultado">
        {
          validar == false
            ?
              <h2>Pesquise um Tênis pelo ID</h2>
            :
            <>
              <Tenis nome={tenis.nome} id={tenis.id} preco={tenis.preco} img={tenis.img} />
              <button onClick={() => excluirProduto()} className="Button-voltar red">Ecluir</button>
              {/* <button onClick={() => setValidar(false)} className="Button-voltar">Voltar</button> */}
            </>
        }
      </div>

    </div>
  )
}

export default Excluir