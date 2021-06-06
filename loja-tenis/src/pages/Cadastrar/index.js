import { Link } from 'react-router-dom'
import TitleBox from '../../components/TitleBox'
import Form from '../../components/Form'
import './styles.css'

const Cadastrar = () =>{
  return(
    <div className="box-pages">
      <TitleBox frase="Cadastrar um tênis" cor="green"/>
      <Form cor="green"/>
      {/* <Link to="editar"><button>Cadastrar</button></Link> */}
    </div>
  )
}

export default Cadastrar