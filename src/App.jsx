import Cabecalho from "./components/Cabecalho";
import Sessao from "./components/Sessao";
import Rodape from "./components/Rodape"
import reactLogo from "./assets/react.svg"

export default function App() {
  let reactLogoAlt = "reactlogo"

  //lista de links de redes sociais
  let listaLinks = [<li>Github</li>, <li>X</li>,<li>Reddit</li>]
  return (
    <>
    <div className="container"> 
    
      <Cabecalho/>

      <img src={reactLogo} alt={reactLogoAlt} />

      <Sessao reactLogoProps={reactLogo} reactLogoAltPropos={reactLogoAlt}/>
      
      <Rodape/>
    
     </div>
    </>
  )
}
