import Transform from "../transform/transform"
import Button from "../button/button"
import "./text.css"

const Text = () => {
    return (
        <div className="container">
            <div>
                <h1>
                    Desafio 1 Base do React
                </h1>
                <h3>
                    Criar um componente que colora e transforma um texto para maiúsculo utilizando JS:
                </h3>
                <Transform>
                    <p className='text color uppercase '> texto colorido e com uppercase</p>
                </Transform>
            </div>
            <div>
                <h1>
                    Desafio 2 Base do React
                </h1>
                <h3>
                    Criar um componente Button com um evento de clique que
                    apresente um alerta informando a prop label do botão que
                    foi clicado:
                </h3>
                <Button label="Me clica" />
            </div>
        </div>
    )
}

export default Text