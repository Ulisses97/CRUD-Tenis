import './styles.css'
import TenisIcon from '../../assets/tenis.png'

const TitleBox = ({ frase, cor}) =>{


  return(
    <div className="content">

      <div className="text">
        <h2>{frase}</h2>
      </div>

      <div className={`boxIcon ${cor}`} >
        <img src={TenisIcon} alt="" />
      </div>

    </div>
  )
}

export default TitleBox