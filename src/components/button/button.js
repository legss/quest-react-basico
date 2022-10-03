import "./button.css"

function displayAlert(nameLabel) {
    alert(`A label desse botão é ${nameLabel}`)
}

const Button = ({ label }) => {
    return (
        <>
            <button className="btn" onClick={() => displayAlert(label)}>{label}</button>
        </>
    )
}

export default Button