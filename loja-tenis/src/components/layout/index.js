import React, {useState} from 'react'
import {Route, Link} from 'react-router-dom'

import "./styles.css"

function Layout(){

  const [selectedId, setSelectedId] = useState(0);

  const handleColor = (num) =>{
    setSelectedId(num)
  }

  return(
    <div className="box">
      <Link to="/"> <button onClick={ () => handleColor(0) } className={ selectedId === 0 ? 'green' : 'black' } >Cadastrar</button></Link>
      <Link to="/visualizar"> <button  onClick={ () => handleColor(1) } className={ selectedId === 1 ? 'blue' : 'black' } >Visualizar</button></Link>
      <Link to="/editar"> <button  onClick={ () => handleColor(2) } className={ selectedId === 2 ? 'orange' : 'black' } >Editar</button></Link>
      <Link to="/excluir"> <button  onClick={ () => handleColor(3) } className={ selectedId === 3 ? 'red' : 'black' } >Excluir</button></Link>
    </div>
  )
}

export default Layout;