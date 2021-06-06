import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/global.css'

import Layout from './components/layout'
import Cadastrar from './pages/Cadastrar'
import Editar from './pages/Editar'
import Excluir from './pages/Excluir'
import Visualizar from './pages/Visualizar'

const Routes = () => {
  return (
    <Router >
      <div className="container">
     
        <div>
          <Layout />
        </div>

        <div>
          <Route path="/" exact component={Cadastrar} />
          <Route path="/editar" exact component={Editar} />
          <Route path="/excluir" exact component={Excluir} />
          <Route path="/visualizar" exact component={Visualizar} />
        </div>

      </div>

    </Router>


  )
}

export default Routes