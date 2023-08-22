import Cabecalho from "./components/Cabecalho";

// import React from "react"
export default function App() {
  return (
    <>
    <div className="container"> 
    
      <Cabecalho/>

    <section>

    <p><a href="">Home Page</a></p>
    <button onClick={()=>alert("Hello World!")}>Click me</button>

    </section>
    <footer>
      <p>&copy;2021, Vite.js and react.</p>
    </footer>
    
     </div>
    </>
  )
}
