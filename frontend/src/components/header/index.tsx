import logo from '../../assets/img/logo.svg';
import './styles.css'

function Header() {
	return(
		<header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Dsmeta" />
            <h1>DSMeta</h1>
            <p>Desenvolvido por
                <a href="https://www.linkedin.com/in/rodrigo-fernandes-b12b7a169/"> @RodrigoFernandes</a>
						</p>
        </div>
    </header>
	);
	}

	export default Header;
