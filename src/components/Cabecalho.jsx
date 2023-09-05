import {Link} from "react-router-dom"
export default function Cabecalho() {
  return (
    <>
        <header>
          <h1>Vite + React</h1>
         
        </header> 
        <nav>
          <ul>
            <li><link to="/">HOME</link></li>
            <li><link to="/">Produtos</link></li>
            <li><link to="/">HOME</link></li>
          </ul>
        </nav>
    </>
  )
}