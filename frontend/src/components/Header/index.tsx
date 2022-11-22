import logo from "../../assets/img/meta-logo.svg"
import "./styles.css"

function Header() {
    return (
        <header>
            <div className="meta-logo-container">
                <img src={logo} alt="Meta Logo" />
                <h1>Meta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/angelcomp?tab=repositories"> angelcomp</a>
                </p>
            </div>
        </header>
    )
}

export default Header