import {useState, useEffect} from 'react';


import TitleBox from '../../components/TitleBox'
import Tenis from '../../components/Tenis'

import './styles.css'
import axios from 'axios';

const Visualizar = () =>{

  const [validar, setValidar] = useState(false);
  const [produtos, SetProdutos] = useState([]);
  const [value, setValues] = useState();
  const [tenis, setTenis] = useState({});


  const handleChange = (event) => {
    const { name, value } = event.target
    setValues(value)
  }

  const renderProdutos = async () =>{
    const res = await axios.get('http://localhost:5050/produtos')
      .then( response => (response.data) )
      SetProdutos(res)
  }

  const renderUnicProduto = async () =>{
    const res = await axios.get(`http://localhost:5050/produtos/${value}`)
     .then( response => response.data )

     if (res == '') {
      return alert('Digite um ID valido')
    } else {
      setValidar(true)
      setTenis(res)

    }

  }



  useEffect( () =>{
    renderProdutos();
  })

  return(
    <div className="box-pages">
    {/* Não preciso estilizar box pages novamente */}
    <TitleBox frase="Visualizar tênis" cor="blue"/>

    <div className="pesquisa">
      <input onChange={handleChange} type="text" placeholder="Pesquise pelo ID" />
      <button className="blue" onClick={ () => renderUnicProduto() } >Procurar</button>
    </div> 

    <div className="resultado">
      {
        validar == false 
        ?
          produtos.map( produto => {
            return(
              <Tenis nome={produto.nome} id={produto.id} preco={produto.preco} img={produto.img} />
            )
          })
        :
        <>
         <Tenis nome={tenis.nome} id={ tenis.id} preco={tenis.preco} img={tenis.img} />
         <button onClick={ () => setValidar(false)} className="Button-voltar blue">Voltar</button>
        </>
      }
    </div>

  </div>
  )
}

export default Visualizar