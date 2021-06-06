import {useState} from 'react';
import axios from 'axios'

import './styles.css'

const Form = ({ id, nome, desc, cor, corInput, numero, preco, img }) =>{

  const initialValue = {
    nome: "",
    desc: "",
    cor: "",
    numero: "",
    preco: "",
    img: "",
  }

  const [values, SetValues] = useState(initialValue);

  const handleChange = (event) =>{
    const { name, value } = event.target // Target ==
    SetValues({ ...values, [name]: value})
  }

  const handleSubmit = async () =>{
    const res = await axios.put(`http://localhost:5050/atualizar/${id}`, values)
    if(res.status == 200){
      alert("Produto Editado")
      window.location.reload();
    }else{
      alert("Algo deu errado. Tente novamente")
    }
  }

  return(
    <div className="form-content">

      <form onSubmit={handleSubmit} className="form" action="">

        <input onChange={handleChange} defaultValue={nome} type="text" placeholder="Digite seu nome" name="nome" id="nome" />
        <input  onChange={handleChange} defaultValue={desc}  type="text" placeholder="Digite a descrição" name="desc" id="desc" />

        <div className="input-row">
          <input onChange={handleChange} defaultValue={corInput}  type="text" placeholder="Digite a cor" name="cor" id="cor" />
          <input onChange={handleChange} defaultValue={numero}  type="text" placeholder="Digite o numero" name="numero" id="numero" />
          <input onChange={handleChange} defaultValue={preco} type="text" placeholder="Digite a preço" name="preco" id="preco" />
        </div>

        <input onChange={handleChange} defaultValue={img} type="url" placeholder="url da imagem" name="img" id="img" />

        <button type="button" onClick={() => handleSubmit()} className={`button ${cor}`}>Editar</button>

      </form>
    </div>
  )
}

export default Form