import {useState} from 'react'
import axios from 'axios'
import TitleBox from '../../components/TitleBox'
import Tenis from '../../components/Tenis'
import './styles.css'
import FormEdit from '../../components/FormEdit'


const Editar = () => {

  const [value, setValues] = useState();
  const [tenis, setTenis] = useState({});
  const [validar, setValidar] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues(value)
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

  return (
    <div className="box-pages">
      <TitleBox frase="Edite um tênis" cor="orange" />

      <div className="pesquisa">
        <input onChange={handleChange} type="text" placeholder="Pesquise pelo ID" />
        <button className="orange" onClick={() => renderUnicProduto()} >Procurar</button>
      </div>


      <div className="">
        {
          validar == false 
          ?
          <h2>Pesquise o Tênis para editar</h2>
          :
          <FormEdit cor="orange" 
            id={tenis.id}
            nome={tenis.nome}
            desc={tenis.desc}
            corInput={tenis.cor}
            numero={tenis.numero}
            preco={tenis.preco}
            img={tenis.img}
            />
        }
      </div>

    </div>
  )
}

export default Editar