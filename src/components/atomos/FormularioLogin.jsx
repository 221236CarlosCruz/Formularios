import Logo from "../../assets/img/autobus.png"
import "../../assets/styles/FormularioLogin.css"

function FormularioLogin() {
    return (
        <div className="container">
            
            <form className="form">

                <label className="text">Username</label>
                <input type="text" className="box"/>

                <label className="text">Password</label>
                <input type="password" className="box"/>

                <button className="submit">Iniciar sesión</button>

            </form>

        </div>
    );
}

export default FormularioLogin;