import "./ModalAction.scss"
export default function ModalAction(props){
    if(props.open){
        return(
            <div className="modal">
                <h1>Componentes modal 1</h1>
                <button onClick={()=>props.setClose(false)}>Close-Modal</button>
            </div>
        )
    }
}